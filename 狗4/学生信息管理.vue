<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim.number="age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex" >
        <option value="男" >男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in arr" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
let flag
export default {
  data() {
    return {
      name: '',
      age: '',
      sex:'',
      arr: [
        { name: 'Tom', age: '19', sex: '男' },
        { name: 'Jone', age: '21', sex: '女' },
        { name: 'Kevin', age: '22', sex: '男' },
      ]
    }
  },
  methods: {
    add() {
        if (this.name.length == 0 || this.age.length == 0 ||this.sex=='') {
        return alert('请输入完整信息')
      }
      const asset = { name: this.name, age: this.age, sex: this.sex }
      this.arr.push(asset)
      this.name=''
      this.age=''
      this.sex = ''
      flag=false

    },
    edit(index) {
      flag=true
      this.name=this.arr[index].name
      this.age=this.arr[index].age
      this.sex = this.arr[index].sex
      const newAsset = { name: this.name, age: this.age, sex: this.sex }

    },
    del(index) {
      this.arr.splice(index,1)
    }
  }

}
</script>
