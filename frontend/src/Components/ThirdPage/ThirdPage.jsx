import React from 'react'
import './ThirdPage.css'

const ThirdPage = () => {
  return (
    <>
    <div className="thirdPage">
    <h1 id="Heading">Connect with others</h1>

    <div className="BigCardSection">

        <div className="bigCard">
            <div className="imgSection">
                <img src="src/assets/forum.svg" alt="" />
            </div>
            <h1>Learn from <br /> others like you</h1>
            <p>
                Anonymously read, share and learn from people who understand what you're going through. <br /> <br />
                The Beyond Blue Forums is a welcoming peer support community.
            </p>
            <a href="#">Join the Forums</a>
        </div>

        <div className="bigCard">
            <div className="imgSection">
                <img src="src/assets/listen-to-podcast.svg" alt="" />
            </div>
            <h1>Stories to <br /> inspire you</h1>
            <p>
                Sharing a story about mental health is one of the bravest things anyone can do. <br /> <br />
                Hear how others from the community are moving through their own mental health experiences and be
                inspired by their journeys.
            </p>
            <a href="#">Explore personal stories</a>
        </div>

        <div className="bigCard">
            <div className="imgSection">
                <img src="src/assets/hp_personalstories_120x120px.svg" alt="" />
            </div>
            <h1>Learn from <br /> others like you</h1>
            <p>
                Anonymously read, share and learn from people who understand what you're going through. <br /> <br />
                The Beyond Blue Forums is a welcoming peer support community.
            </p>
            <a href="#">Volunteer with us</a>
        </div>

    </div>
</div>

    </>
  )
}

export default ThirdPage