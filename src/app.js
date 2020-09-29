/**
 * imoprting React librara to work with JSX format,
 * importing useContext hook to get website state  from context-api (state managment system), 
 * importing useState hook to create an internal state for a function component
 * importing useEffect hook to handle a componentDidMount life cycle, to hide\show the loading animation
 */
import React, { useContext, useState, useEffect, Fragment } from "react";
/**
 * importing created context from context-api (state managment system) to get the state with the help of useContext hook into our component
 */
import { SettingsContext } from './context';
/**
 * importing laoding component
 */
import { DotLoader } from "react-spinners";
/**
 * importing all website components
 */
import ENavbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import RecentOpenings from './components/recent'
import About from './components/about'
import Clients from './components/clients'
import Team from './components/team'
import Gallary from './components/gallary'
import Opinions from './components/opinions'
import Footer from './components/footer'
/**
 * importing an external style document
 */
import './app.css'
/**
 * function component representing a App component
 * @returns JSX App component
 */
const App = () => {
    /**
     * using useContext hook with created context to get website state from context-api,
     * also dectructure the state object to get the object that we need for this component only
     */
    const { data } = useContext(SettingsContext);
    /**
     * using useState hook to create an internal state for showing\hiding the loading animation
     */
    const [isLoading, setIsloading] = useState(true)
    /**
     * using useEffect hook to handle a componentDidMount life cycle, and setting new value for loading
     */
    useEffect(() => {
        if(Boolean(Object.keys(data).length)) setIsloading(false)
    }, [data])
    /**
     *  main method to return JSX of the component
     */
    return (
        <>
            {Boolean(Object.keys(data).length) ? (
                <Fragment>
                    <main>
                        <ENavbar />
                        <Hero />
                    </main>
                    <Cards />
                    <section className="bg-section">
                        <RecentOpenings />
                        <About />
                        <Clients />
                        <Team />
                        <Gallary />
                    </section>
                    <Opinions />
                    <Footer />
                </Fragment>
            )
            :
                <div className="loader">
                    <DotLoader
                        loading={isLoading}
                        size={200}
                        sizeUnit={"px"}
                        color="#3498db"
                    />
                </div>
            }
        </>
    )
}
// exporting the App component to another modules
export default App;