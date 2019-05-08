<template>
  <div>
  <el-button type="text" @click="dialogFormVisible = true">注册</el-button>

  <el-dialog title="注册信息" :visible.sync="dialogFormVisible"  width="30%" center>
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button class="el-button el-button--success" type="primary" @click="dialogFormVisible = false,confirm(form.name)">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'RegForm',
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        password: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    confirm (name) {
      console.log('regform:'+name)
      this.$emit('click-confirm', name)
    }
  }

}
</script>

<style scoped>

</style>
