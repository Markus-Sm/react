import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '860px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;