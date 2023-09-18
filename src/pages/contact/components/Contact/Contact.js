import styles from '../Contact/Contact.module.css';
import male from './img/male.jpg';
import female from './img/female.jpg';
import nospecify from './img/nospecify.jpg';

function  CardContact  (props) {
    const { data } = props;
    const getFullname = () => `${data.firstName} ${data.lastName}`;
    let photoSign;

    if (data.gender === undefined){
      photoSign = nospecify;
      } else {
        data.gender ==='male'? photoSign = male : photoSign = female;
       }
  
    return  <>  
            <div className={styles['detail_contact']}>
            <div>
            <img src = {photoSign}  alt=""/>
            <span><b> Повне ім'я:</b> {getFullname()}</span> <br></br>
            <span><b> Номер телефону:</b> {data.phone}</span><br></br>
            <span><b> Стать:</b> { (!data.gender ? 'не вказано' : data.gender)}</span><br></br>
            </div>
            </div>
            </>
    
}

  export {CardContact}

