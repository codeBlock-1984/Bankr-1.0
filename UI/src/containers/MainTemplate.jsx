import React from 'react';

const MainTemplate = (props) => {
  return (
    <main className="page-main l-flex l-flex-col">
      {props.children}
    </main>
  );
};

export default MainTemplate;
