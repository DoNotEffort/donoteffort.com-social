<template>
  <div class="home">
    <home-app-header/>
    <home-app-top/>
    <home-supported-platforms/>
    <home-app-slogan/>
    <home-app-footer/>
  </div>
</template>
<style>
header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

pre {
  white-space: break-spaces;
}

.top {
  flex-direction: revert;
  height: 90vh;
  min-height: 600px;
}

@media only screen and (max-width: 768px) {
  .top .info {
    margin: 0 30px;
  }
}
</style>
<style lang="scss">
@import '@/static/assets/style/scss/mixins.scss';
@import '@/static/assets/style/scss/colors.scss';
.top {
  @include center-item($mobile: 'column-reverse');
  justify-content: space-evenly;
}

h1 {
  color: $sideColor;
}
</style>
