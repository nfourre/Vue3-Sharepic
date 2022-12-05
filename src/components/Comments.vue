<script setup lang="ts">
import Comment from '@/components/Comment.vue';
import { ref } from 'vue';

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
  comments: CommentInterface[]
}>();

const emit = defineEmits(['addComment'])

const newCommentText = ref('');

const sendComment = () => {
  emit('addComment', newCommentText.value)
}
</script>

<template>
  <div class="comments_wrapper">
    <span class="title">{{ comments.length }} Comments</span>
    <div class="comments_list">
      <Comment v-for="comment in comments" :comment="comment" />
    </div>
    <div class="comment-form">
      <div class="text-wrapper">
        <textarea v-model="newCommentText"></textarea>
      </div>
      <button class="send_btn" @click="sendComment">Send</button>
    </div>
  </div>
</template>

<style scoped>
.comments_wrapper {
    display: flex;
    flex-direction: column;
}

.comments_wrapper .title {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    font-weight: bold;
    text-transform: none;
    color: rgb(34, 34, 34);
    margin: 0px 0px 24px;
}

.comments_wrapper_list {
    display: flex;
    flex-direction: column;
}

.comment-form {
  display: flex;
  flex-direction: row;
}

.text-wrapper {
  flex-grow: 1;
}

.text-wrapper textarea {
  width: 100%;
  min-height: 65px;
  background: ;
  border: 1px solid #EFEFEF;
  border-radius: 8px;
  padding: 8px;
}

.send_btn {
  align-self: flex-end;
  width: 120px;
  height: 42px;
  border: none;
  color: #FFF;
  background: #0099e5;
  border-radius: 8px;
  margin: 0 0 5px 12px;
}
</style>