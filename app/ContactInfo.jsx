import React from 'react'
import { Address, Email, Phone } from './Icons'

const ContactInfo = () => {
  return (
    <div className="flex flex-col px-8">
            <h3 className='text-primary3 text-xl font-open font-semibold'>
              Connect with me.
            </h3>
            <div className='flex flex-col justify-center gap-3 my-8'>
              <div className='flex items-center gap-4'>
              <Phone/>
              <div className='flex flex-col justify-start'>
                <h3 className='font-semibold '>Phone</h3>
                <p className='text-sm font-medium'>09-762695080</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Email />
              <div className='flex flex-col justify-start'>
                <h3 className='font-semibold'>Email</h3>
                <p className='text-sm font-medium'>yukihirasouma741@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Address/>
              <div className='flex flex-col justify-start'>
                <h3 className='font-semibold'>Address</h3>
                <p className='text-sm font-medium'>Yangon, Myanmar</p>
              </div>
            </div>
            </div>
          </div>
  )
}

export default ContactInfo