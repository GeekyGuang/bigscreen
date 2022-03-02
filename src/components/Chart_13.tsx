import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { createEchartsOptions } from '../shared/create-echart-options'
export const Chart13 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    const data = [
      { value: 40, name: '东岗' },
      { value: 29, name: '段家滩' },
      { value: 23, name: '雁北' },
      { value: 17, name: '五泉山' },
      { value: 21, name: '中山' },
      { value: 13, name: '庆阳' },
      { value: 19, name: '武都' },
      { value: 27, name: '酒泉' },
      { value: 32, name: '天水' },
    ]

    const option = createEchartsOptions({
      xAxis: {
        data: data.map((i) => i.name),
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: '#085b70' },
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
          lineStyle: { color: '#085b70' },
        },
        // 隐藏网格线
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          data: data.map((i) => i.value),
          barWidth: px(20),
          // barGap: px(32),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#38f7d1',
                },
                {
                  offset: 1,
                  color: '#1ba1db',
                },
              ]),
            },
          },
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
  return <div ref={divRef} className="chart"></div>
}
