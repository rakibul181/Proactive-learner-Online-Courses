import Courses from "../../component/Courses";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");
 

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'courses',
                element:<Courses></Courses>,
                loader: ()=>fetch('http://localhost:5000/courses')
            }
        ]


    }
])