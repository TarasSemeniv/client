import {createBrowserRouter} from "react-router";
import App from "../App";
import Articles from "../pages/Articles";
import CreateArticle from "../pages/CreateArticle";
import Login from "../pages/Login"
import AuthRoute from "./AuthRoute";
import ArticleDetails from "../pages/ArticleDetails";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ArticleTable from "../pages/ArticleTable";
import EditArticle from "../pages/EditArticle";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Articles />
            },
            {
                path: "/articles/:id",
                element: <ArticleDetails />
            },
            {
                path: "/articles/create",
                element: <AuthRoute><CreateArticle /></AuthRoute>
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
                path: "/profile",
                element: <AuthRoute><Profile/></AuthRoute>
            },
            {
                path: "/articles/table",
                element: <AuthRoute><ArticleTable /></AuthRoute>
            },
            {
                path: "/articles/edit/:id",
                element: <AuthRoute><EditArticle /></AuthRoute>
            }
        ]
    }
]);

export default routes;