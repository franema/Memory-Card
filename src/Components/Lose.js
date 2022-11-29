import React from 'react'

function Lose({ lose }) {
    return (
        <div className='lose_container'>
            <div className='lose_message'>
                <h1>Loseeeeeeerrr!!</h1>
                <button onClick={lose}>Play Again!</button>
            </div>
        </div>
    )
}

export default Lose