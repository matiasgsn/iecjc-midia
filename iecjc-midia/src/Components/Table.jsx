import ItemTable from "./ItemTable";
import styles from "./Table.module.css"

export default function Table(){
    const dados = [
      { nome: "Antoniel Souza", aniversario: "24/08"},
      { nome: "Matias", aniversario: "10/07"}
    ]

    return (
        <table className="table table-borderless table-responsive align-middle">
          {/*<thead>
            <tr className="mx-3">
              <th scope="col" className={styles.colNome + " " + styles.colHead + " text-start"}>Nome</th>
              <th scope="col" className={styles.colData + " " + styles.colHead + " text-center"}>Aniversário</th>
            </tr>
          </thead>*/}
          
          <tbody>
            {dados.map((item, index) => (
              <ItemTable key = {index} nome = {item.nome} aniversario = {item.aniversario} />
            ))}
          </tbody>
        </table>
    );
}