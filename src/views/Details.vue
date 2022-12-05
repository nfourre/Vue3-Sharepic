<script setup lang="ts">
import { useRoute } from 'vue-router';
import ImageViewer from '@/components/ImageViewer.vue';
import ImageInfos from '@/components/ImageInfos.vue';
import Comments from '@/components/Comments.vue';

import { getPictureById } from '@/services/pictures.service';
import { getAuthorById } from '@/services/authors.service';
import { getPictureComments, addPictureComment } from '@/services/comments.service';

import { useAuthorStore } from '@/stores/authors';
import { usePictureStore } from '@/stores/pictures';
import { useCommentStore } from '@/stores/comments';

const route = useRoute();
const { id } = route.params;

const pictureStore = usePictureStore();
const authorStore = useAuthorStore();
const commentStore = useCommentStore();

const picture = await getPictureById(id as string);
pictureStore.updateCurrentPicture(picture);

const author = await getAuthorById(picture.authorId as number);
authorStore.updateCurrentAuthor(author);

const comments = await getPictureComments(picture.id as number);
for(const comment of comments) {
  const commentAuthor = await getAuthorById(comment.authorId as number);
  comment.author = commentAuthor;
}
commentStore.updateCommentArray(comments);

const onAddComment = async (event: string) => {
  const newComment = {
    text: event,
    authorId: 1,
    imageId: id,
  }

  try {
    const addedComment = await addPictureComment(newComment)
    const commentAuthor = await getAuthorById(addedComment.authorId as number);
    addedComment.author = commentAuthor;
    commentStore.addComment(addedComment);
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <ImageViewer :picture="pictureStore.currentPicture" />
  <div class="content">
    <ImageInfos class="infos" :picture="pictureStore.currentPicture" :author="authorStore.author" />
    <Comments class="comments" :comments="commentStore.comments" @add-comment="onAddComment" />
  </div>
</template>

<style scoped>

/*
    Details page
*/

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    width: calc(100vw - 250px);
    margin: 0 auto;
    padding: 2rem 0 0 0;
}

.content .infos {
    width: 40%;
}

.content .comments {
    width: 55%;
}
</style>