import { ILivro } from "../../interfaces/ILivro"
import { useQuery } from '@apollo/client';
import { OBTER_DESTAQUES } from "./queries";
import { lancamentosVar, maisVendidosVar } from "./state";

export const useDestaques = () => {
    return useQuery< {destaques: { lancamentos: ILivro[], maisVendidos: ILivro[] }}>(OBTER_DESTAQUES, {         
        onCompleted(data) {            
            if(data.destaques.lancamentos){
                lancamentosVar(data.destaques.lancamentos)
            }

            if(data.destaques.maisVendidos){
                maisVendidosVar(data.destaques.maisVendidos)
            }
        }
    })
}