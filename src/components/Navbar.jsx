import Logo from '../assets/logo.png'
import './Component.css'
import User from '../assets/user.png'
import { Link } from 'react-router-dom';
import Ham from '../assets/ham.png'
import { useState } from 'react';
import Cross from '../assets/cross.png'
const Navbar = (props) => {
    const [drop, setDrop] = useState(false);
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
<img src={Ham} alt=""  className='ham' onClick={() => setDrop(!drop)}/>
{
    drop && (
        <>
                <div className="res_routes">
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
<div className="res_connect">
<Link to='/profile'><img src={User} alt="" /></Link>
<button className='conBtn'>Connect Wallet</button>

</div>
        </>
    )
}
        </div>
      
       </>
      );
}
 
export default Navbar;