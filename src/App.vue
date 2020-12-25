<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button :class="{active: cur === item}" v-for="(item, index) in list" :key="index" @click.stop="onChange(item)">{{item}}</button>
  <ref-com       v-if="cur === 'ref'" />
  <reactive-com  v-if="cur === 'reactive'" />
  <hook-vue      v-if="cur === 'hook'" />
  <wacth-vue     v-if="cur === 'wacth'" />
  <time-com      v-if="cur === 'time'" />
  <modular-com   v-if="cur === 'module'" />
  <modal         v-if="cur === 'teleport'" />
  <suspense-show  v-if="cur === 'Suspense'"/>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from 'vue'
import RefCom             from './components/RefCom.vue'
import ReactiveCom        from './components/ReactiveCom.vue'
import HookVue            from './components/HookVue.vue'
import wacthVue           from './components/wacthVue.vue'
import timeCom            from './components/timeCom.vue'
import modularCom         from './components/modularCom.vue'
import modal              from './components/modal.vue'
import suspenseShow        from './components/suspenseShow.vue'
export default defineComponent({
  name: 'App',
  components: {
    RefCom,
    ReactiveCom,
    HookVue,
    wacthVue,
    timeCom,
    modularCom,
    modal,
    suspenseShow
  },
  setup () {
    const list: string[] = ['ref', 'reactive', 'hook', 'wacth', 'time', 'module', 'teleport', 'Suspense']
    const cur = ref('ref')
    const onChange: (str: string) => void = (str: string): void => {
      cur.value = str
    }
    // 捕获子孙组件异常的函数钩子。
    onErrorCaptured ((error) => {
      console.log(`error===> ${error}`)
      return true
    })
    return {
      list,
      cur,
      onChange
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tip {
  margin-bottom: 20px;
}
.tips {
  margin-top: 20px;
}
button {
  margin-right: 20px;
}
button.active {
  margin-bottom: 20px;
  background-color: skyblue;
}
img {
  display: block;
  width: 400px;
  height: 400;
  margin: 0 auto;
}
</style>
