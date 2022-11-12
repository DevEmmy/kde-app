import './App.css';
import 
{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import HomePage from './Components/Home/HomePage';
import RealEstateListing from "./Components/RealEstate/RealEstateListing";
import Cars from "./Components/Cars/CarsListing"
import OtherSections from "./Components/OtherSections/OtherSections"
import Messages from './Components/Dashboard/Messages';
import Notifications from './Components/Dashboard/Notifications';
import Profile from './Components/Dashboard/Profile/Profile';
import Wallet from './Components/Dashboard/Wallet';
import EachBuilding from './Components/RealEstate/EachBuilding';
import EachBuildingPhotos from './Components/RealEstate/EachBuildingPhotos';
import EachCars from './Components/Cars/EachCars';
import EachCarPhotos from './Components/Cars/EachCarPhotos'
import About from './Components/About/About';
import Help from './Components/About/Help';
import Earning from './Components/About/Earning';
import Benefits from './Components/About/Benefits';
import AddCar from './Components/Cars/AddCar';
import AddRealEstate from './Components/RealEstate/AddRealEstate';
import Dashboard from './Components/Dashboard/Dashboard';
import Savedpost from './Components/Dashboard/Savedpost';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './container/ProfileContainer.jsx';
import Stat from './Components/Stat/Stat';
import Verification from './Components/Verification/Verification';
import ProfileList from './container/ProfileList';
import EditProfile from './Components/Dashboard/Profile/EditProfile';
<<<<<<< HEAD
import ProfileStat from './container/ProfileStat';
import Waitlist from './Components/Page/Waitlist';
=======
import SignUpPage from './Components/Page/SignupPage';
import LoginPage from './Components/Page/LoginPage';
>>>>>>> be2ed1713d0e943d7b37bd2286079a88ce311f30

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Waitlist/> } />
        <Route path='/signup' element={<LoginPage/>}/>
        <Route path='/login' element={<SignupPage/>}/>
=======
        <Route path='/' element={<HomePage/> } />
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
>>>>>>> be2ed1713d0e943d7b37bd2286079a88ce311f30
        <Route path='/savedpost' element={<Savedpost/>}/>
        <Route path="/real-estate" element={<RealEstateListing />} />
        <Route path="/real-estate/add" element={<AddRealEstate />} />
        <Route path="/real-estate/:title" element={<EachBuilding active={0} />} />
        <Route path="/real-estate/:title/:Id" element={<EachBuildingPhotos active={0} />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/add" element={<AddCar />} />
        <Route path="/cars/:title" element={<EachCars active={0} />} />
        <Route path="/cars/:title/:Id" element={<EachCarPhotos active={0}/>} />
        <Route path="/others" element={<OtherSections />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/profile/verification" element={<Profile/>}/>
        <Route path="/dashboard/" element={<Profile />} />
        <Route path="/dashboard/wallet" element={<Wallet />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />}/>
        <Route path="/help/earning" element={<Earning />}/>
        <Route path="/help/benefits" element={<Benefits />}/>
        <Route path="/profile/" element={<ProfileContainer />} />
        <Route path="/profile/verification" element={<Verification />} />
        <Route path="/profile/list" element={<ProfileList/>} />
        <Route path="/profile/stat" element={<ProfileStat/>} />
        <Route path='/profile/edit' element={<EditProfile/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
