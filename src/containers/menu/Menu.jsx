import React from 'react'
import './menu.css'
import { images, data } from '../../constant'
import { SubHeading, MenuItem } from '../../components'

const Menu = () => {
  return (
    <div className='app__menu flex__center section__padding' id= 'menu'>
        <div className='app__menu-heading'>
          <SubHeading title = "Menu that fits you palatte"/>
          <h1 className='headtext__cormorant'>Today’s Special</h1>
        </div>

        <div className='app__menu-menulist'>

          <div className='app__menu-menulist_wines flex__center'>
            <p className='app__menu-menulist-heading'>Wine & Beer</p>
            <div className='app__menu-menulist_items'>
             {
              data.wines.map((wine, index) => (
                <MenuItem key = {wine.title + index} title = {wine.title} tags = {wine.tags} price = {wine.price}/>
              ))
             }
            </div>
          </div>

          <div className='app__menu-menulist_img'>
            <img src={images.menu} alt="menu_img" />
          </div>

          <div className='app__menu-menulist_cocktails flex__center'>
            <p className='app__menu-menulist-heading'>Cocktails</p>
            <div className='app__menu-menulist_items'>
            {
              data.cocktails.map((cocktail, index) => (
                <MenuItem key = {cocktail.title + index} title = {cocktail.title} tags = {cocktail.tags} price = {cocktail.price}/>
              ))
            }
            </div>
          </div>

        </div>

        <div style={{marginTop: '15px'}}>
            <button type='button' className='custom__button'>View More</button>
        </div>

    </div>
  )
}


export default Menu