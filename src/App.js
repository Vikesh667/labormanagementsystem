import HomePages from "./Pages/HomePages";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import Dashboard from "./componenet/dashboard/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
