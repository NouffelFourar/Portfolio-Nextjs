function Navbar({ onNavigation }) {
    return (
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-lg font-bold">My Portfolio</div>
          <ul className="flex space-x-4">
            <li>
              <button onClick={() => onNavigation('home')} className="hover:text-gray-400">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigation('about')} className="hover:text-gray-400">
                About
              </button>
            </li>
            <li>
              <button onClick={() => onNavigation('projects')} className="hover:text-gray-400">
                Projects
              </button>
            </li>
            
            <li>
              <button onClick={() => onNavigation('Testimonials')} className="hover:text-gray-400">
                Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => onNavigation('contact')} className="hover:text-gray-400">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;