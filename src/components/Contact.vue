<template>
  <section id="contact">
    <div class="contact_inner">
      <h2 class="contact_title">
        contact
      </h2>
      <div class="info">
        <!--   <h2>CONTACT US</h2> -->
        <h3>Email:</h3>
        <!-- <input placeholder="Write your name here.."></input> -->
        <p>sy030212@naver.com</p>
        <h3>Github:</h3>
        <p>https://github.com/seo003</p>
        <h3>Phone:</h3>
        <p>010-xxxx-xxxx</p>
        <!--   <button>Send Message</button> -->
        <!--   <div>
    <span class="fa fa-phone"></span>001 1023 567
    <span class="fa fa-envelope-o"></span> contact@company.com
  </div> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
* {
  box-sizing: border-box;

  &:before,
  &:after {
    box-sizing: border-box;
  }
}


a {
  color: #fff;
}

%col {
  float: left;
  margin: 0 0.8771929824561403%;
  overflow: hidden;
}

#contact h3 {
  position: static;
  /* sticky를 해제 */
}

.contact_inner {
  padding: 12%;
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
  // height: 440px;
  // background: #e6e6e6;
  border-radius: 8px;
  box-shadow: 7px 7px 20px -10px #000;
  margin: calc(50vh - 220px) auto;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  position: relative;

  h2 {
    margin: 10px 0;
    padding-bottom: 10px;
    width: 180px;
    color: #78788c;
    border-bottom: 3px solid #78788c;
  }

  // p:before {
  //   content: attr(type);
  //   display: block;
  //   margin: 28px 0 0;
  //   font-size: 14px;
  //   color: black;
  // }


  div {
    content: 'Hi';
    position: absolute;
    bottom: -15px;
    right: -20px;
    background: #50505a;
    color: black;
    width: 320px;
    padding: 16px 4px 16px 0;
    border-radius: 6px;
    font-size: 13px;
    box-shadow: 10px 10px 40px -14px #000;
  }

  span {
    margin: 0 5px 0 15px;
  }

  p {
    // margin-bottom: 10vh;
    font-size: 1.1rem;
  }
}
</style>