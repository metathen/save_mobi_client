import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import {NextUIProvider} from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./pages/login"
import { Admin } from "./pages/admin"
import { Home } from "./pages/home"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container);

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/admin',
      element: <Admin />
    },
    {
      path: "/",
      element: <Home />
    }
  ])

  const menuArr = [
    {
      id: '12',
      path: 'service',
      name: 'услуги'
    },
    {
      id: '123',
      path: 'form',
      name: 'оставить заявку'
    },
    {
      id: '1234',
      path: 'product',
      name: 'продукты'
    }
  ]

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <Header list={menuArr} />
          <RouterProvider router={router} />
          <Footer />
        </NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
