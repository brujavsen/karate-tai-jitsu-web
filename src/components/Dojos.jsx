import React from 'react'
import { useLocation } from 'react-router-dom';

const Dojos = () => {
  const location = useLocation();

  if (location.state && location.state.scrollToTop) {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className='hero_dojo'>
        <div className='hero_title'>
          <h2>Dojos Habilitados</h2>
          <p>Tu viaje comienza aquí</p>
        </div>
      </div>
      <div className='dojos'>
        <div className='dojo'>
          <div className='dojo_info'>
            <div className='img'></div>
            <h3>Central <br/>(Gimnasio Gimbo)</h3>
            <p>
            Martes y Jueves <span>19:00 Hs</span> (Niños y Niñas) | <span>20:00 Hs</span> (Adolescentes y Adultos)
            </p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.5188723175836!2d-56.05856719968324!3d-34.745629345310434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02f32a11fc93d%3A0xeadef3cd032206fb!2sGimnasio%20Gimbo!5e0!3m2!1ses!2suy!4v1698958120803!5m2!1ses!2suy" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <div className='img'></div>
            <h3>Casarino <br/> (Salón la capilla KM 3)</h3>
            <p>
              Martes y Viernes <span>09:30 Hs</span> <br/>
              Lunes y Miércoles <span>18:00 Hs</span> | <span>19:00 Hs</span>
            </p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.3810983872654!2d-56.073483690954994!3d-34.754894600721045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a0292bbf1bfc47%3A0x94bdc66c3ac2a374!2sSsn%20Jos%C3%A9%20Obrero!5e0!3m2!1ses-419!2suy!4v1698957313593!5m2!1ses-419!2suy" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <div className='img'></div>
            <h3>Toledo <br/> (Club juventud unida)</h3>
            <p>
              Martes y Viernes <span>17:30 Hs</span>
            </p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.4742293639633!2d-56.09223592425364!3d-34.74364497290454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02ec7a9ef6a0b%3A0x4c0304852b9ab043!2sClub%20Juventud%20Unida!5e0!3m2!1ses-419!2suy!4v1698957994464!5m2!1ses-419!2suy" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='dojo'>
          <div className='dojo_info'>
            <div className='img'></div>
            <h3>Sauce <br/> (Club excursionista amistad)</h3>
            <p>
              Martes y Jueves <span>17:45 Hs</span> | <span>18:45 Hs</span>
            </p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.1179924964065!2d-56.06232601512308!3d-34.6505747496938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a03171bd8c5ddf%3A0xb6766effc48c22a1!2sKarate%20Dojo%20Sauce%20Tai%20Jitsu!5e0!3m2!1ses-419!2suy!4v1698958287605!5m2!1ses-419!2suy" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}

export default Dojos