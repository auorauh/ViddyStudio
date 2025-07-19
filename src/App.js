import './App.css';
import React, { useState } from 'react';
import whiteLogo from './Assets/Artboard 11_1.png';
import { GiVideoCamera } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { LuRocket } from "react-icons/lu";
import { StickyScroll } from './Componets/StickyScroll';
import { howItWorksData } from './Assets/howItWorks';
import { RxCheckCircled } from "react-icons/rx";
import testimonial1 from './Assets/testimonial1.png';
import testimonial2 from './Assets/testimonial2.png';
import testimonial3 from './Assets/testimonial3.png';
import DarkVeil from './Componets/DarkVeil';

function App() {
    const [pricingBoolean, setPricingBoolean] = useState(false);

  const pricingToggle = () => setPricingBoolean(prev => !prev);
  return (
    <div className="App">
      {/* <div class="glow-background">
        <div class="glow-layer"></div>
      </div> */}
      <div className="Veil">
        <DarkVeil/>
      </div>
      <div className="HeaderBlurWrapper">
        <div className="Header">
          <img className="Logo" src={whiteLogo} />
          <div className="HeaderLinks">
            <div>ABOUT</div>
            <div>HOW IT WORKS</div>
            <div>PRICING</div>
            <b className="AppBtn">Go To App</b>
          </div>
        </div>
      </div>
      <div className="LandingContainer">
        <div className="Landing">
          <h1>MAKE VIDEOS THAT MATTER</h1>
          <h2>Content creation made simple and designed for small teams</h2>
          <div className="tryBtn">Try For Free</div>
        </div>
        <div className="second">
          <iframe className='videoContainer' src="https://www.youtube.com/embed/bJFOu1HCmho?si=WsXXAS_sE-UvojpF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
      <div className="About">
            <b>You don’t need a new camera.</b>
            <p>You need a better process.</p>
            <div className="AboutColumns">
              <p className="AboutCol"><b>Videograher</b><GiVideoCamera className="AboutIcon"/>As a freelance videographer, everything changed when I stopped reacting and started directing. I went from just a camera guy to running a production company, managing clients, and leading a confident team.</p>
              <p className="AboutCol"><b>Talent</b><TbTargetArrow className="AboutIcon"/>Everything shifted when I focused more on planning and built a clear, repeatable process. I moved away from messy shoot days and rigid storyboards to a writing-first approach that prioritized the message and made filming scripted videos easier.</p>
              <p className="AboutCol"><b>Editor</b><LuRocket className="AboutIcon"/>With that system in place, I was able to lead clients more effectively, increase my value, and deliver high-quality videos consistently. That led to the creation of Viddy Studio, a place where that process helps others do the same.</p>
            </div>
            
      </div>
      <div className="StickyScroll">
        <StickyScroll content={howItWorksData}/>
      </div>
      <div className="Testimonials">
        <div className="TestHeader">What Our Creators Say</div>
        <div className="TestColumns">
          <div className="TestColumn">
            <img src={testimonial1} className="TestImg"/>
            <div className="TestName">TRENTON TEASDALE</div>
            <div className="TestTitle">Content Creator</div>
            <div>"Viddy Studio has been such an amazing tool. From planning to shooting to editing. It allows me to focus on other creative aspects of my projects."</div>
          </div>
          <div className="TestColumn">
            <img src={testimonial2} className="TestImg"/>
            <div className="TestName">JAXON CUMMINGS</div>
            <div className="TestTitle">CEO, Your Life Legacy</div>
            <div>"I just made ads using Viddy Studio and it made everything so seamless and easy. I'm horrible on camera and they just made it seamless and so much better."</div>
          </div>
          <div className="TestColumn">
            <img src={testimonial3} className="TestImg"/>
            <div className="TestName">JAKE LOVELAND</div>
            <div className="TestTitle">CEO, Your Life Legacy</div>
            <div >Papa Bird Studios</div>
            <div>"It made things easier for all parties, and we were able to get through our scripted corporate videos in a fraction of the time! Essential, especially if you’re recording people who aren’t used to being in front of the camera.”</div>
          </div>
        </div>
      </div>
      <div className="Pitch">
        <div>All of the fanciest edits and tactics won’t mean anything if you don’t capture a great story and delivery in the first place. Viddy Studio brings the message and story to the forefront of our process. </div>
        <h3>If you’re ready to stop dreaming and start building, try Viddy Studio.</h3>
      </div>
      <div className="Pricing"> 
        <h3>Pricing</h3>
        <div className="PricingToggle">
        Monthly
      <div
        className={`toggle-switch ${pricingBoolean ? 'on' : ''}`}
        onClick={pricingToggle}
      >
        <div className="toggle-thumb" />
      </div>
      Yearly
      </div>
        <div className="PricingCards">
          <div className="PriceCard">
            <b className="PriceTitle">
              VIDDY CREATOR
            </b>
            <b className="Price">
              Free
            </b>
            <div className="Features">
              <div><RxCheckCircled /> Unlimited Scripts</div>
              <div><RxCheckCircled /> 3 Videos Per Month</div>
              <div><RxCheckCircled /> Discord Community</div>
            </div>
            <div className="PricingBtn">Get Started For Free</div>
          </div>
                    <div className="PriceCard PriceCard2">
            <b className="PriceTitle">
              VIDDY PRO
            </b>
            <b className="Price">
              {pricingBoolean ? <>$600 / Year</> : <>$99 / Month</>}
            </b>
            <div className="Features">
              <div><RxCheckCircled /> Unlimited Scripts</div>
              <div><RxCheckCircled /> Unlimited Videos</div>
              <div><RxCheckCircled /> 24/7 Customer Support</div>
            </div>
            <div className="PricingBtn">Get Started For Free</div>
          </div>
                    <div className="PriceCard">
            <b className="PriceTitle">
              VIDDY TEAMS
            </b>
            <b className="Price">
              Custom
            </b>
            <div className="Features">
              <div><RxCheckCircled /> Get in touch for your own use case</div>
              <div><RxCheckCircled /> Custom Solutions</div>
            </div>
            <div className="PricingBtn">Contact Sales</div>
          </div>
        </div>
      </div>
      <div className="Footer">
        <div>Viddy Studio</div>
        <div className="FooterRight">
          <div>TERMS OF SERVICE</div>
          <div>PRIVACY POLICY</div>
        </div>
      </div>
    </div>
  );
}

export default App;
