import {useState, useEffect} from "react";
import "./App.css";

export type Julesang = {
  id: string;
  navn: string;
};

function useJulesanger() {
  const [julesanger, setJulesanger] = useState<Julesang[]>([]);
  useEffect(() => {
    fetch("https://mittapi.no/julesanger")
      .then((response) => response.json())
      .then((data) => setJulesanger(data));
  }, []);

  return julesanger;
}

function App() {
  const julesanger = useJulesanger();

  return (
    <>
      <h1>Julesanger</h1>
      <p>
        Appen demonstrerer bruk av <a href="https://mswjs.io/">MSW</a> for å
        mocke ut API-endepunkter
      </p>
      <h2>Julesanger 🎄</h2>
      <ul>
        {julesanger.map((julesang) => (
          <li key={julesang.id}>{julesang.navn}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
