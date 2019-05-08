<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <router-link :to="{name:'TestComponent'}">test</router-link>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  <!--  <Test1></Test1>-->
    <!--<List></List>
    <Slotcomponent :lists="nameList">
      <template #normal>普通</template>
      <template v-slot:boy>帅气</template>
      <template slot="girl">美丽</template>
      <template v-slot="{datalist : data}">
        {{data.id}}
        {{data.name}}
      </template>
    </Slotcomponent>
<CssTest></CssTest>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nameList: [
        {id: 1, name: '孙悟空'},
        {id: 2, name: '猪八戒'},
        {id: 3, name: '沙和尚'},
        {id: 4, name: '唐僧'},
        {id: 5, name: '小白龙'}
      ]
    }
  }
}
</script>

<style>

</style>
