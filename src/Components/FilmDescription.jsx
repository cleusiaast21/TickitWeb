import './FilmDescription.css';
import IonIcon from '@reacticons/ionicons';

export default function FilmDescription() {
    return (

        <div className="description">

            <div className="first-line">

                <div className="description-categories">

                    <div className="category">Category 1</div>
                    <div className="category">Category 2</div>
                    <div className="category">Category 3</div>
                    <div className="category">Category 4</div>

                </div>

                <div className="description-add">

                    <span><IonIcon name="film-outline" /></span><span className="description-add-text">2 hours 30 min</span>
                    <span><IonIcon name="language-outline" /></span><span className="description-add-text">English</span>

                </div>

            </div>

            <div className="description-text">
                <p>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
            </div>



        </div>


    );
}

