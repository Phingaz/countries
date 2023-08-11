/* eslint-disable react/prop-types */

import "./Country.scss";

export const CountryInfo = (props) => {
  const data = props.data || {};

  const img = data.flags.svg;
  const name = data.name;
  const native = data.nativeName;
  const population = data.population;
  const region = data.region;
  const capital = data.capital;
  const subregion = data.subregion;
  const topLevelDomain = data.topLevelDomain;
  const currencies = data.currencies;
  const languages = data.languages;
  const borders = data.borders || [];

  return (
    <div className="country">
      <button onClick={() => props.handleClick()}>Back</button>

      <div className="items">
        <img src={img} />

        <div className="text">
          <div className="section">
            <h3>{name}</h3>
            <div className="aside">
              <div className="one">
                <h4>
                  {" "}
                  Native name: <span>{native}</span>
                </h4>
                <h4>
                  {" "}
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  {" "}
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  {" "}
                  Sub region: <span>{subregion}</span>
                </h4>
                <h4>
                  {" "}
                  Capital: <span>{capital}</span>
                </h4>
              </div>

              <div className="two">
                <h4>
                  {" "}
                  Top Level Domain:{" "}
                  <span>
                    {topLevelDomain.map((el) => (
                      <p key={el}>{el}</p>
                    ))}
                  </span>
                </h4>
                <h4>
                  {" "}
                  Currencies:{" "}
                  <span>
                    {currencies.map((el) => (
                      <p key={el.code}>{el.name}</p>
                    ))}
                  </span>
                </h4>
                <h4>
                  {" "}
                  Languages:{" "}
                  <span>
                    {languages.map((el) => (
                      <p key={el.name}>{el.name}</p>
                    ))}
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="border">
            <h3>Border Countries:</h3>
            <div className="p">
              {borders.map((el) => {
                return <p key={el}>{el}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
