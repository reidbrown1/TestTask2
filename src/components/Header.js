import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({children}) => {

    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30,

    }

    return (
        <div>
            <div>
                {/* <h3 style={style}><button onClick='window.location.reload();'><Link to='/' refresh='true'>Home</Link></button></h3>
                <h3 style={style}><button onClick='window.location.reload();'><Link to='/dispatcher'>Dispatcher</Link></button></h3>
                <h3 style={style}><button onClick='window.location.reload();'><Link to='/user'>User</Link></button></h3>  */}
                <h3 style={style}><Link to='/' refresh='true'>User</Link></h3>
                <h3 style={style}><Link to='/dispatcher'>Dispatcher</Link></h3>
                
                 
            </div>
            {children}
        </div>
    )
}

export default Header;