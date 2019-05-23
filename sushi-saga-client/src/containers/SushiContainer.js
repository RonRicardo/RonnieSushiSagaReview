import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const { currentSushi, moreSushi, eatSushi } = props
  return (
    <Fragment>
      <div className="belt">
        {
         currentSushi.map(aSushi => <Sushi key={aSushi.id} sushi={aSushi} eatSushi={eatSushi}/>)
        }
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
