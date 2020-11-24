import React from 'react';

const Loader = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/loading.gif'} width="45" height="45" alt="loader"/>
    );
}

export default Loader;
