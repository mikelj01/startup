import React from 'react';
import "./Home.css"
import {Link} from 'react-router-dom'


export function Home() {
  // const[profilePic, setProfile] = React.useState('https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  
  //   React.useEffect(() => {setProfile('placeholder.png')})
  const profilePic = localStorage.getItem('profilePic')|| 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const chairs = [
    "75497317-color-chair.jpg", "Yes.jpg", "rEd.png", "kneetouch.jpg", "malelivingspace.jpg", "leftie'sNightmare.jpg", "notAMurderer.jpg", "dontSit.png", "slughorn.avif", 
   "silhouet-zwart-stoel-clipart-16888496171rE.jpg", "wickerchair-graphicsfairy011c.jpg"
  ]
  const [newMatchImg, setNewMatchImg] = React.useState(chairs[Math.floor(Math.random() * chairs.length)]);
  const [match_array, setMatchArray] = React.useState([])
  const [match, setMatch] = React.useState('')
  function newMatch() {
    setNewMatchImg(chairs[Math.floor(Math.random() * chairs.length)]);
  }

  function Yeah() {
    setMatchArray((prev) => {
      const updatedArray = [...prev, newMatchImg];
      localStorage.setItem('match_array', JSON.stringify(updatedArray));
      return updatedArray;
    });
    newMatch();
  }

  return (

    <main className="container-fluid bg-secondary text-center">
      {/* The picture needs to be an object that remains the same across all the pages on the site. It will have to pull from the server data. */}
      {/* --- Pseudocode---\
      from profile image, import profile pic
       */}
      <div><p className="tableHead"> <span>Your Chair</span></p>
      <img src={profilePic} alt="Your Chair" width="100" class="Profile_img"></img>
        <p>

        </p>
        {/* A button that takes you to a page to choose your profile chair
        - Just a straight up hyperlink */}
        
          {/* <section>
          
            <Link to="/ChooseaChair">
              <button className="button">Choose a Chair</button>
            </Link>
           
            </section> */}
          
        <p></p>

          <div>
        <div className="chaircontainter">
          {/* A series of buttons that you can either swipe left or right on to match with/refuse 
          =Base level:
          - *a user taps the left or right side of the image
          -*when they tap the right, a thumbs up appears
          - Data is sent to the server saying that they matched with this chair.
          - *the image disappears and appears in their recent matches section
          - *the server pulls up a new picture of another chair from the record of profiles. 
          - *when the user taps the left side of the picture, we get a thumbs down.
          - *the image disappears and the server calls up a new image. 
          = Level up
          - animation that follows the user's finger*/}
          {/* ---Pseudocode---
          In one file, I'll have match button function
          In another, we have a seried of images (probably something in public) */}
          <p className="tableHead"><b>New Matches</b></p>
          <table className='mtchTable'>
            <thead>
              <tr> 
              </tr>
            </thead>
            <tbody>
              <tr>
              <td><button className='button'  style={{ cursor: 'pointer' }} onClick={()=>Yeah()}>Yeah</button></td>
                <td><img className="chairChoice" src={newMatchImg} width="200" alt="Chair 1" /></td>
                <td><button className='button' onClick={()=>newMatch()}>Nay</button></td>
                {/* <td><img className="chairChoice" src="https://tinyurl.com/48ywaav3" width="200" alt="Chair 2" /></td> */}
                {/* <td><img className="chairChoice" src="https://tinyurl.com/4emmm6wa" width="200" alt="Chair 3" /></td> */}
              </tr>
            </tbody>
          </table>
        </div>

       
       
        </div>


          {/* <p>History</p>
          <table>
            <th>Previous Matches</th>
            
            <tr>
              
              <td>
                <Link to='/Msging' className="imgbtn">
                  <button>
                    <img className="matchimg" src="https://tinyurl.com/4zmry9bt" width="100"></img>
                  </button>
                </Link>
              </td>
              <td>
                <Link to='/Msging'>
                <button>
                  <img className="matchimg" src="https://tinyurl.com/48muuf6s" width="100"></img>
                  </button>
                </Link>
              </td>
            </tr>
          </table></div> */}
    </div>

    </main>
  );
}



 {/* <div>
          <p className='pageText'>Find Friends</p>
          <input type="text" name="search" placeholder="Search" className="search"></input>
        </div>
      
        <div>
          <p></p>
          <p className='pageText'>Set Someone Else Up!</p>
          </div>
          <div className="container">
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
            <img className="chairchoice" src="https://tinyurl.com/3ztb2uzb" alt="a chair" width="100"></img>
          </div> */}