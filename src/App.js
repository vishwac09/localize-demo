import React, {useState} from 'react';

import {initialize_i18n} from './i18n';
import {Home} from './Home';
import './App.css';

function App() {
  const [app_lang, set_state_lang] = useState('en');
  const set_lang = (lang_code) => {
    set_state_lang(lang_code);
  };
  initialize_i18n(app_lang);
  return (
    <div className="App">
      <Home set_lang={set_lang} />
    </div>
  );
}

export default App;
