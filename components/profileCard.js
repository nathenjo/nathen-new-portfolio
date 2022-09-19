import React from 'react';
import Image from 'next/image';

export default function ProfileCard(props) {

 const { propClass } = props;

   return (
      <div className={`profile-card ${propClass}`}>
         <div className='pic'>
            <Image
                width='150'
                height='150'
                src='/nate-headshot.jpg'
            />
         </div>
         <div className='heading'>
            <h3>Nathen Johnson</h3>
            <div className='subheading'>
                <i className='icon bi-laptop'></i>
                <p>Full Stack Developer</p>
            </div>
         </div>
         <div className='bio'>

         </div>
      </div>
   );
}