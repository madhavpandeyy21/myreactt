import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function InlineCss() {
  return (
    <div>
      <h2 style={({color:"blue" , borderStyle:"solid"})}>react</h2>
      <p className='bg-secondary'>this is my para</p>
    </div>
  )
}
