<!-- setup() 和 ref() 函数 -->
<template>
  <h2>欢迎光临红浪漫洗浴中心(ref)</h2>
  <div class="tip">请选择一位美女为你服务</div>
  <button v-for="(item, index) in girls" :key="index" @click.stop="selectGirlsFun(index)">{{item}}</button>
  <div class="tips">你选择了【{{selectGirl}}】为你服</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Ref',
  setup () {
    // setup 函数用法代替了Vue2中的data和methods属性，直接把逻辑写在setup里
    // ref 函数的使用， 要在template 中使用的变量，必须用ref包装一下
    // return 出去的数据和方法，在模板里才可以使用 => 可以精准的控制暴露的变量和方法
    const girls = ref(["大脚", "刘英", "晓红"])
    const selectGirl = ref('刘英')
    const selectGirlsFun: (index: number) => void = (index: number): void => {
      // 改变和读取一个值的时候需要加上 value(使用ref函数)
      selectGirl.value = girls.value[index]
    }
    return {
      girls,
      selectGirl,
      selectGirlsFun
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
