import React, { useState, useEffect }from 'react';

export default function Meme() {

    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/30b1gx.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    console.log(allMemeImages);

    function getMemeImage(event) {
        
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        console.log("hello")
        

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {

        const {name, value} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return(
        <main>
            <div className='form'>
                <input 
                    type='text'
                    placeholder='Top text'
                    className='form--input'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                 />

                <input 
                    type="text"
                    placeholder='bottom text'
                    className='form--input'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} 
                />

                <button
                className='form--button'
                onClick={getMemeImage}
                > 
                Get a new meme image
                </button>
            </div>
            <br />
            <div className="meme">
                <img src = {meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}