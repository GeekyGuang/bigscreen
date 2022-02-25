import React, { useRef, useEffect } from 'react'
import province from '../geo/geoData.json'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echart-options'
import { px } from '../shared/px'

export const Chart6 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    // @ts-ignore
    echarts.registerMap('GY', province)
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        grind: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
        },
        series: [
          {
            type: 'map',
            mapType: 'GY', // 自定义扩展图表类型
            // data: [{ name: '云南省', value: 0 }],
            label: { show: false, color: 'white' },
            itemStyle: {
              areaColor: '#010D3D',
              borderColor: '#01A7F7',
              emphasis: {
                label: { color: 'white' },
                areaColor: '#5470C6',
              },
            },
          },
        ],
      })
    )
  }, [])

  return (
    <div className="bordered 籍贯">
      <h2>全市案情侦破实时数据</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}
