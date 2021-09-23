import { lazy } from "solid-js";
//Cheating, just creating the routes on the client. Maybe fix later on.
const fetchRoutes = [
  {
    path: "/",
    component: lazy(() => import("../views/Home")),
  },
  {
    path: "/collated/blanghamm/admin/list",
    component: lazy(() => import("../views/Collated")),
  },
  {
    path: "/171cbc11889d6afb",
    component: lazy(() => import("../views/art/Project_1")),
  },
  {
    path: "/027e048a75c99534",
    component: lazy(() => import("../views/art/Project_2")),
  },
  {
    path: "/0519f198b297466a",
    component: lazy(() => import("../views/art/Project_3")),
  },
  {
    path: "/07459119b391dd23",
    component: lazy(() => import("../views/art/Project_4")),
  },
  {
    path: "/34056b9864e87020",
    component: lazy(() => import("../views/art/Project_5")),
  },
  {
    path: "/ac172752c4ba3f9c",
    component: lazy(() => import("../views/art/Project_6")),
  },
  {
    path: "/4db83f75a4eb9aa",
    component: lazy(() => import("../views/art/Project_7")),
  },
  {
    path: "/217fffe748c22d0c",
    component: lazy(() => import("../views/art/Project_8")),
  },
  {
    path: "/21e4a381a3a8cd2",
    component: lazy(() => import("../views/art/Project_9")),
  },
  {
    path: "/1ff29dee9383f27c",
    component: lazy(() => import("../views/art/Project_10")),
  },
];

export default fetchRoutes;
