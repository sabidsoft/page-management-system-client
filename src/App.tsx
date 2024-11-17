import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useInitialAuthCheck from "./hooks/useInitialAuthCheck";
import Loader from "./components/loader/Loader";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import DataDeletionInstructions from "./pages/dataDeletionInstructions/DataDeletionInstructions";
import AdminSignup from "./pages/adminSignup/AdminSignup";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import AddFacebookPage from "./pages/addFacebookPage/AddFacebookPage";
import Page from "./pages/Page/Page";
import CreatePagesPost from "./pages/createPagesPost/CreatePagesPost";
import BarishalDivision from "./pages/barishalDivision/BarishalDivision";
import ChattogramDivision from "./pages/chattogramDivision/ChattogramDivision";
import DhakaDivision from "./pages/dhakaDivision/DhakaDivision";
import KhulnaDivision from "./pages/khulnaDivision/KhulnaDivision";
import MymensinghDivision from "./pages/mymensinghDivision/MymensinghDivision";
import RajshahiDivision from "./pages/rajshahiDivision/RajshahiDivision";
import RangpurDivision from "./pages/rangpurDivision/RangpurDivision";
import SylhetDivision from "./pages/sylhetDivision/SylhetDivision";

export default function App() {
  const initialAuthChecked = useInitialAuthCheck();

  return !initialAuthChecked ? (
    <Loader />
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/pages" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/barishal-division" element={<PrivateRoute><BarishalDivision /></PrivateRoute>} />
        <Route path="/chattogram-division" element={<PrivateRoute><ChattogramDivision /></PrivateRoute>} />
        <Route path="/dhaka-division" element={<PrivateRoute><DhakaDivision /></PrivateRoute>} />
        <Route path="/khulna-division" element={<PrivateRoute><KhulnaDivision /></PrivateRoute>} />
        <Route path="/mymensingh-division" element={<PrivateRoute><MymensinghDivision /></PrivateRoute>} />
        <Route path="/rajshahi-division" element={<PrivateRoute><RajshahiDivision /></PrivateRoute>} />
        <Route path="/rangpur-division" element={<PrivateRoute><RangpurDivision /></PrivateRoute>} />
        <Route path="/sylhet-division" element={<PrivateRoute><SylhetDivision /></PrivateRoute>} />

        <Route path="/pages/:pageId" element={<PrivateRoute><Page /></PrivateRoute>} />
        <Route path="/create-pages-post" element={<PrivateRoute><CreatePagesPost /></PrivateRoute>} />
        <Route path="/add-facebook-page" element={<PrivateRoute><AddFacebookPage /></PrivateRoute>} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-deletion-instructions" element={<DataDeletionInstructions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
