import React, { useState } from 'react'

const ContactForm = () => {
   const [emailInput, setEmailInput] = useState('');
   const [nameInput, setNameInput] = useState('')
   const [messageInput, setMessageInput] = useState('');

   return (
      <div className='bg-white rounded-3xl shadow-lg boder md:w-[35%] p-6 border border-gray-50'>
         <h3 className='text-2xl font-bold text-center text-gray-800 mb-8'>Contact Us</h3>
         <form className="space-y-6">

            <input
               type="text"
               name="name"
               placeholder="Your Name"
               value={nameInput}
               onChange={(e)=> setNameInput(e.target.value)}
               required
               className='w-full px-5 py-3 bg-gray-100 rounded-full border border-[#E8E8E8] focus:ring-2 focus:ring-blue-400 outline-none transition-all'
            />

            <input
               type="email"
               name="email"
               placeholder="Your Email"
               value={emailInput}
               onChange={(e)=>{ setEmailInput(e.target.value)}}
               required
               className='w-full px-5 py-3 bg-gray-100 rounded-full border focus:ring-2 focus:ring-blue-400 border-[#E8E8E8] transition-all'
            />

            <textarea
               name="message"
               placeholder="Your Message"
               rows="6"
               value={messageInput}
               onChange={(e)=> setMessageInput(e.target.value)}
               required
               className='w-full px-3 py-2 bg-gray-100 rounded border border-[#E8E8E8] focus:ring-2 focus:ring-blue-400 outline-none transition-all'
               
            />

            <button className='className="bg-blue-500 bg-[#2091F9] hover:bg-blue-600 text-white font-semibold py-2 px-10  rounded-full transition-colors shadow-lg shadow-blue-200' type="submit">Send</button>
         </form>
      </div>
  )
}

export default ContactForm