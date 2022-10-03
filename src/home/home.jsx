import React, {Component, useState} from 'react';
import cat3 from './../assets/cat3.png';

function Home() {
    const [squish, setSquish] = React.useState(0);

   
        return (
            <div className="App">
                <header className="App-header">
                <div className='cat-container'>
                    <img src={cat3}
                    className="cat" alt="cat"
                    onClick={() => setSquish(1)}
                    onAnimationEnd={()=> setSquish(0)}
                    squish={squish}
                    />
                </div>
                <h1> Click me! </h1>
                
            
            </header>
          </div>
        );
}

export default Home;