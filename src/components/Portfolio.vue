<script setup>
import { portText } from "../constants";
</script>

<template>
  <section id="port">
    <div class="port_inner">
      <h2 class="port_title">
        portfolio
      </h2>
      <h3>이미지에 마우스를 올리면 자세한 정보를 볼 수 있습니다!</h3>
      <section class="gallery">
        <div class="row">
          <ul>
            <li v-for="(item, index) in portText" :key="index">
              <div class="image-container">
                <img :src="item.img" :alt="item.title">
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

h3 {
  position: sticky;
  top: 170px;
  z-index: 1;
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
      width: 100%; 
      height: 200px; 

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
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
      overflow: hidden;
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

</style>