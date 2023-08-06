import HomePages from "./Pages/HomePages";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import Abc from "./componenet/Abc";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/abc" element={<Abc/>}/>
      </Routes>
    </>
  );
}

export default App;
