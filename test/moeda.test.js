import { describe, expect, it, vi } from "vitest";
import axios from "axios";
import { buscarCotacao, converterMoeda } from "../src/moeda.js";


vi.mock('axios', () => ({ //define o mock para a biblioteca axios, que será usado para simular as respostas da API
    default: {
        get: vi.fn() //define o mock para o método get da biblioteca axios, que será usado para simular as respostas da API
    }
}));

describe('Biblioteca de testes para conversão de moedas', () => {

    it('Deve buscar a cotação atual', async () => {
        axios.get.mockResolvedValueOnce({ //faz a consulta no mock da biblioteca axios
            data: {
                rates: { BRL: 5.36 }
            }
        })

        const cotacao = await buscarCotacao('USD', 'BRL'); //cria a constante de cotação, que recebe o valor retornado pela função buscarCotacao - de Dolar para Real
        expect(cotacao).toBe(5.36);

    });

    it('Deve converter a moeda corretamente', async () => {
        axios.get.mockResolvedValueOnce({ //faz a consulta no mock da biblioteca axios
            data: {
                rates: { BRL: 5.36 }
            }

        })

        const valorConvertido = await converterMoeda(10, 'USD', 'BRL'); //cria a constante de valor convertido, que recebe o valor retornado pela função converterMoeda - de Dolar para Real
        expect(valorConvertido).toBe(53.6);


    });

    it('Deve lançar um erro quando a API não estiver disponível', async () => {
        axios.get.mockRejectedValueOnce(new Error('API indisponível')); //faz a consulta no mock da biblioteca axios, simulando um erro de API indisponível

        await expect(converterMoeda(10, 'USD', 'BRL')).rejects.toThrow('API indisponível'); // espera que a função converterMoeda lance um erro com a mensagem 'API indisponível' quando a API não estiver disponível
    });

    it('Deve lançar um erro quando a moeda não for encontrada', async () => {
        axios.get.mockResolvedValueOnce({ //faz a consulta no mock da biblioteca axios
            data: {
                rates: { BRL: 5.36 }
            }
        })

        await expect(converterMoeda(10, 'USD', 'XYZ')).rejects.toThrow('Moeda não encontrada'); // espera que a função converterMoeda lance um erro com a mensagem 'Moeda não encontrada' quando a moeda não for encontrada
    });

    it('Deve lançar um erro quando a moeda de origem não for encontrada', async () => {
        axios.get.mockResolvedValueOnce({ //faz a consulta no mock da biblioteca axios
            data: {
                rates: { BRL: 5.36 }
            }
        })

        await expect(converterMoeda(10, 'XYZ', 'BRL')).rejects.toThrow('Moeda de origem não encontrada'); 

    })
    
})