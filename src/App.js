import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { FileHandling } from "./page/FileHandling";
import { Home } from "./page/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file" element={<FileHandling />} />
      </Routes>
      <ToastContainer autoClose={100}/>
    </div>
  );
}

export default App;
