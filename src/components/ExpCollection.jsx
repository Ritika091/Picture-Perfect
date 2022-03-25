import BackCol from '../assets/backCol.png'
import Verified from '../assets/verified.png'
const ExpCollection = (props) => {
    return ( 
        <div className="ExpCol">
        <div className="exp_container">
        <div>
        <img src={BackCol} alt="" />
        </div>
        <div className="userPic">
        <img src={props.image} alt="" />
        </div>
        <h1>{props.name}</h1>
        <div className="tags">
     
        <div className='tag_content'>
        <p>{props.tag}</p>
        </div>
        <div>
        <img src={Verified} alt="" />
        </div>
        </div>
       <div className="prof_stats">
       <div className="followers">
      <h2>{props.follower}</h2>
      <p>Followers</p>
       </div>
       <div className="following">
       <h2>{props.following}</h2>
       <p>Following</p>
        </div>
        <div className="artworks">
        <h2>{props.art}</h2>
        <p>Artworks</p>
         </div>
       </div>
       <div style={{textAlign:'center', marginBottom:'3rem'}}>
       <button className='followBtn'>Follow</button>
       </div>
        </div>
        </div>
     );
}
 
export default ExpCollection;