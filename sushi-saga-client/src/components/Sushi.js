import React, { Fragment } from 'react'

const Sushi = (props) => {
  const sushiInfo = props.sushi
  return (
    <div className="sushi">
      <div className="plate"
           onClick={ () => { props.eatSushi(sushiInfo)} }>
        {
          sushiInfo.eaten ?
            null
          :
            <img src={sushiInfo.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushiInfo.name} - ${sushiInfo.price}
      </h4>
    </div>
  )
}

export default Sushi
