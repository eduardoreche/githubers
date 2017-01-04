import React from 'react';

const Col = ({cols, children}) => (
  <div className={`col-md-${cols}`}>
    {children}
  </div>
)

export default Col;