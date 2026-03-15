import heroImg from '../../assets/heroImg.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="Aman Punetha" className='avatar' />
      <div className='intro'>
        <h1>Hi, I'm Aman Punetha <span className='wave'>👋</span></h1>
        <p className='tagline'>Backend Engineer · System Designer · Cloud Native Builder</p>
        <p>
          I design <strong>scalable systems</strong> and <strong>cloud-native applications</strong> — 
          from APIs and distributed workflows to automated data pipelines. 
          My toolkit includes TypeScript, Python, AWS, and Docker.
        </p>
        <p>
          Currently exploring the intersection of <strong>backend engineering</strong> and <strong>AI</strong> — 
          building workflows where systems think, process, and decide using large language models.
        </p>
        <p className='cta-text'>
          This is where I share what I build, how I architect, and what excites me.
        </p>
      </div>
    </section>
  )
}

export default Hero
