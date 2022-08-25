<template>
  <div>
    <div>
      <p>{{ msg }}</p>
      <span v-for="(item,index) in arr" :key="index">
       <input type="checkbox" v-model="hobby" :value="item">{{item}}
      </span>
    </div>
    <div>
      <ul>
       <li v-for="(item,index) in hobby" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "请选择喜欢化的专栏",
      hobby: [],
      arr: ["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"]
    };
  },
};
</script>

<style>
</style>

