// Board.js

import React from "react";
import SuKien from "./SuKien";

export default function BanCo({ squares, onClick }) {
  const renderSquares = numbs => {
    return numbs.map(num => (
      <SuKien value={squares[num]} onClick={() => onClick(num)} />
    ));
  };
  return (
    <div>
      <div className="banco-row">{renderSquares([0,	1,	2,	3,	4,	5, 6,	7, 8, 9])}</div>
      <div className="banco-row">{renderSquares([10,	11,	12,	13,	14,	15,	16,	17,	18,	19])}</div>
      <div className="banco-row">{renderSquares([20,	21,	22,	23,	24,	25,	26,	27,	28,	29])}</div>
      <div className="banco-row">{renderSquares([30,	31,	32,	33,	34,	35,	36,	37,	38,	39])}</div>
      <div className="banco-row">{renderSquares([40,	41,	42,	43,	44,	45,	46,	47,	48,	49])}</div>
      <div className="banco-row">{renderSquares([50,	51,	52,	53,	54,	55,	56,	57,	58,	59])}</div>
      <div className="banco-row">{renderSquares([60,	61,	62,	63,	64,	65,	66,	67,	68,	69])}</div>
      <div className="banco-row">{renderSquares([70,	71,	72,	73,	74,	75,	76,	77,	78,	79])}</div>
      <div className="banco-row">{renderSquares([80,	81,	82,	83,	84,	85,	86,	87,	88,	89])}</div>
      <div className="banco-row">{renderSquares([90,	91,	92,	93,	94,	95,	96,	97,	98,	99])}</div>
    </div>
  );
}
