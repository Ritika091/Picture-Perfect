import Img1 from '../assets/insta.png';
import Img2 from '../assets/ball.png';
import Img3 from '../assets/twitter.png';
// import Img4 from '../assets/social.png';
import Logo from '../assets/logo.png'

const Footer = () => {
    return ( 
        <footer>
            <div className="footer">
            <div className="heading">
            <div className='picture_perfect'>
            <div>
                <h1 id="footer_cont"> Perfect  <br />Picture </h1>
                </div>
                <div className='footer_icon'>
              <img src={Logo} alt="" />
              </div>
              </div>
                <div className="foot_img">
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                  
                </div>
            </div>
           
            <div className="heading" style={{padding: '0.4rem'}}>
                <h1 id = 'subs' style={{paddingRight:'10rem', fontFamily: "'Orbitron', sans-serif", fontWeight:'900'}}>Subscribe to get <br /> latest news</h1>
                <div className="subemail">
                <input type="text" placeholder="Your email address" />
                <br />
                <button>Subscribe</button>
            </div>
            </div>

            </div>

            <div className="footer_last">
                <p>© 2022 Perfect Picture . All rights reserved</p>
                <p style={{marginLeft:"auto"}}>Terms & Conditions | Privacy Policy | Sitemap</p>
            </div>

        </footer>
     );
}
 
export default Footer;
