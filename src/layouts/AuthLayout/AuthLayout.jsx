import s from './style.module.css';
import LogoSVG from '../../assets/images/logoBlue.svg';
import whiteLogoSVG from '../../assets/images/logoWhite.svg';

export function AuthLayout({children}){
    const header = (
        <div className={s.header}>
            <img className={s.logoTop} src={LogoSVG} alt='Notomatic Logo'/>
            <h3 className={s.logoTitle}>Notomatic</h3>
        </div>
    )

    const background = (
        <div>
            <div className='d-flex'>
                <img className={s.logo} src={whiteLogoSVG} alt='Notomatic Logo'/>
                <h1 className={s.backgroundTitle}>Notomatic</h1>
            </div>
            <p style={{color:'white'}}>One place for the team notes</p>
        </div>

    )

    return (
        <div className={s.root}>
            {header}
            <div className={s.leftSection}>
                
                {children}
            </div>
            <div className={`${s.rightSection} d-none d-lg-flex`}>
                {background}
            </div>
        </div>
    );
}