import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/index'
import Contact from './pages/contact'
import Projects from './pages/projects'
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const locales = {
    en: { title: 'English' },
    ukr: { title: 'Українська' }
  }

  const { t, i18n } = useTranslation(0);
  return (
    <BrowserRouter >

      <nav className='navigation'>
        <div className="lang">
          <ul>
            {Object.keys(locales).map((Locale) => (
              <li className='list' key={Locale}><button style={{ listStyleType: 'none', fontWeight: i18n.resolvedLanguage === Locale ? 'bold' : 'normal' }}
                type="submit" onClick={() => i18n.changeLanguage(Locale)}>
                {locales[Locale].title}
              </button></li>))}
            {/* <h1 align="center" >{t('main.header')}</h1> */}
          </ul>
        </div>
        <div className="linkItems">
        <Link className="navLink" to='/'>{t('home')}</Link>
        <Link className="navLink" to='/projects'>{t('projects')}</Link>
        <Link className="navLink" to='/contact'>{t('contact')}</Link>
        </div>

      </nav>
      <button className='burger' aria-label='open' aria-expanded='false'>
        <span className='burgerLine'></span>

      </button>

      <Routes>
        <Route index element={<Home></Home>} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
