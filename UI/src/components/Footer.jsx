import React from 'react';

const Footer = (props) => {
  const { uniqueFooterClass } = props;

  return (
    <footer className={`page-footer ${uniqueFooterClass}`}>
      <p className="page-footer__text">Copyright © Bankr 2019</p>
    </footer>
  );
};

export default Footer;
