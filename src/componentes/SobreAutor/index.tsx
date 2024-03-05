import { useQuery } from "@tanstack/react-query"
import { obterAutor } from "../../http"
import BlocoSobre from "../BlocoSobre"

interface SobreAutorProps {
    autorId: number | undefined
}

const SobreAutor = ({ autorId } : SobreAutorProps) => {
    const { data: autor } = useQuery(['autor', autorId], () => obterAutor(autorId as number))

    return <BlocoSobre titulo="Sobre o Autor" corpo={autor?.sobre} />
}

export default SobreAutor