import React from 'react'

export default function Header() {
    return (
        <header className='row block center'>
            <div>
                <a href='#/'>
                    <h1>Shopping Cart</h1>
                </a>
            </div>

            <div className='header-buttons'>
                <a href='#/cart'>Cart</a>
                <a href='#/signin'>Sign In</a>
            </div>
        </header>
    )
}