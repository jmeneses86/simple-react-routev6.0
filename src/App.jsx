import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route element={<LayoutPublic></LayoutPublic>} path="/">
                    <Route element={<Inicio></Inicio>} path="/"></Route>
                    <Route
                        element={<Contacto></Contacto>}
                        path="/contacto"
                    ></Route>
                    <Route element={<Blog></Blog>} path="/blog"></Route>
                    <Route
                        element={<BlogDetails></BlogDetails>}
                        path="/blog/:id"
                    ></Route>
                    <Route element={<NotFound></NotFound>} path="/*"></Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
