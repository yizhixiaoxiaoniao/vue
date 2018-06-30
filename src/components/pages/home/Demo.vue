<template>
    <Row>
        <Col span="24">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }} 星</span>
            </Rate>
        </Col>
    </Row>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      valueCustomText: 5
    }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>

</style>


