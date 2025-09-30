import { useState } from 'react'

export default function StudentTable({ students }) {
  const [query, setQuery] = useState('')
  const filtered = students.filter(s => s.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <h2>Students</h2>
      <input 
        placeholder="Search by name"
        value={query}
        onChange={e=>setQuery(e.target.value)}
      />
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th><th>Class</th><th>Score</th><th>Attention</th><th>Focus</th>
          </tr>
        </thead>
        <tbody>
          {filtered.slice(0,20).map(s=>(
            <tr key={s.student_id}>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.assessment_score}</td>
              <td>{s.attention}</td>
              <td>{s.focus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
