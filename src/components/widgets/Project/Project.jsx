import ProjectLink from "../../elements/ProjectLink/ProjectLink";
import ProjectDescription from "../../elements/ProjectDescription/ProjectDescription";
import GitHubLink from "../../elements/GitHubLink/GitHubLink";
import ImageComponent from "../../elements/ImageComponent/ImageComponent";

import project_name from '@/assets/images/projectName.svg'


import s from './Project.module.scss';

const Project = ({link, name, description, type, gitHubLink}) => {
    return (
        <div className={s.project_wrapper}>
            <ImageComponent className={s.project_image} source={project_name} description={'Изображение браузера'}/>
            <ProjectLink link={link} name={name} />
            <ProjectDescription description={description} type={type} />
            <GitHubLink gitHubLink={gitHubLink} />
        </div>
    )
}

export default Project 