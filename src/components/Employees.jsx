import React, { useState } from 'react'
import { FaMale, FaFemale } from "react-icons/fa";

const Employees = ({ handleCardClick, options, employees, handleOptionChange, selectedTeam }) => {

    const getCapColor = (teamName) => {
        switch (teamName) {
            case "Team A":
                return "bg-green-400 font-bold text-white text-[12px] py-1 px-2 rounded-md"

            case "Team B":
                return "bg-orange-400 font-bold text-white text-[12px] py-1 px-2 rounded-md"

            case "Team C":
                return "bg-pink-400 font-bold text-white text-[12px] py-1 px-2 rounded-md"

            case "Team D":
                return "bg-[#66E6F5] font-bold text-white text-[12px] py-1 px-2 rounded-md"

            default:
                break;
        }
    }

    const getBorderColor = (teamName) => {
        switch (teamName) {
            case "Team A":
                return "border border-4 border-green-400"

            case "Team B":
                return "border border-4 border-orange-400"

            case "Team C":
                return "border border-4 border-pink-400"

            case "Team D":
                return "border border-4 border-[#66E6F5]"

            default:
                break;
        }
    }

    return (
        <div className='w-full pt-2'>

            <div className='max-w-[1240px] m-auto py-4 px-4 md:px-4'>
                <div className=' text-center '>
                    <select className='w-[50%] py-2 rounded-lg mb-4 px-4 mx-auto' value={selectedTeam} onChange={handleOptionChange}>
                        {options.map((val, i) =>
                            <option value={val.value} key={i}>
                                {val.value}
                            </option>
                        )}
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {employees.map((user, i) =>
                        <div key={i} id={user.id} className={`bg-white p-4 rounded-xl cursor-pointer hover:scale-105 duration-100 hover:bg-green-200 ${user.teamName === selectedTeam ? getBorderColor(selectedTeam) : ""}`} onClick={handleCardClick}>
                            <div className=''>
                                {user.gender === "male" ? <FaMale color='' size={"100px"} className='mx-auto' /> : <FaFemale color='' size={"100px"} className='mx-auto' />}
                            </div>
                            <div>
                                <span className='font-bold'>Name: </span>
                                {user.name}
                            </div>
                            <div>
                                <span className='font-bold'>Designation: </span>
                                {user.designation}
                            </div>
                            <div>
                                <span className={getCapColor(user.teamName)}> {user.teamName} </span>
                            </div>

                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Employees