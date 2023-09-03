import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { route } from '../data/routeConstants'

const Nav = ({ }) => {

    const location = useLocation();
    const [navButtons, setNavButtons] = useState([
        {
            name: "Home",
            url: route.baseUrl,
        },
        {
            name: "Teams",
            url: route.teams,
        }
    ])


    return (
        <div className='py-3 bg-[#548999] px-4 text-center fixed min-w-full shadow-xl shadow-white text-white'>
            <div className='flex gap-6 font-semibold text-xl'>
                {navButtons?.map((item, i) =>
                    <Link to={item.url} key={i} className={`hover:scale-105 duration-50`}>{item.name}</Link>
                )}
            </div>

        </div >
    )
}

export default Nav