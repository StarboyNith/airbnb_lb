import React from 'react'
import Navbar from './Component/Navbar'
import Card from './Component/Card'
import Hero from './Component/Hero'
import data from './Data/data'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </div>
  )
}
