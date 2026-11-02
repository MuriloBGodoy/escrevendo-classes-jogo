# Escrevendo as Classes de um Jogo

Projeto desenvolvido como parte do desafio **Escrevendo as Classes de um Jogo** da **Formação Lógica de Programação** na **Digital Innovation One (DIO)**.

---

## 🎯 Objetivo

Criar uma classe genérica que represente um herói de uma aventura com as seguintes propriedades:
- **nome** (string)
- **idade** (number)
- **tipo** (string: `guerreiro`, `mago`, `monge` ou `ninja`)

Além disso, a classe deve conter um método `atacar()` que exiba a mensagem:
> `"o {tipo} atacou usando {ataque}"`

Conforme a tabela de tipos e ataques:

| Tipo | Descrição do Ataque |
|------|---------------------|
| **mago** | usou magia |
| **guerreiro** | usou espada |
| **monge** | usou artes marciais |
| **ninja** | usou shuriken |

---

## 📤 Saída Esperada

Exemplo de execução do método `atacar()`:
```text
=== BATALHA DOS HERÓIS ===

o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken

==========================
```

---

## 🛠️ Conceitos Aplicados

- **Classes e Objetos (POO):** Definição da classe `Heroi` com construtor e encapsulamento de propriedades e métodos.
- **Estruturas de Decisão:** `switch / case` para mapear o tipo de herói ao seu respectivo ataque.
- **Laços de Repetição:** Iteração através de um array de instâncias com `for...of`.
- **Manipulação e Normalização de Strings:** Tratamento de espaços e caixa baixa com `.trim()` e `.toLowerCase()`.
- **Testes Automatizados:** Suíte de testes unitários com o test runner nativo do Node.js (`node:test` e `node:assert`).

---

## ⚙️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18+)

### 1. Clonar o repositório
```bash
git clone https://github.com/MuriloBGodoy/escrevendo-classes-jogo.git
cd escrevendo-classes-jogo
```

### 2. Executar a aplicação
```bash
node index.js
# ou
npm start
```

### 3. Rodar os testes automatizados
```bash
npm test
```

Resultado dos testes:
```text
✔ instancia um heroi com as propriedades corretas
✔ mago ataca usando magia
✔ guerreiro ataca usando espada
✔ monge ataca usando artes marciais
✔ ninja ataca usando shuriken
✔ tipo com espacos e letras maiusculas e normalizado
✔ tipo desconhecido possui ataque padrao

tests 7 | pass 7 | fail 0
```
