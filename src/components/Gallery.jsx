import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const HOST_PATH =
  'https://photo-gallery-dasbego.s3.us-east-1.amazonaws.com/Fotos%20Pre%20Boda%20Babies/';

const MOBILE_BREAKPOINT = 500;

const MyGallery = (props) => {
  const galleryRef = React.createRef();

  React.useEffect(() => {
    if (window.screen.width <= MOBILE_BREAKPOINT) {
      galleryRef.current.fullScreen();
    }
  });
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
      <>
        <video
          id={item.videoId}
          type="video/mp4"
          width={item.width ? item.width : 'auto'}
          height="500px"
          controls
          muted={item.muted}
          src={`${HOST_PATH}${item.embedUrl}`}
          autoPlay={item.autoPlay}
          onClick={() => togglePlay(item.videoId)}
        />
        <span className="image-gallery-description">{item.description}</span>
      </>
    );
  };

  const _renderPhoto = (item) => {
    return (
      <>
        <img
          className="image-gallery-image"
          src={`${item.original}`}
          width={item.originalWidth || '100%'}
          height={item.originalHeight || 'auto'}
        ></img>
        <span
          className="image-gallery-description"
          style={{
            ...(item.labelPosition === 'top'
              ? { top: '25px', height: 'fit-content' }
              : { bottom: '20px' }),
          }}
        >
          {item.description}
        </span>
      </>
    );
  };

  const data = [
    {
      original: 'IMG_8943.jpg',
      description: 'Nosotros somos Angie y Memo, y esta es nuestra historia.',
    },
    {
      original: 'IMG_3617.jpg',
      showPlayButton: true,
      videoId: 'jengavideo',
      embedUrl: 'IMG_3618.mp4',
      originalClass: 'video-responsive',
      muted: true,
      autoplay: true,
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
        'Memo vivía en Cuernavaca y Angie en CDMX. Pero a pesar de que sólo nos veíamos cada 8 o 15 días, todas las noches nos llamábamos por teléfono sin falta. \u{1F4DE}\u{1F49B}',
    },
    {
      original: 'IMG_6555.jpg',
      description:
        'Nuestras primeras vacaciones por cumpleaños #30 de Memo el 2 de Agosto del 2021 en Xcaret, Playa Del Carmen, Q.R.',
    },
    {
      original: 'IMG_1400.JPG',
      description:
        'Vacaciones de Fin de Semana en Rosarito, B.C.S. con primos de Angie y amigos.',
      labelPosition: 'top',
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
      labelPosition: 'top',
    },
    {
      original: '16f3a6e4-a80a-476d-b1c5-872af8ae026d.jpg',
      description: '24 Octubre 2021. Las Estacas, Tlatizapán, Morelos.',
    },
    {
      original: '8f5c7d28-77fe-4e94-ac22-dfab536ac7df.jpg',
      description:
        '8 Noviembre 2021. Redescubrimos nuestro amor al camping en "Los Manantiales", Morelos. \u{1F3D5}\uFE0F',
      labelPosition: 'top',
    },
    {
      original: 'IMG_8361.mp4',
      showPlayButton: true,
      videoId: 'bicisvideo',
      originalClass: 'video-responsive',
      muted: true,
      autoPlay: true,
      embedUrl: 'IMG_8361.mp4',
      renderItem: _renderVideo,
      description:
        'Noviembre 2021. Decidimos compranos unas bicis para salir a rodar, otra de las cosas que tenemos en común.',
    },
    {
      original: 'IMG_8631.jpg',
      description: 'Nuestra primera Navidad juntos',
    },
    {
      original: 'IMG_8905.jpg',
      description:
        'Salimos de Vacaciones de fin de año 2021. \u{1F31F} Zipolite y Mazunte, Oaxaca.',
    },
    {
      original: 'IMG_4671_Original.jpg',
      description: 'Regresamos a Huasca de Ocampo a hacer ciclismo de montaña',
    },
    {
      original: 'F8F7E61F-203C-4DF3-AE53-2B41E7BCCC5C.MP4',
      showPlayButton: true,
      muted: false,
      autoPlay: false,
      originalClass: 'video-responsive',
      width: '820px',
      videoId: 'coldplayvideo',
      embedUrl: 'F8F7E61F-203C-4DF3-AE53-2B41E7BCCC5C.MP4',
      renderItem: _renderVideo,
      description:
        'Nos encantan los conciertos pero el que llevamos siempre en el ❤️ es el de Coldplay del 3 de Abril del 2022',
    },
    {
      original: 'IMG_5680 (1).jpg',
      description: 'Vacaciones en Q. Roo, Abril 2022.',
    },
    {
      original: 'IMG_0143.jpg',
      description: 'Viaje a Puerto Escondido con amigos de Memo',
    },
    {
      original: '33f1cc97-cfc2-4b5f-855c-3daba3fc693d.jpg',
      description: 'Cumpleaños #31 de Angie. Festejando con amigos de Angie.',
    },
    {
      original: 'IMG_0612.jpg',
      description: '17 Septiembre 2022. Parque La Marquesa.',
    },
    {
      original: 'IMG_8423.jpg',
      description: 'Conociendo Maconí, Qro.',
    },
    {
      original: 'IMG_1360.JPG',
      description: 'Festival Hell & Heaven 2022.',
    },
    {
      original: 'IMG_2025.jpg',
      description: 'Viaje de Fin de Año 2022. Sayulita, Nayarit.',
    },
    {
      original: '86d7b531-7e9a-4487-aecd-8a912e24825b.jpg',
      description:
        'En este viaje nos comprometimos en la puesta de Sol del 28 de Diciembre.',
    },
    {
      original: 'IMG_9491.jpg',
      originalWidth: '820px',
      description: 'Esto continuará...',
    },
  ].map((item) => ({
    ...item,
    original: `${HOST_PATH}${item.original}`,
    renderItem: item.embedUrl ? _renderVideo : _renderPhoto,
  }));

  return (
    <Gallery
      {...props}
      ref={galleryRef}
      infinite={false}
      showPlayButton={false}
      autoPlay={false}
      items={data}
    />
  );
};

export default MyGallery;
