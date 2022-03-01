import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { createEchartsOptions } from '../shared/create-echart-options'
export const Chart10 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    const option = createEchartsOptions({
      xAxis: {
        data: ['入室抢劫', '当街强盗', '团伙诈骗', '刑事案件', '民事案件'],
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
          data: [40, 23, 20, 16, 32],
          barWidth: px(32),
          barGap: px(32),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 1,
                  color: '#2034f9',
                },
                {
                  offset: 0,
                  color: '#04a1ff',
                },
              ]),
            },
          },
          animationEasing: 'quinticIn',
          animationDelay: function (idx) {
            return Math.random() * 200
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
  return <div ref={divRef} className="chart"></div>
}
