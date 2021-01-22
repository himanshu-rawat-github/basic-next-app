import React from 'react'
import Header from '../layouts/Header'
import DefaultLayout from '../../layout/default'

export default function About() {
    return (
        <>
            <Header>
                <title>NewsGrid | About</title>
            </Header>
            <section id="about">
                <div className="container">
                    <div className="page-container">
                        <article className="card">
                            <h1 className="l-heading">About Our Organization</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis quod, totam delectus et voluptates dolorem harum error quisquam provident obcaecati praesentium asperiores doloribus expedita laudantium sit, ex reprehenderit nihil magnam vero repellat consectetur accusantium? Dolorem corporis necessitatibus vel possimus eum molestiae, officiis, ipsam iusto autem ipsum saepe animi suscipit!</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, eius! Amet ipsa iste, magnam totam officiis odio animi soluta qui fuga in eum porro alias! Fugit corrupti doloremque harum itaque tempora illo suscipit possimus architecto, ex quibusdam explicabo. Enim aliquid nesciunt sapiente cum a, facere tempore reprehenderit consequuntur, quo atque et nostrum doloremque est soluta placeat quisquam accusantium, voluptas nemo deleniti. Maiores, similique adipisci cumque debitis sapiente voluptate modi corporis consequuntur molestias excepturi, odit laudantium nisi aperiam. Error dolores distinctio molestiae iste, illo, nihil laborum tempora numquam nemo consectetur sint labore quis omnis quia ipsam repudiandae expedita voluptate! Architecto suscipit ex itaque. Quo, assumenda. Reprehenderit hic expedita perferendis excepturi quia nisi ab, minus nemo repudiandae! Corporis ducimus, unde beatae a non officiis, dolorum, quod sed officia eveniet rerum ipsam aliquam alias maxime ad accusantium quidem labore magnam vitae dolores laborum commodi odit et incidunt. Iure nisi dignissimos libero eos doloremque!</p>
                        </article>

                        <aside className="card bg-primary">
                            <h2>Join Our Club</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores.</p>
                            <a href="#" className="btn btn-dark btn-block">Join Now</a>
                        </aside>
                    </div>
                </div>
            </section> 
        </>
    )
}
