<script setup>
import { portText } from "../constants";
</script>

<template>
  <section id="port">
    <div class="port_inner">
      <h2 class="port_title">
        portfolio
      </h2>
      <section class="gallery">
        <div class="row">
          <ul>
            <li v-for="(item, index) in portText" :key="index">
              <div class="image-container">
                <img src="../assets/images/image.png" alt="">
                <div class="description_overlay">
                  <div class="description_content">
                    <b>{{ item.title }} ({{ item.date }})</b>
                    <p>{{ item.desc }}</p>
                    <a :href="item.link" target="_blank">{{ item.link }}</a>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div> <!-- / row -->
      </section>
      <!-- Item 01 -->
      <div id="item01" class="port">
        <div class="row">
          <div class="description">
            <h1>Item 01</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est.
              Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
          </div>

          <a href="#" class="close">X</a>
          <img src="../assets/images/image.png" alt="">
        </div>
      </div>
      <!-- item 추가 -->

    </div>
  </section>

</template>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll('.gallery ul li a');

  galleryItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetItem = document.querySelector(targetId);

      if (targetItem) {
        targetItem.classList.add('item_open');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close')) {
      const openItems = document.querySelectorAll('.item_open');
      openItems.forEach(item => item.classList.remove('item_open'));
    }
  });
});

</script>

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

.row {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0;
  clear: both;

  img {
    max-width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
}

%col {
  float: left;
  margin: 0 0.8771929824561403%;
  overflow: hidden;
}

.port_inner {
  padding: 12%;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .port_title {
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

// PROJECTS
.gallery {
  padding: 40px 0 300px;
  position: relative;
  overflow: hidden;

  ul {
    padding-top: 50px;
    position: relative;

    .image-container {
      position: relative;
      perspective: 1000px;

      img {
        width: 100%;
        transition: transform 0.5s;
      }

      .description_overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.5s;
      }

      .description_content {
        margin: 3%;
      }

      &:hover img {
        transform: rotateY(180deg);
      }

      &:hover .description_overlay {
        opacity: 1;
      }
    }

    li {
      @extend %col;
      margin-bottom: 20px;
      width: 30%;
      position: relative;
    }
  }
}

// PORT
.port {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-top: 100px;
  background: #ffffff;
  background-color: rgb(241, 239, 239);
  z-index: 103;
  visibility: hidden;
  transform: translateY(-100%);
  border-bottom: 1px solid #d0d0d0;
  transition: all 0.5s ease-in-out;

  img {
    width: 50%;
  }

  .description {
    // float: left;
    width: 50%;
    max-height: 100%;
    padding: 0 40px 40px;
    overflow: auto;

    h1 {
      font-size: 35px;
      line-height: 2.3;
      padding: 0;
    }

    >* {
      opacity: 0;
      transition: all 0.5s linear;
    }
  }

  &.item_open {
    visibility: visible;
    transform: translateY(0%);
    transition: all 0.4s ease-in-out;

    >* {
      opacity: 1;
      transition-delay: 0.5s;
    }
  }
}

.close {
  width: 21px;
  height: 21px;
  position: absolute;
  right: 10px;
  top: -121px;
  opacity: 1;
  z-index: 1004;
  transition: all 0.1s ease-in-out;
  color: black;
  font-size: 30px;
  text-decoration: none;


  .item_open & {
    opacity: 1;
    top: 0px;
    transition: all 0.3s ease-in-out;
  }
}
</style>