import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home";
import Progress from "./Progress";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/progress" element={<Progress />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
