<template>
  <div style="background:#eee;padding: 20px">
      <Card :bordered="false">
          <p slot="title">Hello Vue! Demo3</p>
          <p>{{message}}</p>
      </Card>
  </div>
</template>

<script>
export default {
  name: 'Demo3',
  data () {
    return {
      message: 'This is home demo3!'
    }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>

</style>
