import ImageComponent from '../ImageComponent/ImageComponent';

import gitHub_image from '@/assets/images/gitHub.svg'

import s from './GitHubLink.module.scss';

const GitHubLink = ({ gitHubLink }) => {
    if (gitHubLink) {
        return (
            <div className={s.gitHub_container}>
                <a href={gitHubLink} target="_blank" className={s.gitHub_link}>
                    <ImageComponent source={gitHub_image} description={'Изображение лого GitHub'} className={s.github_image}/>
                    GitHub</a>
            </div>
        )
    }
}

export default GitHubLink