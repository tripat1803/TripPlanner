import React from 'react'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Chatbot() {
  return (
    <Link to='https://console.dialogflow.com/api-client/demo/embedded/89b3f46f-bb60-4556-b2a9-9e4efc7146bd' target='_blank' className='fixed flex justify-center cursor-pointer items-center w-12 h-12 rounded-full z-[25] right-4 bottom-8 text-white p-2 bg-[#10B5CB]'>
      <BsFillChatLeftTextFill/>
    </Link>
  )
}
