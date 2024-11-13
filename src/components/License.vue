<script setup>
import { licenseText } from "../constants";
</script>

<template>
  <section id="license">
    <div class="license_inner">
      <h2 class="license_title">
        License
      </h2>
      <div class="timeline">
        <div v-for="(item, index) in licenseText" :key="index" class="entry">
          <div class="title">
            <h3>{{ item.date }}</h3>
          </div>
          <div class="body">
            <p>{{ item.title }}</p>
            <ul>
              <li>{{ item.company }}</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  </section>

</template>



<style lang="scss">
.license_inner {
  padding: 1% 12%;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .license_title {
    position: sticky;
    top: 70px;
    left: 0;
    height: 5vw;
    font-size: 4vw;
    font-weight: 900;
    line-height: 1.4;
    font-family: var(--mainKor-font);
    text-transform: uppercase;
    color: var(--black100);
    border-bottom: 5px solid black;
    z-index: 1;
    margin-bottom: 0px;

    @media (max-width: 800px) {
      width: 100%;
      margin-bottom: 10vw;
      font-size: 30px;
      height: auto;
      top: 68px;
      background-color: var(--mainBg-color);
    }

  }
}

.timeline {
  width: 100%;
  max-width: 800px;
  background: #fff;
  padding: 100px 50px;
  position: relative;
  box-shadow: 7px 7px 20px -10px #000;
  margin: 8% auto;
  border-radius: 1%;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: calc(33% + 15px);
    bottom: 0px;
    width: 4px;
    background: #ddd;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.entry {
  clear: both;
  text-align: left;
  position: relative;

  .title {
    margin-bottom: .5em;
    float: left;
    width: 33%;
    padding-right: 30px;
    text-align: right;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 8px solid #ADADAD;
      background-color: #fff;
      border-radius: 100%;
      top: 15%;
      right: -8px;
      z-index: 99;
    }

    h3 {
      margin: 0;
      font-size: 120%;
    }

    p {
      margin: 0;
      font-size: 100%;
    }
  }

  .body {
    margin: 0 0 3em;
    float: right;
    width: 66%;
    padding-left: 30px;

    p {
      line-height: 1.4em;

      &:first-child {
        margin-top: 0;
        font-weight: 400;
      }
    }

    ul {
      color: #969696;
      padding-left: 0;
      list-style-type: none;

      li:before {
        content: "–";
        margin-right: 0.5em;
      }
    }
  }
}
</style>