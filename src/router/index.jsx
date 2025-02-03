import { useRoutes } from "react-router-dom";
import { UserTemplate } from "../templates/UserTemplate/UserTemplate";
import { Login, Page404, HomePage, Register} from "../pages"; 
import { CatCard } from "../components"

export const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <UserTemplate />,
            children: [
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