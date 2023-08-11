import "./App.scss";
import SearchIcon from "@mui/icons-material/Search";
import data from "./data.json";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useState } from "react";

function App() {
  const [isLight, setIsLight] = useState(true);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  let result = [];

  const empty = input.trim().length === 0;

  const countries = empty ? data : result;

  const search = () => {
    data.map((el) => {

      if (filter !== '' && filter === el.region) {
        result.push(el);
      }
      console.log(result)
      return result

      // if (empty) return;

      // const params =
      //   filter !== ""
      //     ? el.region === filter &&
      //       el.name.toLowerCase().includes(input.toLowerCase())
      //     : el.name.toLowerCase().includes(input.toLowerCase());
      // if (params) {
      //   result.push(el);
      // }
      // return result;
    });
  };

  search();

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Where in the world</h1>
        <div className="mode" onClick={() => setIsLight((p) => !p)}>
          {isLight ? <WbSunnyOutlinedIcon /> : <NightlightRoundIcon />}
          <p>{isLight ? "Light" : "Dark"} mode</p>
        </div>
      </header>
      <div className="container">
        <div className="search">
          <div className="input">
            <input
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search for a country"
            />
            <label htmlFor="input">
              <SearchIcon />
            </label>
          </div>
          <div className="select">
            <select value={filter} onChange={handleChange}>
              <option>Filter</option>
              <option value="Asia">Asia</option>
              <option value="Americas">Americas</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>

        <main className="main">
          {countries.map((el, i) => {
            return (
              <div className="card" key={i}>
                <img src={el.flags.png} />
                <div className="text">
                  <h3>{el.name}</h3>
                  <h4>
                    {" "}
                    Population: <span>{el.population}</span>
                  </h4>
                  <h4>
                    {" "}
                    Region: <span>{el.region}</span>
                  </h4>
                  <h4>
                    {" "}
                    Capital: <span>{el.capital}</span>
                  </h4>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
