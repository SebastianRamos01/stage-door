import React from 'react'

export default function About() {
  return (
    <div className='main'>
      <div className='main-text'>
        Our Team  
      </div>
      <ul className='credits'>
        <div className='lists'>
          <div className='team'>
            Web Developers
          </div>
          <li className="members">
            <div className='member'>
              Lorem Ipsum
            </div>
            <div className='member'>
              Lorem Ipsum
            </div>
            <div className='member'>
              Lorem Ipsum
            </div>
          </li>
        </div>
        <div className='lists'>
          <div className='team'>
            Web Designers
          </div>
          <li className="members">
            <div className='member'>
              Lorem Ipsum
            </div>
            <div className='member'>
              Lorem Ipsum
            </div>
          </li>
        </div>
        <div className='lists'>
          <div className='team'>
            Marketing
          </div>
          <li className="members">
            <div className='member'>
              Lorem Ipsum
            </div>
            <div className='member'>
              Lorem Ipsum
            </div>
          </li>
        </div>
      </ul>  
    </div>
  )
}
