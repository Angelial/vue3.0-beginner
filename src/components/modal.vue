<!-- teleport  把组件渲染到外部DOM， 不必嵌套在#app里 -->
<!-- 把teleport 看成一个传送门，可以把组件传送到需要的地方-->
<template>
  <!-- 传送到 /public/index.html 增加的modal节点 -->
  <!-- 组件挂载到 #modal节点上，而不是在#app里 -->
  <teleport to='#modal' >
    <div id="center">
      <p>teleport  把组件渲染到外部DOM， 不必嵌套在#app里，
        把teleport 看成一个传送门，可以把组件传送到需要的地方</p>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'modal',
  setup() {
    return {}
  }
}
</script>
<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 10px;
  margin-left: -100px;
  margin-top: -100px;
}
</style>