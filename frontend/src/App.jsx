
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import HomePage from './Pages/HomePage/HomePage'
import AddNewRoomPage from './Pages/AddNewRoomPage/AddNewRoomPage'
import UpdateRoomPage from './Pages/UpdateRoomPage/UpdateRoomPage'
import ViewRoomPage from './Pages/ViewRoomPage/ViewRoomPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import MyBookingsPage from './Pages/MyBookingsPage/MyBookingsPage'
import HistoryPage from './Pages/HistoryPage/HistoryPage'
import ModeratorDashboard from './Pages/ModeratorDashboard/ModeratorDashboard'
import Dashboard from './Pages/Dashboard/Dashboard'
import Users from './Pages/Users/Users'
import ManageUsers from './Pages/ManageUsers/ManageUsers'
import Bookings from './Pages/Bookings/Bookings'
import Logs from './Pages/Logs/Logs'
import Rooms from './Pages/Rooms/Rooms'
import Tenants from './Pages/Tenants/Tenants'

function App() {
  return (
      <Routes >
        <Route path='/' element={
          <>
            <Navbar />
            <HomePage />
          </>} 
          />
        <Route path='/viewroom/:roomId' element={
          <>
            <Navbar />
            <ViewRoomPage />
          </>
        }/>
         <Route path='/mybookings' element={
          <>
            <Navbar />
            <MyBookingsPage />
          </>
        }/>
        <Route path='/profile' element={
          <>
            <Navbar />
            <ProfilePage />
          </>
        }/>
        <Route path='/addroom' element={<AddNewRoomPage />}/>
        <Route path='/update/updateroom/:roomId' element={<UpdateRoomPage />}/>
        <Route path='/admin/dashboard/booking/history' element={<HistoryPage />}/>
        <Route path='/admin/dashboard/bookings' element={<Bookings/>} />
        <Route path='/moderator/dashboard' element={<ModeratorDashboard />}/>
        <Route path='/moderator/dashboard/rooms' element={<Rooms />}/>
        <Route path='/moderator/dashboard/tenants' element={<Tenants />}/>
        <Route path='/admin/dashboard/users' element={<Users />}/>
        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path='/admin/dashboard/manage/users' element={<ManageUsers />}/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/admin/dashboard/manage/logs' element={<Logs />} />
      </Routes>
  )
}

export default App
