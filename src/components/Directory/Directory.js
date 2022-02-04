import React from 'react';

import MenuItem from '../MenuItem/MenuItem';
import {getShopData} from "../../data/shopData";

import './directory.styles.scss';

const items = getShopData()

const Directory = () => (
    <div className='directory-menu'>
        {items.map(({ id, ...otherParameters}) => (
            <MenuItem key={id} {...otherParameters} />
        ))}
    </div>
)

export default Directory;