import { gql } from '@apollo/client';

export const OBTER_DESTAQUES= gql`
query ObterDestaques {
    destaques {
        lancamentos {
           __typename,
          id,
          titulo,
          descricao,
          imagemCapa,
          opcoesCompra {
              id
              preco
            }
            autor {
                  id,
                nome
            }
        },
        maisVendidos {
          __typename,
          id,
          titulo,
          descricao,
          imagemCapa, 
          opcoesCompra {
              id
              preco
            }
            autor {
              id,
                nome
            }
        }
      }
    }
`