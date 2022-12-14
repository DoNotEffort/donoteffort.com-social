<template>
    <div class="top">
      <home-top-info />
      <camera-fancy class="fancy camera" />
      <hashtag-fancy class="fancy hashtag" />
      <like-fancy class="fancy like" />
      <image-fancy class="fancy image" />
    </div>
</template>
<script>
import cameraFancy from '@/static/assets/images/home/fancy/camera.svg?inline'
import hashtagFancy from '@/static/assets/images/home/fancy/hashtag.svg?inline'
import likeFancy from '@/static/assets/images/home/fancy/like.svg?inline'
import imageFancy from '@/static/assets/images/home/fancy/image.svg?inline'

export default {
  components: {
    cameraFancy,
    hashtagFancy,
    likeFancy,
    imageFancy,
  },
}
</script>
<style scoped>


.camera{
  top: 10vh;
  left: 30vw;
  width: 5rem;
}

.hashtag{
  bottom: 30vh;
  left: 10vw;
  width: 2rem;
}

.image{
  top: 30vh;
  right: 10vw;
}

.like{
  bottom: 10vh;
  right: 10vw;
  width: 7rem;
}

</style>