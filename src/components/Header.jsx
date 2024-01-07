import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [showConfirmationPrompt, setShowConfirmationPrompt] = useState(false);

  const handleConfirmationPrompt = () => {

    if (showConfirmationPrompt) {
      setShowConfirmationPrompt(false);
    }
  }
  return (
    <main>
      <div className='header'>

        <h1 className='header-logo'>
          DigitalFlake</h1>

        <div className='logout-confirmation'>
          <p onClick={() => setShowConfirmationPrompt(true)} className='header-profile'><i class="fa fa-sign-out" aria-hidden="true"></i></p>

          {
            showConfirmationPrompt ?
              <main className="confirmation-window">

                <div onClick={() => setShowConfirmationPrompt(false)} className="confirmation-background">

                </div>

                <form  onClick={() => {
                  setShowConfirmationPrompt(true)
                }} className="confirmation delete-confirmation" onSubmit={() => handleConfirmationPrompt()}>
                  <h3>LogOut</h3>
                  <p>Are you sure you want to LogOut</p>
                  <button className="white-btn cancel-delete" onClick={() => setShowConfirmationPrompt(false)}>Cancel</button>
                  <Link to={"/"}>
                    <button className='purple-btn'>Confirm</button>
                  </Link>
                </form>
              </main>

              :
              <></>
          }
        </div>



      </div>
    </main>
  )
}

export default Header