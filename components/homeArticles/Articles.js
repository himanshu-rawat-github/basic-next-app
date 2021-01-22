import React from 'react'

export default function Articles() {
    return (
        <>
            <section id="home-articles" className="py-2">
                <div className="container">
                    <h2>Editors Picks</h2>
                    <div className="articles-container">

                        <article className="card">
                            <img src="./img/articles/ent1.jpg" alt=""/>
                            <div>
                                <div className="category category-ent">Entertainment</div>
                                <h3>
                                    <a href="article.html">Lorem ipsum dolor sit amet.</a>
                                </h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum pariatur ipsum saepe ab consequatur at amet dignissimos unde nulla?</p>
                            </div>
                        </article>

                        <article className="card bg-dark">
                            <div className="category category-sports">Sports</div>
                            <h3>
                                <a href="article.html">Lorem ipsum dolor sit amet.</a>
                            </h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum pariatur ipsum saepe ab consequatur at amet dignissimos unde nulla?</p>
                            
                        </article>


                        <article className="card">
                            <img src="./img/articles/tech1.jpg" alt=""/>
                            <div className="category category-tech">Technology</div>
                            <h3>
                                <a href="article.html">Lorem ipsum dolor sit amet.</a>
                            </h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum pariatur ipsum saepe ab consequatur at amet dignissimos unde nulla?</p>
                            
                        </article>

                        <article className="card">
                            <div className="category category-sports">Sports</div>
                            <h3>
                                <a href="article.html">Lorem ipsum dolor sit amet.</a>
                            </h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum pariatur ipsum saepe ab consequatur at amet dignissimos unde nulla?</p>
                            
                            <img src="./img/articles/sports1.jpg" alt=""/>
                        </article>


                        <article className="card">
                            <img src="./img/articles/tech2.jpg" alt=""/>
                            <div className="category category-tech">Technology</div>
                            <h3>
                                <a href="article.html">Lorem ipsum dolor sit amet.</a>
                            </h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum pariatur ipsum saepe ab consequatur at amet dignissimos unde nulla?</p>
                            
                        </article>

                        <article className="card bg-primary">
                            <div className="category category-sports">Sports</div>
                            <h3>
                                <a href="article.html">Lorem ipsum dolor sit amet.</a>
                            </h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum pariatur ipsum saepe ab consequatur at amet dignissimos unde nulla?</p>
                            
                        </article>

                        <article className="card">
                            <div>
                                <div className="category category-ent">Entertainment</div>
                                <h3>
                                    <a href="article.html">Lorem ipsum dolor sit amet.</a>
                                </h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum pariatur ipsum saepe ab consequatur at amet dignissimos unde nulla?</p>
                            </div>
                            <img src="./img/articles/ent2.jpg" alt=""/>
                        </article>
                    </div>
                </div>
            </section>
 
        </>
    )
}
