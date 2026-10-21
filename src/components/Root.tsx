import {Route, Routes} from 'react-router-dom';
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Nav from './Nav.tsx'
import Home from './Home.tsx'
import Education from './Education.tsx'
import Projects from './Projects.tsx'
import Skills from './Skills.tsx'
import WorkExperience from './WorkExperience.tsx'
import Other from './Other.tsx'

export default function Root() {
    return (
        <>
            <div className="page-wrapper">
                <Header/>
                <div className="container">
                    <Nav/>
                    <main>
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/education'} element={<Education/>}/>
                            <Route path={'/experiences'} element={<WorkExperience/>}/>
                            <Route path={'/projects'} element={<Projects/>}/>
                            <Route path={'/skills'} element={<Skills/>}/>
                            <Route path={'/other'} element={<Other/>}/>
                        </Routes>
                    </main>
                </div>
                <Footer/>
            </div>
            </>
            )
            }