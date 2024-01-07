import React from 'react'
import LeftMenu from '../components/LeftMenu';
// import { useSelector } from 'react-redux';
const HomePage = () => {


  return (
    <div className='container'>
      <LeftMenu />
      <div className='page'>
        <div className='front-banner'>

          <div>
            <img src="https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png" alt="" />
            <p>Welcome to DigitalFlake Admin</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage