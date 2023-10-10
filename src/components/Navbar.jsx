import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  return (
    <>
        <div className='flex justify-between p-5 h-24 bg-white items-center max-w-screen mx-auto'>
            <h1 className='w-full text-4xl font-bold text-[#395090]'>TravelUx.ai</h1>
            <ul className='flex'>
                <li className='p-3'>
                    <select>
                        <option>English</option>
                        <option>Spanish</option>
                    </select>
                </li>
                <li className='p-3'>
                    <button className=' bg-blue-500 px-5 rounded text-lg text-white'>Login</button>
                </li>
            </ul>
            <div>
                <AiOutlineMenu size={20} />
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default NavBar