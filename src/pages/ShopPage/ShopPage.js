import React, {useState} from "react";
import {getShopData} from "../../data/shopData";

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

const ShopPage = () => {
  const [shopData, setShopData] = useState(getShopData())

  return (
    <div className="shop-page">
      {
        shopData.map(({id, ...otherShopData}) => (
          <CollectionPreview key={id} {...otherShopData} />
        ))
      }
    </div>
  )
}

export default ShopPage