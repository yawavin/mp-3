// import { useState } from 'react'
// import Education from './components/Education.tsx'
import Root from './components/Root.tsx'
// import {Footer} from './components/Footer.tsx'
// import {Nav} from './components/Nav.tsx'
// import {Projects} from './components/Projects.tsx'
// import {Skills} from './components/Skills.tsx'
// import {WorkExperience} from './components/WorkExperience.tsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
    const router = createBrowserRouter(
        [
            {path: '*', Component:Root}
        ]
    )

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
