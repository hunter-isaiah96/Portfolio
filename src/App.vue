<template>
  <div id="app">
    <header>
      <div>
        <router-link to="/"><img class="logo" src="./assets/logo.svg" /></router-link>
        <div class="social">
          <a href="https://www.instagram.com/rhynoartworks/" target="_blank"><img src="./assets/instagram-icon.svg" /></a>
          <a href="https://github.com/hunter-isaiah96" target="_blank"><img src="./assets/github-icon.svg" /></a>
          <a href="mailto:hunter.isaiah96@gmail.com" target="_blank"><img src="./assets/email-icon.svg" /></a>
        </div>
      </div>
    </header>
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style src="./styles/normalize.scss" lang="scss"></style>
<style src="./styles/fonts.scss" lang="scss"></style>
<style src="./styles/main.scss" lang="scss"></style>
