// App.js

import React, { useState } from "react";

import BanCo from "./BanCo";
import "./Caro.css";

let viTri = 0;
let luotChoi = 1;
let nguoiChoiX = 0;
let nguoiChoiO = 0;
let luotHoa = 0;
let ketQuaLuotChoi = null;
const arrChanGiam = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
const arrChanTang = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

export default function AppCaro() {
  let [squares, setSquares] = useState(Array(99).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = i => {
    viTri = i;
    if (checkWinner(squares, i) || squares[i]) {
      return;
    }

    if (luotChoi % 2 === 0) {
      squares[i] = xIsNext ? "X" : "O";
    } else {
      squares[i] = xIsNext ? "O" : "X";
    }

    setSquares(squares);
    setXIsNext(!xIsNext);
  };

  const resetClick = i => {
    squares = Array(99).fill(null);
    squares[i] = null;
    setSquares(squares);
    setXIsNext(!xIsNext);
    luotChoi++;
    if (ketQuaLuotChoi === "O") {
      nguoiChoiO++;
    } else if (ketQuaLuotChoi === "X") {
      nguoiChoiX++;
    } else if (ketQuaLuotChoi === "H") {
      luotHoa++;
    }
  };
  const winner = checkWinner(squares, viTri);
  let status;
  if (winner) {
    status = winner + ": Thắng";
    if (winner !== "H") {
      status = winner + ": Thắng";
    } else {
      status = "Lượt chơi: Hòa";
    }
    ketQuaLuotChoi = winner;
    return (
      <div className="game">
      <div className="ban_co">
        <div className="game-board">
          <BanCo squares={squares} onClick={i => resetClick(i)} />
        </div>
       
      </div>

      <div className="payler">

        <div>{status}</div>
        <div className="luot-choi">
          <p>Round: <span>{luotChoi}</span></p>
        </div>
        <div className="payler-X">Player X: {nguoiChoiX}</div>
        <div className="hoa">Draw: {luotHoa}</div>
        <div className="payler-O">Player O: {nguoiChoiO}</div>
      </div>


    </div>
    );
  } else {

    if (luotChoi % 2 === 0) {
      status = "Player: " + (xIsNext ? "X" : "O");
    } else {
      status = "Player: " + (xIsNext ? "O" : "X");
    }



  }

  return (
    <div className="game">
      <div className="ban_co">
        <div className="game-board">
          <BanCo squares={squares} onClick={i => handleClick(i)} />
        </div>
       
      </div>

      <div className="payler"><div>{status}</div>
        <div className="luot-choi">
          <p>Round <span>{luotChoi}</span></p>
        </div>
        <div className="payler-X">Player X: {nguoiChoiX}</div>
        <div className="hoa">Draw: {luotHoa}</div>
        <div className="payler-O">Player O: {nguoiChoiO}</div>
      </div>


    </div>
  );

}

function checkWinner(squares, i) {


  let viTriCheoP_T = LayViTriCheoP_T(i);
  let viTriCheoT_P = LayViTriCheoT_P(i);
  let viTriNgang = LayViTriNgang(i);
  let viTriDoc = LayViTriDoc(i);

  let ketQua = null;
  if (duyetMang(10, viTriDoc, squares)) {
    ketQua = duyetMang(10, viTriDoc, squares);
  } else if (duyetMang(1, viTriNgang, squares)) {
    ketQua = duyetMang(1, viTriNgang, squares);
  } else if (duyetMang(11, viTriCheoT_P, squares)) {
    ketQua = duyetMang(11, viTriCheoT_P, squares);
  } else if (duyetMang(9, viTriCheoP_T, squares)) {
    ketQua = duyetMang(9, viTriCheoP_T, squares);
    console.log(ketQua);
  }


  let KiemTraHoa = true;
  squares.forEach(element => {
    if (element === null) {
      KiemTraHoa = false;
    }
  });
  if (KiemTraHoa === true) {
    if (ketQua === null) {
      ketQua = "H";
    }
  }

  return ketQua;
}

function LayViTriNgang(i) {
  //kiem tra lay vi tri
  const viTriMax = (Math.floor(i / 10) + 1) * 10;
  const viTriMin = (Math.floor(i / 10)) * 10;
  let arrNgang = [];
  for (let index = viTriMin; index < viTriMax; index++) {
    arrNgang.push(index);
  }
  return arrNgang;
}
function LayViTriDoc(i) {
  //kiem tra lay vi tri
  const viTriMax = i % 10 + 90;
  const viTriMin = (i % 10);
  let arrDoc = [];
  for (let index = viTriMin; index <= viTriMax; index++) {
    arrDoc.push(index);
    index = index + 9
  }

  return arrDoc;
}

function LayViTriCheoP_T(i) {
  let arr = [];
  arr.push(i);
  let viTriTang = i;
  let viTriGiam = i;
  while (viTriTang <= 99) {
    arrChanGiam.forEach(element => {
      if (viTriTang === element) {
        viTriTang = 100;
      }
    });

    viTriTang = viTriTang + 9;
    if (viTriTang < 99)
      arr.push(viTriTang);

  }
  while (viTriGiam >= 0) {
    arrChanTang.forEach(element => {
      if (viTriGiam === element) {
        viTriGiam = -1;
      }
    });
    viTriGiam = viTriGiam - 9;
    if (viTriGiam > 0)
      arr.push(viTriGiam);

  }
  arr.sort((a, b) => a - b);

  console.log(arr);
  return arr;
}


function LayViTriCheoT_P(i) {
  //kiem tra lay vi tri

  let arr = [];
  arr.push(i);
  let viTriTang = i;
  let viTriGiam = i;
  while (viTriTang <= 99) {
    arrChanTang.forEach(element => {
      if (viTriTang === element) {
        viTriTang = 100;
      }
    });
    viTriTang = viTriTang + 11;
    if (viTriTang <= 99) {
      arr.push(viTriTang);
    }
  }
  while (viTriGiam > 0) {

    arrChanGiam.forEach(element => {
      if (viTriGiam === element) {
        viTriGiam = 0;
      }
    });
    viTriGiam = viTriGiam - 11;
    if (viTriGiam >= 0)
      arr.push(viTriGiam);
  }
  arr.sort((a, b) => a - b);
  return arr;
}

function duyetMang(buocNhay, arr, squares) {
  let kq = null;
  let dem = 1;
  const doDaiMang = arr.length;
  arr.forEach(element => {
    let next = element + buocNhay;
    if (next <= arr[doDaiMang - 1]) {
      if (squares[element] === squares[next] && squares[element]) {
        dem++;
        if (dem === 5) {
          kq = squares[element];
        }
      } else {
        dem = 1;
      }
    }
  });
  return kq;
}  