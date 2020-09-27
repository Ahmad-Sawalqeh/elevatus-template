import React, { useState, useEffect, useContext, Fragment } from "react";
import { SettingsContext } from './context';
import { DotLoader } from "react-spinners";

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

import './app.css'

const App = () => {

    const { data } = useContext(SettingsContext);

    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        if(Boolean(Object.keys(data).length)) setIsloading(false)
    }, [data])

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
                        size={250}
                        sizeUnit={"px"}
                        color="#3498db"
                    />
                </div>
            }
        </>
    )
}

export default App;