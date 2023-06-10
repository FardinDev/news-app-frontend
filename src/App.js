
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import Layout from './components/Layout';
import Favorites from './pages/Favorites';
import ProtectedRoutes from './components/ProtectedRoutes';
import GuestRoutes from './components/GuestRoutes';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

import UserProvider from './context/UserContext';


function App() {
  return (

    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestRoutes />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>


          <Route path="/" element={<Layout />} exact>
            <Route index element={<Home />} />
            <Route path="details/:newsId"
              loader={({ params }) => {
                console.log(params.newsId);
              }}
              element={<Details />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="favorites" element={<Favorites />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>

  );
}

export default App;
