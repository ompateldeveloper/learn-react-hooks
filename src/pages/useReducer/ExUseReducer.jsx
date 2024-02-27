import { Candy, Coffee, Coins, CupSoda, GlassWater, Milk } from 'lucide-react';
import React, { useReducer, useState } from 'react'

export default function ExUseReducer() {
    function reducer(state,action){
        switch(action.type){
            case action.type :
                console.log(action.type);
                return{
                    ...state,
                    out:{
                        element:state.drinks.find((dri)=>dri.name===action.type)
                    }
                }
            case "GET" :
                return{
                    ...state,
                    out:{
                    }
                }
            default :
                break;
        }
    }

    const initialState = {
        drinks:[
            {name:"SODA",element:<CupSoda className='stroke-yellow-200'/>},
            {name:"MILK",element:<Milk className='stroke-white'/>},
            {name:"WATER",element:<GlassWater className='stroke-blue-200'/>},
            {name:"COFFEE",element:<Coffee className='stroke-red-950'/>}
        ],
        out:{}
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='h-40 w-32 border relative'>
            <div className="vending absolute inset-0 bg-green-400 border-2 border-green ">
                <div className="h-8 flex items-center justify-evenly blur-[2px]"><GlassWater className='stroke-blue-200 '/><Candy className='stroke-pink-800' /><Milk className='stroke-white'/><Coffee className='stroke-red-950'/></div>
                <div className=" h-8 flex items-center justify-evenly bg-yellow-500">
                    {
                        state?.drinks.map((drink,index)=>(
                            <div key={index} onClick={()=>{dispatch({type:drink.name})}}>
                                {drink.element}
                            </div>
                        ))
                    }
                </div>

                <div className="text-xs text-center px-2 my-2 bg-red-500">Reducer vending machine</div>
                <div className='mx-auto w-8 h-8 flex items-center justify-center bg-zinc-200 rounded' onClick={()=>dispatch({type:"GET"})}>{state && state?.out?.element?.element}</div>
            </div>
        </div>
    )
}
