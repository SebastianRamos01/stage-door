import React from 'react'

export default function page() {
  return (
    <div className='main'>
      <div className='contact-text'>
        We are happy to talk!
      </div>
      <ul className=''>
        <li className='contact'>
          <div>
            Phone
          </div>
          <div className='info'>
            +12 23324556
          </div>
        </li>
        <li className='contact'>
          <div>
            Email
          </div>
          <div className='info'>
            lorem.ipsum@email.com
          </div>
        </li>
        <li className='contact'>
          <div className=''>
            Follow
          </div>
          <div className='info'>
            _loremipsum
          </div>
        </li>
      </ul>
    </div>
  )
}
