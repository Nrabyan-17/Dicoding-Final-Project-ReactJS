import React from 'react';
import { FaMoon, FaSun} from 'react-icons/fa'

const Toogle = ( { darkMode, setDarkMode } ) => {
   
    return (
        <>
            <span onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)   } className="theme-switch">
                { darkMode ? (
                   < FaMoon />
                    ) : (
                    <FaSun />
                    )
                }            
            </span>
        </>
    );
}

export default Toogle;      