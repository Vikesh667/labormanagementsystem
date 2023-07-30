import HomePages from "./Pages/HomePages";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
