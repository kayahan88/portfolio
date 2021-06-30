import React, {useState} from 'react';
import './App.css';
import background from './assets/extended-cropped.jpg.jpg';
import kaya from './assets/kaya.jpg';
import sky from './assets/sky.jpg';
import hamburger from './assets/hamburger.png';
import yaybaby from './assets/YayBaby.png';
import beenthere from './assets/been-there.png';
import kskin from './assets/k-skin.png';
import facebook from './assets/facebook-color.png';
import github from './assets/github-color.png';
import instagram from './assets/instagram-color.png';
import linkedin from './assets/linkedin-color.png';
import twitter from './assets/twitter-color.png';

const App = () => {

  const [dropDown, setDropDown] = useState('hide')
  const [contact, setContact] = useState('hide');

  const toggleDropDown = () => {
    if(dropDown === 'hide'){
      setDropDown('show')
    } else {
      setDropDown('hide')
    }
  };

  const toggleContact = () => {
    if(contact === 'hide'){
      setContact('show-contact')
    } else {
      setContact('hide')
    }
  };

  return (
    <div className="App">
      <img src={background} className='background-image'/>
      
      <img src={sky} className='sky' />
      <section className='header'>
        <button className='portfolio' id='portfolio' onClick={() => toggleDropDown()}>PORTFOLIO</button>
        <img src={hamburger} onClick={() => toggleDropDown()} className='hamburger' />
      </section>

      <section className={dropDown}>
        <section className='projects'>
          <a href='#page-2' onClick={() => toggleDropDown()}>YAYBABY</a>
          <a href='#page-3' onClick={() => toggleDropDown()}>BEENTHERE</a>
          <a href='#page-4' onClick={() => toggleDropDown()}>k-skin</a>
        </section>
      </section>

      <section className='title' id='title'>
        <div className='kaya'>KAYA HAN</div>
        <div className='subtitle'>Full-Stack Developer</div>
        <img src={kaya} className='background-image-2' />
        <section className='cv'>
          <a href='https://docs.google.com/document/d/1mVdwtE1Sze4QiE5xk4KDo_cZuGWcMQ3Im1yeERk5alk/edit?usp=sharing' target='_blank'>Download CV</a>
          <a href='#page-5'>Contact Me</a>
        </section>
      </section>

      <section className='page-2' id='page-2'>
        <section className='project-text-container'>
          <section className='project-top'>
            <div className='project-title'>YAYBABY</div>
            <div className='project-description'>A social media-style React app with authentication and image sharing.</div>
          </section>

          <section className='project-bottom'>
            <div className='project-details'>PERSONAL PROJECT @ DEVMOUNTAIN</div>
            <a className='link-to-site' href='http://143.198.101.177:4000/' target='_blank'>link to site</a>
          </section>
        </section>
        <img className='project-image' src={yaybaby}/>
        <a className='back-to-top' href='#top'>BACK TO TOP</a>
      </section>

      <section className='page-3' id='page-3'>
        <section className='project-text-container'>
          <section className='project-top'>
            <div className='project-title'>BEENTHERE</div>
            <div className='project-description'>A trip-planning React app using the Google Maps API.</div>
          </section>

          <section className='project-bottom'>
            <div className='project-details'>GROUP PROJECT @ DEVMOUNTAIN</div>
            <a className='link-to-site' href='https://beentheretravel.net' target='_blank'>link to site</a>
          </section>
        </section>
        <img className='project-image' src={beenthere}/>
        <a className='back-to-top' href='#top'>BACK TO TOP</a>
      </section>

      <section className='page-4' id='page-4'>
        <section className='project-text-container'>
          <section className='project-top'>
            <div className='project-title'>k-skin</div>
            <div className='project-description'>An e-commerce React app.</div>
          </section>
          <div className='project-details'>PERSONAL PROJECT</div>
        </section>
        <img className='project-image' src={kskin}/>
        <a className='back-to-top' href='#top'>BACK TO TOP</a>
      </section>

      <section className='page-5' id='page-5'>
        <section className='about-me-container'>
          <div className='about-me'>ABOUT KAYA</div>
          <div className='bio'>Recent DevMountain Web Development Program grad. Former full-time nanny with tons of creativity, patience, and problem-solving skills that come with helping raise a curious toddler. Looking for a remote software engineering position where I can hone my skills in React, JavaScript, CSS, etc. and collaborate with all kinds of people.</div>
        </section>
        <section className='about-me-container'>
          <div className='about-me'>FIND ME HERE</div>
          <section className='social-container'>
            <a href='https://www.linkedin.com/in/kaya-han-b83839211/' target='_blank'><img className='social' src={linkedin}/> </a>
            <a href='https://github.com/kayahan88' target='_blank'><img className='social' src={github}/></a>
            <a href='https://www.facebook.com/kayatabithahan' target='_blank'><img className='social' src={facebook}/></a>
            <a href='https://www.instagram.com/kayatabitha/' target='_blank'><img className='social' src={instagram}/></a>
            <a href='https://twitter.com/kayatabitha' target='_blank'><img className='social' src={twitter}/></a>
          </section>
          <section className='contact-info'>
            <button className='contact-button' onClick={() => toggleContact()}>CONTACT ME</button>
            <section className={contact}>
              <div>EMAIL: kayatabitha@gmail.com</div>
              <div>PHONE: 801-471-1783</div>
            </section>
          </section>
        </section>
        <a className='back-to-top' href='#top'>BACK TO TOP</a>
      </section>

    </div>
  );
}

export default App;
