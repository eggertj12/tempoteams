import React from 'react'

const rrd = require('react-router-dom')
rrd.BrowserRouter = ({ children }) => {
  return <div>{children}</div>
}
rrd.Link = ({ children }) => {
  return <a>{children}</a>
}

module.exports = rrd
