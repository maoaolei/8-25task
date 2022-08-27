<template>
  <tr>
    <td>
      <input type="number" v-model.number="obj['count']"/>
    </td>
    <td>
      <span>{{ obj["goodsName"] }}</span>
    </td>
    <td>
      <span v-show="obj['count'] == 0">卖光了!!!</span>
    </td>
  </tr>
</template>

<script>
export default {
    props: ["obj"]
};
</script>

<style>
</style>
