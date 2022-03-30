import ProfilePic from '../assets/profilepic.png'
import Copy from '../assets/copy.png'
import TwitterIcon from '../assets/TwitterIcon.png'
import Telegram from '../assets/Telegram.png'
import Email from '../assets/Email.png'
import Bell from '../assets/Bell.png'
import Filter from '../assets/filter.png'
import DownArrow from '../assets/downArrow.png'
import Tiles from '../assets/tileview.png'
import Tile from '../assets/tile.png'

import ApolloChar from '../assets/ApolloChar.png'
import Verified from '../assets/verified.png'
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';
import { explore } from './data'
import Ape from '../assets/ape.png'
const blue = {
  500: '#A260F3',
};

const grey = {
  400: '#5B5B5B',
  500: '#5B5B5B',
  600: '#5B5B5B',
};

const BasicSwitchRoot = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
  border-radius: 10px;
  cursor: pointer;


  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: ${blue[500]};
  },
  
  `,
);

const BasicSwitchInput = styled('input')`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const BasicSwitchThumb = styled('span')`
  display: block;
  width: 14px;
  height: 14px;
  top: 3px;
  left: 3px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  transition: all 200ms ease;

  &.Switch-focusVisible {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    left: 22px;
    top: 3px;
    background-color: #fff;
  }
`;
function BasicSwitch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    'Switch-checked': checked,
    'Switch-disabled': disabled,
    'Switch-focusVisible': focusVisible,
  };

  return (
    <BasicSwitchRoot className={clsx(stateClasses)}>
      <BasicSwitchThumb className={clsx(stateClasses)} />
      <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
    </BasicSwitchRoot>
  );
}

