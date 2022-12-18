<template>
  <div class="info">
    <!-- <h1><span class="st">Do</span><span class="nd">Not</span></h1>
		<h2 class="st">EFFORT</h2>
		<p>Control your multiple <span class="st">social media</span> accounts from one central place.</p> -->
    <div class="logo-container">
      <logo-text />
      <home-top-logo />
    </div>
    <span>{{ $t('home.top-title') }}</span>
    <p class="description" v-html="$t('home.top-description')"></p>
  </div>
</template>
<script>
import logoText from '@/static/assets/images/home/logo-text.svg?inline'
export default {
  components: {
    logoText,
  },
}
</script>
<style scoped>
.info {
  display: flex;
  flex-direction: column;
}

.info .logo-container {
  display: flex;
  margin-bottom: 20px;
}

.info svg {
  height: 200px;
  width: fit-content;
}

div > span {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
}

div > p {
  margin-top: 2rem;
  text-align: center;
}

.description {
  line-height: 3rem;
}

@media only screen and (max-width: 768px) {
  .info .logo-container {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
}
</style>
