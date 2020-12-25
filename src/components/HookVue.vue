<!-- 生命周期和钩子函数 -->
<template>
  <h2>欢迎光临红浪漫洗浴中心(hook)</h2>
  <div class="tip">请选择一位美女为你服务</div>
  <button v-for="(item, index) in girls" :key="index" @click.stop="selectGirlsFun(index)">{{item}}</button>
  <div class="tips">你选择了【{{selectGirl}}】为你服</div>
</template>

<script lang="ts">

// setup() 开始创建组件之前，在before 和created 之前执行，创建的是data和method
// onBeforeMount() 组件挂载到节点上之前执行的函数
// onMounted() 组件挂载到节点后执行的函数
// onBeforeUpload() 组件更新之前执行的函数
// onUpload() 组件更新完成之后执行的函数
// onBeforeUnmount() 组件卸载之前执行的函数
// onUnmount() 组件卸载完成后执行的函数
// onActivated() 被包含在 <keep-alive> 中的组件，会多出两个生命周期钩子函数。被激活时执行
// onDeactived() 比如A组件切换到B组件，A组件消失时执行
// onErrorCaptured() 当捕获一个来自子孙组件的异常时激活钩子函数

// 用于调试
// onRenderTriggered() 状态触发
// onRenderTracked() 状态跟踪

import {reactive, toRefs, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onRenderTriggered, onRenderTracked} from 'vue'
// 类型注释
interface DataProps {
  girls: string[];
  selectGirl: string; 
  selectGirlsFun: (index: number) => void;
}
export default {
  name: 'hook',
  setup () {
    console.log("1-开始创建组件-----setup()");
    const data: DataProps = reactive({
      girls: ['大脚', '刘英', '晓红'],
      selectGirl: '大脚',
      selectGirlsFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })
    onBeforeMount (() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()")
    })
    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()")
    })
    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()")
    })
    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()")
    })
    onRenderTracked ((event) => {
      console.log("状态跟踪组件----------->")
      console.log(event)
    })
    onRenderTriggered ((event) => {
      console.log("状态触发组件--------------->")
      console.log(event)
    })
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
}
</script>