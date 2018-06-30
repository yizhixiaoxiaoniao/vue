<template>
  <Menu active-name="1-1" theme="light" width="auto" :open-names="['1','2','3']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        标签1
      </template>
      <MenuItem name="1-1"><router-link exact to="/home/demo1">标签1-1</router-link></MenuItem>
      <MenuItem name="1-2"><router-link exact to="/home/demo2">标签1-2</router-link></MenuItem>
      <MenuItem name="1-3"><router-link exact to="/home/demo3">标签1-3</router-link></MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-keypad"></Icon>
        标签2
      </template>
      <MenuItem name="2-1">标签2-1</MenuItem>
      <MenuItem name="2-2">标签2-2</MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-analytics"></Icon>
        标签3
      </template>
      <MenuItem name="3-1">标签3-1</MenuItem>
      <MenuItem name="3-2">标签3-2</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: 'Left',
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style>
@import './css/index.less';
</style>
