


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import WatchedMovies from './pages/WatchedMovies'
function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />  */}
                  <Route 
            path="/watched" 
            element={user ? <WatchedMovies /> : <Navigate to="/login" />} 
          />
               <Route 
            path="/add" 
            element={user ? <Movies /> : <Navigate to="/add/post" />} 
          />
             <Route 
            path="/profile" 
            element={user ? <Profile /> : <Navigate to="/" />} 
          />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;