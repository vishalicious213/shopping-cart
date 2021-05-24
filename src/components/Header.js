import React from 'react'

export default function Header() {
    return (
        <header>
            <div>
                <a href='#/'>
                    <div>Shopping Cart</div>
                </a>
            </div>

            <div>
                <a href='#/cart'>Cart</a>
                <a href='#/signin'>Sign In</a>
            </div>
        </header>
    )
}