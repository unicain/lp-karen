/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero'
import Profile from './components/Profile'
import Services from './components/Services'
import AiSection from './components/AiSection'
import MapsSection from './components/MapsSection'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="antialiased selection:bg-brand-gold selection:text-brand-dark">
      <Hero />
      <Profile />
      <Services />
      <AiSection />
      <MapsSection />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
