import { useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

export default function RadarProfile({ students }) {
  const [selected, setSelected] = useState(students[0])
  const data = [
    { skill: 'comprehension', value: selected.comprehension },
    { skill: 'attention', value: selected.attention },
    { skill: 'focus', value: selected.focus },
    { skill: 'retention', value: selected.retention }
  ]

  return (
    <div>
      <h2>Student Profile</h2>
      <select onChange={(e)=>setSelected(students.find(s=>s.name===e.target.value))}>
        {students.map(s=><option key={s.student_id}>{s.name}</option>)}
      </select>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
