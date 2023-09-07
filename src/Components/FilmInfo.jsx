import './FilmInfo.css';
import poster from '../assets/poster.jpg';
import IonIcon from '@reacticons/ionicons';

export default function FilmInfo() {
    return (

        <div className="outer-container">

            <div className="container">

                <h2>Spider-Man: Across the Spider-Verse</h2>
                <p>2022 | Marvel Studios</p>

                <hr />

                <img className="thumbnail" src={poster} alt="" />
                <hr />


            </div>

        </div>

    );
}

