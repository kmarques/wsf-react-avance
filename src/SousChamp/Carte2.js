import "./Carte.css";
import circlered from "./circlered.png";
import circlegreen from "./circlegreen.png";
import circleryellow from "./circleyellow.png";
import Collapse from "../lib/Collapse";
import { useState } from "react";

function Carte(props) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  return (
    <div>
      <div className="blocsouschamp">
        <div className="titreblocsouschamp">
          <p>
            {props.titre} ({props.nbEoliennes} éoliennes)
          </p>
        </div>

        <div className="part1bloc">
          <div>
            <div className="colorcomposant">
              <img className="circlecolor" src={circlered}></img>
              <img className="circlecolor" src={circlegreen}></img>
              <img className="circlecolor" src={circleryellow}></img>
              <img className="circlecolor" src={circlered}></img>
            </div>
          </div>

          <div>
            <div>
              {Object.keys(props.sensors).map((sensor) => (
                <p>{sensor.toUpperCase()}°</p>
              ))}
            </div>
          </div>

          <div>
            <div>
              <Collapse
                title={<p>Alarmes :</p>}
                content={Object.values(props.sensors).map((alarm) => (
                  <p>{alarm}°</p>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="part2bloc">
          <button onClick={() => setCollapseOpen(!collapseOpen)}>
            {collapseOpen ? "Hide" : "Show"} Collapse
          </button>
          <Collapse
            title={<div className="buttonblocsouschamp">Voir détails</div>}
            content={"Les détails"}
            value={collapseOpen}
            onOpen={(value) => setCollapseOpen(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Carte;
