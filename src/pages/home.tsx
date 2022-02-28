import React, { useEffect, useState } from 'react'
import './home.scss'
import headerBg from '../images/header.png'
import { Chart1 } from '../components/Chart_1'
import { Chart2 } from '../components/Chart_2'
import { Chart3 } from '../components/Chart_3'
import { Chart4 } from '../components/Chart_4'
import { Chart5 } from '../components/Chart_5'
import { Chart6 } from '../components/Chart_6'
import { Chart7 } from '../components/Chart_7'
import { Chart8 } from '../components/Chart_8'
import { Chart9 } from '../components/Chart_9'
import { Chart10 } from '../components/Chart_10'

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
          <Chart4 />
        </section>
        <section className="section3 bordered">
          <Chart5 />
        </section>
        <section className="section4">
          <Chart6 />
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              <Chart8 />
              <Chart9 />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div className="charts">
              <Chart10 />
              <div className="chart"></div>
            </div>
          </div>
          <div className="bordered row2 案发街道">
            <h2>案发街道统计</h2>
            <div className="charts"></div>
          </div>
          <div className="bordered row3 作案手段">
            <h2>作案手段分析</h2>
          </div>
        </section>
      </main>
      <footer>&copy; 西虹市公安局大数据中心 2020-{year}</footer>
    </div>
  )
}
