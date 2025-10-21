import styles from "./Table.module.css"
export default function ItemTabela({nome, aniversario}) {
    return (
        <tr>
            <td className={styles.colData + " text-center colData"}><div className="px-5">{aniversario}</div></td>
            <td className={styles.colNome + " text-center text-break colNome"}><div className="px-5">{nome}</div></td>
        </tr>
    )
}