<template>
  <!-- v-cloak 隐藏未编译的变量，直到 Vue 实例准备就绪。 -->

  <form id="main" v-cloak>

    <h1>Services</h1>
    名称：<el-input v-focus v-model="service.name"  placeholder="请输入商品名称"></el-input><br>
    价格：<el-input v-focus v-model.number="service.price" placeholder="请输入商品价格"></el-input><br><br>
    <button @click="add" v-on:click.prevent>添加</button>
    <ul>

      <!-- 循环输出 services 数组, 设置选项点击后的样式 -->

      <li v-for="(service,index) in services" :key="index" v-on:click="toggleActive(service)" v-bind:class="{ 'active': service.active}">

        <!-- 显示订单中的服务名，价格
                   Vue.js 定义了货币过滤器，用于格式化价格 -->

        {{service.name}} <span>{{service.price | currency}}<a href="javascript:;" @click="deleteGoods(service,index) " >删除</a></span>
      </li>
    </ul>

    <div class="total">

      <!-- 计算所有服务的价格，并格式化货币 -->

      Total: <span>{{total() | currency}}</span>

    </div>

  </form>
</template>

<script>
export default {
  name: 'FormComponent',
  data () {
    return {
      // 定义模型属性 the model properties. The view will loop
      // 视图将循环输出数组的数据
      service: {
        name: '',
        price: '',
        active: false
      },
      services: [
        {
          name: 'Web Development',
          price: 300,
          active: true
        }, {
          name: 'Design',
          price: 400,
          active: false
        }, {
          name: 'Integration',
          price: 250,
          active: false
        }, {
          name: 'Training',
          price: 220,
          active: false
        }
      ]
    }
  },
  // 自定义局部指令
  directives: {
    tack: {
      inserted (el) {
        el.style.color = 'red'
      }
    },
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.style.color = 'red'
      }
    }
  },
  methods: {
    toggleActive: function (s) {
      s.active = !s.active
    },
    total: function () {
      var total = 0

      this.services.forEach(function (s) {
        if (s.active) {
          total += s.price
        }
      })

      return total
    },
    add: function () {
      console.log(this.service.price)
      this.services.push(this.service)
      this.service = {name: '', price: ''}
      console.log(this.services.length)
    },
    deleteGoods: function (s, index) {
      s.active = !s.active
      this.services.splice(index, 1)
    }
  },
  // 局部过滤器
  /*filters: {
    currency (value) {
      return '$' + value.toFixed(2)
    }}*/
}
</script>

<style scoped>
  /*  隐藏未编译的变量 */

  [v-cloak] {
    display: none;
  }

  *{
    margin:0;
    padding:0;
  }

  body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
  }

  a, a:visited {
    outline:none;
    color:#389dc1;
  }

  a:hover{
    text-decoration:none;
  }

  section, footer, header, aside, nav{
    display: block;
  }

  /*-------------------------
      订单表单
  --------------------------*/

  form{
    background-color: #61a1bc;
    border-radius: 2px;
    box-shadow: 0 1px 1px #ccc;
    width: 400px;
    padding: 35px 60px;
    margin: 50px auto;
  }

  form h1{
    color:#fff;
    font-size:64px;
    font-family:'Cookie', cursive;
    font-weight: normal;
    line-height:1;
    text-shadow:0 3px 0 rgba(0,0,0,0.1);
  }

  form ul{
    list-style:none;
    color:#fff;
    font-size:20px;
    font-weight:bold;
    text-align: left;
    margin:20px 0 15px;
  }

  form ul li{
    padding:20px 30px;
    background-color:#e35885;
    margin-bottom:8px;
    box-shadow:0 1px 1px rgba(0,0,0,0.1);
    cursor:pointer;
  }

  form ul li span{
    float:right;
  }

  form ul li.active{
    background-color:#8ec16d;
  }

  div.total{
    border-top:1px solid rgba(255,255,255,0.5);
    padding:15px 30px;
    font-size:20px;
    font-weight:bold;
    text-align: left;
    color:#fff;
  }

  div.total span{
    float:right;
  }
</style>
