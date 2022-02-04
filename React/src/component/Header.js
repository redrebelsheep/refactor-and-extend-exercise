import React from "react";

const Header = ({ isValid }) => {
  return (
    <>
  <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Task Car</a>
</nav>

      {isValid ? <h2>Valid Vehicle</h2> : <h2>Invalid Vehicle</h2>}
    </>
  );
};

export default Header;
