<script setup> 
import {headerMenu} from "../constants";
</script>

<template>
  <header id="header" role="banner">
    <div class="header_inner">
      <div class="header_logo">
        <a href="/">portfolio</a>
        <em>Kim Seo Young</em>
      </div>
      <nav class="header_menu">
        <ul>
          <li v-for="{menu, url} in headerMenu" :key="url">
            <a :href="url">{{menu}}</a>
          </li>
        </ul>
      </nav>
      <div class="header_profile">
        <a href="#profile">Profile</a>
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
  padding: 1rem;
}

.header_logo {
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;

  em {
    font-size: 12px;
    display: block;
    color: var(--black200);
  }
}
.header_profile {
  display: flex;
  align-items: center;
  a {
      text-transform: uppercase;
      font-size: 16px;
      padding: 14px;
      position: relative;
    }
  }

.header_menu {
  ul {
    padding: 0
  }

  li {
    display: inline;

    a {
      text-transform: uppercase;
      font-size: 16px;
      padding: 14px;
      position: relative;
    }

    a::before {
      content: '';
      width: calc(100% - 28px);
      height: 1px;
      background-color: var(--black);
      position: absolute;
      left: 14px;
      bottom: 10px;
      transform: scaleX(0);
      transition: all 0.3s;
    }

    a:hover::before {
      transform: scaleX(1);
    }
  }
}

.header_nav_mobile {
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;

  span {
    display: block;
    width: 40px;
    height: 2px;
    background-color: var(--black);
    margin-top: 19px;
    position: relative;
  }

  span::before {
    content: "";
    width: 40px;
    height: 2px;
    background-color: var(--black);
    position: absolute;
    right: 0;
    top: 6px;
    transition: width 0.3s;
  }

  span::after {
    content: "";
    width: 40px;
    height: 2px;
    background-color: var(--black);
    position: absolute;
    left: 0;
    bottom: 6px;
    transition: width 0.3s;
  }
}
</style>