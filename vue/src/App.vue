<template>
  <div class="layout">
    <Layout>
      <Navigate />
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Left />
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Navigate from './components/container/Navigate'
import Left from './components/container/Left'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    Navigate,
    Left
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
