import React from 'react';

export default function Meme() {
    return(
        <main>
            <form className='form'>
                <input 
                    type="text"
                    placeholder="Top text"
                    className='form--input'
                 />

                <input 
                    type="text"
                    placeholder="bottom text"
                    className='form--input' 
                />

                <button>Button text</button>
            </form>
        </main>
    )
}