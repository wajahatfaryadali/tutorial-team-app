import React, { useState } from 'react'

const GroupedTeamMembers = ({ employee, selectedTeam, setTeam }) => {

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

    function groupTeamMembers() {

        const team = [];

        const teamAMembers = employee?.filter(team => team.teamName === "Team A")
        const teamA = { team: "Team A", members: teamAMembers, collapsed: selectedTeam === "Team A" ? false : true }
        team.push(teamA)

        // ***************************
        const teamBMembers = employee?.filter(team => team.teamName === "Team B")
        const teamB = { team: "Team B", members: teamBMembers, collapsed: selectedTeam === "Team B" ? false : true }
        team.push(teamB)

        // ***************************
        const teamCMembers = employee?.filter(team => team.teamName === "Team C")
        const teamC = { team: "Team C", members: teamCMembers, collapsed: selectedTeam === "Team C" ? false : true }
        team.push(teamC)

        // ***************************
        const teamDMembers = employee?.filter(team => team.teamName === "Team D")
        const teamD = { team: "Team D", members: teamDMembers, collapsed: selectedTeam === "Team D" ? false : true }
        team.push(teamD)

        // console.log(team)
        return team;

    }

    const handleClick = (event) => {
        
        const clickedTeam = event.currentTarget.id;
        console.log("clicked*** ", clickedTeam)
        const newGroupData = groupedEmployees.map((groupedData) => groupedData.team === clickedTeam ?
            { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);

        setGroupedEmployees(newGroupData)
        setTeam(clickedTeam);
    }

    return (
        <div className='px-4 text-center min-w-full'>
            {groupedEmployees?.map(item =>
                <div key={item.team} className='mb-4'>
                    <div id={item.team} className='w-full p-2 cursor-pointer mt-2 pb-4' onClick={handleClick}>
                        <h1 className='text-2xl md:text-4xl font-semibold'> Team Name: {item.team}</h1>
                    </div>
                    <div className={`bg-white ${item.collapsed ? "hidden" : ""}`}>
                        {item.members.map((member, i) =>
                            <div key={i} className='p-2 mx-auto text-center text-lg md:text-xl w-[50%] font-bold'>
                                <h4>Team: <span className='font-semibold'> {member.teamName} </span></h4>
                                <h2>Name: <span className='font-semibold'> {member.name} </span></h2>
                                <h4>Gender: <span className='font-semibold'> {member.gender} </span></h4>
                                <h4 className='pb-2' >Design: <span className='font-semibold'> {member.designation} </span></h4>
                                <hr />
                            </div>
                        )}

                    </div>
                </div>
            )}


        </div>
    )
}

export default GroupedTeamMembers