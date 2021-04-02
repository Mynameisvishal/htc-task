import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Employee from './components/Employee';
import EmployeeDetails from './components/EmployeeDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Category />
      <Employee />
      <EmployeeDetails />
      <Footer />
    </div>
  );
}

export default App;
