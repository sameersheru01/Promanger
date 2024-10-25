import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './auth/Procetedroutes';
import Board from './components/Board';
import Settings from './components/Settings';
import Analytics from './components/Analytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Register />} /> */}
        <Route path='/' element={<AuthPage />} />
        <Route path='/login' element={<AuthPage />} />
        <Route element={<ProtectedRoute/>}>
        <Route path='/dashboard' element={<Dashboard />} >
           <Route path='board' element={<Board />} />
           <Route path='analytics' element={<Analytics />} />
           <Route path='settings' element={<Settings />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
