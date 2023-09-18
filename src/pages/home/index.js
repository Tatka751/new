import styles from './Home.module.css'
import { useTranslation } from 'react-i18next';

const Home = () => {
        const { t } = useTranslation();

        let aboutMe = t('about')
        console.log(aboutMe)
    return <> <div className={styles['Home']} ><h1>{aboutMe}</h1>
        <div>
        {/* <img src={home} alt='' /> */}
       
        </div>
    </div>
    </>
}

export default Home