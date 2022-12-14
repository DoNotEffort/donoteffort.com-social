<template>
  <div class="supported-platforms-container">
    <span>{{$t("home.supported-platforms")}}</span>
    <div class="supported-platforms bg-st">
      <div class="platforms">
        <facebook-icon />
        <twitter-icon />
        <instagram-icon />
        <youtube-icon />
        <linkedin-icon />
        <pinterest-icon />
        <tiktok-icon />
        <reddit-icon />
        <discord-icon />
        <telegram-icon />
        <tumblr-icon />
      </div>
    </div>
  </div>
</template>
<script>
import facebookIcon from '@/static/assets/icons/social/facebook.svg?inline'
import twitterIcon from '@/static/assets/icons/social/twitter.svg?inline'
import instagramIcon from '@/static/assets/icons/social/instagram.svg?inline'
import youtubeIcon from '@/static/assets/icons/social/youtube.svg?inline'
import linkedinIcon from '@/static/assets/icons/social/linkedin.svg?inline'
import pinterestIcon from '@/static/assets/icons/social/pinterest.svg?inline'
import tiktokIcon from '@/static/assets/icons/social/tiktok.svg?inline'
import redditIcon from '@/static/assets/icons/social/reddit.svg?inline'
import discordIcon from '@/static/assets/icons/social/discord.svg?inline'
import telegramIcon from '@/static/assets/icons/social/telegram.svg?inline'
import tumblrIcon from '@/static/assets/icons/social/tumblr.svg?inline'

export default {
  components: {
    facebookIcon,
    twitterIcon,
    instagramIcon,
    youtubeIcon,
    linkedinIcon,
    pinterestIcon,
    tiktokIcon,
    redditIcon,
    discordIcon,
    telegramIcon,
    tumblrIcon,
  },
}
</script>
<style scoped>
svg {
  height: 2rem;
  fill: white;
  margin: 3rem;
}

.supported-platforms {
  padding: 40px 30px;
  margin-top: 2rem;
}

.supported-platforms-container {
  text-align: center;
}

.supported-platforms-container span {
  font-weight: bold;
  font-size: 1.5rem;
}

@media only screen and (max-width: 768px) {
  svg {
    margin: 2rem;
		height: 1.5rem;
  }

  .supported-platforms {
    padding: 10px;
  }
}
</style>
