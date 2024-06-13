import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js"
import Body from "../components/Body.js"
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import Error from "../components/Error.js";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import RestaurantMenu from "../components/RestaurantMenu.js";

  


const AppLayout=()=> {
    return <div className="app">
        <Header/>
        <Outlet/>
    </div>
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
//jsx - is not Html in JS , but it's a HTML like syntax or XML like

root.render(<RouterProvider router={appRouter}/>)



// const parent = React.createElement("div",
//     { id: "parent" }, React.createElement("div",
//         { id: "child" }, [React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag"), React.createElement("h2", {}, "I am writing in React")]
//     ))

// //const heading = React.createElement("h1", { id: "heading" }, "Hello World from React")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent);