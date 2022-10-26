<template>
  <div class="section-code">
    <div class="code-left">
      <div class="code-title">
        <div class="icon-dian"></div>
        <div class="text">Query Builder · SQL</div>
      </div>
      <div class="code-body">
        <textarea class="codemirror" id="sqlCodemirror" name="code"></textarea>
      </div>
    </div>
    <div class="code-right">
      <div class="code-title">
        <div class="title-menu">
          <div class="title-item" :class="{active: currentIndex === 0}"
            @click="handleCurrentChange(0)"
            v-show="isSqlEnd"
            >
            <svg><use href="#download"></use></svg>
            <span>ethdep.graphql</span>
          </div>
          <div class="title-item" :class="{active: currentIndex === 1}"
            @click="handleCurrentChange(1)"
            v-show="isGraphqlEnd"
            >
            <span>Code Snippets</span>
          </div>
          <div class="title-item" :class="{active: currentIndex === 2}"
            @click="handleCurrentChange(2)"
            v-show="isPlay"
            >
            <span>Visualization</span>
          </div>
        </div>
        <div class="title-handle" v-if="isGraphqlEnd">
          <div class="handle-item item-text" v-show="currentIndex === 1">Try It!</div>
          <div class="handle-item item-text" v-show="currentIndex === 0">Create & Query</div>
          <div class="handle-item item-icon" v-show="currentIndex === 0" @click="handlePlay">
            <svg><use href="#play"></use></svg>
          </div>
        </div>
      </div>
      <div class="code-body">
        <div class="code-graphql">
          <textarea class="codemirror" id="graphqlCodemirror" name="code"></textarea>
        </div>
        <div class="code-data">
          <textarea class="codemirror" id="dataCodemirror" name="code"></textarea>
        </div>
        <div class="code-snippets" :class="{'code-snippets_show': currentIndex === 1}">
          <textarea class="codemirror" id="snippetsCodemirror" name="code"></textarea>
        </div>
        <div class="code-chart" :class="{'code-chart_show': currentIndex === 2}">
          <div class="card-header">Weekly ETH Deposited</div>
          <div class="card-body">
            <div class="chart" id="chart"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {sqlCodeString, graphqlCodeString, dataCodeString, snippetsCodeSting} from './codeString'

import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/ayu-dark.css'

import 'codemirror/mode/sql/sql'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/mode/sparql/sparql'

// 折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'

import * as echarts from 'echarts'



export default {
  name: '',
  props: {},
  components: {
  },
  data () {
    return {
      isPlay: false,
      isSqlEnd: false,
      isGraphqlEnd: false,
      currentIndex: 0,
      codeTheme: 'default',
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  mounted () {
    this.init()
    // this.initSqlCode()
    // this.initGraphqlCode()
    // this.initDataCode()
    // this.initSnippetsCode()
    // this.drawChart()
  },
  methods: {
    init() {
      this.sqlCodemirror = null
      this.graphqlCodemirror = null
      this.dataCodemirror = null
      this.snippetsCodemirror = null
      this.isPlay = false
      this.isSqlEnd = false
      this.isGraphqlEnd = false
      this.currentIndex = 0
      this.$nextTick(() => {
        this.initSqlCode()
      })
    },
    handlePlay () {
      this.isPlay = true
      this.initDataCode()
    },
    handleCurrentChange (index) {
      this.currentIndex = index
      if (index === 1) {
        this.initSnippetsCode()
      } else if (index === 2) {
        this.drawChart()
      }
    },
    initSqlCode () {
      if (!this.sqlCodemirror) {
        let myTextarea = document.getElementById('sqlCodemirror');
        this.sqlCodemirror = CodeMirror.fromTextArea(myTextarea, {
          mode:'sql',
          theme: this.codeTheme,
          lineNumbers: true,
          readOnly: true,
          lineWrapping: true, // 允许换行
        });

        let i = 1
        let timer = setInterval(() => {
          if(i === sqlCodeString.length) {
            clearInterval(timer)
            this.isSqlEnd = true
            this.initGraphqlCode()
            return
          }
          let html = sqlCodeString.substring(0, i)
          this.sqlCodemirror.setValue(html)
          i++
        },10)
      }
    },
    initGraphqlCode () {
      if (!this.graphqlCodemirror) {
        let myTextarea = document.getElementById('graphqlCodemirror');
        this.graphqlCodemirror = CodeMirror.fromTextArea(myTextarea, {
          mode:'sql',
          theme: this.codeTheme,
          lineNumbers: true,
          readOnly: true,
          lineWrapping: true,
        });
        let i = 1
        let timer = setInterval(() => {
          if(i === graphqlCodeString.length) {
            clearInterval(timer)
            this.isGraphqlEnd = true
            return
          }
          let html = graphqlCodeString.substring(0, i)
          this.graphqlCodemirror.setValue(html)
          i++
        },10)
      }
    },
    initDataCode () {
      if (!this.dataCodemirror) {
        let myTextarea = document.getElementById('dataCodemirror');
        this.dataCodemirror = CodeMirror.fromTextArea(myTextarea, {
          mode:'javascript',
          theme: this.codeTheme,
          readOnly: true,
          lineWrapping: true,
          foldGutter: true,
          lineWrapping: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],

        });
        this.dataCodemirror.setValue(dataCodeString)
      }
    },
    initSnippetsCode () {
      if (!this.snippetsCodemirror) {
        let myTextarea = document.getElementById('snippetsCodemirror');
        this.snippetsCodemirror = CodeMirror.fromTextArea(myTextarea, {
          mode:'python',
          theme: this.codeTheme,
          lineNumbers: true,
          readOnly: true,
          lineWrapping: true,
        });
        this.snippetsCodemirror.setValue(snippetsCodeSting)
      }
    },

    drawChart () {
      const xData = []
      const yData = []
      const startTime = '2020-11-02'
      for (let i = 0; i < 100; i++) {
        let x = new Date(startTime).getTime() + (3600*1000*24*7) * i
        x = new Date(x).toISOString().substring(0, 10)
        let y = Math.random() * 600000
        xData.push(x)
        yData.push(y)
      }
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      let myChart = echarts.init(document.getElementById("chart"));
      // 指定图表的配置项和数据
      let option = {
        grid: {
          bottom: 30,
          right: 10,
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
            color: '#281AF0'
          },
        ],
      };
      myChart.setOption(option);
    },
  },

}
</script>

