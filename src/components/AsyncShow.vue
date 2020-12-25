<template>
  <img :src="result && result.imgUrl">
</template>

<script lang="ts">
import { defineComponent } from "vue"
import axios from 'axios'
// defineComponent 是用来解决TypeScript 情况下，传统的Vue.extents无法对组件给出正确的参数类型推断
// 也就是说在TypeScript环境中如果参数类型推断不正常时，用defineComponent() 组件来进行包装函数
export default defineComponent({
  async setup() {
    const rawData = await axios.get('https://apiblog.jspang.com/default/getGirl')
    return {result: rawData.data}
  }
})
</script>