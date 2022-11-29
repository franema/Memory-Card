import React from 'react'

function Navbar({ points }) {
    return (
        <div className='navbar_container'>
            <div className='title_container'>
                <h2>Memotest!</h2>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div className='points_container'>
                <p>Points: {points}</p>
            </div>
        </div>
    )
}

export default Navbar