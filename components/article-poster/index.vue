<script setup lang="ts">
import { PostArticle } from '~/composables/article';
import type { ArticleInfo, ArticleInfoSplit } from '~/types/article';

interface ArticleInfoPost {
  title: ArticleInfoSplit;
  content: string;
}
const article = ref<ArticleInfoPost>({
  title: {
    name: "",
    time: "",
    tag: "",
  },
  content: "",
});

const post = () => {
  const time = formatedDate(new Date());
  const data: ArticleInfo = {
    title: `${article.value.title}@${time}@${article.value.title.tag}`,
    content: article.value.content,
  };
  PostArticle(data);
};
</script>

<template>
  <div class="article-poster">
    <h1>文章发布</h1>
    <div class="article-edit">
      <div class="text-input">
        <input type="text" v-model="article.title.name" placeholder="文章标题" />
      </div>
      <div class="text-input">
        <input type="text" v-model="article.title.tag" placeholder="文章标签" />
      </div>
      <div class="text-content">
        <textarea v-model="article.content" placeholder="文章内容"></textarea>
      </div>
      <div>
        <button @click="post">发布</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-poster {
  height: 500px;
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-edit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.text-input {
  width: 400px;
}

.text-input input {
  width: 100%;
}

.text-content {
  width: 400px;
}

.text-content textarea {
  width: 100%;
  min-height: 200px;
  resize: vertical;
}
</style>
