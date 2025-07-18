import './App.css';
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

function App() {
  return (
    <div className="App">
      <div class="glow-background">
        <div class="glow-layer"></div>
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
          <h2>Where simplicity meets structure and your message gets remembered.</h2>
          <div className="tryBtn">Try For Free</div>
        </div>
        <div className="second">
          <iframe className='videoContainer' src="https://www.youtube.com/embed/M_h9W8EYyPY?si=zByOR3j_dWwZ_bpz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="About">
            <b>You don’t need a new camera.</b>
            <p>You need a better process.</p>
            <div className="AboutColumns">
              <p className="AboutCol"><GiVideoCamera className="AboutIcon"/>As a freelance videographer, everything changed when I stopped reacting and started directing. I went from just a camera guy to running a production company, managing clients, and leading a confident team.</p>
              <p className="AboutCol"><TbTargetArrow className="AboutIcon"/>Everything shifted when I focused more on planning and built a clear, repeatable process. I moved away from messy shoot days and rigid storyboards to a writing-first approach that prioritized the message and made filming scripted videos easier.</p>
              <p className="AboutCol"><LuRocket className="AboutIcon"/>With that system in place, I was able to lead clients more effectively, increase my value, and deliver high-quality videos consistently. That led to the creation of Viddy Studio, a place where that process helps others do the same.</p>
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
        <div>Viddy Studio is more than a teleprompter. It’s your creative partner that helps you direct, and edit with intention. Whether you’re filming for yourself or for clients, Viddy gives you the structure to stay focused, perform confidently, and create videos that truly connect.</div>
        <h3>If you’re ready to stop dreaming and start building, try Viddy Studio.</h3>
      </div>
      <div className="Pricing"> 
        <h3>Pricing</h3>
        <div className="PricingCards">
          <div className="PriceCard">
            <div className="PriceTitle">
              VIDDY CREATOR
            </div>
            <div className="Price">
              Free
            </div>
            <div className="Features">
              <div><RxCheckCircled /> Unlimited Scripts</div>
              <div><RxCheckCircled /> 3 Videos Per Month</div>
            </div>
            <div className="PricingBtn">Get Started For Free</div>
          </div>
                    <div className="PriceCard PriceCard2">
            <div className="PriceTitle">
              VIDDY PRO
            </div>
            <div className="Price">
              $99 / Month
            </div>
            <div className="Features">
              <div><RxCheckCircled /> Unlimited Scripts</div>
              <div><RxCheckCircled /> Unlimited Videos</div>
              <div><RxCheckCircled /> 24/7 Customer Support</div>
            </div>
            <div className="PricingBtn">Get Started For Free</div>
          </div>
                    <div className="PriceCard">
            <div className="PriceTitle">
              VIDDY TEAMS
            </div>
            <div className="Price">
              Custom
            </div>
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
