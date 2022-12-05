<script setup lang="ts">
  import { ref } from 'vue';

  import { uploadFile } from '@/services/file.service';
  import { addPicture } from '@/services/pictures.service';

  import { usePictureStore } from '@/stores/pictures';

  const emit = defineEmits(['hideUpload']);

  const hide = () => {
    emit('hideUpload');
  }

  const store = usePictureStore();

  const name = ref('');
  const title = ref('');
  const file = ref(null);

  let newPicture: any;

  const handleFile = async () => {
    console.log('Selected File', file?.value?.files);
    newPicture = file?.value?.files[0];
  }

  const send = async (event: any) => {
    await upload();
    await saveNewPicture();
    newPicture = null;
    title.value = '';
    file.value = null;
    name.value= '';
    hide();
  }

  const upload = async () => {
    const payload = {
      name: name.value,
      file: newPicture,
    };

    try {
      await uploadFile(payload);
      
    } catch (error) {
      
    }
  }

  const saveNewPicture = async () => {
    const newPic = {
      url: `http://localhost:8080/${name.value}`,
      title: title.value,
      authorId: 2
    };

    const addedPciture = await addPicture(newPic);
    store.addPicture(addedPciture); 
  }
</script>

<template>
  <div class="popin">
    <div class="field-wrapper">
      <label for="filename">File name</label>
      <input id="filename" type="text" name="filename" v-model="name" />
    </div>
    <div class="field-wrapper">
      <label for="title">Title</label>
      <input id="title" type="text" name="title" v-model="title" />
    </div>
    <div class="field-wrapper">
      <input ref="file" type="file" name="file" v-on:change="handleFile()" />
    </div>
    <div class="field-wrapper">
      <button @click="send">Send</button>
    </div>
  </div>
  <div class="overlay" @click="hide"></div>

</template>

<style scoped>
.overlay {
  position: fixed;
  z-index: 1002;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5)
}

.popin {
  position: fixed;
  z-index: 1003;
  top: calc(50% - 230px);
  left: calc(50% - 230px);
  width: 460px;
  height: 460px;
  background: #FFF;
  border-radius: 8px;
}

.popin .field-wrapper {
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
}

.popin .field-wrapper label {
  color: #323232;
}

.popin .field-wrapper input {
  width: 100%;
  height: 32px;
}

</style>