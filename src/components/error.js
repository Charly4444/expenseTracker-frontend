import React from 'react';
import { Link } from 'react-router-dom';    // Link from react-router-dom

const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      {/* we can add a Link tag for going back home when we hit error page, what do you think */}
      <Link to='/' className='btn'>Back Home</Link>
    </div>
  );
};

export default Error;
