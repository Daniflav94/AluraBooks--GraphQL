import { useQuery, useMutation } from '@apollo/client'
import { ADICIONAR_ITEM, OBTER_CARRINHO, REMOVER_ITEM } from './queries'
import { ICarrinho } from '../../interfaces/ICarrinho'

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}

export const useAdicionarItem = () => {
    return useMutation(ADICIONAR_ITEM, {
        refetchQueries: [
             //quando a mutation for chamada, atualizar o carrinho (query obterCarrinho)
             'ObterCarrinho'
        ]
    })
}

export const useRemoverItem = () => {
    return useMutation(REMOVER_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    });
}