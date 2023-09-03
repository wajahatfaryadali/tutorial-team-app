import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Employees from './components/Employees'
import { employeesList } from './data/data'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import GroupedTeamMembers from './components/GroupedTeamMembers'
import { route } from './data/routeConstants'
import PageNotFound from './components/PageNotFound'

function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "Team A");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || employeesList);

  useEffect(() => {

    localStorage.setItem("employees", JSON.stringify(employees));

    return () => {
      localStorage.removeItem("employees");
    }

  }, [employees])

  useEffect(() => {

    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));

    return () => {
      localStorage.removeItem("selectedTeam");
    }

  }, [selectedTeam])

  const options = [
    { value: "Team A", },
    { value: "Team B", },
    { value: "Team C", },
    { value: "Team D", },
  ]

  const handleOptionChange = (event) => {
    const value = event.target.value;

    console.log("value********** ", value)
    setTeam(value)
  }

  const handleCardClick = (event) => {
    console.log("***card click***", event.currentTarget.id)
    const transformedArray = employees.map(employee => employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: "" } : { ...employee, teamName: selectedTeam } : employee)
    setEmployees(transformedArray)
  }


  return (
    <div className='bg-slate-100'>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter(e => e.teamName === selectedTeam).length}
      />
      <Routes>
        <Route
          path={route.baseUrl}
          element={<Employees
            options={options}
            selectedTeam={selectedTeam}
            employees={employees}
            handleOptionChange={handleOptionChange}
            handleCardClick={handleCardClick}
          />} />
        <Route
          path={route.teams}
          element={<GroupedTeamMembers
            employee={employees}
            selectedTeam={selectedTeam}
            setTeam={setTeam}
          />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
