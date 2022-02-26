import React, { useRef, useEffect, useState } from 'react'
import XHData from '../geo/geoData.json'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echart-options'
import { px } from '../shared/px'

export const Chart6 = () => {
  const [count, setCount] = useState(325920)
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1)
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [count])

  const divRef = useRef(null)
  useEffect(() => {
    let index = -1
    const myChart = echarts.init(divRef.current)
    // myChart.hideLoading()
    // @ts-ignore
    echarts.registerMap('XH', XHData)

    let mTime = null
    // 实现ToolTip高亮轮播
    function mapActive() {
      const dataLength = XHData.features.length
      // 用定时器控制高亮
      mTime = setInterval(() => {
        // 清除之前的高亮
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: index,
        })
        index++
        // 当前下标高亮
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: index,
        })
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index,
        })
        if (index > dataLength) {
          index = 0
        }
      }, 2000)
    }

    mapActive()

    myChart.on('mouseover', () => {
      // 停止定时器，清除之前的高亮
      console.log('mouseover')
      clearInterval(mTime)
      mTime = null
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index,
      })
    })
    // 鼠标划出重新定时器开始
    myChart.on('mouseout', () => {
      mapActive()
    })

    const option = {
      xAxis: { show: false },
      yAxis: { show: false },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      visualMap: {
        show: false,
        min: 800,
        max: 50000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered'],
        },
      },
      series: [
        {
          tooltip: {
            // 显示的窗口
            trigger: 'item',
            formatter: function (item) {
              var tipHtml = ''
              tipHtml = `<div style="padding: .6rem .8rem;font-size: .325rem;color:#fff; border-radius: 4px;
            background-size: .08rem .3rem, .3rem .08rem;background-color:rgba(6, 79, 111,.6);">${item.data.name} <span style="color:#f9eb59;font-size:.4rem">${item.data.value}</span> </div>`
              return tipHtml
            },
            // borderWidth: 0,
          },
          label: { show: false },
          data: [],
          name: '西虹市地图',
          type: 'map',
          mapType: 'XH', // 自定义扩展图表类型
          aspectScale: 1,
          layoutCenter: ['49%', '47%'], //地图位置
          layoutSize: '90%', // 缩放比例
          itemStyle: {
            color: 'transparent', // 去除坐标小圆点
            emphasis: {
              label: {
                show: true,
              },
            },
          },
        },
      ],
    }
    option.series[0].data = XHData.features.map((item) => {
      // 显示窗口的数据转换
      return {
        value: (Math.random() * 5000).toFixed(0),
        name: item.properties.name,
      }
    })

    myChart.setOption(createEchartsOptions(option))
  }, [])

  return (
    <div className="bordered 籍贯">
      <h2>全市案件侦破实时记录</h2>
      <div ref={divRef} className="chart" />
      <div className="scan-animation">
        <div className="ring">
          <div className="radar" />
        </div>
        <span>数据实时监控中</span>
      </div>
      <div className="bordered note">
        <span>{count.toLocaleString()}</span>
        <span>接待访客</span>
      </div>
    </div>
  )
}
