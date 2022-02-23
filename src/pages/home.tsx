import React from 'react'
import './home.scss'
import headerBg from '../images/header.png'
import { Chart1 } from '../components/Chart_1'

export const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="section1">
          <Chart1 />
        </section>
        <section className="section2 bordered"></section>
        <section className="section3 bordered"></section>
        <section className="section4 bordered"></section>
        <section className="section5 bordered"></section>
      </main>
    </div>
  )
}
