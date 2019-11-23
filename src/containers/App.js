import React from 'react'
import logo from '../resources/img/icon-home.svg'
import ReferenceContainer from './ReferenceContainer'
import BalanceContainer from './BalanceContainer'
import 'bootstrap/dist/css/bootstrap.css'
import '../resources/css/app.css'

const App = () => (
  <div className="content-wrapper">
    <header className="d-flex align-items-center px-3 py-5">
      <img className="header-icon" src={ logo } alt="home-icon"/>
      <h2 className="px-3 m-0">Главная</h2>
    </header>
    <div className="content container-fluid pb-5">
      <div className="row h-100">
        <div className="col-7 pr-5 h-100">
          <BalanceContainer />
        </div>
        <div className="col-5 h-100">
          <ReferenceContainer />
        </div>
      </div>
    </div>
  </div>
)

export default App
