import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import VideoPlay from "../Videocall/App";

const Loadable = (Component) => (props) => {
  return (
    //the LoadingScreen component will de dispalyed while the screen is loading
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "vid", element: <VideoPlay /> },
        // { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
// const Page404 = Loadable(lazy(() => import("../pages/Page404")));
