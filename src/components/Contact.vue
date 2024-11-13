<template>
  <section id="contact">
    <div class="contact_inner">
      <h2 class="contact_title">
        contact
      </h2>
      <div class="info">
        <h2><i class="bi bi-envelope-fill"></i> Email:</h2>
        <h3>sy030212@naver.com</h3>
        <h2><i class="bi bi-github"></i> Github:</h2>
        <h3><a href="https://github.com/seo003">https://github.com/seo003</a></h3>
        <h2><i class="bi bi-telephone-fill"></i> Phone:</h2>
        <h3>010-xxxx-xxxx</h3>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

#contact {
  h3 {
    position: static;
  }

  a {
    color: black;
    text-decoration: none;
  }
}

.contact_inner {
  padding: 1% 12%;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .contact_title {
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

    em {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 2;
    }
  }
}

// info
.info {
  width: 70%;
  border-radius: 8px;
  box-shadow: 7px 7px 20px -10px #000;
  margin: 8% auto;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  position: relative;
  background-color:white;
}
</style>