'use client'
import { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import AchievementsPage from './components/AchievementsPage';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import TestimonialPage from './components/TestimonialsPage';
import { loginUser, logoutUser, restoreLoginState } from './slices/userSlice'; 
function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch(); // Make sure to get the dispatch function
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    dispatch(restoreLoginState()); // Restore user state on mount
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar onNavigation={handleNavigation} />
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'projects' && <ProjectsPage />}
          {currentPage === 'Testimonials' && <TestimonialPage />}
          {currentPage === 'contact' && <ContactPage />}
          <button
            onClick={handleLogout}
            className="absolute bottom-4 right-4 px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Logout
          </button>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      {showRegister ? (
        <>
          <Register />
          <p className="mt-4">
            Already have an account?{' '}
            <button onClick={toggleForm} className="text-blue-500">
              Login
            </button>
          </p>
        </>
      ) : (
        <>
          <Login />
          <p className="mt-4">
            Don't have an account?{' '}
            <button onClick={toggleForm} className="text-blue-500">
              Register
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}