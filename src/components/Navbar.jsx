import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='p-2 bg-red-100 flex gap-2 overflow-x-auto'>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/'}>Home</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/counter'}>Class v/s Function</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/lifecycle'}>React Lifecycle Methods</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/usestate'}>useState()</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/useeffect'}>useEffect()</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/useref'}>useRef()</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/usecontext'}>useContext()</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/usecallback'}>useCallback()</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/usememo'}>useMemo()</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/usedeffered'}>useDefferedValue()</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/usereducer'}>useReducer()</Link>
            <Link className='font-semibold flex-shrink-0 px-2 rounded-full border border-zinc-800' to={'/usetransition'}>useTransition()</Link>
        </div>
    )
}
