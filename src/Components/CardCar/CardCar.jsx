import React from 'react'

export const CardCar = ({image,title,id}) => {
  return (
    <div key={id}>
        <img src={image}/>
        <h2>{title}</h2>
    </div>
  )
}
