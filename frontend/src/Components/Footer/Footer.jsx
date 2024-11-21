import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footerSection">
        <div className="logo_and_about">
          <div className="img">
            <img src="src/assets/logo.png" alt="Logo" />
          </div>
          <div className="uls">
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
            <ul>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Get involved</a></li>
              <li><a href="#">Donate</a></li>
            </ul>
            <ul>
              <li><a href="#">Mental health at work
                  <span className="material-symbols-outlined">
                    open_in_new
                  </span>
                </a>
              </li>
              <li><a href="#">Mental health in education
                  <span className="material-symbols-outlined">
                    open_in_new
                  </span>
                </a>
              </li>
              <li><a href="#">Mental health in the home
                  <span className="material-symbols-outlined">
                    open_in_new
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="para_and_flags">
          <div className="empty"></div>
          <div className="content">
            <p>
              Beyond Blue acknowledges First Nations peoples and communities as the Traditional Owners of the land. We acknowledge and
              pay our respects to Elders past and present, and emerging leaders. <br /> <br />
              Beyond Blue is committed to safe inclusive spaces, policies and services for people of LGBTIQ+ communities and their
              families.
            </p>
            <div className="flags">
              <div className="flag">
                <img src="src/assets/L3-flag.webp" alt="Flag 1" />
              </div>
              <div className="flag">
                <img src="src/assets/L2-flag.svg" alt="Flag 2" />
              </div>
              <div className="flag">
                <img src="src/assets/L-flag.png" alt="Flag 3" />
              </div>
            </div>
          </div>
        </div>
        <div className="premier">
          <div className="content">
            <h2>Premiere partner</h2>
            <h3><img src="src/assets/brand_australia_post_icon_158989.png" alt="Australia Post" />
              Australia Post
            </h3>
          </div>
        </div>
        <div className="mainfooter">
          <p>
            Copyright © 2022 Beyond Blue Ltd
            <span>All rights reserved</span>
          </p>
          <ul className="policy">
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Site map</a></li>
          </ul>
          <ul className="socialMeadia">
            <li><a href="#" className="fa fa-facebook"></a></li>
            <li><a href="#" className="fa fa-youtube"></a></li>
            <li><a href="#" className="fa fa-instagram"></a></li>
            <li><a href="#" className="fa fa-twitter"></a></li>
            <li><a href="#" className="fa fa-linkedin"></a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
