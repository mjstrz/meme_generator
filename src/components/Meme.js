import React from 'react';
import memesData from './memesData';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
            <img src = {meme.randomImage} className="meme--image" />
        </main>
    )
}