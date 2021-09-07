import { lazy } from "solid-js";
//Cheating, just creating the routes on the client. Maybe fix later on.
const fetchRoutes = [
  {
    path: "/",
    component: lazy(() => import("../views/Home")),
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
  {
    path: "/c8794faf4a49a3f2",
    component: lazy(() => import("../views/art/Project_11")),
  },
  {
    path: "/a9a14763660745c0",
    component: lazy(() => import("../views/art/Project_12")),
  },
  {
    path: "/84dd169f674becbb",
    component: lazy(() => import("../views/art/Project_13")),
  },
  {
    path: "/87d82fb59adff502",
    component: lazy(() => import("../views/art/Project_14")),
  },
  {
    path: "/14c02b611852c9c3",
    component: lazy(() => import("../views/art/Project_15")),
  },
  {
    path: "/4ad2ff2df0f22ba8",
    component: lazy(() => import("../views/art/Project_16")),
  },
  {
    path: "/85a1a66265b48a80",
    component: lazy(() => import("../views/art/Project_17")),
  },
  {
    path: "/0cfd5b228d03bffc",
    component: lazy(() => import("../views/art/Project_18")),
  },
  {
    path: "/20afa9dd5d18ccc1",
    component: lazy(() => import("../views/art/Project_19")),
  },
  {
    path: "/c22178a1494050d5",
    component: lazy(() => import("../views/art/Project_20")),
  },
];

export default fetchRoutes;
