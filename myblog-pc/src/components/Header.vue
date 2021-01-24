<template>
  <header>
    <div class="title">MyBlog</div>
    <div class="login-regist">
      <a href="/login">登录</a>/
      <a href="/regist">注册</a>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
header {
  height: 2rem;
  background-color: rgb(223, 203, 137);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0 5rem;
}
a {
  text-decoration: none;
}
</style>