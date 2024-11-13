<script setup>
import { homeText } from "../constants";
</script>

<template>
  <section id="home">
    <div class="home_inner">
      <div class="home_text">
        <h1>WELCOME!</h1>
        <span class="cursor">_</span>
        <p>Welcome to My Portfolio Site!</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#home {
  height: 90vh;
}

.home_inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;

  @media (max-width: 800px) {
    justify-content: center;
  }

  .home_title {
    text-align: center;
    font-size: 7vw;
    text-transform: uppercase;
    line-height: 1;
    font-weight: 800;
    white-space: nowrap;
    text-indent: -0.5vw;
    letter-spacing: -0.3vw;
    margin-top: 12%;
    margin-bottom: 3%;

    @media (max-width: 320px) {
      display: none;
    }
  }

  @keyframes RevealText {
    from {
      width: 0;
    }
  }

  @keyframes Blink {
    0% {
      opacity: 0
    }

    100% {
      opacity: 1
    }
  }

  .home_text {
    font-family: "Consolas", fixed-width;
    margin: 0 auto;
    max-width: 70%;
    padding-top: 120px;

    h1 {
      animation: RevealText 3s steps(8, end);
      display: inline-block;
      font-size: 80px;
      overflow: hidden;
      position: relative;
      white-space: no-wrap;
      width: 355px;
      margin-bottom:auto;
    }

    .cursor {
      animation: Blink 1s ease-in 0s infinite;
      font-size: 80px;
      font-weight: bold;
      position: relative;
      top: -40px;
    }

    p {
      font-size: 30px;
    }
  }
}
</style>