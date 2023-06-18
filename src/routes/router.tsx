import { createBrowserRouter } from "react-router-dom"

import PokeListPage from "../pages/pokeDex/list"
import PokeDetailPage from "../pages/pokeDex/detail"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PokeListPage />
  },
  {
    path: "/pokemon/:id",
    element: <PokeDetailPage />
  }
])