<template>
  <div class="test-page">


    <div class="code-card">
      <div class="card-header">
        <div class="traffic">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="card-body">
        <textarea class="codemirror" id="codemirror" name="code"></textarea>
      </div>
    </div>

    <div class="code-card">
      <div class="card-header">
        <div class="traffic">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="card-body">
        <textarea class="codemirror" id="codemirror2" name="code"></textarea>
      </div>
    </div>

    <div class="chart-card margin-top-3">
      <div class="card-header">Weekly ETH Deposited</div>
      <div class="card-body">
        <div class="chart" id="chart1"></div>
      </div>
    </div>

  </div>
</template>

<script>
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/javascript/javascript'

// 折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'


import * as echarts from 'echarts'

const htmlData = `SELECT
  SUM(VALUE) / 1e18 AS total_deposited_eth,
  date_trunc('week', DATE(block_time)) AS week_date
FROM ethereum_mainnet.traces
WHERE LOWER(to_address) = LOWER('0x00000000219ab540356cBB839Cbe05303d7705Fa')
  AND STATUS = 1
  AND VALUE > 0
GROUP BY 2
ORDER BY 2
`
export default {
  name: 'test-page',
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    drawChart () {
      // const xData = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      // const yData = [5, 20, 36, 10, 10, 20]
      const xData = []
      const yData = []
      const startTime = '2020-11-02'
      for (let i = 0; i < 200; i++) {
        let x = new Date(startTime).getTime() + (3600*1000*24*7) * i
        x = new Date(x).toISOString().substring(0, 10)
        let y = Math.random() * 600000
        xData.push(x)
        yData.push(y)
      }
      console.log('echarts', echarts)
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      let myChart = echarts.init(document.getElementById("chart1"));
      // 指定图表的配置项和数据
      let option = {
        grid: {
          bottom: 30,
          right: 0,
          top: 10,
        },
        tooltip: {
          show: false
        },
        xAxis: {
          data: xData
        },
        yAxis: {
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: yData,
            animationDuration: 2800, //加上这个
            animationEasing: "quadraticOut", //加上这个
          },
        ],
      };
      myChart.setOption(option);
    },

    initCode () {
      let myTextarea = document.getElementById('codemirror');
      this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
        mode:'sql',//编辑器语言
        // theme:'monokai', //编辑器主题
        extraKeys: {"Ctrl": "autocomplete"},//ctrl可以弹出选择项
        lineNumbers: true,//显示行号
        readOnly: true,
        lineWrapping: true, // 允许换行
        defaultTextHeight: 32,
      });

      let i = 1
      let timer = setInterval(() => {
        if(i === htmlData.length) {
          clearInterval(timer)
          return
        }
        let html = htmlData.substring(0, i)
        this.CodeMirrorEditor.setValue(html)
        i++
      },30)
    },
    initCode2 () {
      let myTextarea = document.getElementById('codemirror2');
      let CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
        mode:'javascript',//编辑器语言
        // theme:'monokai', //编辑器主题
        extraKeys: {"Ctrl": "autocomplete"},//ctrl可以弹出选择项
        lineNumbers: false,//显示行号
        readOnly: true,
        lineWrapping: true, // 允许换行
        defaultTextHeight: 32,
        foldGutter: true,
        lineWrapping: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],

      });
      CodeMirrorEditor.setValue(`function Fun () {
  let a = 1;
  let b = 2;
  return a + b
}
`)
    },
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.drawChart();
      this.initCode()
      this.initCode2()
    })
  }
}
</script>

<style lang="scss">
.test-page{
  background: #fff;
  padding: 20px;
  .chart{
    width: 606px;
    height: 303px;
  }

  .code-card{
    width: 640px;
    height: 390px;
    background: #FAFBFC;
    border: 1px solid rgba(40, 26, 240, 0.08);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .card-header{
      width: 100%;
      height: 44px;
      background: #EFF2F7;
      border-bottom: 1px solid rgba(40, 26, 240, 0.08);
      padding: 17px;
      .traffic{
        width: 51px;
        height: 11px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item{
          height: 11px;
          width: 11px;
          border-radius: 50%;
          &:nth-child(1){
            background: #FF6058;
            border: 1px solid #E14642;
          }
          &:nth-child(2){
            background: #FFBD2E;
            border: 1px solid #E0A026;
          }
          &:nth-child(3){
            background: #29CA41;
            border: 1px solid #2CAD28;
          }

        }
      }
    }
    .card-body{
      flex: 1;
      .CodeMirror-wrap{
        width: 100%;
        height: 100%;
        line-height: 32px;
      }
    }
  }

  .chart-card{
    width: 640px;
    height: 388px;
    background: #FFFFFF;
    border: 1px solid rgba(40, 26, 240, 0.08);
    box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
    border-radius: 12px;
    .card-header{
      width: 100%;
      height: 69px;
      padding: 29px 22px 20px;
      line-height: 20px;
      font-family: 'Basier Square';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      display: flex;
      align-items: center;
      color: #4A4A61;
    }
    .card-body{

    }
  }
}
</style>
