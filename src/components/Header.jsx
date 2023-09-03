import React from 'react'

const Header = ({ selectedTeam, teamMemberCount }) => {
    return (
        <div className='px-4 text-center min-w-full pt-[84px]'>
            <h1 className='text-2xl md:text-4xl font-bold'>{selectedTeam}</h1>
            <h2 className='text-xl md:text-2xl font-mono'> has {teamMemberCount} members.</h2>
        </div>
    )
}

export default Header