import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../component/CourseDetails";
import CoursesContainear from "../../component/CoursesContainear";
import Main from "../../Layout/Main";

 
 

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'courses',
                element:<CoursesContainear></CoursesContainear>,
                loader: ()=>fetch('https://proactive-learner-server.vercel.app/courses')
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=> {
                    fetch(`https://proactive-learner-server.vercel.app/course/${params.id}`)
                    console.log(params);
                }
            }
        ]


    }
])