import React from 'react';
import Carousel from './Carousel';

import image0 from '../../assets/images/totoro.png';
import spiritedAway1 from '../../assets/images/chihiro020.jpg';
import spiritedAway2 from '../../assets/images/chihiro001.jpg';
import spiritedAway3 from '../../assets/images/chihiro032.jpg';
import spiritedAway4 from '../../assets/images/chihiro043.jpg';
import spiritedAway5 from '../../assets/images/chihiro046.jpg';
import kiki1 from '../../assets/images/majo035.jpg';
import kiki2 from '../../assets/images/majo040.jpg';
import kiki3 from '../../assets/images/majo048.jpg';
import mononoke1 from '../../assets/images/mononoke041.jpg';
import mononoke2 from '../../assets/images/mononoke042.jpg';
import totoro1 from '../../assets/images/totoro006.jpg';
import totoro2 from '../../assets/images/totoro040.jpg';
import umi from '../../assets/images/umi003.jpg';
import howl from '../../assets/images/howl049.jpg';

export const slides = [
  {
    id: '01',
    content: (
      <div style={{ background: 'tomato' }}>
        <img src={image0} style={{ width: '80%' }} />
      </div>
    ),
  },

  {
    id: '02',
    content: (
      <article
        style={{
          height: '70%',
          width: '80%',
          margin: '10%',
          padding: '5%',
          overflow: 'auto',
          border: '3px solid #2196f3',
          textAlign: 'justify',
        }}
      >
        Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ) is a Japanese animation film studio
        headquartered in Koganei, Tokyo. The studio is best known for its animated feature films,
        and has also produced several short films, television commercials, and one television film.
        It was founded on June 15, 1985 by directors Hayao Miyazaki and Isao Takahata and producer
        Toshio Suzuki, after the success of Topcraft's anime film Nausicaä of the Valley of the Wind
        (1984). Studio Ghibli has also collaborated with video game studios on the visual
        development of several video games. Six of Studio Ghibli's films are among the 10
        highest-grossing anime films made in Japan, with Spirited Away (2001) being the second
        highest, grossing over US$360 million worldwide. Many of their works have won the Animage
        Anime Grand Prix award, and four have won the Japan Academy Prize for Animation of the Year.
        Five of Studio Ghibli's films have received Academy Award nominations. Spirited Away won the
        Golden Bear in 2002 and the Academy Award for Best Animated Feature Film in 2003.
      </article>
    ),
  },
  {
    id: '03',
    content: (
      <div>
        <Carousel
          slides={[
            {
              id: '21',
              content: (
                <div>
                  <a href="https://www.ghibli.jp/works/chihiro/#frame">
                    <p>Spirited Away</p> <p>千と千尋の神隠し（2001） </p>
                  </a>
                  <img src={spiritedAway1} alt="" style={{ width: '70%' }} />
                </div>
              ),
            },
            {
              id: '22',
              content: (
                <iframe
                  style={{ width: 'auto', height: '80%' }}
                  src="https://www.youtube.com/embed/ByXuk9QqQkk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ),
            },
            {
              id: '23',
              content: <img src={spiritedAway2} alt="" style={{ width: '80%' }} />,
            },
            {
              id: '24',
              content: <img src={spiritedAway3} alt="" style={{ width: '80%' }} />,
            },
            {
              id: '25',
              content: <img src={spiritedAway4} alt="" style={{ width: '80%' }} />,
            },
            {
              id: '26',
              content: <img src={spiritedAway5} alt="" style={{ width: '80%' }} />,
            },
          ]}
          numberOfSlidesOnPage={1}
          numberOfSlidesOnPageMobile={1}
        />
      </div>
    ),
  },
  { id: '04', content: <img src={kiki1} alt="" width="100%" height="auto" /> },
  { id: '05', content: <img src={kiki2} alt="" width="100%" height="auto" /> },
  { id: '06', content: <img src={kiki3} alt="" width="100%" height="auto" /> },
  { id: '07', content: <img src={mononoke1} alt="" width="100%" height="auto" /> },
  { id: '08', content: <img src={mononoke2} alt="" width="100%" height="auto" /> },
  { id: '09', content: <img src={totoro1} alt="" width="100%" height="auto" /> },
  { id: '10', content: <img src={totoro2} alt="" width="100%" height="auto" /> },
  { id: '11', content: <img src={umi} alt="" width="100%" height="auto" /> },
  { id: '12', content: <img src={howl} alt="" width="100%" height="auto" /> },
];
