import React, { useEffect, useState } from 'react'
import elefant from "../img/Elefants.jpg"
import giraffe from "../img/Giraffe.jpg"
import lion from "../img/Lion.jpg"
import lizard from "../img/Lizard.jpg"
import parrot from "../img/Parrots.jpg"
import rabbit from "../img/Rabbits.jpg"
import squirrel from "../img/squirrel.jpg"
import tiger from "../img/Tiger.jpg"

function Main({ changePoints, lose }) {

   

    const [images, setImages] = useState([
        elefant,
        giraffe,
        lion,
        lizard,
        parrot,
        rabbit,
        squirrel,
        tiger
    ])

    const [clicked, setClicked] = useState([])

    const handleClick = (e) => {
        setClicked([...clicked, e.target.src])
        setImages(shuffle(images))
    }

    useEffect(() => {
        const noDuplicates = new Set(clicked)
        if(noDuplicates.size !== clicked.length) {
            lose()
        } else {
            changePoints(clicked.length)
        }

    }, [clicked, changePoints, lose])

    function shuffle (array) {
        const newArray = []
        let index = array.length - 1
        while(index >= 0) {
            let randomIndex = Math.floor(Math.random() * (array.length))
            if(newArray.includes(array[randomIndex])) {
                continue
            } else {
                newArray[index] = array[randomIndex]
                index--
            }
        }
        return newArray
    }

  return (
    <div className='main_container'>
        <div className='img_board'>{
            images.map(image => (<div className='img_container' key={image}><img alt="animals" key={image} src={image} onClick={handleClick}></img></div>)
        )}</div>
    </div>
  )
}

export default Main