import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { route } from '../data/routeConstants'

const Nav = ({ }) => {

    const [navButtons, setNavButtons] = useState([
        {
            name: "Home",
            url: route.baseUrl,
            isCurrent: false,
        },
        {
            name: "Teams",
            url: route.teams,
            isCurrent: false,
        }
    ])

    const setActiveButton = (name) => {
        const updatedList = navButtons.map(btn => ({
            ...btn,
            isCurrent: btn.name === name 
        }))

        setNavButtons(updatedList)
    }
    

    return (
        <div className='py-3 bg-[#548999] px-4 text-center fixed min-w-full shadow-xl shadow-white text-white'>
            <div className='flex gap-6 font-semibold text-xl'>
                {navButtons?.map((item, i) =>
                    <Link to={item.url} key={i} onClick={() => setActiveButton(item.name)} className={`hover:scale-105 duration-50 border-b-2 ${item.isCurrent === true ? "border-[#00fff7] " : "border-b-white"}`}>{item.name}</Link>
                )}
            </div>

        </div>
    )
}

export default Nav