import { Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
