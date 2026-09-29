import {createBrowserRouter} from "react-router";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />
    },
    {
        path : "/",
        element: <Home/>
    }
])