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
            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download"></use></svg>
            <span>ethdep.graphql</span>
          </div>
          <div class="title-item" :class="{active: currentIndex === 1}"
            @click="handleCurrentChange(1)"
            v-show="isGraphqlEnd"
            >
            <span>Code Snippets</span>
          </div>
          <!-- <div class="title-item" :class="{active: currentIndex === 2}"
            @click="handleCurrentChange(2)"
            v-show="isPlay"
            >
            <span>Visualization</span>
          </div> -->
        </div>
        <div class="title-handle" :class="{'title-handle_try': currentIndex === 1}" v-if="isGraphqlEnd">
          <div class="handle-item item-text" v-show="currentIndex === 1"
            :class="{'item-text_disable': isCopy}"
            v-clipboard="snippetsCodeSting" @success="handleCopyCodeSuccess"
            >{{isCopy ? 'Copied!' : 'Try It!'}}</div>
          <div class="handle-item item-text" v-show="currentIndex === 0" @click="handlePlay">Create & Query</div>
          <!-- <div class="handle-item item-icon" v-show="currentIndex === 0" @click="handlePlay">
            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play"></use></svg>
          </div> -->
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

// 折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'

import * as echarts from 'echarts'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


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
      snippetsCodeSting: snippetsCodeSting,
      isCopy: false
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    this.isInit = false
  },
  mounted () {
    this.$nextTick(() => {
      ScrollTrigger.create({
        trigger: '.slide3',
        start: 'top center',
        end: 'bottom top',
        // markers: true,
        onEnter: () => {
          if (!this.isInit) {
            this.isInit = true
            this.init()
          }
        },
      })
    })
    // this.init()
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
          mode:'javascript',
          theme: this.codeTheme,
          // lineNumbers: true,
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
          // foldGutter: true,
          // gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],

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
          // lineNumbers: true,
          readOnly: true,
          lineWrapping: true,
        });
        this.snippetsCodemirror.setValue(snippetsCodeSting)
      }
    },

    handleCopyCodeSuccess() {
      if (this.isCopy) return
      this.isCopy = true
      const timer = setTimeout(() => {
        this.isCopy = false
        clearTimeout(timer)
      }, 3000)
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
            name: "",
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
  height: 530px;
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
    overflow: hidden;
    .CodeMirror-wrap{
      width: 100%;
      height: 100%;
      line-height: 22px;
      font-size: 14px;
    }
  }
  .code-left{
    border-right: 1px solid $border-color;
    display: flex;
    flex-direction: column;
    width: 38%;
  }
  .code-right{
    display: flex;
    flex-direction: column;
    width: 62%;
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
            text-align: center;
            cursor: pointer;
            &.item-text_disable{
              pointer-events: none;
            }
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
        height: 100%;
        overflow: hidden;
        .CodeMirror-wrap{
          padding: 10px 10px;
        }

      }
      .code-data{
        width: 50%;
        height: 100%;
        overflow: hidden;
        border-left: 1px solid $border-color;
        .CodeMirror-wrap{
          padding: 10px 10px;
        }
      }
      .code-snippets{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0;
        overflow: hidden;
        .CodeMirror-wrap{
          padding: 10px 10px;
        }
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

@media screen and (max-width: 767px) {
  $border-color: rgba(40, 26, 240, 0.08);

  .section-code{
    margin-top: 50px;
    width: 100%;
    height: auto;
    border: 0;
    border-radius: 0;
    display: flex;
    text-align: left;
    flex-direction: column;
    overflow: hidden;
    background: transparent;
    .code-title{
      flex-shrink: 0;
      height: 38px;
      padding: 8px 7px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      .icon-dian{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #EAEAFF;
        border: 1px solid rgba(40, 26, 240, 0.08);
        border-radius: 5px;
        margin: 0 15px 0 3px;
      }
      .text{
        font-size: 14px;
        line-height: 14px;
      }
    }
    .code-body{
      flex: 1;
      overflow: hidden;
      .CodeMirror-wrap{
        line-height: 16px;
        font-size: 10px;
      }
    }
    .code-left{
      border: 1px solid $border-color;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 360px;
      border-radius: 6px;
      background: #FAFBFC;
      overflow: hidden;
    }
    .code-right{
      display: flex;
      flex-direction: column;
      width: 100%;
      border: 1px solid $border-color;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 666px;
      border-radius: 6px;
      margin-top: 10px;
      background: #FAFBFC;
      position: relative;
      .code-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        border-bottom: 0;
        &::before{
          position: absolute;
          content: '';
          border: 1px solid $border-color;
          height: 38px;
          top: -1px;
          left: -1px;
          right: -1px;
          border-radius: 6px;
          pointer-events: none;
        }
        .title-menu{
          display: flex;
          align-items: center;
          position: absolute;
          left: -1px;
          top: -1px;
          right: -1px;
          .title-item{
            height: 38px;
            line-height: 38px;
            padding: 0 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            border: 1px solid transparent;
            margin-right: 15px;
            width: 50%;
            margin: 0;
            svg{
              width: 14px;
              height: 14px;
              margin-right: 6px;
            }
            span{
              font-size: 14px;
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
          position: absolute;
          left: 50%;
          top: 33.757%;
          transform: translate(-50%, 0);
          z-index: 2;
          margin-top: 5px;
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
              text-align: center;
              cursor: pointer;
              &.item-text_disable{
                pointer-events: none;
              }
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
        .title-handle_try{
          top: unset;
          bottom: 67px;
        }
      }
      .code-body{
        display: flex;
        position: relative;
        flex-direction: column;
        border-radius: 0 0 6px 6px;
        .code-graphql{
          width: 100%;
          height: 33.757%;
          overflow: hidden;
          .CodeMirror-wrap{
            padding: 10px 10px;
          }

        }
        .code-data{
          width: 100%;
          height: 66.243%;
          overflow: hidden;
          border-left: 0;
          border-top: 1px solid $border-color;
          .CodeMirror-wrap{
            padding: 10px 10px;
          }
        }
        .code-snippets{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0;
          overflow: hidden;
          .CodeMirror-wrap{
            padding: 10px 10px;
          }
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
}
</style>
