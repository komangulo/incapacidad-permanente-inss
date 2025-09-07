import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              IncapacidadPermanente
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/blog">
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
                Blog
              </Button>
            </Link>
            <Link to="https://eu.jotform.com/es/build/252086191762359" target="_blank">
              <Button variant="default">
                Consulta Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
