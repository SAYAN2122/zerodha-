import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'/>
                    </div> {/* the focus is to make the project according to the laptop screen*/}
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha Clients contributes to over 15% of all retail  order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>{/*this is the right column*/}
                            <ul>
                        <li>
                            <p> Futures and Options</p>
                        </li>
                        <li>
                            <p>Comodity dervatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                            </div>{/*this is the nesting of the data and i am also dividing the columns into halfs*/}
                        <div className='col-6 '>{/*this is the left column*/}
                            <ul>
                        <li>
                            <p> Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds and Government Securities</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' style={{width:"90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;