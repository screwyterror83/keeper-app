import React from "react";


const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p>
        Copyright <span role="img" aria-label="copyright">©️</span> {year}
      </p>
    </footer>
  );
}

export default Footer;
