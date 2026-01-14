import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'> {/*i have created some padding with the help of the p tag*/}
            <div className='row text-center'>{/* applies to all the components in the home page*/}
                 <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/> {/*it occupies the entire row */}
                <h1 className='mt-5'>Invest in Eerything</h1>
                <p>Online platform to invest in stocks, dervatives, mutual funds and more</p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto",}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;