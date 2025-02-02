import Portfolio from "../../modules/Portfolio/Portfolio";
import ImageComponent from "../../elements/ImageComponent/ImageComponent";

import github_footer from '@/assets/images/github_logo_footer.svg'

import s from './PortfolioLayout.module.scss'

const PortfolioLayout = () => {
    return (
        <div className={s.portfolio_layout_container}>
            <h1 className={s.header}> ПОРТФОЛИО </h1>
            <Portfolio/>
            <a href='https://github.com/Filipp95' className={s.gitLab_link} target='_blank'>
                <ImageComponent source={github_footer} className={s.footer_image} />
            </a>
        </div>
    )
}

export default PortfolioLayout