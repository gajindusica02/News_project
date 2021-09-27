import React from 'react';
import '../styles/Nav.css';

function Nav({ sendDataToParent }) {

  return (
    <div className='navbar'>
      <button
        className='navBtn'
        type='button'
        onClick={() => {
          sendDataToParent('general');
        }}>
        Home
      </button>
      <button
        className='navBtn'
        type='button'
        onClick={() => {
          sendDataToParent('business');
        }}>
        Technology
      </button>
      <button
        className='navBtn'
        type='button'
        onClick={() => {
          sendDataToParent('sports');
        }}>
        Sports
      </button>
    </div>
  );
}

export default Nav;
