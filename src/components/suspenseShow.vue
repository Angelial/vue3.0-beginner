<!-- Suspense  -->
<template>
  <div>
    <!-- Suspense 是有两个template插槽的， -->
    <Suspense>
        <!-- default代表异步请求完成后显示的模板内容 -->
       <template #default>
        <AsyncShow />
      </template>
      <!-- fallback 代表在加载中时显示的模板内容 -->
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
import AsyncShow  from './AsyncShow.vue'
export default {
  name: 'SuspenseCom',
  components: {
    AsyncShow
  }
}
// Suspense 是有两个template插槽的，default代表异步请求完成后显示的模板内容
// fallback 代表在加载中时显示的模板内容
</script>
