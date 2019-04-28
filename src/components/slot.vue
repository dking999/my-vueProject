<template>
  <div>
    默认：<slot name="normal"></slot><br>
    男孩：<slot name="boy"></slot><br>
    女孩：<slot name="girl"></slot>
    <!--<slot say="你好"></slot>-->
      <ul>
        <li v-for="(list,index) in lists" :key="index">
          <slot :datalist="list">
            {{list.name}}
          </slot>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'slot',
  props: ['lists'],
  data () {}
}
</script>

<style scoped>

</style>
