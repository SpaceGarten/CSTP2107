import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Switch>
        <Route path="/news" component={News} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    </>
  )
}

export default App
