
import { Post } from './components/Post.js';
import alarm from './assets/alarm.png';
import phonebook from './assets/phonebook.png';
import autorization from './assets/autorization.png';
import { useTranslation } from 'react-i18next';






const Projects = () => {
  const { t } = useTranslation();
  const data = [{
    id: 1,
    name: t('project.project1'),
    avatar: alarm,
    content: t('project.discribe1'),
    link:'../../Alarm/index'
  },
  {
    id: 2,
    name: t('project.project2'),
    avatar: phonebook,
    content: t('project.discribe2'),
    link:'../../Phonebook/index'
  },
  {
    id: 3,
    name: t('project.project3'),
    avatar: autorization,
    content: t('project.discribe3'),
    link:'../../Autorization/index'
  }
  ]

  return <div className="App">

    {data.map((dat) => (
      <Post key={dat.id} props={dat} />
    ))}
  </div>
}

export default Projects