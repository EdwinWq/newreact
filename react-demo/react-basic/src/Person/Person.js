import React from 'react'
import './Person.css'

const Person = (props) => {
  return (
    <div className='duan_p'>
      <p onClick={props.myfn}>你好，我是{props.name}我每天都做{props.cont}个练习</p>
      <input type="text" onChange={props.namefn} defaultValue={props.name}/>
    </div>
  )
}

export default Person
