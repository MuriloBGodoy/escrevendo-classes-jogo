/**
 * Desafio: Escrevendo as Classes de um Jogo
 * Formação Lógica de Programação - Digital Innovation One (DIO)
 *
 * Conceitos utilizados:
 * - Variáveis e Constantes
 * - Operadores
 * - Laços de repetição (for...of)
 * - Estruturas de decisões (switch / case)
 * - Funções
 * - Classes e Objetos (POO)
 */

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = (tipo || "").toLowerCase().trim();
    }

    obterDescricaoAtaque() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque básico";
                break;
        }

        return ataque;
    }

    atacar() {
        const ataque = this.obterDescricaoAtaque();
        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
        return mensagem;
    }
}

// Demonstração criando múltiplos heróis e iterando com laço de repetição
function executarDemonstracao() {
    console.log("=== BATALHA DOS HERÓIS ===\n");

    const herois = [
        new Heroi("Merlin", 150, "mago"),
        new Heroi("Conan", 35, "guerreiro"),
        new Heroi("Shaolin", 28, "monge"),
        new Heroi("Hanzo", 25, "ninja")
    ];

    // Laço de repetição percorrendo os heróis
    for (const heroi of herois) {
        heroi.atacar();
    }

    console.log("\n==========================");
}

if (require.main === module) {
    executarDemonstracao();
}

module.exports = {
    Heroi,
    executarDemonstracao
};
