<template>
 <div>
  <span v-for="(item,index) in arr" :key="index">
    <input type="checkbox" v-model="newArr" :value="item">{{item}}
  </span>
  <div>{{msg}}{{total}}</div>
 </div>

</template>

<script>
export default {
  data() {
    return {
      msg:'你选中的元素，累加的值和为:',
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      newArr:[]
    }
  },
  computed: {
    total() {
      return this.newArr.reduce((acc,item) => (acc+=item),0)
    }
  }

}
</script>

<style>

</style>
