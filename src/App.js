// Import Depndency
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Components
import PrivateRoute from "./routeguard/routeguard";

//import Pages
import SplashScreen from "./pages/splash";
import OnBoardingScreen from "./pages/onboarding";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotpassword";
import SubmitOtp from "./pages/submitotp";
import Home from "./pages/home";
import AddPredictions from "./pages/addprediction";
import RidersProfile from "./pages/riders-profile";
import EditProfile from "./pages/edit-profile";
import Riders from "./pages/riders";
import FamilyPools from "./pages/familypools";
import FamilyPoolAdmin from "./pages/familypool-profile";
import CryptoExchange from "./pages/crypto-exchange";
import InvestorReport from "./pages/investor-report";
import Investors from "./pages/investors";
import InvestorTransactions from "./pages/investor-transactions";
import CreateFamilyPool from "./pages/createfamilypool";
import HedgeProfile from "./pages/hedge-profile";
import CreateHedge from "./pages/create-hedge";
import CoolHedge from "./pages/cool-hedge";
import VerifyEmail from "./pages/tempemail";
import Notfound from "./pages/notfound";
import FamilyPoolDetail from "./pages/familypooldetail";
import VoteFamilyPool from "./pages/votefamilypool";
import Pair from "./pages/pair";
import CreateHedgeVote from "./pages/create-hedge-vote";
import HedgeDetail from "./pages/hedgedetail";

import SinglePostPage from "./pages/singlepost";
import SinglePredictionPage from "./pages/singleprediction";
import FamilyPoolSettings from "./pages/familypoolsettings";
import HedgeSettings from "./pages/hedgesettings";
import FamilyPoolAddAdmin from "./pages/familypooladdadmin";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<OnBoardingScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/submit-code" element={<SubmitOtp />} />
          <Route path="/temporary-email-verify" element={<VerifyEmail />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/add-predictions" element={<AddPredictions />} />
            <Route path="/post/:id" element={ <SinglePostPage/>} />
            <Route path="/predictions/:id" element={<SinglePredictionPage/>} />
            <Route path="/riders" element={<Riders />} />
            <Route path="/riders/riders-profile" element={<RidersProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/family-pools" element={<FamilyPools />} />
            <Route path="/family-pools/pools-profile" element={<FamilyPoolAdmin />}/>
            <Route path="/family-pools/create-family-pool" element={<CreateFamilyPool />}/>
            <Route path="/family-pools/family-pool-details" element={<FamilyPoolDetail />}/>
            <Route path="/family-pools/create-vote" element={<VoteFamilyPool />}/>
            <Route path="/family-pools/settings" element={<FamilyPoolSettings />}/>
            <Route path="/family-pools/add-administrator" element={<FamilyPoolAddAdmin/>}/>
            <Route path="/crypto-exchange" element={<CryptoExchange />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/investor-transactions" element={<InvestorTransactions />}/>
            <Route path="/investor-report" element={<InvestorReport />} />
            <Route path="/riders/hedge-profile" element={<HedgeProfile />} />
            <Route path="/hedge/create" element={<CreateHedge />} />
            <Route path="/cool-hedge" element={<CoolHedge />} />
            <Route path="/select-pair" element={<Pair />} />
            <Route path="/hedge/create-vote" element={<CreateHedgeVote />} />
            <Route path="/hedge/hedge-details" element={<HedgeDetail />} />
            <Route path="/hedge/settings" element={<HedgeSettings />} />
          </Route>
          <Route path="*" exact={true} element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
