const calcularAcrescimo  = require('../src/operacoes').calcularAcrescimo;

describe('Testes da função calcularAcrescimo', () => {

    // Teste 1: verifica o acréscimo de 10%
    test('deve calcular um acréscimo de 10%', () => {
        expect(calcularAcrescimo(100, 10)).toBe(110);
    });

    // Teste 2: verifica o acréscimo de 50%
    test('deve calcular um acréscimo de 50%', () => {
        expect(calcularAcrescimo(200, 50)).toBe(300);
    });

    // Teste 3: verifica quando o percentual é zero
    test('deve retornar o valor original quando o percentual for 0', () => {
        expect(calcularAcrescimo(100, 0)).toBe(100);
    });

    // Teste 4: verifica se apresenta erro quando o valor é zero
    test('deve apresentar erro quando o valor for zero', () => {
        expect(() => calcularAcrescimo(0, 10)).toThrow('Dados inválidos');
    });

});

const  classificarDesempenho  = require('../src/operacoes').classificarDesempenho;


describe('Testes de classificação', () => {

    // Verifica se uma nota 9.5 retorna "Excelente"
    test('nota excelente', () => {
        expect(classificarDesempenho(9.5)).toBe('Excelente');
    });

    // Verifica se uma nota 8 retorna "Bom"
    test('nota boa', () => {
        expect(classificarDesempenho(8)).toBe('Bom');
    });
    // Verifica se uma nota 6 retorna "Regular"
    test('nota regular', () => {
        expect(classificarDesempenho(6)).toBe('Regular');
    });
    // verifica se a nota 4 retorna insuficiente
    test('nota insuficiente', () => {
        expect(classificarDesempenho(4)).toBe('Insuficiente');
    });
    // verifica se uma nota invalida (maior q 10) retorna um erro
    test('nota inválida', () => {
        expect(() => classificarDesempenho(11))
        .toThrow('Nota inválida');
    });

});
const validarJogador = require('../src/operacoes').validarJogador; 
describe('Testes de validação de jogador', () => {
    // passa um jogador valido e espera que retorne true
    test('deve retornar true para jogador válido', () => {
        expect(validarJogador("João", 25, 100)).toBe(true);
    });
    //retorna false para jogador com nome vazio
    test('deve retornar false para jogador com nome vazio', () => {
        expect(validarJogador("", 25, 100)).toBe(false);
    });
    //retorna false para usuario apenas com espaços  validação de nome
    test('deve retornar false para jogador com nome apenas com espaços', () => {
        expect(validarJogador("   ", 25, 100)).toBe(false);
    });
    //retorna false para jogador com idade menor que 13
    test('deve retornar false para jogador com idade menor que 13', () => {
        expect(validarJogador("João", 12, 100)).toBe(false);
    });
    //retorna false para jogador com idade maior que 80
    test('deve retornar false para jogador com idade maior que 80', () => {
        expect(validarJogador("João", 81, 100)).toBe(false);
    });
    //retorna false para jogador com pontuação negativa
    test('deve retornar false para jogador com pontuação negativa', () => {
        expect(validarJogador("João", 25, -10)).toBe(false);
    });
    //retorna true para jogador com idade 13 e pontuação 0
    test('deve retornar true para pontuação 0', () => {
        expect(validarJogador("João", 25, 0)).toBe(true);
    });
    //retorna true para jogador com idade minima 13
    test('deve retornar true para idade 13', () => {
        expect(validarJogador("João", 13, 100)).toBe(true);
    });
    //retorna true para jogador com idade maxima 80
    test('deve retornar true para idade 80', () => {
        expect(validarJogador("João", 80, 100)).toBe(true);
    });

});


