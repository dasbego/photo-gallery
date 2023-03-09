import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const HOST_PATH =
  'https://photo-gallery-dasbego.s3.us-east-1.amazonaws.com/Fotos%20Pre%20Boda%20Babies/';

const MyGallery = (props) => {
  const play = (video) => {
    video.play();
  };
  const stop = (video) => {
    video.pause();
  };
  const togglePlay = (videoId) => {
    const video = document.getElementById(videoId);
    if (video.paused) {
      play(video);
    } else {
      stop(video);
    }
  };
  const _renderVideo = (item) => {
    return (
      <div>
        <video
          id={item.videoId}
          type="video/mp4"
          muted
          height="720px"
          src={`${HOST_PATH}${item.embedUrl}`}
          autoPlay
          onClick={() => togglePlay(item.videoId)}
        />
        <span className="image-gallery-description">{item.description}</span>
      </div>
    );
  };

  const data = [
    {
      original: 'DSC_1632.JPG',
      description: 'Nosotros somos Angie y Memo, y esta es nuestra historia.',
    },
    {
      original: '36f39a89-4fff-455d-9562-7e4d85aa8cb5.jpg',
      showPlayButton: true,
      videoId: 'jengavideo',
      embedUrl: 'IMG_3618.mp4',
      renderItem: _renderVideo,
      description:
        'Nos conocimos en Abril 2021 en una fiesta jugando Jenga. Este video lo tomó Memo de ese día.',
    },
    {
      original: 'c23337ef-8a51-4209-b160-a6a8eccdce15.jpg',
      description:
        'Pero nos enamoramos bailando, en medio del lugar, la música ya iba llegando al último compás. \u{1F3B6} Pa-pa-pa-pa-eo-eo \u{1F3A4}. ¿Quién iba a pensar que después de este primer baile nos íbamos a enamorar?',
    },
    {
      original: 'DSC_0409.JPG',
      description:
        'Una de nuestras primeras citas en el parque "Los Columpios", Morelos.',
    },
    {
      original: 'DSC_0447.JPG',
      description: 'Janis y Mila la amaron a primera vista \u{1F49B}\u{1F436}',
    },
    {
      original: 'DSC_1002.JPG',
      description: 'Nos hicimos novios el 16 de Mayo del 2021 \u{1F48F}',
    },
    {
      original: 'IMG_5331.jpg',
      description: 'Angie siempre consiente a Memo con postres. \u{1F368}',
    },
    {
      original: 'IMG_5333.jpg',
      description:
        'Memo vivía en Cuernavaca y Angie en CDMX. Pero a pesar de que sólo nos veíamos cada 8 o 15 días, todas las noches nos llamábamos por teléfono. \u{1F4DE}\u{1F49B}',
    },
    {
      original: 'IMG_6555.jpg',
      description:
        'Nuestras primeras vacaciones por cumpleaños #30 de Memo el 2 de Agosto del 2021 en Xcaret, Playa Del Carmen, Q.R.',
    },
    {
      original: 'IMG_1400.JPG',
      description:
        'Vacaciones de Fin de Semana en Rosarito, B.C.S. con familia de Angie y amigos.',
    },
    {
      original: 'IMG_7250.jpg',
      description:
        'Cumpleaños de Angie #30 el 10 de Septiembre del 2021 en Huasca de Ocampo. Memo le hizo un flan como regalo.',
    },
    {
      original: 'IMG_7572.jpg',
      description:
        '18 Septiembre 2021. Ex-convento Desierto de Los Leones, CDMX',
    },
    {
      original: '16f3a6e4-a80a-476d-b1c5-872af8ae026d.jpg',
      description: '24 Octubre 2021. Las Estacas, Tlatizapán, Morelos.',
    },
    {
      original: '8f5c7d28-77fe-4e94-ac22-dfab536ac7df.jpg',
      description:
        '8 Noviembre 2021. Redescubrimos nuestro amor al camping en "Los Manantiales", Morelos. \u{1F3D5}\uFE0F',
    },
    {
      original: 'IMG_8361.mp4',
      showPlayButton: true,
      videoId: 'bicisvideo',
      embedUrl: 'IMG_8361.mp4',
      renderItem: _renderVideo,
      description:
        'Noviembre 2021. Decidimos compranos unas bicis para salir a rodar, otra de las cosas que tenemos en común.',
    },
    {
      original: 'IMG_8631.JPG',
      description: 'Nuestra primera Navidad juntos',
    },
    {
      original: 'IMG_8499.JPG',
      description:
        'Salimos de Vacaciones de fin de año 2021. \u{1F31F} Zipolite y Mazunte, Oaxaca.',
    },
    {
      original: 'IMG_7572.jpg',
      description: 'Regresamos a Huasca de Ocampo a hacer ciclismo de montaña',
    },
    {
      original: 'IMG_7572.jpg',
      description:
        'Hemos ido a muchos conciertos pero el que llevamos siempre en el ❤️ es el de Coldplay del 3 de Abril del 2022',
    },
    {
      original: 'IMG_7572.jpg',
      description: 'Vacaciones en Q. Roo, Abril 2022.',
    },
    {
      original: 'IMG_7572.jpg',
      description: 'Viaje a Puerto Escondido con amigos de Memo',
    },
    {
      original: 'IMG_7572.jpg',
      description:
        'Decidimos vivir juntos, y nos mudamos juntos a la CDMX el 30 de Julio del 2022',
    },
    {
      original: 'IMG_7572.jpg',
      description:
        'A los dos nos encanta cocinar. Desde entonces Angie regresa al depa a la hora de la comida. ',
    },
    {
      original: 'IMG_7572.jpg',
      description:
        'Cumpleaños #31 de Angie. Comenzamos el festejo en nuestro depa con sus amigos.',
    },
    {
      original: 'IMG_7572.jpg',
      description: 'Noviembre 2022. Adoptamos a Coquito.',
    },
    {
      original: 'IMG_7572.jpg',
      description: 'Navidad 2022.',
    },
    {
      original: 'IMG_7572.jpg',
      description: 'Viaje de Fin de Año 2022. Sayulita, Nayarit.',
    },
    {
      original: 'IMG_7572.jpg',
      description:
        'En este viaje nos comprometimos en la puesta de Sol del 28 de Diciembre.',
    },
    {
      original: 'IMG_7572.jpg',
      description:
        'En febrero del 2023 decidimos que el 27 de Mayo del 2023 sería el día de Nuestra Boda.',
    },
  ].map((item) => ({ ...item, original: `${HOST_PATH}${item.original}` }));

  return (
    <Gallery {...props} showPlayButton={false} autoPlay={false} items={data} />
  );
};

export default MyGallery;
