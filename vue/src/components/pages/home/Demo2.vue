<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">Hello Vue! Demo2</p>
            <p>{{message}}</p>
        </Card>
    </div>
</template>

<script>
export default {
  name: 'Demo2',
  data () {
    return {
      message: 'This is home demo2!'
    }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>

</style>
