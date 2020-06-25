import {url} from '@/common/js/url'

//  节流函数
const throttle = (func, delay = 500) => {
  let timer
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this)
    }, delay)
  }
}

//  处理图片地址至后台
const solveImgUrl = (imgUrl) => {
  return url.getImg + imgUrl.split('/').slice(4).join('/')
}
const solvePreImgUrl = (imgUrl) => {
  return url.getPreImg + imgUrl.split('/').slice(4).join('/')
}
//  生成随机数
const rdNum = (n, m) => {
  const c = m - n + 1
  return Math.floor(Math.random() * c + n)
}

const sec2Time = (time) => {
  let min = (time / 60) | 0
  min = min < 10 ? `0${min}` : min
  let sec = (time % 60)
  sec = sec < 10 ? `0${sec}` : sec
  return `${min}:${sec}`
}

const num2Wan = (num) => {
  if (num < 10000) {
    return num
  }
  let wan = (num / 10000) | 0
  let thousand = ((num - wan * 10000) / 1000) | 0
  return `${wan}.${thousand}万`
}

const num2999 = (num) => {
  return num > 999 ? '999+' : num
}

export {throttle, solveImgUrl, rdNum, sec2Time, num2Wan, num2999, solvePreImgUrl}

