import React, { useEffect, useState } from 'react'
import './home.scss'
import headerBg from '../images/header.png'
import { Chart1 } from '../components/Chart_1'
import { Chart2 } from '../components/Chart_2'
import { Chart3 } from '../components/Chart_3'

export const Home = () => {
  const year = new Date().getFullYear()
  const [now, setNow] = useState(new Date().toLocaleString())

  useEffect(() => {
    setInterval(() => setNow(new Date().toLocaleString()), 1000)
  }, [])

  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }}>
        <h1>西虹市公安局合成作战平台</h1>
        <span>{now}</span>
      </header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2">
          <Chart3 />
        </section>
        <section className="section3 bordered"></section>
        <section className="section4 bordered"></section>
        <section className="section5 bordered"></section>
      </main>
      <footer>&copy; 西虹市公安局大数据中心 2020-{year}</footer>
    </div>
  )
}
