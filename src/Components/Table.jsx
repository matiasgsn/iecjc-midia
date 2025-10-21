import ItemTable from "./ItemTable";
import styles from "./Table.module.css"

import { useEffect, useState, forwardRef } from 'react';


 const Table = ({ overflowRef}) => {
    const[hasOverflow, setHasOverflow] = useState(false);
    const[dados, setDados] = useState([]);

    useEffect(() => {
        async function getDados (){
          const dados = [
            { nome: "Nome 1", aniversario: "24/08"},
            { nome: "Nome 2", aniversario: "02/03"},
            { nome: "Nome 3", aniversario: "30/10"},
            { nome: "Nome 4", aniversario: "03/01"},
            { nome: "Nome 5", aniversario: "15/15"},
            { nome: "Nome 6", aniversario: "10/07"}
          ]

          if (hasOverflow){
            setDados(dados.concat(dados));
          } else {
            console.log("AAAAAAAAA")
            setDados(dados);
          } 
          
        }
      
        getDados();
    }, []);

    
    useEffect(() => {
        const el = overflowRef.current;
        if (!el) return;

        const checkOverflow = () => {
          setHasOverflow(el.scrollHeight > el.clientHeight)
        };
        
        checkOverflow();

        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [overflowRef, dados]);

    return (
        <table className="table table-borderless table-responsive align-middle">
          {/*<thead>
            <tr className="mx-3">
              <th scope="col" className={styles.colNome + " " + styles.colHead + " text-start"}>Nome</th>
              <th scope="col" className={styles.colData + " " + styles.colHead + " text-center"}>Aniversário</th>
            </tr>
          </thead>*/}
          
          <tbody className={hasOverflow && dados.length > 5 ? styles.overflowed : ""}>
            {dados.map((item, index) => (
              <ItemTable key = {index} nome = {item.nome} aniversario = {item.aniversario} />
            ))}

            {hasOverflow ? (dados.map((item, index) => ( // Se overflow existir, mapeia os items 2x pra loopar
              <ItemTable key = {index} nome = {item.nome} aniversario = {item.aniversario} />
            ))) : ""}

          </tbody>
        </table>
    );
};

export default Table;