import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../component/CourseDetails";
import CoursesContainear from "../../component/CoursesContainear";
import Home from "../../component/Home";
import CoursesLayout from "../../Layout/CoursesLayout";
import Main from "../../Layout/Main";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
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
                        loader: ({ params }) =>fetch(`https://proactive-learner-server.vercel.app/course/${params.id}`)
                        
                    }
                ]

            },

        ]


    }
])