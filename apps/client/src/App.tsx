import { Routes, Route } from 'react-router-dom'
// import { GoogleLogin } from '@react-oauth/google'
import Home from './containers/Home'

const App = () => {
  return (
    <>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
