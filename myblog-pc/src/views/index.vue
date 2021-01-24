<template>
  <div class="container">
    <div class="blog-list">
      <router-link to="/blog/post">发表文章</router-link>

      <div class="blog" v-for="(item, index) in blogs" :key="index">
        <h3 class="blog-title">
          <router-link :to="'/blog/detail/' + item.blog_id">{{
            item.title
          }}</router-link>
        </h3>
        <div class="blog-content"><div v-html="item.content" /></div>
        <span class="post-time">{{ item.post_time }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$http.get("/blog/list").then((res) => {
        this.blogs = res.data.blogs;
        console.log(res);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.container {
  margin: 0;
  padding: 0;
}
.blog-list {
  width: 815px;
  margin: 20px auto;
}
.blog {
  width: 100%;
  background: beige;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>