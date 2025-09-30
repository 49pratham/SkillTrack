export default function Overview({ students }) {
  const avg = (key) => 
    (students.reduce((a,b)=>a+b[key],0)/students.length).toFixed(2)

  return (
    <div>
      <h2>Overview</h2>
      <p>Average Score: {avg('assessment_score')}</p>
      <p>Average Attention: {avg('attention')}</p>
      <p>Average Focus: {avg('focus')}</p>
      <p>Average Retention: {avg('retention')}</p>
    </div>
  )
}
