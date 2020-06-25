import React, {useState} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import i18n from '../i18n/i18n_config';

function Home() {
  // maintain list of languages we are supporting
  // Todo move it in global config
  const supported_languages = {
    en: 'English',
    fr: 'French',
    de: 'German'
  };
  const {t} = useTranslation();
  const [active_lang, set_lang] = useState('en');
  const change_language = (event, lang_code) => {
    event.preventDefault();
    set_lang(lang_code);
    i18n.changeLanguage(lang_code);
  }
  return (
    <div className="home">
      <div className="brick-10 main-menu">
        <ul className="main-menu-list">
          <li><Trans>main_menu.sports</Trans></li>
          <li><Trans>main_menu.my_store</Trans></li>
          <li><Trans>main_menu.my_orders</Trans></li>
          <li><Trans>main_menu.sign_in</Trans></li>
          <li><Trans>main_menu.sign_up</Trans></li>
          <li><Trans>main_menu.offices</Trans></li>
        </ul>
      </div>
      <div className="brick-10 sub-menu">
        <ul className="sub-menu-list">
          {
            Object.keys(supported_languages).map(lang_code => {
              return <li className={active_lang === lang_code ? 'active' : 'not-active'} 
                          onClick={(e) => change_language(e, lang_code)} key={lang_code}>
                  <a href={lang_code}>{supported_languages[lang_code]}</a>
                </li>;
            })
          }
        </ul>
      </div>
      <div className="brick-10">
        <div className="side-menu">
          <ul className="side-menu-list">
            <li>{t('side_menu.t_shirt')}</li>
            <li>{t('side_menu.shoes')}</li>
            <li>{t('side_menu.fleece')}</li>
            <li>{t('side_menu.trousers')}</li>
            <li>{t('side_menu.shorts')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export {Home};
