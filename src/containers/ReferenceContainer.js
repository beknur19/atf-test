import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showAlert } from '../actions'
import doc_icon from '../resources/img/icon-document.svg'

const ReferenceContainer = ({ showAlert }) => (
  <div className="card h-100">
    <div className="card-header d-flex align-items-center px-5 py-3">
      <div className="header-icon header-icon__doc d-flex justify-content-center align-items-center flex-shrink-1">
        <div className="helper"></div>
      </div>
      <p className="header-text flex-grow-1 m-0 px-3">Заявка на справку</p>
      <button className="btn btn-atf btn-atf-plus flex-shrink-1" onClick={ showAlert }>Заказать справку</button>
    </div>
    <div className="card-body d-flex flex-column justify-content-center align-items-center">
      <img className="empty-icon" src={ doc_icon } alt="reference not found"/>
      <p className="empty-text">Записей не найдено</p>
    </div>
  </div>
)

ReferenceContainer.protoTypes = {
  showAlert: PropTypes.func
}

export default connect(
  null,
  { showAlert }
)(ReferenceContainer)
