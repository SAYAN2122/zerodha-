import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokerage from './Brokerage';
function PricingPage() {
    return (  
        <>{/* .. this means that the file is imported from one folder out of the current one, and if there would be the folder in the current folder then only a single . would have come */}
         <Hero />
         <OpenAccount />
        <Brokerage />
       
        </>
    );
}

export default PricingPage;