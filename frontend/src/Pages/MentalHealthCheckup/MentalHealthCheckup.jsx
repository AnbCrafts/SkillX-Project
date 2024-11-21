import React from 'react'
import './MentalHealthCheckup.css'

const MentalHealthCheckup = () => {
  return (
    <>
        <div className="checkMentalHealth">
    <div className="smallul">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li>
                <span className="material-symbols-outlined">
                    chevron_right
                </span>
                <a href="">Learn about mental health</a>
            </li>
            <li>
                <span className="material-symbols-outlined">
                    chevron_right
                </span>
                <a href="">Check your mental health</a>
            </li>
        </ul>
    </div>
    <div className="check">
        <div className="text">
            <h1>Check your mental <br /> health</h1>
            <p>Everyone’s mental health journey is different. We all experience ups and downs, so it’s important
                to do regular check
                ins. <br /> <br />

                We have some simple tools to help you assess your mental health. You can choose the one that’s
                right for you and get the
                resources and support you may need.</p>
        </div>
        <div className="img">
            <img src="src/assets/check-your-mental-health-header.svg" alt="" />
        </div>
    </div>

    <div className="bigCards">
        <div className="left">
            <div className="img">
                <img src="src/assets/k10-landing-175b4647853b6474bbbec13aee94f2bde.svg" alt="" />
            </div>
            <h1>Anxiety and Depression Test (K10)</h1>
            <ul>
                <li>Answer 10 questions about how you've been feeling over the past 4 weeks.</li>
                <li>Your answers help us measure your level of distress and give you a result.</li>
                <li>You can then access resources and support options to help you.</li>
                <li>Australian doctors and mental health professionals use this test, known as the K10. They
                    sometimes ask you to take the
                    K10 and talk about it with you.</li>
            </ul>
            <a href="">Start the K10 test</a>
        </div>
        <div className="right">
            <div className="img">
                <img src="src/assets/mental.svg" alt="" />
            </div>
            <h1>Mental Health Check-in</h1>
            <ul>
                <li>Answer 5 questions about how you’ve been feeling lately.</li>
                <li>Your answers help us suggest which stage you’re at on the mental health continuum.</li>
                <li>We'll suggest resources and support options to help you now.</li>
                <li>We're testing this new tool and you can give us feedback to help us make it better.</li>
            </ul>
            <a href="">Start the Mental Health Check-in</a>
        </div>
    </div>
</div>

    </>
  )
}

export default MentalHealthCheckup