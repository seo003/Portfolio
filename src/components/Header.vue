<script setup>
import { headerMenu } from "../constants";
</script>

<template>
  <header id="header" role="banner">
    <div class="header_inner">
      <div class="header_logo">
        <a href="#home">portfolio</a>
        <em>Kim Seo Young</em>
      </div>
      <div class="header_menu borderXwidth">
        <a v-for="{ menu, url } in headerMenu" :key="url" :href="url">{{ menu }}</a>
      </div>

    </div>
  </header>
</template>


<script>
</script>


<style lang="scss">
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10000;

  a {
    color: #333;
    text-decoration: none;
    padding: 10px;
  }
}

.header_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(116, 99, 99, 0.1);
  backdrop-filter: blur(15px);
  padding: 1em;
}

.header_logo {
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
  margin-left: 11%;

  em {
    font-size: 12px;
    display: block;
    color: var(--black200);
  }
}

.header_menu {
  margin-right: 11%;
  text-align: center;
  padding: 1em;

  a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;
    margin: 0px 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer;

    &:before,
    &:after {
      position: absolute;
      opacity: 0;
      width: 0%;
      height: 2px;
      content: '';
      background: black;
      transition: all 0.3s;
    }

    &:before {
      left: 0;
      top: 0;
    }

    &:after {
      right: 0;
      bottom: 0;
    }

    &:hover {

      &:before,
      &:after {
        opacity: 1;
        width: 100%;
      }
    }
  }
}

.borderXwidth {
  a {

    &:before,
    &:after {
      position: absolute;
      opacity: 0;
      width: 0%;
      height: 2px;
      content: '';
      background: black;
      transition: all 0.3s;
    }

    &:before {
      left: 0;
      top: 0;
    }

    &:after {
      right: 0;
      bottom: 0;
    }

    &:hover {

      &:before,
      &:after {
        opacity: 1;
        width: 100%;
      }
    }
  }
}
</style>