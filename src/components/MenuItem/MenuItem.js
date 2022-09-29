import React from 'react';
import {useNavigate} from 'react-router-dom'

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, routeName}) => {
  let navigate = useNavigate()

  function getRoute() {
    navigate(routeName)
  }

  return (
    <article className="menu-item" onClick={getRoute}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </article>
  );
}

export default MenuItem;