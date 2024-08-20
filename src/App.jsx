import { Header } from './components/header';
import { Main } from './components/main/index.jsx';

import './global.css'
import style from './app.module.css'

export function App() {

  return (
    <div className={style.app}>

      <Header />
      <Main />

    </div>
  )
};
