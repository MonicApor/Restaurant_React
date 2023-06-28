import React from 'react'

import './subheading.css'
import { images } from '../../constant'

const SubHeading = (props) => {
  const { title } = props;

  return (
    <div className='app__subheading'>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt="spoon" className='spoon__img'/>
    </div>
  )
}

export default SubHeading