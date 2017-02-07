import React from 'react';
import { Link } from 'react-router'

const Footer = () => (
  <footer>
    <nav className="footer-nav">
      <section className="footer-link">
        <h3 className="footer-text"> Designed and built by Ken Lee </h3>
        <ul className="footer-links-list">
          <li className="footer-link-list-item">
            <a href="https://github.com/kzl5010/cask-rabbit">
            <img className="footer-img" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Github"/>
            </a>
          </li>
          <li className="footer-link-list-item">
            <a href="https://linkedin.com/in/ken-lee-1ab289133">
            <img className="footer-img" src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png" alt="LinkedIn"/>
            </a>
          </li>
          <li className="footer-link-list-item">
          </li>
        </ul>
      </section>
    </nav>
  </footer>
);



export default Footer;
