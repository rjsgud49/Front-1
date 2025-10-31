import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import Contact from './pages/Contact/Contact';
import Exchange from './pages/Exchange/Exchange';
import Events from './pages/Event/Event';
import Profile from './pages/Profile/Profile';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/community" element={<Community />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
