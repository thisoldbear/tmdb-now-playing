import React from 'react'

import Header from './components/header'
import ContextProvider from './context'
import Listings from './components/listings'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Listings />
      </div>
    </ContextProvider>
  )
}

export default App
