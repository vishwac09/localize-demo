import React from 'react';
import {Trans, useTranslation} from 'react-i18next';

function Home(props) {
  const {t} = useTranslation();
  const change_language = (event, lang_code) => {
    event.preventDefault();
    console.log(event);
    props.set_lang(lang_code);
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
          <li><a onClick={(e) => change_language(e, 'en')} href="#en">English</a></li>
          <li><a class="active" onClick={(e) => change_language(e, 'fr')} href="#fr">French</a></li>
          <li><a onClick={(e) => change_language(e, 'de')} href="#de">German</a></li>
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
