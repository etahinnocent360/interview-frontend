import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div class="body">
            <div class="body-container">
                <h1>Mathematics is fun...</h1>

                <div class="flex">
                    <main class="flex-1">
                        <div class="flex-1-one">
                            <h2>Kids Play</h2>
                            <h2 class="dark">SMART</h2>
                        </div>

                        <div class="flex-1-two">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex similique, labore aperiam expedita
                                quasi dicta.</p>
                        </div>

                        <div class="flex-1-three">
                            <Link to={'/playground'}>
                                <button>Start Playing</button>
                            </Link>

                        </div>

                    </main>

                    <main class="flex-2">
                        <img src="/img/geometric.png" alt='' />
                    </main>
                </div>
            </div>
        </div>
    )
}
