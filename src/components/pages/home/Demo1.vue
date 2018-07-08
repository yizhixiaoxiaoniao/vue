<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">Hello Vue! Demo1</p>
            <p>server response: {{message}}</p>
        </Card>
    </div>
</template>

<script>
export default {
  name: 'Demo1',
  data () {
    return {
      message: ''
    }
  },
  components: {},
  methods: {},
  created: function () {
    this.$http.get('/api/test', (response) => {
      return response.json()
    }).then((respData) => {
      this.message = respData.body.message
    })
  }
}
</script>

<style scoped>

</style>
