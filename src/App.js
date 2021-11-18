// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/AuthProvider';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TravelPackages from './components/Home/TravelPackages/TravelPackages';
import AddPackage from './components/Home/TravelPackages/AddPackage/AddPackage';
import DetailsPackage from './components/Home/TravelPackages/DetailsPackage/DetailsPackage';
import MyBookingForm from './components/MyBookings/MyBookingForm.js';
import ManageAllBookings from './components/MyBookings/ManageAllBookings/ManageAllBookings';
import MyBookings from './components/MyBookings/MyBookings/MyBookings';
import UpDateBookings from './components/MyBookings/UpDateBookings/UpDateBookings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/servics'>
              <TravelPackages></TravelPackages>
            </Route>

            <Route exact path='/travel-packages'>
              <TravelPackages></TravelPackages>
            </Route>

            <Route exact path='/details'>
              <DetailsPackage></DetailsPackage>
            </Route>

            <Route exact path='/details/:id'>
              <DetailsPackage></DetailsPackage>
            </Route>

            <PrivateRoute exact path='/my-bookings/:id'>
             <MyBookingForm></MyBookingForm>
            </PrivateRoute>

            <Route exact path='/manage-bookings'>
              <ManageAllBookings></ManageAllBookings>
            </Route>

            <Route exact path='/my-bookings'>
              <MyBookings></MyBookings>
            </Route>

            <Route exact path='/update-bookings/:bookingId'>
              <UpDateBookings></UpDateBookings>
            </Route>

            <Route exact path='/add-package'>
              <AddPackage></AddPackage>
            </Route>
            
          </Switch>

          
        <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
