import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import { useState } from "react";
import Menu from "./component/menu";

function App() {
  console.log(data);
  const [page, setPage] = useState("menu");
  return (
    <div>
      <div className="App">
        {data && data.map((data) => {
            return (
              <div key={data.id}>
                <b>{data.name}</b>
                <br />
                {data.content}
                {/* //data.tech && ...... because of the data is not present in any one object then error is not ocurred  */}
                {data.tech &&
                  data.tech.map((data) => {
                    return (
                      <div key={data.id}>
                        {data.techName}
                        <br />
                        <br />
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
      <div>
        <button onClick={() => setPage("menu")}>Click me</button>
      {page === "menu" && <Menu />
      }
      </div>
    </div>
  );
}

export default App;
