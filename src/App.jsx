import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter.componente'
import AddUser from './AddUser.component'
import User from './User.component'
import Edit from './Edit.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Counter num={45} boom=""/> */}
      {/* <User/> */}
      <Edit firsname="znavo" lastname="ardai" ageof={28} emailof="zz@gamil" passwordof={46541321}/>
    </div>
  )
}

export default App
