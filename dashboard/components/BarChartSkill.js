import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

export default function BarChartSkill({ students }) {
  const skills = ['comprehension','attention','focus','retention']
  const data = skills.map(skill => {
    const avgScore = students.reduce((a,b)=>a+b.assessment_score,0)/students.length
    const avgSkill = students.reduce((a,b)=>a+b[skill],0)/students.length
    return { skill, avg: avgSkill, avgScore }
  })

  return (
    <div>
      <h2>Skill vs Avg Score</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="skill"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="avg" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
