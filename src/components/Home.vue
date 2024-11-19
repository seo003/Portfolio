<template>
  <section id="home">
    <div class="home_inner">
      <div class="home_text">
        <h1>Welcome to My Portfolio Site!</h1>
        <span class="cursor">_</span>
        <p>Thank You for Visiting :)</p>
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

  @keyframes RevealText {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes Blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .home_text {
    font-family: "Consolas", monospace;
    margin: 0 auto;
    max-width: 70%;
    padding-top: 120px;

    h1 {
      animation: RevealText 6s steps(30, end) forwards; 
      display: inline-block;
      font-size: 65px;
      overflow: hidden;
      position: relative;
      white-space: nowrap;
      width: 0;
      margin-bottom: auto;
    }

    .cursor {
      animation: Blink 1.2s ease-in-out infinite;
      font-size: 65px;
      font-weight: bold;
      position: relative;
      top: -20px;
    }

    p {
      font-size: 30px;
    }
  }
}
</style>
