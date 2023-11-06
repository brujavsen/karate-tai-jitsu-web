import React from 'react'

const Services = () => {

  let services = [
    {url: "/service-1.jpeg", title: "Clases de Karate"},
    {url: "/service-1.jpeg", title: "Defensa Personal"},
    {url: "/service-4.jpeg", title: "Actividades Recreativas"},
    {url: "/service-2.jpeg", title: "Uso de armas tradicionales (kobudo)"},
    {url: "/service-5.jpeg", title: "Torneos nacionales e internacionales"},
    {url: "/service-6.jpeg", title: "Graduaciones Avaladas"},
    {url: "/service-3.jpeg", title: "Paseos"},
    {url: "/service-7.jpeg", title: "Campamentos"},
    {url: "/service-7.jpeg", title: "Encuentros"}
  ];

  return (
    <>
      <div className='hero_services'>
        <div className='hero_title'>
          <h2>Propuesta Integral</h2>
        </div>
      </div>
      <section className='main_services'>
        <div className='main_title'>
          <h2>Explora nuestra Propuesta Integral de Karate Tai Jitsu</h2>
          <p>Con profesores capacitados, con más de 15 años de experiencia</p>
        </div>
        {
          services?.map(service => (
            <h2>{service.title}</h2>
          ))
        }
      </section>
    </>
  )
}

export default Services