import React from 'react'
import data from './data'
import Card from './Card'

export default function Body() {
    const cards = data.map(entry => {
        return (
            <Card key={entry.key} {...entry} />
            )
    })

    return(
        <section>
            {cards}
        </section>
    )
}