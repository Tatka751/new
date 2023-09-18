import Ackbar from './img/Ackbar.gif'
import Corde from './img/Cordé.gif'
import Watto from './img/Watto.gif'
import Sebulba from './img/Sebulba.gif'
import Tarfful from './img/Tarfful.gif'
import Palpatine from './img/Palpatine.gif'
import Yoda from './img/Yoda.gif'
import Bossk from './img/Bossk.gif'
import styles from './fotos.module.css'




const Fotos = () => {
    return <>
        <h1>Fotos of heros SW</h1>
        <container className={styles['fotos']}>
            <img src={Ackbar} alt='' />
            <img src={Corde} alt='' />
            <img src={Watto} alt='' />
            <img src={Sebulba} alt='' />
            <img src={Tarfful} alt='' />
            <img src={Palpatine} alt='' />
            <img src={Yoda} alt='' />
            <img src={Bossk} alt='' />
        </container>
    </>
}

export default Fotos