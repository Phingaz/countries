import "./App.scss";
import SearchIcon from "@mui/icons-material/Search";
import data from "./data.json";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useState } from "react";
import { CountryInfo } from "./CountryInfo";

function App() {
  const [isLight, setIsLight] = useState(true);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [clicked, setClicked] = useState(false);
  const [single, setSingle] = useState({
    data: {
      flags: {
        svg: "",
      },
      population: 0,
      name: "",
      native: "",
      region: "",
      capital: "",
      subregion: "",
      topLevelDomain: [],
      currencies: [],
      languages: [],
      borders: [],
    },
  });
  const [result, setResult] = useState([]);
  let countries = [];

  const handleClick = () => {
    setClicked((p) => !p);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const singleItem = (data) => {
    setClicked((p) => !p);
    setSingle((p) => ({
      ...p,
      data: data,
    }));
  };

  const handleResult = () => {
    const empty = input.trim().length === 0;
    if (empty) return;
    data.map((el) => {
      if (el.name.toLowerCase().includes(input.toLowerCase())) {
        result.push(el);
      }
    });
  };

  handleResult();

  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <header className="header">
        <h1>Where in the world?</h1>
        <div className="mode" onClick={() => setIsLight((p) => !p)}>
          {isLight ? <WbSunnyOutlinedIcon /> : <NightlightRoundIcon />}
          <p>{isLight ? "Light" : "Dark"} mode</p>
        </div>
      </header>

      {clicked ? (
        <CountryInfo data={single.data} handleClick={handleClick} />
      ) : (
        <div className="container">
          <div className="search">
            <div className="input">
              <input
                id="input"
                value={input}
                onChange={handleInputChange}
                placeholder="Search for a country"
              />
              <label htmlFor="input">
                <SearchIcon />
              </label>
            </div>
            <div className="select">
              <select value={filter} onChange={handleChange}>
                <option value="">Filter by region</option>
                <option value="Asia">Asia</option>
                <option value="Americas">Americas</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>

          <main className="main">
            {data.map((el, i) => {
              return (
                <div onClick={() => singleItem(el)} className="card" key={i}>
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
      )}
    </div>
  );
}

export default App;
