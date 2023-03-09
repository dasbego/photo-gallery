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
      original: 'DSC_0409.JPG',
      description:
        'Una de nuestras primeras citas en el parque "Los Columpios", Morelos.',
    },
    {
      original: 'IMG_4773.jpg',
      description: 'Su primer ramo de Gerberas, las flores favoritas de Angie.',
    },
    { description: 'Janis y Mila la amaron a primera vista' },
    { description: 'Nos hicimos novios el 16 de Mayo del 2021' },
    { description: 'Nuestras primeras vacaciones por cumpleaños #30 de Memo' },
    {
      description:
        'Vacaciones de Fin de Semana en Rosarito con su familia y amigos',
    },
    {
      description:
        'Cumpleaños de Angie #30 en Huasca de Ocampo. Memo le hizo un flan como regalo',
    },
    { description: 'Las Estacas, Tlatizapán, Morelos.' },
    {
      description: 'Redescubrimos nuestro amor al camping en "Los Manantiales"',
    },
    {
      description:
        'Noviembre 2021. Decidimos compranos unas bicis para salir a rodar otra de las cosas que nos encanta hacer juntos',
    },
    { description: 'Nuestra primara Navidad juntos' },
    { description: 'Fin de año 2021. Zipolite, Oaxaca' },
    {
      description: 'Regresamos a Huasca de Ocampo a hacer ciclismo de montaña',
    },
    {
      description:
        'Hemos ido a muchos conciertos pero el que llevamos siempre en el ❤️ es el de Coldplay del 3 de Abril del 2022',
    },
    { description: 'Vacaciones en Q. Roo, Abril 2022.' },
    { description: 'Viaje a Puerto Escondido con amigos de Memo' },
    {
      description:
        'Decidimos vivir juntos, y nos mudamos juntos a la CDMX el 30 de Julio del 2022',
    },
    {
      description:
        'A los dos nos encanta cocinar. Desde entonces Angie regresa al depa a la hora de la comida. ',
    },
    {
      description:
        'Cumpleaños #31 de Angie. Comenzamos el festejo en nuestro depa con sus amigos.',
    },
    { description: 'Noviembre 2022. Adoptamos a Coquito.' },
    { description: 'Navidad 2022.' },
    { description: 'Viaje de Fin de Año 2022. Sayulita, Nayarit.' },
    {
      description:
        'En este viaje nos comprometimos en la puesta de Sol del 28 de Diciembre.',
    },
    {
      description:
        'En febrero del 2023 decidimos que el 27 de Mayo del 2023 sería el día de Nuestra Boda.',
    },
  ].map((item) => ({ ...item, original: `${HOST_PATH}${item.original}` }));

  return (
    <Gallery {...props} showPlayButton={false} autoPlay={false} items={data} />
  );
};

export default MyGallery;
