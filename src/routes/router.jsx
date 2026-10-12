import {createBrowserRouter} from "react-router";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDeatail";

export const router = createBrowserRouter([ 
    {
        path: "*",
        element: <NotFound />
    },
    {
        path : "/",
        element: <Home/>
    },
    {
        path: "/product",
        element: <Shop/>
    },
    {
        path: "/product/:id",
        element: <ProductDetail/>
    }
])