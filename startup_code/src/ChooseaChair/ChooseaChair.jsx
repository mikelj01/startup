import React from 'react';
import "./ChooseaChair.css"
// import profPicPicker from "../profPic.jsx"

export function ChooseaChair() {
//   const[profilePic, setProfile] = React.useState(() => {return localStorage.getItem("profilePic") || 'DefaultChair.png'})
// localStorage.setItem("profilePic", profilePic)
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

async function setProfpic(newPic){
  const response = await fetch('/api/profPic/set', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ pic: newPic, username : localStorage.getItem("username") }),
  });
  if (response.ok) {
    const data = await response.json();
    setProfilePic(data.pic);
    localStorage.setItem("profilePic", data.pic);
  }
  else {
    console.log('Error: ' + response.status);
  }
}


  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <p>Your Chair</p>
          <img src={profilePic} alt="Choose a Chair" width="100" class="Profile_img"></img>
        <p>
            <b>Choose a Chair</b>
        </p>
{/* something that takes the chair you choose and sets it to your main chair.  It probably replaces what renders there. 
- a user taps/ clicks their chair
- this activates the function and inputs the chair.
- the function then sets a new global variable for the profile pic.  
- This variable is called wherever your profile is displayed*/}
        <div className="container">
          <button onClick={()=>setProfpic('Yes.jpg')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="Yes.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfpic("rEd.png")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="rEd.png" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfpic('kneetouch.jpg')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="kneetouch.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfpic("malelivingspace.jpg")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="malelivingspace.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfpic("leftie'sNightmare.jpg")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="leftie'sNightmare.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfpic("notAMurderer.jpg")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="notAMurderer.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfpic("dontSit.png")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="dontSit.png" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfpic('DefaultChair.png')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src='DefaultChair.png' alt="a chair" width="100"></img>
          </button>
      </div>
      {/* <p>Or</p>
      <button type="button" className="button">Upload your own</button> */}
    </div>
    </main>
  );
}