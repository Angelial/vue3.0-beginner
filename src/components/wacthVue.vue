<!-- wacth  -->
<template>
  <h2>(wacth)</h2>
  <div class="tips"><button @click.stop="overAction">点餐完毕</button></div>
  <div>{{overText}}</div>
</template>

<script lang="ts">
import {ref, watch} from 'vue'
// 类型注释
interface DataProps {
  girls: string[];
  selectGirl: string; 
  selectGirlsFun: (index: number) => void;
}
export default {
  name: 'wacth',
  setup () {
    const overText = ref('红浪漫')
    const overAction = () => {
      overText.value = overText.value + '点餐完毕 ！'
    }
    // watch 函数接受两个参数，第一个监听的值，第二个回调函数，函数中获取新值和旧值
    watch(overText, (newValue, oldValue) => {
      console.log(`new--->${newValue}`)
      console.log(`old--->${oldValue}`)
      document.title = newValue
    })
    //  监听多个值，传入数组的形式； () => data.selectGirl 模式是reactive的值
    // watch([overText, () => data.selectGirl], (newValue, oldValue) => {
    //   console.log(`new--->${newValue}`);
    //   console.log(`old--->${oldValue}`);
    //   document.title = newValue[0];
    // });
    return {
      overText,
      overAction
    }
  }
}
</script>