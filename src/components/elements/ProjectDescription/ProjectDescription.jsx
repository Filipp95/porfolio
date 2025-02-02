import ImageComponent from '../ImageComponent/ImageComponent';

import description_image from '@/assets/images/description.svg'

import s from './ProjectDescription.module.scss';

const ProjectDescription = ({ description, type }) => {
    return (
        <div className={s.description_wrapper}>
            <div className={s.type_and_description}>
                <div className={s.project_type}><strong>Тип проекта:</strong> {type}</div>
                <div className={s.project_description}><strong>Стэк:</strong> {description}</div>
            </div>
        </div>
    )
}

export default ProjectDescription