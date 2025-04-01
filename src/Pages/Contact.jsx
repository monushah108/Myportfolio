import React from 'react'

export default function Contact() {
  
  return (
    <section className='mt-15 p-2 md:p-10' id='contact'>
         <p className="text-2xl mb-10 text-center m-auto w-fit   border-b-2 border-sky-400 ">Contact me -</p>
         <main className=' my-5 m-auto bg-[#31333b] p-5 md:p-10 flex items-center justify-around flex-wrap '>
         <div>
          <img className='w-[450px] m-auto' src="/maskimg-Photoroom.png" alt="" />
         </div>
         <form action="#"  className='basis-lg'>
            <div className='my-2'>
                <label htmlFor="userName">Username</label>
                <input className='w-full bg-transparent border-2 rounded p-2 mt-2' type="text" name="name" id="userName" placeholder='username' required/>
            </div>
            <div className='my-2'>
                <label htmlFor='Email'>Email:</label>
                <input className='w-full bg-transparent border-2 rounded p-2 mt-2' type="email" name="email" id="Email" placeholder='email' required/>
            </div>
            <div className='my-2'>
                <label htmlFor='desc'>Description:</label>
                <textarea className='w-full h-[150px] bg-transparent border-2 rounded p-2 mt-2 ' placeholder='desciption'  name="desc" id="desc"></textarea>
            </div>
            <div className='flex items-center justify-between flex-wrap text-sm'>
            <button className='bg-sky-500 px-7 py-1 rounded-sm '>Submit</button>
            <p>Email id : sonuk627422@gmail.com</p>
            </div>
         </form>

         

         </main>
         <main>
          
         </main>
    </section>
  )
}
