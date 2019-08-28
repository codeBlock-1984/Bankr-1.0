import React from 'react';

const Loader = ({ active }) => (
  <div id="animated-loader" className={`loader-modal ${active}`} style={{ display: `${active}` }}>
    <div className="loader">
      <img src="https://res.cloudinary.com/free-spirit/image/upload/v1566750388/AH-assets/logo.png" alt="logo" />
    </div>
  </div>
);

export default Loader;
