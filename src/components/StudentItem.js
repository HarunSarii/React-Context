import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

const StudentItem = ({ student }) => {
  const deger = useContext(StudentContext)
  console.log(deger)
  return (
    <div style={{ background: student.color, paddingBottom: '2rem', paddingTop: '1rem', marginBottom: '1rem' }}>
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      Color: <input value={student.color} onChange={(e) => changeColor(student.id, e.target.value)} />
    </div>
  )
}

export default StudentItem
