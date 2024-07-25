import { Link } from "react-router-dom"

export default function ButtonModal(onClick) {
  return (
    
    <button onClick={onClick}>
       <Link href='/' > BACK TO HOME</Link>
    </button>

  )
}