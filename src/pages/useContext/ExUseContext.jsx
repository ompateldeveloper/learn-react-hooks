import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();


export default function ExUseContext() {
    const [theme, setTheme] = useState()
    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className={`m-4 ${theme === 'light' ? "bg-zinc-300 " : "bg-zinc-800 text-zinc-200"}`}>
                    <InnerComponent1 />
                    <InnerComponent2 />
                </div>
            </ThemeContext.Provider>
        </div>
    )
}

function InnerComponent1() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className='m-4'>
            <div className="text-lg">component-1</div>
            <button onClick={() => { setTheme('light') }} className='bg-zinc-200 p-1 rounded block'>Light</button>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus laboriosam reiciendis quod aperiam aliquam. Explicabo inventore itaque nisi saepe assumenda distinctio doloribus molestias. Iusto accusamus aliquam aperiam iure illo consequuntur dolorem magni iste officiis modi eligendi omnis molestias ullam labore nesciunt eos, ipsam natus, voluptatibus soluta. Magnam, exercitationem quae.
        </div>
    )
}

function InnerComponent2() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={'m-4'}>
            <div className="text-lg">component-2</div>
            <button onClick={() => { setTheme('dark') }} className='bg-zinc-400 p-1 rounded block'>Dark</button>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus laboriosam reiciendis quod aperiam aliquam. Explicabo inventore itaque nisi saepe assumenda distinctio doloribus molestias. Iusto accusamus aliquam aperiam iure illo consequuntur dolorem magni iste officiis modi eligendi omnis molestias ullam labore nesciunt eos, ipsam natus, voluptatibus soluta. Magnam, exercitationem quae.
        </div>
    )
}