
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import LoginPage from './Pages/LoginPage/LoginPage'

function App() {
  return (
      <Routes >
        <Route path='/' element={
          <>
            <Navbar />
            <HomePage />
          </>} 
          />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
  )
}

export default App
