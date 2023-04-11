import React from 'react';
import './Legend.css';

const Legend = () => {
    return (
        <div>
            <div className="legend">
                <div className='lgd' style={{ "--color": '#a50f15' }}>3023 - 6247</div>
                <div className='lgd' style={{ "--color": '#de2d26' }}>676 - 3022</div>
                <div className='lgd' style={{ "--color": '#fb6a4a' }}>428 - 675</div>
                <div className='lgd' style={{ "--color": '#fc9272' }}>236 - 427</div>
                <div className='lgd' style={{ "--color": '#fcbba1'}}>23 - 235</div>
                <div className='lgd' style={{ "--color": '#fee5d9' }}>6 - 22</div>
            </div>
        </div>

    );
}
export default Legend;