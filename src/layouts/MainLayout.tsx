import {RouterProvider} from "react-router-dom"
import { routes } from "../routes/router"

import Navbar from "../components/navbar"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={routes} />
    </div>
  )
}

export default MainLayout
