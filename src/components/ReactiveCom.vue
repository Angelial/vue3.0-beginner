<!-- reactive函数 -- 接收一个Object -->
<template>
  <h2>欢迎光临红浪漫洗浴中心(reactive)</h2>
  <div class="tip">请选择一位美女为你服务</div>
  <button v-for="(item, index) in girls" :key="index" @click.stop="selectGirlsFun(index)">{{item}}</button>
  <div class="tips">你选择了【{{selectGirl}}】为你服</div>
</template>

<script lang="ts">
import {reactive, toRefs} from 'vue'
// 类型注释
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlsFun: (index: number) => void;
}
export default {
  name: 'reactive',
  setup () {
    const data: DataProps = reactive({
      girls: ['大脚', '刘英', '晓红'],
      selectGirl: '晓红',
      selectGirlsFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
}
</script>