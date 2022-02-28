import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echart-options'
import { px } from '../shared/px'

export const Chart8 = () => {
  const divRef = useRef(null)

  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    const color = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA']
    myChart.setOption(
      createEchartsOptions({
        color: color,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: {
          bottom: 0,
          itemWidth: px(20),
          itemHeight: px(10),
          itemGap: px(6),
          textStyle: {
            fontSize: px(16),
            lineHeight: px(16),
            color: '#a1d1f1',
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            // 图例位置
            center: ['50%', '45%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              distanceToLabelLine: -px(20), // label距离引导线距离
              position: 'outside',
              textStyle: { color: '#a1d1f1', fontSize: px(16) },
              formatter(options) {
                return (options.value * 100).toFixed(0) + '%'
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: px(4),
            },
            data: [
              { value: 0.07, name: '10-20' },
              { value: 0.1, name: '20-30' },
              { value: 0.23, name: '30-40' },
              { value: 0.28, name: '40-50' },
              { value: 0.32, name: '50-60' },
            ].map((item, index) => {
              return { ...item, label: { color: color[index] } }
            }),
          },
        ],
      })
    )
  }, [])

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">年龄</div>
      </div>
    </div>
  )
}
