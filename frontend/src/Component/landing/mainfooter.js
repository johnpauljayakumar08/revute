import React,{useEffect} from 'react';
// import kgisllogo from '../../Asset/kgisl-logo.png';
import "./mainfooter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Link as Sclink } from "react-scroll";

function Mainfooter() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
const date = new Date();
const year = date.getFullYear();


  return (
    <div className='container-fluid pt-5 footerbg px-5 p-5'>  
      <div className='row'>
        <div className='col-sm-4 col-lg-2'>
          <h4 className='qklink text-white p-5'><b>Quick Links</b></h4>
          <Sclink to="Homepart" className="nav-link" ><p>Home</p></Sclink>
          <Link to="/aboutus" className="nav-link"><p>About Us</p></Link>  
          <Sclink to="ourservices" className="nav-link"><p>Course</p></Sclink>
          <Sclink to="ourservices" className="nav-link"><p>Enterprises</p></Sclink>
          <Link to="/blog" className="nav-link"><p>Blog</p></Link>
          <Link to="/contact" className="nav-link"><p>Contact Us</p></Link>
        </div>
        <div className='col-sm-4 col-lg-4'>
          <h4 className='text-white p-5'><b>Courses</b></h4>
          <Link to="/sap-services" className="nav-link"><p>Banking Sales and Relationship Management</p></Link>
          <Link to="/it-services" className="nav-link"><p>Mutual Fund Distribution (NISM 5A)</p></Link> 
          <Link to="/digital-marketing-services" className="nav-link"><p>Depository Operations (NISM 6)</p></Link>
          
          
        </div>
        <div className='col-sm-4 col-lg-4'>
  <h4 className='text-white p-5 '><b>Our Address</b></h4>
  <p>
    <a
      href='https://www.google.com/maps/place/KG+Genius+Labs/@11.0831794,76.9987774,15z/data=!4m6!3m5!1s0x2b66dd2813006db:0x8578e0607bb91ee0!8m2!3d11.0831794!4d76.9987774!16s%2Fg%2F11lp1km093?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
      className='text-decoration-none text-light'
      target='_blank'
      rel='noopener noreferrer'> 
    <span className='d-none d-md-block mt-2'>
      KGiSL Campus, 365 Thudiyalur Road, Saravanampatti,<br/> Coimbatore – 641035,<br/> Tamil Nadu, India.
    </span>
    </a>
  </p>
</div>
   {/* <div className='col-sm-4 col-lg-2'>
  <p>
    <a
      href='https://www.google.com/maps?q=Ideaspace+Business+Center,+Millennium+Executive+Tower,+Sheikh+Zayed+Road,+Dubai,+United+Arab+Emirates'
      className='text-decoration-none text-light'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span className='d-block pt-sm-0 pt-md-5 h6'><b>Dubai</b></span>
      <span className='d-none d-md-block'>Ideaspace Business Center, Millennium Executive Tower, Sheikh Zayed Road, Dubai, United Arab Emirates</span>
    </a>
  </p>
</div> */}

        <div className='col-sm-4 col-lg-2'>
         
          <div className='d-flex flex-column justify-content-center'>
          <div>
          <p className='mt-3'>Follow Us on</p>                                                                                    
          </div>
          <div className='pb-5'>
          <a href=""><FontAwesomeIcon icon={faFacebook} className="text-white mx-2"></FontAwesomeIcon></a>
          <a href=""><FontAwesomeIcon icon={faInstagram} className="text-white mx-2"></FontAwesomeIcon></a>
          <a href=""><FontAwesomeIcon icon={faLinkedin} className="text-white mx-2"></FontAwesomeIcon></a>
          <a href=''><FontAwesomeIcon icon={faSquareXTwitter} className="text-white mx-2"></FontAwesomeIcon></a>
          <a href=''><FontAwesomeIcon icon={faYoutube} className="text-white mx-2"/></a>
          </div>
          </div>
        </div>
        <p className='text-center py-1'>Copyright © {year}  REVUTEAI. All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Mainfooter;



