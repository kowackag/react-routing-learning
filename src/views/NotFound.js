import React from 'react';
import {Link} from 'react-router-dom';
// import Shortcut from '../components/Shortcut';
import ShortcutFn from '../components/ShortcutFn';

const NotFound =({redirectToHome=false}) => {
    if(redirectToHome) {
        return <redirect to='/'/>
    }
    return(
        <>
            <ShortcutFn/>
            <p>
                Podana strona nie istnije! Wróć do <Link to='/'>strony głównej</Link>
            </p>
        </>
    )
}

export default NotFound;