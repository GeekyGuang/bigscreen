import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { createEchartsOptions } from '../shared/create-echart-options'
export const Chart1 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    const option = createEchartsOptions({
      xAxis: {
        data: [
          '城关区',
          '七里河区',
          '西固区',
          '安宁区',
          '红谷区',
          '永登区',
          '皋兰区',
          '榆中区',
          '兰州新区',
        ],
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: '#083B70' },
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('')
              array.splice(2, 0, '\n')
              return array.join('')
            }
            return val
          },
        },
      },
      yAxis: {
        axisLine: {
          show: true,
          lineStyle: { color: '#083B70' },
        },
        // 隐藏网格线
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
          animationEasing: 'bounceIn',
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
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}
