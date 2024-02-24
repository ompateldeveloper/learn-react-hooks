import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='p-2 bg-red-100 flex gap-2 overflow-x-auto'>
            <Link className='font-semibold px-2 rounded-full border border-zinc-800' to={'/'}>Home</Link>
            <Link className='font-semibold px-2 rounded-full border border-zinc-800' to={'/counter'}>Class v/s Function</Link>
            <Link className='font-semibold px-2 rounded-full border border-zinc-800' to={'/lifecycle'}>React Lifecycle Methods</Link>

        </div>
    )
}
