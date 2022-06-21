import { useState } from 'react'
import Card from './Card'
import "./Card.css";

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/ech.png', stat: "" },
        { id: 1, img: '/img/ech.png', stat: "" },
        { id: 2, img: '/img/chimcanhcut.png', stat: "" },
        { id: 2, img: '/img/chimcanhcut.png', stat: "" },
        { id: 3, img: '/img/meo.png', stat: "" },
        { id: 3, img: '/img/meo.png', stat: "" },
        { id: 4, img: '/img/rong.png', stat: "" },
        { id: 4, img: '/img/rong.png', stat: "" },
        { id: 5, img: '/img/ronglua.png', stat: "" },
        { id: 5, img: '/img/ronglua.png', stat: "" },
        { id: 6, img: '/img/than.jpg', stat: "" },
        { id: 6, img: '/img/than.jpg', stat: "" },
        { id: 7, img: '/img/boss.png', stat: "" },
        { id: 7, img: '/img/boss.png', stat: "" },
        { id: 8, img: '/img/pikachu.png', stat: "" },
        { id: 8, img: '/img/pikachu.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "đúng"
            items[prev].stat = "đúng"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "sai"
            items[prev].stat = "sai"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className='demo'>
        <div className="containerdemo">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
        </div>
    )
}

export default Cards