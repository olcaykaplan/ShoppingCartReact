import React from 'react';
import Auxed from '../Auxed';
import Cocpit from '../../Components/Cockpit/Cockpit';
import Footer from '../../Components/Footer/Footer';

const layout = (props) => {

    return(
        <Auxed>
        <main>
            {props.children}
        </main>
        <Footer/>
        </Auxed>
    )
}

export default layout