const ProfileForm = () => {


    return (
      <>
     
        <div className="ProfileForm">
        <div className="Pro_Head">
          <div>
 <h1>Edit Your Profile</h1>
 </div>
 <div>
 <img src={DownArrow} alt="" />
 </div>
      </div>
        <div className="userLogo">
        <img src={ProfilePic} alt="" />
        <p>Change Picture</p>
        </div>
        <div className="userForm">
        <div className="form_head">
        <h1>0xA470...aF9C</h1>
        <img src={Copy} alt="" />
        <img src={TwitterIcon} alt=""  id='twi'/>
        </div>
        <form>
        <label>USERNAME</label>
        <div className='user_details'>
        <input type="text" placeholder='A cool name'/>
        </div>
        <label>BIO</label>
        <div className='user_details'>
        <input type="text"  placeholder='Introduce yourself'/>
        </div>
        <label>TWITTER</label>
        <div className='user_details'>
        <input type="text" placeholder='https://twitter.com/...'/>
        </div>
        <label>YOUTUBE</label>
        <div className='user_details'>
        <input type="text" placeholder='https://youtube.com/...'/>
        </div>
        <label>INSTAGRAM</label>
        <div className='user_details'>
        <input type="text" placeholder='https://instagram.com/...'/>
        </div>
        <label>HOMEPAGE</label>
        <div className='user_details'>
        <input type="text" placeholder='https://...'/>
        </div>
        <label>ANTI-PHISING CODE</label>
        <div className='user_details'>
        <input type="text" placeholder='Type your anti-phishing code here'/>
        </div>

        </form>
        </div>
        <div className="Notifications">
        <div className="notifications_head">
        <h2>Notification Methods</h2>
        <p>Select your desired ways to receive real-time notification for your sales.</p>
        </div>
        <div className="telegram" id='tel'>
        <div>
        <img src={Telegram} alt="" />
        </div>
        <div className='tele_status'>
        <h2>Telegram</h2>
        <p>Not connected</p>
        </div>
        <div className='tele_connect'>
        <h2>Connect</h2>
        </div>
        </div>
        <div className="telegram">
        <div>
        <img src={Email} alt="" />
        </div>
        <div className='tele_status'>
        <h2>Email</h2>
        <p>Connected</p>
        </div>
        <div className='tele_connect'>
        <h2 id='tele_mail'>sample@email.com</h2>
        </div>
        </div>
        <div className="notifications_head" id='events'>
        <h2>Event Types</h2>
        <p>Select your desired ways to receive real-time notification for your sales.</p>
        </div>
        <div className="bell">
        <div className='bell_icon'>
        <img src={Bell} alt="" />
        </div>
        <div>
        <h2>Item Sold</h2>
        <p>When someone purchase one of your items</p>
        </div>
        <div className='switched'>
        <BasicSwitch />
        </div>
        </div>
        <div className="bell">
        <div className='bell_icon'>
        <img src={Bell} alt="" />
        </div>
        <div>
        <h2>Bid Activity</h2>
        <p>When someone bids on one of your items</p>
        </div>
        <div className='switched'>
        <BasicSwitch />
        </div>
        </div>
        <div className="bell">
        <div className='bell_icon'>
        <img src={Bell} alt="" />
        </div>
        <div>
        <h2>Outbid</h2>
        <p>When an offer you placed is exceeded</p>
        </div>
        <div className='switched'>
        <BasicSwitch />
        </div>
        </div>
        <div className="bell">
        <div className='bell_icon'>
        <img src={Bell} alt="" />
        </div>
        <div>
        <h2>Auction Expiration</h2>
        <p>When an auction you created ends without bids</p>
        </div>
        <div className='switched'>
        <BasicSwitch />
        </div>
        </div>
        <div className="bell">
        <div className='bell_icon'>
        <img src={Bell} alt="" />
        </div>
        <div>
        <h2>Offer Received</h2>
        <p>When someone sends an offer to you</p>
        </div>
        <div className='switched'>
        <BasicSwitch />
        </div>
        </div>
        <div className="bell">
        <div className='bell_icon'>
        <img src={Bell} alt="" />
        </div>
        <div>
        <h2>Offer Accepted</h2>
        <p>When some accepts your offer</p>
        </div>
        <div className='switched'>
        <BasicSwitch />
        </div>
        </div>
        <div className="formBtn">
        <button>Contact Support</button>
        <button>Save</button>
        </div>
        </div>
        </div>
        <div className="filter_Head">
        <div className="filter_left">
        <h2> Items</h2>
        <h2>Favourites</h2>
        <h2>Offers</h2>
        <h2>Activities</h2>
        <p>138,075 items listed</p>
        <img src={Filter} alt="" />
        </div>
       <div className="filter_right">
       <h2>Recently Listed</h2>
       <img src={DownArrow} alt="" className='filter_down'/>
       <img src={Tiles} alt="" className='filter_tiles'/>
       <img src={Tile} alt="" className='filter_tiles'/>
       </div>
        </div>
        <div className="ExploreCards">
        {
explore.map(data => (
        <div className="NFT_cards">
        <div className="Explore_Images">
        <img src={data.image} alt="" />
        </div>
      <div className="Explore_content">
      <div className="Explore_head">
      <p>Apollo Eth #1289 NFT</p>
      <div className="userTag">
      <img src={ApolloChar} alt="" />
        <span className='exp_tag'>@jhonartist</span>
        <img src={Verified} alt="" className='verify'/>
      <p></p>
      </div>
      </div>
      <div className="explore_eth">
      <div>
      <img src={Ape} alt="" />
      <span className='ethval'>APE 9.31</span>
      </div>
      <div>
      <button>Place Bid</button>
      </div>
      </div>
      
     
      </div>
    
      
        </div>
        ))
}
        </div>
        <div className="ExploreCards">
        {
explore.map(data => (
        <div className="NFT_cards">
        <div className="Explore_Images">
        <img src={data.image} alt="" />
        </div>
      <div className="Explore_content">
      <div className="Explore_head">
      <p>Apollo Eth #1289 NFT</p>
      <div className="userTag">
      <img src={ApolloChar} alt="" />
        <span className='exp_tag'>@jhonartist</span>
        <img src={Verified} alt="" className='verify'/>
      <p></p>
      </div>
      </div>
      <div className="explore_eth">
      <div>
      <img src={Ape} alt="" />
      <span className='ethval'>APE 9.31</span>
      </div>
      <div>
      <button>Place Bid</button>
      </div>
      </div>
      
     
      </div>
    
      
        </div>
        ))
}
        </div>
        </>
      );
}
 
export default ProfileForm;