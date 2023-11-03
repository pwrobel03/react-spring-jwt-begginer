import { useState } from 'react'
import reactLogo from '../assets/react.svg'

function App() {
  return (
    <section className='w-full bg-neutral-950 flex flex-row items-center justify-center'>
      <navbar className="flex flex-row">
        <img
          src={reactLogo}
          alt='react logo'
          className='w-[4em]'
        />
        <h1 className="text-white headings text-center px-4 py-6">React Login Page - Authentication with JWT</h1>
      </navbar>

    </section>
  )
}

export default App
