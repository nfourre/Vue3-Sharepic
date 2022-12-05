<script setup lang="ts">
import { format } from 'date-fns';
import { computed } from 'vue';
interface AuthorInterface {
  id: number;
  firstname: string;
  lastname: string;
}

interface CommentInterface {
  id: number;
  text: string;
  authorId: number;
  imageId: number;
  createdAt: number;
  author?: AuthorInterface;
}

const props = defineProps<{
  comment: CommentInterface
}>()

const commentDate = computed(() => {
  return format(new Date(props.comment.createdAt), 'dd/MM/yyyy HH:MM')
})
</script>

<template>
  <div class="comment_card">
        <div class="author_avatar">
          <img
            src="https://drscdn.500px.org/user_avatar/14517171/q%3D85_w%3D50_h%3D50/v2?webp=true&v=1&sig=9bc42e40486b89ffe32344944a77a9fd171314fa413622dc7da9b15a76c431b4"
            alt="" />
        </div>
        <div class="comment">
          <span class="author">{{ comment?.author?.firstname }} {{ comment?.author?.lastname }}</span>
          <span class="text">{{ comment?.text }}</span>
        </div>
        <div class="time">
          <span>
            {{ commentDate }}
          </span>
        </div>
      </div>
</template>

<style scoped>
.comment_card {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
}

.comment_card .author_avatar {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
}

.comment_card .author_avatar img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
}

.comment_card .comment {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.comment_card .comment .author {
    position: relative;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: rgb(34, 34, 34);
    text-decoration: none;
    transition: color 0.1s ease 0s;
}

.comment_card .comment .text {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    text-transform: none;
    color: rgb(34, 34, 34);
    margin: 0px;
}

.comment_card .time {
  color: #323232;
  padding: 0 0 0 10px; 
}
</style>