<style lang="scss">
.section-code{
  $border-color: rgba(40, 26, 240, 0.08);
  margin-top: 80px;
  width: 100%;
  height: 520px;
  background: #FAFBFC;
  border: 1px solid $border-color;
  border-radius: 12px;
  display: flex;
  text-align: left;
  overflow: hidden;
  .code-title{
    flex-shrink: 0;
    height: 66px;
    padding: 13px 14px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    .icon-dian{
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #EAEAFF;
      border: 1px solid rgba(40, 26, 240, 0.08);
      border-radius: 5px;
      margin: 0 10px 0 3px;
    }
    .text{
      font-weight: 500;
      font-size: 18px;
      line-height: 20px;
      letter-spacing: -0.2px;
      color: #565693;
    }
  }
  .code-body{
    flex: 1;
    overflow: auto;
    .CodeMirror-wrap{
      min-width: 100%;
      min-height: 100%;
      line-height: 32px;
      // overflow: auto;
    }
  }
  .code-left{
    flex: 2 0;
    border-right: 1px solid $border-color;
    display: flex;
    flex-direction: column;
    width: 0;
  }
  .code-right{
    flex: 3 0;
    display: flex;
    flex-direction: column;
    width: 0;
    .code-title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title-menu{
        display: flex;
        align-items: center;
        .title-item{
          height: 40px;
          line-height: 40px;
          padding: 0 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          border-radius: 5px;
          border: 1px solid transparent;
          margin-right: 15px;
          svg{
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
          span{
            font-weight: 500;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: -0.2px;
            color: #565693;
          }
          &.active{
            background: #DEE4ED;
            border: 1px solid rgba(40, 26, 240, 0.15);
          }
        }
      }
      .title-handle{
        display: flex;
        align-items: center;
        .handle-item{
          background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
          box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
          border-radius: 4px;
          &.item-text{
            width: 169px;
            height: 40px;
            line-height: 40px;
            font-weight: 500;
            font-size: 18px;
            color: #FFFFFF;
            text-align: center
          }
          &.item-icon{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 20px;
            padding: 10px;
            cursor: pointer;
            svg{
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
    .code-body{
      display: flex;
      position: relative;
      .code-graphql{
        width: 50%;
      }
      .code-data{
        width: 50%;
      }
      .code-snippets{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0;
      }
      .code-snippets_show{
        opacity: 1;
        z-index: 1;
      }
      .code-chart{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: #fff;
        display: flex;
        flex-direction: column;
        z-index: -1;
        opacity: 0;
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
          flex: 1;
          .chart{
            width: 100%;
            height: 100%;
          }

        }
      }
      .code-chart_show{
        opacity: 1;
        z-index: 1;
      }
    }
  }
}
</style>
