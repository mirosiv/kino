import { FC } from "react";
import aboutPage from './aboutPage.module.css'
import reactPic from "../Assets/react_logo.svg";
import typeScriptPic from "../Assets/ts_logo.svg";
import reduxPic from "../Assets/redux_logo.svg";

const AboutPage:FC = () => {

    return(
        <div className={aboutPage.firstDiv}>
            <h1>
                О проекте
            </h1>
            <p>
                Пэт проект. Поиск фильмов по базе Кинопоиска.
            </p>
            <br>
            </br>
            <h3>
                Задачи
            </h3>
            <ul className={aboutPage.firstDiv_ul}>
                <li>Адаптивно сверстать</li>
                <li>Типизировать компоненты</li>
                <li>Для хранения данных использовать Redux</li>
            </ul>
            <br>
            </br>
            <h3>
                Инструменты
            </h3>
            <div className={aboutPage.elementsDiv}>
                <div>
                    <img src={reactPic} className={aboutPage.picture} />
                    <p className={aboutPage.paragraph}>
                        React
                    </p>
                </div>
                <div>
                    <img src={typeScriptPic} className={aboutPage.picture} />
                    <p className={aboutPage.paragraph}>
                        TypeScript
                    </p>
                </div>
                <div>
                    <img src={reduxPic} className={aboutPage.picture} />
                    <p className={aboutPage.paragraph}>
                        Redux
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;