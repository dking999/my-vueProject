<template>
<div id="userList">
 <div class="title">添加新用户</div>
 <div :style="style">
 姓名：<el-input v-model="user.name" :disabled="show" placeholder="请输入姓名"></el-input><br>
 年龄：<el-input v-model="user.age" :disabled="show" placeholder="请输入年龄"></el-input><br><br>
 <button @click="add" :disabled="show">添加</button>
</div>
<table>
      <tr class="thead">
         <td>序号</td>
         <td>姓名</td>
         <td>年龄</td>
         <td>操作</td>
       </tr>
       <tr v-for="(list ,index) in lists" :key="index" >
          <td v-text="index+1"></td>
          <td v-text="list.name"></td>
          <td v-text="list.age"></td>
          <td>
            <a href="javascript:;" @click="deleteUser(index)">删除</a>
            <a v-if="list.age<22" href="javascript:;" @click="marry(index)">结婚</a>
           </td>
       </tr>
</table>
</div>
</template>
<script>
export default {
  name: 'list',
  data () {
    return {
      user: {
        name: '',
        age: ''
      },
      lists: [],
      style: {
        width: '180px'
      },
      show: false
    }
  },
  methods: {
    add: function () {
      if (this.lists.length + 1 > 3) {
        this.show = !this.show
      } else {
        this.lists.push(this.user)
        this.user = {name: '', age: ''}
      }
    },
    deleteUser: function (index) {
      // 删除一个数组元素
      this.lists.splice(index, 1)
    },
    marry: function () {
      alert('不好意思，未到法定结婚年龄！')
    }
  }
}
</script>
