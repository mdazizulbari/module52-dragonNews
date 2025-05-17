import { createBrowserRouter } from "react-router";

const router=createBrowserRouter(
    [
        {path:"/", Component:},
        {path:"/auth", Component:},
        {path:"/news", Component:},
        {path:"/*", Component:},
    ]
)

export default router