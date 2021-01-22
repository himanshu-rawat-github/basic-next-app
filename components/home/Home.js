import React from 'react'
import Header from '../layouts/Header';
import Showcase from '../showcase/Showcase'
import HomeArticles from '../homeArticles/Articles'

export default function Home() {
    return (
        <>
            <Header>
                <title>NewsGrid | Latest News</title>
            </Header>
            <Showcase />
            <HomeArticles />
        </>
    )
}
