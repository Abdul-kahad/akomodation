
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import HomePage from './Pages/HomePage/HomePage'
import AddNewRoomPage from './Pages/AddNewRoomPage/AddNewRoomPage'
import UpdateRoomPage from './Pages/UpdateRoomPage/UpdateRoomPage'
import ViewRoomPage from './Pages/ViewRoomPage/ViewRoomPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'

function App() {
  return (
      <Routes >
        <Route path='/' element={
          <>
            <Navbar />
            <HomePage />
          </>} 
          />
        <Route path='/addroom' element={
          <>
            <Navbar />
            <AddNewRoomPage />
          </>
        }/>
        <Route path='/update/updateroom/:roomId' element={
          <>
            <Navbar />
            <UpdateRoomPage />
          </>
        }/>
        <Route path='/viewroom/:roomId' element={
          <>
            <Navbar />
            <ViewRoomPage />
          </>
        }/>
        <Route path='/profile' element={
          <>
            <Navbar />
            <ProfilePage />
          </>
        }/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
  )
}

export default App
