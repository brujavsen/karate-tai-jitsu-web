import React from 'react'
import { Link } from 'react-router-dom'
import { TbPlaneTilt, TbHandClick } from "react-icons/tb";
const Index = () => {

  return (
    <>
      <section className='hero_index'>
        <picture className='logo'>
          <source srcSet="/logo.webp"  type='image/webp' />
          <img loading='lazy' src="/logo.jpg" alt="logotipo img" />
        </picture>
        <div className='title'>
          <h2>Escuela Tai Jitsu</h2>
          <p>Karate Uruguay</p>
        </div>
      </section>
      <hr className='lbreak' />
      <p className='first_class'>Te invitamos a tu primer clase gratis</p>
      <section className='benefit_section'>
        <h2>¿Por qué hacer Tai Jitsu?</h2>
        <p>Explora cómo el <span>Tai Jitsu</span> va más allá de las técnicas de combate y se enfoca en el equilibrio y la armonía entre el cuerpo y la mente.</p>
        <h2>¿Cómo podemos ayudarte?</h2>
        <div className='grid'>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Listo para impulsar tu autoestima y seguridad?</p>
            <p className='card_cnt'>Nuestros expertos te ayudarán a desarrollar una mayor autoestima y seguridad en ti mismo.</p>
          </article>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Buscas estimular tu autocontrol y bienestar emocional?</p>
            <p className='card_cnt'>Aprenderás técnicas para controlar tus emociones y reacciones, promoviendo un autocontrol saludable.</p>
          </article>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Quieres desarrollar valores positivos en tu vida?</p>
            <p className='card_cnt'>Fomentamos la incorporación de valores positivos en tu vida para un crecimiento personal duradero.</p>
          </article>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Deseas aumentar tu confianza?</p>
            <p className='card_cnt'>Nuestros programas te ayudarán a construir una confianza sólida en ti mismo.</p>
          </article>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Necesitas descargar excesos de energía?</p>
            <p className='card_cnt'>Ofrecemos actividades físicas y emocionales que te permiten liberar el estrés y la energía acumulada.</p>
          </article>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Quieres mejorar tu concentración?</p>
            <p className='card_cnt'>Desarrollamos ejercicios y técnicas para mejorar la concentración y el enfoque.</p>
          </article>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Buscas incrementar tu coordinación motriz?</p>
            <p className='card_cnt'>Nuestros programas incluyen ejercicios que mejoran la coordinación motriz.</p>
          </article>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Listo para tonificar tus músculos?</p>
            <p className='card_cnt'>Ofrecemos clases de acondicionamiento físico que te ayudarán a tonificar tus músculos y mejorar tu resistencia.</p>
          </article>
          <article className='card'>
            <TbHandClick/>
            <p className='card_title'>¿Quieres mejorar la circulación sanguínea?</p>
            <p className='card_cnt'>A través de la actividad física y la relajación, mejoramos la circulación sanguínea.</p>
          </article>
        </div>
        <div className='final_info'>
          <p>¡Únete a nuestro centro de Tai Jitsu y experimenta todos estos beneficios en tu propio viaje hacia la salud física y mental!</p>
          <Link to='/dojos'>Visita nuestros Dojos <TbPlaneTilt/></Link>
          <p>Explora nuestra <Link to='/services' className='service-btn'>Propuesta Integral</Link> de Karate Tai Jitsu y desbloquea un mundo de técnicas y conocimientos completos.</p>
        </div>
      </section>
    </>
  )
}

export default Index