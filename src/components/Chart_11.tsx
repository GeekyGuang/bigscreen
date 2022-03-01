import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echart-options'
import { px } from '../shared/px'

export const Chart11 = () => {
  const divRef = useRef(null)

  useEffect(() => {
    console.log(divRef.current)
    var myChart = echarts.init(divRef.current)
    const color = ['#8d70f8', '#f46064', '#f38e1c', '#1adc7d']
    const option = createEchartsOptions({
      color: color,
      xAxis: { show: false },
      yAxis: { show: false },
      legend: {
        bottom: px(4),
        itemWidth: px(20),
        itemHeight: px(10),
        itemGap: px(20),
        textStyle: {
          fontSize: px(16),
          lineHeight: px(16),
          color: '#a1d1f1',
        },
        data: ['经济', '民事', '刑事', '其他'],
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['25%', '65%'],
          // 图例位置
          center: ['50%', '42%'],
          avoidLabelOverlap: false,
          labelLine: {
            show: true,
            length: px(15), // 设置指示线的长度
          },
          label: {
            // distanceToLabelLine: -px(10), // label距离引导线距离
            show: true,
            position: 'outside',
            textStyle: { color: '#a1d1f1', fontSize: px(16) },
            formatter(options) {
              return options.value * 100 + '%'
            },
          },
          itemStyle: {
            // borderColor: '#0F113A',
            // borderWidth: px(4),
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          data: [
            { value: 0.24, name: '刑事' },
            { value: 0.36, name: '民事' },
            { value: 0.18, name: '经济' },
            { value: 0.2, name: '其他' },
          ]
            .sort((a, b) => a.value - b.value)
            .map((item, index) => {
              return { ...item, label: { color: color[index] } }
            }),
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'elasticOut',
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

  return (
    <div className="chart">
      <div className="ring">
        <div className="ring5">
          <div className="ring4">
            <div className="ring3">
              <div className="ring2">
                <div className="ring1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main" ref={divRef} />
    </div>
  )
}
