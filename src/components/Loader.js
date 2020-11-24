import React from 'react';

const Loader = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/loading.gif'} width="40" height="40" alt="loader"/>
    );
}

export default Loader;
