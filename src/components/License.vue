

<template>
  <section id="license">
    <div class="license_inner">
      <h2 class="license_title">
        License
      </h2>
      <p>자격증</p>
      

    </div>
  </section>

</template>



<style lang="scss">
.license_inner {
  padding: 12%;
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

</style>