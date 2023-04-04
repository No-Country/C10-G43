import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
