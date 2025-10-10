import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1>this is contact us page</h1>
      <form>
        <input type="text" placeholder='name' className='border border-gray-300 p-2 m-2 rounded-md'/>
        <input type="text" placeholder='name' className='border border-gray-300 p-2 m-2 rounded-md'/>
        <button className='border border-gray-300 bg-green-100 px-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}
