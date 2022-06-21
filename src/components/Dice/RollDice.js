import React, { useState } from "react";
import "./RollDice.css";
import Die from './Die';



let datChan = false;
let datLe = false;


const RollDice = ({ sides }) => {
    const [state, setState] = useState({
        die1: 'one',
        die2: 'three',
        die3: 'one',
        rolling: false,
        totalScore: 5
    })
    const [tienBanDau, setTien] = useState(1000);
    const [tienDatChan, setTienchan] = useState(0);
    const [tienDatLe, setTienLe] = useState(0);
    const { die1, die2, die3, rolling, totalScore } = state;

    const roll = () => {
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        const newDie3 = sides[Math.floor(Math.random() * sides.length)];
        const score1 = Object.values(newDie1);
        const score2 = Object.values(newDie2);
        const score3 = Object.values(newDie3);

        setState({
            die1: Object.keys(newDie1),
            die2: Object.keys(newDie2),
            die3: Object.keys(newDie3),
            rolling: true,
            totalScore: score1[0] + score2[0] + score3[0],
        });
        setTimeout(() => {
            setState((prevState) => ({ ...prevState, rolling: false }))
        }, 1000)

        const tongDiem = score1[0] + score2[0] + score3[0];

        
        if (datChan === true || datLe === true) {
            if (tongDiem % 2 === 0) {
                let tienThuong = tienDatChan * 2;
                setTienchan(tienThuong )
                setTien(tienBanDau + tienThuong);
                setTienchan(0);
                setTienLe(0);
                datChan = false;
                datLe = false;
            }

            if (tongDiem % 2 !== 0) {
                
                
           let tienThuong = tienDatLe * 2;
              setTienLe(tienThuong)
                setTien(tienBanDau + tienThuong);
                setTienchan(0);
                setTienLe(0);
                datChan = false;
                datLe = false;
            }

        }
        
    }
    
   
    
    const handlePlayChan = () => {
        if (tienBanDau > -1000) {
            setTien(tienBanDau - 100);
            datChan = true;
            setTienchan(tienDatChan + 100);
        }

    }

    const handlePlayLe = () => {
        if (tienBanDau > -1000) {
            setTien(tienBanDau - 100);
            datLe = true;
            setTienLe(tienDatLe + 100);
    
        }
    }

    return (
        <>
            <div className="roll-dice">
                <h2>Total money: {tienBanDau}</h2>
                <h2 className="tienDatChan">Even bet: {tienDatChan}</h2>
                <h2 className="tienDatLe">Odd bet : {tienDatLe}</h2>
                <div className="chan-le">
                    <button className="btn-chan" onClick={handlePlayChan}><h2>Even</h2></button>
                    <button className="btn-le" onClick={handlePlayLe}><h2>Odd</h2></button>
                </div>
                <div className="reolldice-container">
                    <Die face={String(die1)} rolling={rolling} ></Die>
                    <Die face={String(die2)} rolling={rolling}></Die>
                </div>
                <div>
                    <Die face={String(die3)} rolling={rolling}></Die>
                </div>
                <button className="result" onClick={roll} disabled={rolling}>
                    {rolling ? "Rolling..." : "Roll Dice"}

                </button>
                <h2>Total Score: {totalScore}</h2>
            </div>
        </>
    )
}

RollDice.defaultProps = {
    sides: [
        { one: 1 },
        { two: 2 },
        { three: 3 },
        { four: 4 },
        { five: 5 },
        { six: 6 }
    ]
}

export default RollDice;