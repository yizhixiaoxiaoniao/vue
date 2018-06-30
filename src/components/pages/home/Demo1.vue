<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">Hello Vue! Demo1</p>
            <p>{{message}}</p>
        </Card>
    </div>
</template>

<script>
export default {
  name: 'Demo1',
  data () {
    return {
      message: 'This is home demo1!'
    }
  },
  components: {},
  methods: {},
  created: function () {
    this.$http.get('http://localhsot:9000', (response) => {
      return response.json()
    }).then((respData) => {
      console.log(respData)
    })
  }
}
</script>

<style scoped>

</style>
