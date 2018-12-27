import React from 'react';

const rrd = require('react-router-dom');
rrd.BrowserRouter = ({ children }) => {
    return <div>{children}</div>
}

module.exports = rrd;