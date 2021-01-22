import React from 'react'
import DefaultLayout from '../layout/default';
import Home from '../components/home/Home'
export default function index() {
  return (
    <div>
        <DefaultLayout home={"home"}>
          <Home />
        </DefaultLayout>
    </div>
  )
}
