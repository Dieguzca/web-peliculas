import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Movies from "../pages/Movies"

const Router = () => {
    return (
        
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route  path="/movies" element={<Movies />} />
                
            </Routes>
       
    )
}

export default Router