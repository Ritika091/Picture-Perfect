import Logo from '../assets/logo.png'
import './Component.css'
import User from '../assets/user.png'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <>
        <div className="Navbar">
        <div className="logo">
        <div>
        <img src={Logo} alt="" />
        </div>
        <div>
        <p>Picture Perfect</p>
        </div>
        </div>
        <div className="routes">
            {props.route1 === 'Market'?
      <Link to='/explore'> <li>{props.route1}</li></Link> 
        :
     <Link to='/explore'>  <li>{props.route1}</li></Link> 
            }
            {props.route2 === 'Rankings'?
       <Link to='/rankings'> <li>{props.route2}</li></Link>
        :
        <li>{props.route2}</li>
    }
    {props.route3 === 'Rewards'?
     <Link to='/rewards'>   <li>{props.route3}</li></Link>
        :
        <li>{props.route3}</li>
    }
        </div>
<div className="connect">
<Link to='/profile'><img src={User} alt="" /></Link>
<button className='conBtn'>Connect Wallet</button>
</div>

        </div>
      
       </>
      );
}
 
export default Navbar;