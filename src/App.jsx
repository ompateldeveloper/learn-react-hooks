import { Route, Routes } from "react-router-dom"
import Counter from "./pages/Counter/Counter"
import Navbar from "./components/Navbar"
import ErrorPage from "./pages/404/ErrorPage"
import Home from "./pages/Home/Home"
import LifecycleMethod from "./pages/LifecycleMethod/LifecycleMethod"
import ExUseState from "./pages/useState/ExUseState"
import ExUseEffect from "./pages/useEffect/ExUseEffect"
import ExUseRef from "./pages/useRef/ExUseRef"
import ExUseContext from "./pages/useContext/ExUseContext"
import ExUseCallback from "./pages/useCallback/ExUseCallback"
import ExUseDefferedValue from "./pages/useDefferedValue/ExUseDefferedValue"


function App() {
    return (
        <div className="">
            <Navbar />
            <div className="p-4">

                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/counter'} element={<Counter />} />
                    <Route path={'/lifecycle'} element={<LifecycleMethod />} />
                    <Route path={'/usestate'} element={<ExUseState />} />
                    <Route path={'/useeffect'} element={<ExUseEffect />} />
                    <Route path={'/useref'} element={<ExUseRef />} />
                    <Route path={'/usecontext'} element={<ExUseContext />} />
                    <Route path={'/usecallBack'} element={<ExUseCallback />} />
                    <Route path={'/usedeffered'} element={<ExUseDefferedValue />} />
                    <Route path={'*'} element={<ErrorPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
