import React from 'react'
import { Address, Email, Phone } from './Icons'

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
            <h3>Go on and ask me if you want to know more details about me</h3>
            <div className='flex flex-col justify-center gap-6 my-8'>
              <div className='flex items-center gap-12'>
              <Phone/>
              <div className='flex flex-col justify-start'>
                <h3>Phone</h3>
                <p>09-762695080</p>
              </div>
            </div>
            <div className='flex items-center gap-12'>
              <Email/>
              <div className='flex flex-col justify-start'>
                <h3 className=''>Email</h3>
                <p className='text-sm'>yukihirasouma741@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-12'>
              <Address/>
              <div className='flex flex-col justify-start'>
                <h3>Address</h3>
                <p>Yangon, Myanmar</p>
              </div>
            </div>
            </div>
          </div>
  )
}

export default ContactInfo