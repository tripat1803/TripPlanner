import React from 'react'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Chatbot() {
  return (
    <df-messenger
      intent="WELCOME"
      chat-title="Travelux.AI"
      agent-id="88f6a16b-93b4-4842-ad07-152d12eb5110"
      language-code="en"
    ></df-messenger>
  )
}
