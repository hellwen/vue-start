<template>
<div>
  <mu-text-field label="款 号" hintText="款 号" v-model="form.style"/>
  <mu-text-field label="名 称" hintText="名 称" v-model="form.name"/>
  <br/>
  <mu-flat-button label="取 消" class="demo-flat-button"
    @click="cancel"/>
  <mu-raised-button label="确 定" class="demo-raised-button" primary
    @click="confirm"/>
  <mu-raised-button label="下一步" class="demo-raised-button"
    @click="next"/>
</div>
</template>

<script>
  export default {
    props: ['orderStyle', 'dialogVisible'],
    data () {
      return {
        form: {
          style: '',
          name: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      confirm: function () {
        this.$emit('closeStyleDialog')
      },
      cancel: function () {
        this.$emit('closeStyleDialog')
      },
      next: function () {
        this.$emit('showLotDialog')
      }
    }
  }
</script>
