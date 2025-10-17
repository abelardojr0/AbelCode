# conta_dificuldades.py
import json

# Temas específicos
temas = {
    "Caso",
    "Cientista",
    "Criminoso(a)",
    "Empresário(a)",
    "Filósofo",
    "Histórico",
    "Local/Construção",
    "País",
    "Personalidade Histórica",
    "Política"
}

# Inicializa contadores
contagem = {tema: {"Fácil": 0, "Médio": 0, "Difícil": 0, "Expert": 0} for tema in temas}
total = {"Fácil": 0, "Médio": 0, "Difícil": 0, "Expert": 0}

# Caminho do arquivo
arquivo = r"src\db\conhecimento e historia.json"

with open(arquivo, encoding="utf-8") as f:
    cartas = json.load(f)

for carta in cartas:
    if not isinstance(carta, dict) or "itens" not in carta:
        continue
    for item in carta["itens"]:
        tema = item.get("classificacao")
        dificuldade = item.get("dificuldade")
        if tema in temas and dificuldade in contagem[tema]:
            contagem[tema][dificuldade] += 1
            total[dificuldade] += 1

# Exibe resultado por tema
for tema in sorted(temas):
    print(f"{tema}:")
    for nivel in ["Fácil", "Médio", "Difícil", "Expert"]:
        print(f"  {nivel}: {contagem[tema][nivel]}")
    print()

# Exibe total geral
print("Total geral por dificuldade:")
for nivel in ["Fácil", "Médio", "Difícil", "Expert"]:
    print(f"  {nivel}: {total[nivel]}")