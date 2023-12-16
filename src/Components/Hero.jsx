import React from 'react';
import './Hero.css'
const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img alt='HeroImg' src={props.HeroImg} />
      <div className='hero-text'>
       <h1>{props.title}</h1>
       <p>{props.text}</p>
       <a href={props.url} className={props.buttnclass}>{props.buttntext}</a>
      </div>
    </div>
  );
}

export default Hero;
