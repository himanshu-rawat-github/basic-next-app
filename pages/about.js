import React from 'react'
import DefaultLayout from '../layout/default';
import About from '../components/about/About'

export default function Index() {
    return (
        <DefaultLayout about={"about"}>
            <About />
        </DefaultLayout>
    )
}
