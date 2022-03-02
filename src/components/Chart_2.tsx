import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { createEchartsOptions } from '../shared/create-echart-options'

export const Chart2 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    const option = createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        type: 'category',
        axisTick: { show: false },
        data: [
          '城关区公安局',
          '七里河区公安局',
          '西固区公安局',
          '安宁区公安局',
          '红古区公安局',
          '永登县公安局',
          '皋兰县公安局',
          '榆中县公安局',
          '新区公安局',
        ],
        axisLabel: {
          formatter(val) {
            return val.replace('公安局', '\n公安局')
          },
        },
      },
      legend: {
        bottom: 3,
        right: 10,
        itemHeight: 8,
        itemWidth: 16,
        textStyle: {
          color: '#a1d1f1',
          fontSize: px(14),
        },
      },
      grid: {
        x: px(20),
        y: px(20),
        x2: px(30),
        y2: px(30),
        containLabel: true,
      },
      series: [
        {
          name: '2020年',
          type: 'bar',
          data: [1, 5, 3, 4, 5, 9, 7, 8, 9],
          animationEasing: 'elasticOut',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#20bbf9',
                },
                {
                  offset: 1,
                  color: '#04ffde',
                },
              ]),
            },
          },
        },
        {
          name: '2021年',
          type: 'bar',
          data: [2, 3, 2, 7, 3, 7, 9, 6, 12],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#b92ae8',
                },
                {
                  offset: 1,
                  color: '#ceb3e1',
                },
              ]),
            },
          },
        },
      ],
    })

    myChart.setOption(option)

    setInterval(() => {
      myChart.clear()
      myChart.setOption(option)
    }, 4000)
  }, [])
  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}
