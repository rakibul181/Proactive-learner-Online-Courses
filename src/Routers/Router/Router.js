import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../component/CourseDetails";
import CoursesContainear from "../../component/CoursesContainear";
import Enrole from "../../component/Enrole";
import ErrorPage from "../../component/ErrorPage";
import Home from "../../component/Home";
import Login from "../../component/Login";
import Resister from "../../component/Resister";
import CoursesLayout from "../../Layout/CoursesLayout";
import Main from "../../Layout/Main";
import PriveteRoute from "../PriveteRouter/PriveteRoute";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <CoursesLayout></CoursesLayout>,
                loader: () => fetch('https://proactive-learner-server.vercel.app/courses'),
                children: [
                    {
                        path: '/courses',
                        element: <CoursesContainear></CoursesContainear>,
                        loader: () => fetch('https://proactive-learner-server.vercel.app/courses')
                    },
                    {
                        path: '/courses/course/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`https://proactive-learner-server.vercel.app/course/${params.id}`)

                    }
                ]

            }, {
                path: 'signin',
                element: <Login></Login>
            },
            {
                path: 'resister',
                element: <Resister></Resister>
            },
            {
                path: 'enrole/:id',
                element: <PriveteRoute><Enrole></Enrole></PriveteRoute>,
                loader: ({ params }) => fetch(`https://proactive-learner-server.vercel.app/course/${params.id}`)
            }

        ]


    },
    
])