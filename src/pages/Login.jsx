import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex justify-center items-center '>
      <div className='flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border border-zinc-200 rounded-xl  text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'sign Up' ? "sign up" : "log in"} to book appointment</p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="name" onChange={(e) => setName(e.target.setName)} value={name} required />
          </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setName(e.target.setEmail)} value={name} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setName(e.target.setPassword)} value={name} required />
        </div>
        <button className='bg-cyan-700 text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-cyan-700 underline cursor-pointer'> Login here</span></p>
            : <p>Create an new account?<span onClick={() => setState('Sign Up')} className='text-cyan-700 underline cursor-pointer'> click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login