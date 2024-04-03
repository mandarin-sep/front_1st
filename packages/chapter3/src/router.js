

  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import MainPage from './MainPage';
  import HelmetPage from './HelmetPage';
 
  export default function AppRouter() {

    return (
      
            <Router>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/helmet" element={<HelmetPage />} />
              </Routes>
            </Router>
         
    );
  }
  