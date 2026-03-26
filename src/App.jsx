import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/countries/countries";

const CountriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<p>Countries Loading...</p>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
