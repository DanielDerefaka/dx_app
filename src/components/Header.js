import React from 'react'
import Button from './Button'



const Header = () => {
    const onClick = () => {
        console.log('click')
    }
  return (
    <header className='header'>
        <h1> Task Tracker</h1>
        <Button onClick={onClick}  color='green' text='Add'   />
       
        

    </header>

  )
}
// Css in Js 
// const headingstyle = {
//     color:'red',
//     backgroundColor : 'black'

// }
Button.defaultProps = {
color : 'steelblue',
}
export default Header