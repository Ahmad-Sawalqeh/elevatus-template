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

import './app.css'

const App = () => {
    return (
        <>
            <main>
                <ENavbar />
                <Hero />
            </main>
            <Cards />
            <section class="bg-section">
                <RecentOpenings />
                <About />
            </section>
            <Clients />
            <section class="bg-section">
                <Team />
                <Gallary />
            </section>
            <Opinions />
        </>
    )
}

export default App;