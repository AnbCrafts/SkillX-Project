import React from 'react';
import './Bottom.css';

const Bottom = () => {
  return (
    <>
      <div className="bottom">
        <div className="helpPara">
          <h1>Reach out to a counsellor today</h1>
          <div className="smallCards">
            <div className="card">
              <img src="src/assets/smallcard.svg" alt="" />
              <h2>Call a counsellor on 1300 22 4636</h2>
            </div>
            <div className="card">
              <img src="src/assets/smallcard2.svg" alt="" />
              <h2>Chat to a counsellor online</h2>
            </div>
          </div>
        </div>

        <div className="aboutPara">
          <p>
            This website has been established to provide information about anxiety, depression and suicide to
            the Australian community. The website is not intended to be a substitute for professional medical advice, diagnosis
            or treatment. You should seek the advice of an appropriately qualified healthcare professional before making decisions
            about your own circumstances. You should not disregard professional medical advice, or delay seeking it, because of
            any information contained on this website.
          </p>
        </div>

        <div className="subscribe">
          <img src="src/assets/balloon.svg" alt="" />
          <div className="txt">
            <p>Subscribe to receive info about mental health, keeping well and stories from our community.</p>
            <a href="#">Subscribe to newsletter
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bottom;
