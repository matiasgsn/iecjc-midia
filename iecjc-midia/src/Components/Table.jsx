import ItemTable from "./ItemTable";
import styles from "./Table.module.css"

export default function Table(){
    const dados = [
      { nome: "Carlos", aniversario: "24/08"},
      { nome: "Matias", aniversario: "10/07"}
    ]

    return (
        <table className="table align-middle h-50 w-75">
          <thead>
            <tr className="mx-3">
              <th scope="col" className={styles.colNome + " text-start"}>Nome</th>
              <th scope="col" className={styles.colData + " text-center"}>Aniversário</th>
            </tr>
          </thead>
          
          <tbody>
            {dados.map((item, index) => (
              <ItemTable key = {index} nome = {item.nome} aniversario = {item.aniversario} />
            ))}
          </tbody>
        </table>
    );
}