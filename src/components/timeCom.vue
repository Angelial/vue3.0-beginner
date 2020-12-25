<!-- vue3 中的模块化 -- 代替vue2.X的mixins -->
<template>
  <div class="tip tips">时间更新</div>
  <h4 class="tips">{{nowTime}}</h4>
  <button class="tip" @click.stop="getNowTime">显示时间</button>
</template>

<script lang="ts">
import {nowTime, getNowTime} from '../util/useNowTime'

export default {
  name: 'timeCom',
  setup () {
    return {
      nowTime,
      getNowTime
    }
  }
}
</script>