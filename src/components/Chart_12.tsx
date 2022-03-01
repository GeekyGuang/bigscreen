import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echart-options'
import { px } from '../shared/px'

export const Chart12 = () => {
  const divRef = useRef(null)

  useEffect(() => {
    const data = [
      { value: 0.08, name: '东岗路' },
      { value: 0.06, name: '段家滩' },
      { value: 0.26, name: '雁北' },
      { value: 0.09, name: '五泉山' },
      { value: 0.15, name: '中山路' },
      { value: 0.06, name: '庆阳路' },
      { value: 0.08, name: '武都路' },
      { value: 0.19, name: '酒泉路' },
      { value: 0.03, name: '天水路' },
    ]

    var myChart = echarts.init(divRef.current)
    const color = [
      '#8d70f8',
      '#f46064',
      '#f38e1c',
      '#1adc7d',
      '#e8e800',
      '#34a3f9',
      '#40b27d',
      '#ea7ccc',
      '#ff33ef',
    ]
    myChart.setOption(
      createEchartsOptions({
        color: color,
        xAxis: { show: false },
        yAxis: { show: false },
        grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
        legend: {
          orient: 'vertical',
          left: px(24),
          top: 'center',
          icon: 'line',
          itemWidth: px(10),
          // itemHeight: px(10),
          itemGap: px(10),
          textStyle: {
            fontSize: px(12),
            lineHeight: px(12),
            color: '#6ca8ed',
          },
          formatter(name) {
            const value =
              data.filter((i) => i.name === name)[0]?.value * 100 + '%'
            return name + ' ' + value
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '75%',
            // 图例位置
            center: ['65%', '50%'],
            avoidLabelOverlap: false,
            labelLine: {
              show: false,
            },
            label: {
              show: false,
            },
            data: data.map((item, index) => {
              return { ...item, label: { color: color[index] } }
            }),
          },
        ],
      })
    )
  }, [])

  return <div className="chart" ref={divRef} />
}
