import styles from './PostStyle.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alarm } from '../../Alarm/index';
import { Autorization } from '../../Autorization/index';
import { Phonebook } from '../../Phonebook/App';
import { useTranslation } from 'react-i18next';

export function Post(props) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (<>
        <div className={styles['article']}>
            <span alight="center"><b>{props.props.name}</b>  </span><br />
            <img src={props.props.avatar} className="" alt="" /><br />
            <span><bold>{props.props.content}</bold></span><br />
            <button id='goPage' alight="center" onClick={() => {
                navigate(props.props.link);
            }}>  {t('postButton')}</button>


        </div>



    </>)
}