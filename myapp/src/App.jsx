import React from 'react'
import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <p className="h1 text-center text-primary">App Component</p>
        <Home/>
      </div>
    </React.Fragment>
  )
}

export default App