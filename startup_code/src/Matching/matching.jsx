import React from 'react';
import './matching.css';

export function Matching() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <div className="chaircontainter">
            <table className='mtchTable'>
            <th className='tablehead'><b>Matches</b></th>
            <tr>
              <td><img className="chairchoice" img src="https://tinyurl.com/3dh28xt6" width="200"></img></td>
              <td><img className="chairchoice" src="https://tinyurl.com/48ywaav3" width="200"></img></td>
              <td><img className="chairchoice" src="https://tinyurl.com/4emmm6wa" width="200"></img></td>
            </tr>
          </table>
        </div>
        <div>
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
          </div>
        </div>
    </main>
  );
}