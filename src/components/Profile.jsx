import React from 'react';
import './Profile.css';

const Profile = () => {
  return <div className='content'>
    <div>
      <img src='http://sa-kzn.ru/wp-content/uploads/2019/04/Wiki-background-1024x436.jpg' alt='Шапка сайта'>
      </img></div>
    <div>
      ava + description
    </div>
    <div className='posts'>
      my posts
      <div className='item'>
        new post
    </div>
      <div className='item'>
        post 1
    </div>
      <div className='item'>
        post 2
    </div>
    </div>
  </div>
}

export default Profile;
