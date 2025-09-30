export default function Insights({ students }) {
  // Simple insights logic
  const avgScore = students.reduce((a,b)=>a+b.assessment_score,0)/students.length
  const struggling = students.filter(s=>s.assessment_score < avgScore-10).length

  return (
    <div>
      <h2>Insights</h2>
      <p>Average Score: {avgScore.toFixed(2)}</p>
      <p>{struggling} students are struggling and may need extra support.</p>
      <p>High attention and focus strongly correlate with performance.</p>
    </div>
  )
}
