import React from 'react';
import "./Home.css"

export function Home() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div><p><span>Your Chair</span></p>
      <img src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Your Chair" width="100" class="Profile_img"></img>
        <p>

        </p>
          <section>
            <button className="button" onclick="window.location.href='ChooseaChair.html'" >Choose a Chair</button>
            {/* <button className="button" onclick="window.location.href='Matching.html'">Your Matches</button> */}
          </section>

        <p></p>

          <div>
        <div className="chaircontainter">
            <table className='mtchTable'>
            <th className='tablehead'><b>Your Matches</b></th>
            <tr>
              <td><img className="chairchoice" img src="https://tinyurl.com/3dh28xt6" width="200"></img></td>
              <td><img className="chairchoice" src="https://tinyurl.com/48ywaav3" width="200"></img></td>
              <td><img className="chairchoice" src="https://tinyurl.com/4emmm6wa" width="200"></img></td>
            </tr>
          </table>
        </div>

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
        </div>


          <p>History</p>
          <table>
            <th>Previous Matches</th>
            <tr>
              <td><img className="matchimg" src="https://tinyurl.com/4zmry9bt" width="100"></img></td>
              <td><img className="matchimg" src="https://tinyurl.com/48muuf6s" width="100"></img></td>
            </tr>
          </table></div>


    </main>
  );
}