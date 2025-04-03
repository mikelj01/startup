import React from 'react';
import "./Home.css"
import {Link} from 'react-router-dom'


export function Home() {

  const [profilePic, setProfilePic] = React.useState('DefaultChair.png')


  async function getpic() {
    try {
      const response = await fetch('/api/profPic/get');
  
      if (!response.ok) {
        console.log('Error: ' + response.status);
        setProfilePic('DefaultChair.png'); // Fallback to default image on error
        return;
      }
  
      const data = await response.json(); 
      setProfilePic(data.pic); 
    } catch (error) {
      console.error("Error fetching profile picture:", error);
    }
  }



  React.useEffect(() => {
    getpic()
  }, []);


  const chairs = [
    "75497317-color-chair.jpg", "Yes.jpg", "rEd.png", "kneetouch.jpg", "malelivingspace.jpg", "leftie'sNightmare.jpg", "notAMurderer.jpg", "dontSit.png", "slughorn.avif", 
   "silhouet-zwart-stoel-clipart-16888496171rE.jpg", "wickerchair-graphicsfairy011c.jpg", 'DefaultChair.png', 'images (1).jpg', 'images (2).jpg', 'images (3).jpg', 'images (4).jpg', 'images (5).jpg', 'images (6).jpg', 'images (8).jpg'
  ]
  const [newMatchImg, setNewMatchImg] = React.useState(chairs[Math.floor(Math.random() * chairs.length)]);
  const [match_array, setMatchArray] = React.useState([])
  const [match, setMatch] = React.useState('')
  
  async function newMatch() {
    setNewMatchImg(chairs[Math.floor(Math.random() * chairs.length)]);
  }

  async function Yeah() {
    const response = await fetch('/api/yeahs/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: newMatchImg }),
    });
    if (!response.ok) {
      console.log('Error: ' + response.status);
    }else {
    setMatchArray((prev) => {
      const updatedArray = [...prev, newMatchImg];
      localStorage.setItem('match_array', JSON.stringify(updatedArray));
      return updatedArray;
    });
    newMatch();
    
  }}

  return (

    <main className="container-fluid bg-secondary text-center">
      <div><p className="tableHead"> <span>Your Chair</span></p>
      <img src={profilePic} alt="Choose a Chair" width="100" class="Profile_img"></img>
        <p>

        </p>
          
        <p></p>

          <div>
        <div className="chaircontainter">
         
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

    </div>

    </main>
  );
}


