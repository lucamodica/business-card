import './App.css'
import { Propic } from './components/propic/Propic'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadLinksPreset } from 'tsparticles-preset-links';

export default function App() {
  
  const particlesInit = useCallback(async (engine: Engine) => {
    
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadLinksPreset(engine);
    await loadFull(engine);
  }, []);

  return (
    <div className="app">
      <div className='business-card'>
        <Propic />
        <Content />
        <Footer />
      </div>
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="tsparticles"
        options={{
          preset: 'links'
        }} />
    </div>
  )
}
