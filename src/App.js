import React from 'react'

import ContextProvider from './context'
import Listings from './components/listings'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Listings />
      </div>
    </ContextProvider>
  )
}

export default App
