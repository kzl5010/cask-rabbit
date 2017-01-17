import React from 'react';
import { Link } from 'react-router'

const Footer = () => (
  <nav className="footer-nav">
    <section className="footer-link">
      <div>  Obsession by Calvin Klein </div>
      <ul className="footer-links-list">
        <li className="footer-link-list-item">
          <a href="https://github.com/kzl5010/cask-rabbit">Github
          <img className="footer-img" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Github"/>
          </a>
        </li>
        <li className="footer-link-list-item">
          <a href="https://github.com/kzl5010/cask-rabbit"> LinkedIn
          <img className="footer-img" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Github"/>
          </a>
        </li>
        <li className="footer-link-list-item">
        </li>
      </ul>
    </section>
  </nav>
);



export default Footer;
