import { Route, Routes } from "react-router-dom"
import Counter from "./pages/Counter/Counter"
import Navbar from "./components/Navbar"
import ErrorPage from "./pages/404/ErrorPage"
import Home from "./pages/Home/Home"
import LifecycleMethod from "./pages/LifecycleMethod/LifecycleMethod"


function App() {
    return (
        <div className="">
            <Navbar />
            <div className="p-4">

                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/counter'} element={<Counter />} />
                    <Route path={'/lifecycle'} element={<LifecycleMethod />} />
                    <Route path={'*'} element={<ErrorPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
