import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text,link,btnText}) =>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const  renderContent= {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Sumit</span>
            <br />
            A Tech Enthusiast from Patna!
        </h1>
    ),
    2:(
        <InfoBox 
            text="Do you want to explore more about me?"
            link="/about"
            btnText="Learn more"
        />
    ),
    3:(

        <InfoBox 
            text="Led multiple projects with amazing impacts! Curious to know more?"
            link="/projects"
            btnText="Learn more"
        />
    ),
    4:(
        <InfoBox 
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link="/"
        btnText="Let's connect"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
