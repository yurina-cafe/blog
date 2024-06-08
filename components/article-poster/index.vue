<script setup lang="ts">
export interface ArticlePosting {
  title: string; // 文章的标题，会转化成文件名的第一部分
  time: string; // 文章的时间，会转化成文件名的第二部分
  tag: string; // 文章的标签，会转化成文件名的第三部分
  content: string;
}

const article = ref<ArticlePosting>({
  title: "",
  time: "",
  tag: "",
  content: "",
});

const post = () => {
  const data = {
    title: `${article.value.title}@${Date.now()}@${article.value.tag}`,
    content: article.value.content,
  };
  debugPostArticle(data);
};
</script>

<template>
  <div>
    <div class="article-poster">
      <h1>文章发布</h1>
      <div>
        <input type="text" v-model="article.title" placeholder="文章标题" />
      </div>
      <div>
        <input type="text" v-model="article.tag" placeholder="文章标签" />
      </div>
      <div>
        <textarea v-model="article.content" placeholder="文章内容"></textarea>
      </div>
      <div>
        <button @click="post">发布</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
