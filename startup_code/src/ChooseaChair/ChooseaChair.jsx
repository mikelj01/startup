import React from 'react';
import "./ChooseaChair.css"
// import profPicPicker from "../profPic.jsx"

export function ChooseaChair() {
  const[profilePic, setProfile] = React.useState(() => {return localStorage.getItem("profilePic") || 'DefaultChair.png'})
localStorage.setItem("profilePic", profilePic)
  // React.useEffect(() => {setProfile(pic)})


  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <p>Your Chair</p>
          <img src={profilePic} alt="Your Chair" width="100" class="Profile_img"></img>
        <p>
            <b>Choose a Chair</b>
        </p>
{/* something that takes the chair you choose and sets it to your main chair.  It probably replaces what renders there. 
- a user taps/ clicks their chair
- this activates the function and inputs the chair.
- the function then sets a new global variable for the profile pic.  
- This variable is called wherever your profile is displayed*/}
        <div className="container">
          <button onClick={()=>setProfile('Yes.jpg')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="Yes.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfile("rEd.png")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="rEd.png" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfile('kneetouch.jpg')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="kneetouch.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfile("malelivingspace.jpg")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="malelivingspace.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfile("leftie'sNightmare.jpg")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="leftie'sNightmare.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfile("notAMurderer.jpg")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="notAMurderer.jpg" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfile("dontSit.png")} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src="dontSit.png" alt="a chair" width="100"></img>
          </button>
          <button onClick={()=>setProfile('DefaultChair.png')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img className="chairchoice" src='DefaultChair.png' alt="a chair" width="100"></img>
          </button>
      </div>
      {/* <p>Or</p>
      <button type="button" className="button">Upload your own</button> */}
    </div>
    </main>
  );
}