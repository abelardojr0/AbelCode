import os
import json

# Temas gerais
temas_gerais = {
    "Filme",
    "Série",
    "Ator/Atriz",
    "Cantor(a)",
    "Banda",
    "Meme",
    "Herói/Vilão",
    "Animação",
    "Personagem",
    "Jogo"
}

# Arquivos a ignorar
ignorar = {"animes.json", "branca.json", "mix.json", "preta.json", "rainbow.json", "sugestoes.json"}

# Pasta db
pasta_db = os.path.join("src", "db")

resultados = {}

for nome_arquivo in os.listdir(pasta_db):
    if not nome_arquivo.endswith(".json") or nome_arquivo in ignorar:
        continue
    caminho = os.path.join(pasta_db, nome_arquivo)
    with open(caminho, encoding="utf-8") as f:
        cartas = json.load(f)
    especificos = {}
    dificuldade_total = {"Fácil": 0, "Médio": 0, "Difícil": 0, "Expert": 0}
    for carta in cartas:
        if not isinstance(carta, dict) or "itens" not in carta:
            continue
        for item in carta["itens"]:
            tema = item.get("classificacao")
            dificuldade = item.get("dificuldade")
            if tema and tema not in temas_gerais:
                especificos[tema] = especificos.get(tema, 0) + 1
                if dificuldade in dificuldade_total:
                    dificuldade_total[dificuldade] += 1
    resultados[nome_arquivo] = {"temas": especificos, "dificuldades": dificuldade_total}

# Exibe resultado
for arquivo, dados in resultados.items():
    print(f"Arquivo: {arquivo}")
    temas = dados["temas"]
    dificuldades = dados["dificuldades"]
    if temas:
        for tema, qtd in sorted(temas.items()):
            print(f"  {tema}: {qtd}")
    else:
        print("  Nenhum tema específico encontrado.")
    print("  Total por dificuldade:")
    for nivel in ["Fácil", "Médio", "Difícil", "Expert"]:
        print(f"    {nivel}: {dificuldades[nivel]}")
    print()
