import React from "react";
import PropTypes from 'prop-types';
import './DisplayResult.css'

export default function DisplayResult({ outcome , displayResult , setDisplayResult })
{
    
    
    return (
         
        <div className={'result-overlay ' + (displayResult ? 'show': 'hide') }>
            <div className={'result ' + (displayResult ? 'show' : 'hide')}>
                <h1>YOU {outcome}!</h1>
                <button onClick={() => setDisplayResult(false)}>Retry?</button>
            </div>
        </div>
       
    );
}


DisplayResult.propTypes = {
    outcome: PropTypes.string,
    displayResult: PropTypes.bool,
    setDisplayResult: PropTypes.func,
  };

 