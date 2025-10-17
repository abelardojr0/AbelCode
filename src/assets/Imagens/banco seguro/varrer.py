import os
import json

CATEGORIAS = [
    "Filme", "Série", "Ator/Atriz", "Cantor(a)", "Banda",
    "Meme", "Herói/Vilão", "Animação", "Personagem", "Jogo"
]

DIFICULDADES = ["Fácil", "Médio", "Difícil", "Expert"]

def carregar_jsons(pasta="."):
    arquivos = [f for f in os.listdir(pasta) if f.endswith(".json")]
    caixas = []
    for nome_arquivo in arquivos:
        caminho = os.path.join(pasta, nome_arquivo)
        with open(caminho, "r", encoding="utf-8") as f:
            try:
                data = json.load(f)
                caixas.append((nome_arquivo, data.get("itens", [])))
            except json.JSONDecodeError:
                print(f"[!] Erro ao ler {nome_arquivo}, ignorando...")
    return caixas

def menu_filtro():
    print("Escolha um tipo de filtro:")
    print("1. Categoria")
    print("2. Dificuldade")
    escolha = input("Digite 1 ou 2: ").strip()
    if escolha == "1":
        print("\nCategorias disponíveis:")
        for i, cat in enumerate(CATEGORIAS, 1):
            print(f"{i}. {cat}")
        idx = int(input("Escolha o número da categoria: ").strip()) - 1
        return "classificacao", CATEGORIAS[idx]
    elif escolha == "2":
        print("\nDificuldades disponíveis:")
        for i, dif in enumerate(DIFICULDADES, 1):
            print(f"{i}. {dif}")
        idx = int(input("Escolha o número da dificuldade: ").strip()) - 1
        return "dificuldade", DIFICULDADES[idx]
    else:
        print("Opção inválida.")
        exit(1)

def aplicar_filtro(caixas, chave, valor):
    resultado = []
    for nome_arquivo, itens in caixas:
        for item in itens:
            if item.get(chave) == valor:
                resultado.append((nome_arquivo, item["nome"]))
    return resultado

def main():
    caixas = carregar_jsons()
    if not caixas:
        print("Nenhum arquivo .json encontrado.")
        return

    chave, valor = menu_filtro()
    filtrados = aplicar_filtro(caixas, chave, valor)

    print(f"\nItens encontrados com {chave} = {valor}:")
    for arquivo, nome in filtrados:
        print(f"- {nome} (em {arquivo})")

    print(f"\nTotal: {len(filtrados)} item(ns)")

if __name__ == "__main__":
    main()
