import React from 'react';

const Header = ({isValid}) => {
  return (<>
      {isValid  ? <h2>Valid Vehicle</h2> : <h2>Invalid Vehicle</h2>}
  </>)
};

export default Header;
