import {describe, it, expect} from 'vitest';
import {somar,  subtrair,  multiplicar, dividir, elevar, fatorial, ehPar, ehPrimo, media, limitar, fibonacci } from '../src/math.js';


// desbribe é o agrupamento de testes 
describe('Biblioteca inicinal de testes', ()=>{
    it('Deve somar dois números',()=>{ //it define o caso que será testado

        expect(somar(5, 7)).toBe(12) //tudo dentro do expect é o teste que será ralizado - toBe é o resultado esperado
        expect(somar(-5, 7)).toBe(2)
        expect(somar(0, 0)).toBe(0)
        
    })

    it('Divisão por zero', ()=>{
        expect(() =>dividir(10, 0)).toThrow() //toThrow é o resultado esperado para erro
        expect(() => dividir(-10, 0)).toThrow()

    })

    it('Deve subtrair dois números',()=>{
        expect(subtrair(10, 5)).toBe(5)
        expect(subtrair(-10, -5)).toBe(-5)
        expect(subtrair(0, 0)).toBe(0)
    })

    it('Deve multiplicar dois números',()=>{
        expect(multiplicar(10, 5)).toBe(50)
        expect(multiplicar(-10, -5)).toBe(50)
        expect(multiplicar(0, 5)).toBe(0)
    })

    it('Deve dividir dois números',()=>{
        expect(dividir(10, 5)).toBe(2)
        expect(dividir(-10, -5)).toBe(2)
        expect(dividir(0, 5)).toBe(0)
    })

    it('Deve elevar um número a uma potência',()=>{
        expect(elevar(2, 3)).toBe(8)
        expect(elevar(-2, 3)).toBe(-8)
        expect(elevar(2, 0)).toBe(1)
    })

    it('Deve calcular o fatorial de um número',()=>{
        expect(fatorial(5)).toBe(120)
        expect(fatorial(0)).toBe(1)
        expect(fatorial(1)).toBe(1)
        expect(() => fatorial(-5)).toThrow('Fatorial de número negativo não é permitido.') //devemos colocar uma arrow function para garantir que a operação seja executada dentro do expect, caso contrário o erro não será capturado
    })

    it('Deve verificar se um número é par',()=>{
        expect(ehPar(4)).toBe(true)
        expect(ehPar(5)).toBe(false)
        expect(ehPar(0)).toBe(true)
    })

    it('Deve calcular a média de uma lista de números',()=>{
        expect(media([1, 2, 3, 4, 5])).toBe(3)
        expect(media([-1, -2, -3, -4, -5])).toBe(-3)
        expect(() => media([])).toThrow('É necessário informar uma lista de números válida.')
        
    })

    it('Deve verificar se um número é primo',()=>{
        expect(ehPrimo(2)).toBe(true)
        expect(ehPrimo(3)).toBe(true)
        expect(ehPrimo(4)).toBe(false)
        expect(ehPrimo(1)).toBe(false)
        expect(ehPrimo(-5)).toBe(false)
    })

    it('Deve limitar um número a um intervalo',()=>{
        expect(limitar(5, 1, 10)).toBe(5)
        expect(limitar(-5, 1, 10)).toBe(1)
        expect(limitar(15, 1, 10)).toBe(10)
    })

    it('Deve calcular a sequência numérica infinita em que cada número é a soma dos dois anteriores',()=>{
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)
        expect(fibonacci(4)).toBe(3)
        expect(fibonacci(5)).toBe(5)
        expect(()=>fibonacci(-6)).toThrow('A posição deve ser um número inteiro não negativo.')
    })
    
})