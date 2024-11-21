import React from 'react'
import './FourthPage.css'

const FourthPage = () => {
  return (
    <>
    <div className="fourthPage">
    <h1 id="Heading">Get involved</h1>

    <div className="BigCardSection">

        <div className="bigCard">
            <div className="imgSection">
                <img src="src/assets/forum.svg" alt="" />
            </div>
            <h1>Fundraise for <br /> mental health</h1>
            <p>
                Help us fund Beyond Blue's 24/7 Support Service by running a marathon, celebrating a milestone,
                or fundraising with your event of choice.
            </p>
            <a href="#">Make an impact</a>
        </div>

        <div className="bigCard">
            <div className="imgSection">
                <img src="src/assets/listen-to-podcast.svg" alt="" />
            </div>
            <h1>Partner with <br /> Beyond Blue</h1>
            <p>
                Build your brand, engage your staff and drive the change you want to see for mental health by
                getting your business involved with Beyond Blue.
            </p>
            <a href="#">Make a difference</a>
        </div>

        <div className="bigCard">
            <div className="imgSection">
                <img src="src/assets/hp_personalstories_120x120px.svg" alt="" />
            </div>
            <h1>Give back to <br /> support others</h1>
            <p>
                Make a donation to help improve the lives of individuals, families and communities. Support
                others affected by anxiety, depression and suicide.
            </p>
            <a href="#">Make a donation</a>
        </div>

    </div>

    <div className="helpPara">
        <p>
            If you're in crisis or feeling unsafe, please <span>call 000</span> or <span>Lifeline on 13 11 14</span>.
        </p>
    </div>
</div>

    </>
  )
}

export default FourthPage