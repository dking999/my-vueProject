<template>
  <div id="main" v-cloak >

    <!-- 激活的菜单样式为  active 类 -->
    <!-- 为了阻止链接在点击时跳转，我们使用了 "prevent" 修饰符 (preventDefault 的简称)。 -->

    <nav :class="active" @click.prevent>

      <!-- 当菜单上的链接被点击时，我们调用了 makeActive 方法, 该方法在 Vue 实例中创建。 -->

      <a href="#" class="home" @click="makeActive('home')">Home</a>
      <a href="#" class="projects" @click="makeActive('projects')">Projects</a>
      <a href="#" class="services" @click="makeActive('services')">Services</a>
      <a href="#" class="contact" @click="makeActive('contact')">Contact</a>
    </nav>

    <!-- 以下 "active" 变量会根据当前选中的值来自动变换 -->

    <div id="tip"  v-if="active == 'home'">
  <keep-alive> <TextComponent></TextComponent></keep-alive>
    </div>
    <div id="projects"  v-if="active == 'projects'">
      <keep-alive>   <FormComponent></FormComponent></keep-alive>
    </div>
    <div id="services"  v-if="active == 'services'">
       <MarqueeComponent :lists="lists"></MarqueeComponent>
    </div>
    <div id="contact"  v-if="active == 'contact'">
      <SearchComponent></SearchComponent>
    </div>

  </div>
</template>

<script>

export default {
  name: 'test1',
  data () {
    return {
      active: 'home',
      lists: [
        '别看我！！！！！！！！！！！！']
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    }
  }
}
</script>

<style scoped>
  /* 隐藏未编译的变量 */

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
        菜鸟
    --------------------------*/

  nav{
    display:inline-block;
    margin:60px auto 45px;
    background-color:#5597b4;
    box-shadow:0 1px 1px #ccc;
    border-radius:2px;
  }

  nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;

    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
  }

  nav a:first-child{
    border-radius:2px 0 0 2px;
  }

  nav a:last-child{
    border-radius:0 2px 2px 0;
  }

  nav.home .home,
  nav.projects .projects,
  nav.services .services,
  nav.contact .contact{
    background-color:#e35885;
  }
  p{
    font-size:22px;
    font-weight:bold;
    color:#7d9098;
  }

  p b{
    color:#ffffff;
    display:inline-block;
    padding:5px 10px;
    background-color:#c4d7e0;
    border-radius:2px;
    text-transform:uppercase;
    font-size:18px;
  }

</style>
