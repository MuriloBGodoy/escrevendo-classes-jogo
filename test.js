const test = require('node:test');
const assert = require('node:assert');
const { Heroi } = require('./index');

test('instancia um heroi com as propriedades corretas', () => {
    const heroi = new Heroi('Aragorn', 87, 'guerreiro');
    assert.strictEqual(heroi.nome, 'Aragorn');
    assert.strictEqual(heroi.idade, 87);
    assert.strictEqual(heroi.tipo, 'guerreiro');
});

test('mago ataca usando magia', () => {
    const mago = new Heroi('Gandalf', 2000, 'mago');
    const resultado = mago.atacar();
    assert.strictEqual(resultado, 'o mago atacou usando magia');
});

test('guerreiro ataca usando espada', () => {
    const guerreiro = new Heroi('Arthur', 30, 'guerreiro');
    const resultado = guerreiro.atacar();
    assert.strictEqual(resultado, 'o guerreiro atacou usando espada');
});

test('monge ataca usando artes marciais', () => {
    const monge = new Heroi('Aang', 112, 'monge');
    const resultado = monge.atacar();
    assert.strictEqual(resultado, 'o monge atacou usando artes marciais');
});

test('ninja ataca usando shuriken', () => {
    const ninja = new Heroi('Naruto', 16, 'ninja');
    const resultado = ninja.atacar();
    assert.strictEqual(resultado, 'o ninja atacou usando shuriken');
});

test('tipo com espacos e letras maiusculas e normalizado', () => {
    const mago = new Heroi('Doctor Strange', 45, '  MAGO  ');
    const resultado = mago.atacar();
    assert.strictEqual(resultado, 'o mago atacou usando magia');
});

test('tipo desconhecido possui ataque padrao', () => {
    const arqueiro = new Heroi('Robin', 28, 'arqueiro');
    const resultado = arqueiro.atacar();
    assert.strictEqual(resultado, 'o arqueiro atacou usando um ataque básico');
});
