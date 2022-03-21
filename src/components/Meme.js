import React from 'react';
import memesInfo from './components/memesInfo';

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <main>
            <form className='form'>
                <input 
                    type='text'
                    placeholder='Top text'
                    className='form--input'
                 />

                <input 
                    type="text"
                    placeholder='bottom text'
                    className='form--input' 
                />

                <button
                className='form--button'
                onClick={getMemeImage}
                > 
                Get a new meme image
                </button>
            </form>
            <img src = {memeImage} className="meme--image" />
        </main>
    )
}