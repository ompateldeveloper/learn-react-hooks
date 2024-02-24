import React from 'react'
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';

export default function Counter() {
    return (
        <fieldset className='grid grid-cols-2 p-8 h-96 bg-slate-100 border'>
            <legend className='bg-blue-100 rounded px-2'>Counter</legend>
            <ClassCounter/>
            <FunctionCounter/>
        </fieldset>
    )
}
