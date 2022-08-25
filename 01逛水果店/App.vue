<template>
  <div class="box">
    <table>
      <caption>欢迎光临_vue开发的收银系统_水果店</caption>
      <thead>
        <tr>
          <th>苹果{{price}}￥/ 斤数，折扣 {{discount}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>请输入你要购买的斤数</span>
            <input type="number" v-model="num">
          </td>
        </tr>
        <tr>
          <td>
            <button @click="btnFn">结账买单~</button>
          </td>
        </tr>
        <tr>
          <td>
            <span>结账单: 总价: {{total}}￥元</span> &nbsp;
            <span>折价后: {{newTotal}}￥元</span>  &nbsp;
            <span>省了: {{save}}￥元</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price:'10',
      discount:'<8折>',
      num: '',
      total: '',
      newTotal: '',
      save:''

    }
  },
  methods: {
    btnFn() {
      this.total = this.num * this.price
      this.newTotal = this.total * 0.8
      this.save = this.total - this.newTotal
      this.num=''
    }
  }

}
</script>

<style>
table {
  width: 500px;
  height: 200px;
  border: 1px solid #000;
  margin: 50px auto;
  text-align: center;
}
th,
tr,
td {
  border: 1px solid #000;
  height: 50px;
}


</style>
