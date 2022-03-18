import React from "react";
import CarteSousChamp from "./Carte2";
import "./souschamp.css";

const champs = [
  {
    titre: "WT067",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT068",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT069",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT070",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT071",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT072",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT073",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT074",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT075",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
  {
    titre: "WT076",
    nbEoliennes: 2,
    sensors: {
      UPF: 1,
      MBT: 2,
      GB1T: 3,
      WSP: 4,
    },
  },
];
function chunkArray(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

export default function Souschamps(props) {
  return (
    <div>
      <div>
        <p className="textTitre">
          Votre champ <br />
          <strong>WIT_USHHH</strong>
        </p>
      </div>

      {chunkArray(champs, props.nbItempsByRow).map((chunk, index) => (
        <div className="souschamp">
          {chunk.map((champ) => (
            <CarteSousChamp {...champ} />
          ))}
        </div>
      ))}
    </div>
  );
}
