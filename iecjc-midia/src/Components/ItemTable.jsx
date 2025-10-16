export default function ItemTabela({nome, aniversario}) {
    return (
        <tr>
            <td className="text-start text-break">{nome}</td>
            <td className="text-center">{aniversario}</td>
        </tr>
    )
}