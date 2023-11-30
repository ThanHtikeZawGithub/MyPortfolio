import React from 'react'
import { Address, Email, Phone } from './Icons'

const ContactInfo = () => {
  return (
    <div className="flex flex-col px-5 md:px-8 text-normal dark:text-primary">
            <h3 className='text-2xl font-poppin font-semibold pb-2'>
              Connect with me.
            </h3>
            <div className='flex flex-col justify-center gap-1 md:gap-3 my-2 pb-2 md:pb-0 md:my-8'>
              <div className='flex items-center gap-4'>
              <Phone/>
              <div className='flex flex-col justify-start'>
                <h3 className='font-semibold md:text-xl'>Phone</h3>
                <p className='text-sm font-medium'>09-762695080</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Email />
              <div className='flex flex-col justify-start'>
                <h3 className='font-semibold md:text-xl'>Email</h3>
                <p className='text-sm font-medium'>yukihirasouma741@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Address/>
              <div className='flex flex-col justify-start'>
                <h3 className='font-semibold md:text-xl'>Address</h3>
                <p className='text-sm font-medium'>Yangon, Myanmar</p>
              </div>
            </div>
            </div>
          </div>
  )
}

export default ContactInfo