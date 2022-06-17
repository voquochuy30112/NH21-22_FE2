import React, { useState } from "react";
import "./RollDice.css";
import Die from './Die';

const RollDice = ({ sides }) => {
    const [state, setState] = useState({
        die1: 'one',
        die2: 'three',
        rolling: false,
        totalScore: 4
    })

    const { die1, die2, rolling, totalScore } = state;

    const roll = () => {
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        const score1 = Object.values(newDie1); //[one]
        const score2 = Object.values(newDie2); //[two]
        setState({
            die1: Object.keys(newDie1),
            die2: Object.keys(newDie2),
            rolling: true,
            totalScore: score1[0] + score2[0],
        });
        setTimeout(() => {
            setState((prevState) => ({ ...prevState, rolling: false }))
        }, 1000)
    }


    return (
        <>
            <div className="roll-dice">
                <div className="reolldice-c ontainer">
                    <Die face={String(die1)} rolling={rolling}></Die>
                    <Die face={String(die2)} rolling={rolling}></Die>
                </div>
                <button onClick={roll} disabled={rolling}>
                    {rolling ? "rolling..." : "Roll Dice"}
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