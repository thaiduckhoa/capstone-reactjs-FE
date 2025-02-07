import { useRoutes } from "react-router-dom";
import { UserTemplate } from "../templates/UserTemplate/UserTemplate";
import { Login, Page404, HomePage, Register, JobList, UserProfile } from "../pages"; 
import { CatCard } from "../components";

export const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <UserTemplate />,
            children: [
                {
                    path: "/userprofile/:id",
                    element: <UserProfile />
                },
                {
                    path: "/", 
                    element: <HomePage />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/joblist",
                    element: <JobList />
                },
            ],
        },
        {
            path: "*",
            element: <Page404 />
        },
        {
            path:'/catcard',
            element: <CatCard/>
        }
    ]);
};
