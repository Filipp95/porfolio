
import s from './ProjectLink.module.scss';

const ProjectLink = ({link, name}) => {
    return (
    <div className={s.project_link_wrapper}>
        <a href={link} target="_blank" className={s.project_link}>{name}</a>
    </div>
    )
}

export default ProjectLink