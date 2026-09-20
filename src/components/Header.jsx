import React, { useState } from 'react'

function Header() {

  const [toggle, setToggle] = useState(false)

  const handleToggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>LOGO</div>
      <ul className='flex gap-2'>
        <li className='relative'>
          <a onClick={handleToggleMenu} href="#" className='hover:underline underline-offset-4 cursor-pointer block'>home</a>
          {toggle && (
            <div className='absolute p-4 min-w-60 bg-indigo-700 text-white right-0 top-[calc(100%+10px)]'>Toggled</div>
          )}
        </li>
        <li><a href="#" className='hover:underline underline-offset-4 cursor-pointer'>about</a></li>
        <li><a href="#" className='hover:underline underline-offset-4 cursor-pointer'>contact</a></li>
      </ul>
    </div>
  )
}

export default Header