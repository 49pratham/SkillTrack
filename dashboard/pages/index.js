import Overview from '../components/Overview'
import BarChartSkill from '../components/BarChartSkill'
import ScatterAttention from '../components/ScatterAttention'
import RadarProfile from '../components/RadarProfile'
import StudentTable from '../components/StudentTable'
import Insights from '../components/Insights'
import { useEffect, useState } from 'react'

export default function Home() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("/data/students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data))
  }, [])

  if (students.length === 0) return <p>Loading...</p>

  return (
    <div style={{padding: '20px'}}>
      <h1>Cognitive Skills Dashboard</h1>
      <Overview students={students} />
      <BarChartSkill students={students} />
      <ScatterAttention students={students} />
      <RadarProfile students={students} />
      <StudentTable students={students} />
      <Insights students={students} />
    </div>
  )
}
