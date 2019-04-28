<template>
  <div id="app">
    <h2>Language Search</h2>

    <div class="form-group">
      <input
        type="text"
        v-model="input"
        @keyup="handleSearch"
        placeholder="Enter language"
        class="form-control"
      />
    </div>
    <ul v-for="(item, index) in languages " class="list-group">
      <li class="list-group-item" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data () {
    return {
      input: '',
      languages: []

    }
  },
  methods: {
    handleSearch: function () {
      this.languages = [
        'JavaScript',
        'Ruby',
        'Scala',
        'Python',
        'Java',
        'Kotlin',
        'Elixir'
      ].filter(item => item.toLowerCase().includes(this.input.toLowerCase()))
    }
  }

}
</script>

<style scoped>

</style>
