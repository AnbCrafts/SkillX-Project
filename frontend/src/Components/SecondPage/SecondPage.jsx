import React from 'react'
import './SecondPage.css'
import { Link } from 'react-router-dom'

const SecondPage = () => {
  return (
    <>
   
    <div className="secondPage">
    <div className="top">
        <h1>How can we support you?</h1>

        <div className="list">
            <div className="listItems">
                <Link to="/check-mental-health">
                    I want to check my mental health
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
            </div>
            <div className="listItems">
                <a href="#">
                    I want to find a mental health professional
                    <span className="material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
            <div className="listItems">
                <a href="#">
                    I want to learn about mental health
                    <span className="material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
        </div>
    </div>

    <div className="down">
    <div className="bottom">
        <div className="left">
            <h1>
                NewAccess - Mental Health <br /> Coaching
            </h1>
            <p>
                NewAccess is a confidential mental health coaching program for anyone feeling stressed or
                overwhelmed about everyday life issues. It's free of charge and you don't need a doctor's referral.
                <br /><br />
                NewAccess is currently offered in parts of New South Wales and Queensland.
            </p>
            <a href="#">Find a coach today</a>
        </div>

        <div className="right">
            <img src="src/assets/bigdiv.png" alt="" />
        </div>
    </div>
    </div>
</div>
   

    
    </>
  )
}

export default SecondPage