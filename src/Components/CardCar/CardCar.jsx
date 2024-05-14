import React from 'react'

export const CardCar = ({image,title}) => {
  return (
    <div>
        <img src={image}/>
        <h2>{title}</h2>
    </div>
  )
}
