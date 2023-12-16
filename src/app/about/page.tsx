import React from 'react'

export default function About() {
  return (
    <div className='main'>
      <div className='texts'>
        <div className='main-text'>
          Discover Our Team!
        </div>
        <ul className='credits'>
          <div className='lists'>
            <div className='team'>
              Web Developers
            </div>
            <li className="members">
              <div className='member'>
                Elena Sharma
              </div>
              <div className='member'>
                Elise Urban
              </div>
              <div className='member'>
                Missing Developer
              </div>
            </li>
          </div>
          <div className='lists'>
            <div className='team'>
              Web Designers
            </div>
            <li className="members">
              <div className='member'>
                Isak Arseny
              </div>
              <div className='member'>
                Neon Marcos
              </div>
            </li>
          </div>
          <div className='lists'>
            <div className='team'>
              Marketing
            </div>
            <li className="members">
              <div className='member'>
                Svetlana Severin
              </div>
              <div className='member'>
                Aldric Danijela
              </div>
            </li>
          </div>
        </ul>  
      </div>
      <div className='about-shape'>
      </div>
    </div>
  )
}
