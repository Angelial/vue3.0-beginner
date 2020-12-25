<!-- vue3 中的模块化 -- 代替vue2.X的mixins -->
<template>
  <h2>vue3 中的模块化 -- 代替vue2.X的mixins</h2>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <h4>随机选择一位美女为你服务</h4>
    <h6 v-if="loading">loading</h6>
    <img v-if="loaded" :src="result.message" />
  </div>
</template>

<script>
import useUrlAxios from '../util/useURLAxios'
export default {
  name: 'modularCom',
  setup() {
    const {result, loading, loaded} = useUrlAxios(
      'https://dog.ceo/api/breeds/image/random'
    )
    return {
      result, loading, loaded
    }
  }
}
</script>