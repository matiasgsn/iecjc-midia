import Table from "./Components/Table";
import "./App.css"
import { useEffect, useRef } from "react";

export default function App() {
  const overflowRef = useRef(null);

  useEffect(() => {
    if (!overflowRef.current) return;
  }, []);

  return (
    <div className="wrapper d-flex justify-content-center align-items-center">
      <div ref={overflowRef} className="card p-3 tablewrap align-items-center">
        <Table overflowRef={overflowRef}/>
      </div>
    </div>
  )
}
