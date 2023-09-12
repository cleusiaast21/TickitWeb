import './FilmInfo.css';
import poster from '../assets/poster.jpg';
import IonIcon from '@reacticons/ionicons';
import FilmDescription from './FilmDescription';
import photo1 from '../assets/poster.jpg';
import zendaya from '../assets/zendaya.webp';
import holland from '../assets/holland.webp';
import maguire from '../assets/maguire.webp';
import garfield from '../assets/garfield.jpg';
import watts from '../assets/watts.webp';
import React from 'react';
import YouTube from 'react-youtube';



export default function FilmInfo() {

    const videoId = 'JfVOs4VSpmA'; // Replace with your actual YouTube video ID

    const opts = {
      height: '500',
      width: '750',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0, // Set to 1 if you want the video to autoplay
      },
    };

    return (

        <div className="outer-container">

            <div className="container">

                <h2>Spider-Man: Across the Spider-Verse</h2>
                <p>2022 | Marvel Studios</p>

                <hr />

                <YouTube className="video" videoId={videoId} opts={opts} />

                <FilmDescription></FilmDescription>

                <div className="book">

                    <div className="interested">Interested in this movie?</div>

                    <button className="book-button">BOOK NOW</button>

                </div>

                <hr />

                <div className="director-and-cast">

                    <div className="director">

                        <span className="titulo">Director</span>
                        <div className="director">
                            <img className="actor-image" src={watts} alt="" />
                            <span className="actor">Jon Watts</span>
                        </div>

                    </div>

                    <div className="cast">
                        <span className="titulo">Elenco</span>

                        <div className="images">

                            <div className="director">
                                <img className="actor-image" src={holland} alt="" />
                                <span className="actor">Tom Holland</span>
                            </div>

                            <div className="director">
                                <img className="actor-image" src={zendaya} alt="" />
                                <span className="actor">Zendaya</span>
                            </div>

                            <div className="director">
                                <img className="actor-image" src={maguire} alt="" />
                                <span className="actor">Tobey Maguire</span>
                            </div>

                            <div className="director">
                                <img className="actor-image" src={garfield} alt="" />
                                <span className="actor">Andrew Garfield</span>
                            </div>

                        </div>

                    </div>


                </div>


            </div>

        </div>

    );
}

