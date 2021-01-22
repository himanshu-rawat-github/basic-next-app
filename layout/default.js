import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

export default function Index(props) {
    console.log(props.home)
    console.log(props.about)
    return (
        <>
          <Navbar home ={props.home} about ={props.about} />
          {props.children}
          <Footer />  
        </>
    )
}
