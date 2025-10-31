import Table from "./Components/Table";
import "./App.css"
import { useEffect, useRef } from "react";

export default function App() {
  const overflowRef = useRef(null);

  useEffect(() => {
    if (!overflowRef.current) return;
  }, []);

  return (
    <>
      <div className="wrapper d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-between align-items-center mb-1 w-75">
          <div>A</div>
          <div className="titulo">ANIVERSARIANTES</div>
          <div></div>
        </div>
        <div ref={overflowRef} className="card tablewrap align-items-center">
          <Table overflowRef={overflowRef}/>
        </div>
      </div>
    </>
  )
}
