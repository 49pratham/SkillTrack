import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

export default function ScatterAttention({ students }) {
  const data = students.map(s => ({ x: s.attention, y: s.assessment_score }))

  return (
    <div>
      <h2>Attention vs Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Attention"/>
          <YAxis type="number" dataKey="y" name="Score"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}
