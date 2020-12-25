import {ref} from 'vue'

const nowTime = ref('00:00:00')
const pad: (num: number | string) => string | number = (num: number | string): string | number => {
  return num >= 10 ? num : `0${num}`
}
const getNowTime: () => void = (): void => {
  const now     = new Date()
  const hour    = pad(now.getHours())
  const minu    = pad(now.getMinutes())
  const sec     = pad(now.getSeconds())
  nowTime.value = `${hour}:${minu}:${sec}`
  setTimeout(getNowTime, 1000)
}
export {nowTime, getNowTime}