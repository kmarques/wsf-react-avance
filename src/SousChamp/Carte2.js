import "./Carte.css";
import circlered from "./circlered.png";
import circlegreen from "./circlegreen.png";
import circleryellow from "./circleyellow.png";

function Carte(props) {
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
              <p>Alarmes :</p>
              {Object.values(props.sensors).map((alarm) => (
                <p>{alarm}°</p>
              ))}
            </div>
          </div>
        </div>
        <div className="part2bloc">
          <div className="buttonblocsouschamp">Voir détails</div>
        </div>
      </div>
    </div>
  );
}

export default Carte;
