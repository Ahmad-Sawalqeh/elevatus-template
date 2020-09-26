import React from 'react';
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

const breakpoints = {
    1200: {
        width: 1200,
        slidesPerView: 4,
    },
    1024: {
        width: 1024,
        slidesPerView: 3,
    },
    768: {
        width: 768,
        slidesPerView: 2,
    },
    481: {
        width: 481,
        slidesPerView: 1,
    }
}

const App = () => {
    return (
        <>
            <main>
                <ENavbar />
                <Hero />
            </main>
            <Cards breakpoints={breakpoints} />
            <section className="bg-section">
                <RecentOpenings breakpoints={breakpoints} />
                <About />
                <Clients breakpoints={breakpoints} />
                <Team breakpoints={breakpoints} />
                <Gallary />
            </section>
            <Opinions />
            <Footer />
        </>
    )
}

export default App;