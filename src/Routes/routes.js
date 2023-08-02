import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/Pages/Home/HomePage";
import Main from "../Components/Layout/Main/Main";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddBlog from "../Components/Pages/DashboardPages/AddBlog";
import AllBlogsList from "../Components/Pages/DashboardPages/AllBlogsList";
import SingleBlogDetailsPage from "../Components/Pages/Home/SingleBlogDetailsPage";
import EditBlog from "../Components/Pages/DashboardPages/EditBlog";
import ReadingHistoryPage from "../Components/Pages/Home/ReadingHistoryPage";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/blogDetails",
                element: <SingleBlogDetailsPage />,
            },
            {
                path: "/history",
                element: <ReadingHistoryPage />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <AllBlogsList />,
            },
            {
                path: "/dashboard/addBlog",
                element: <AddBlog />,
            },
            {
                path: "/dashboard/editBlog",
                element: <EditBlog />,
            },
        ],
    },
]);

export default routes;
