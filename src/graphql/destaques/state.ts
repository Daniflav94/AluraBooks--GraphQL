import { makeVar } from '@apollo/client'
import { ILivro } from '../../interfaces/ILivro'

export const lancamentosVar = makeVar<ILivro[]>([]) 
export const maisVendidosVar = makeVar<ILivro[]>([]) 