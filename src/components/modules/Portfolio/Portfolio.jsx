import Project from "../../widgets/Project/Project";

import s from './Portfolio.module.scss'

let PORTFOLIO = [
    {
        link: `http://mesto.ai`,
        name: 'Mesto.ai',
        description: 'React, SASS/SCSS, Адаптивная верская, Vite, i18n',
        type: 'Коммерческий проект',
        gitHubLink: null,
    },
    {
        link: `https://filipp95.github.io/petSocialNetwork/`,
        name: 'Социальная сеть фанатов  клуба Juventus',
        description: 'React, Redux, CSS modules',
        type: 'Учебный проект',
        gitHubLink: `https://github.com/Filipp95/petSocialNetwork`,
    },
    {
        link: `https://filipp95.github.io/zoo-project/pages/main/index.html`,
        name: 'Сайт Онлайн Зоопарка',
        description: 'HTML, CSS',
        type: 'Учебный проект',
        gitHubLink: `https://github.com/Filipp95/zoo-project`,
    }
]

const Portfolio = () => {
    return (
        <div className={s.portfolio_container}>
            {PORTFOLIO.map(projectItem => <Project key={projectItem.name} link={projectItem.link} name={projectItem.name}
                description={projectItem.description} type={projectItem.type} gitHubLink={projectItem.gitHubLink} />)}
        </div>
    )
}


export default Portfolio