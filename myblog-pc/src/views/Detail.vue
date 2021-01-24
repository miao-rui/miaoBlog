<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog.title }}</h3>
        <span>{{ blog.post_time }} </span>
      </div>
      <div class="blog-content"><div v-html="blog.content" /></div>
      <div class="comments">
        <h4>
          评 论
          <button @click="post">添加评论</button>
        </h4>
        <p>
          评论内容:
          <textarea
            name="message"
            id="message"
            cols="120"
            rows="3"
            v-model="message"
          ></textarea>
        </p>
        <div class="comment" v-for="(it, index) in blog.comments" :key="index">
          <div class="comment-content">{{ it.comm_content }}</div>
          <div class="comment-info">
            <span class="userinfo">{{ it.username }} </span>
            <span class="post-time">{{ it.comm_post_time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: "",
      message: "",
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      let blogId = this.$route.params.blogId;
      this.$http
        .get("/blog/detail", {
          params: {
            blogId,
          },
        })
        .then((res) => {
          this.blog = res.data.blog;
          console.log(res.data.blog);
        });
    },
    post() {
      let blogId = this.$route.params.blogId;
      this.$http
        .post("/blog/comment", {
          blogId,
          message: this.message,
        })
        .then((res) => {
          alert("添加成功");
          this.message = "";
          this.getdata();
          console.log(res);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.blog {
  margin: 20px 120px;
  padding: 20px;
  background: beige;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
  background-color: azure;
}
.comment-info {
  float: right;
}
</style>