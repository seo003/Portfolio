<script setup>
import { ref, computed } from 'vue';
import { portText } from '../constants';

const filter = ref('all'); // 기본 필터: 'all'

const filteredPortText = computed(() =>
  filter.value === 'all' ? portText : portText.filter(item => item.type === filter.value)
);

// type 추출(라디오박스 선택지)
const uniqueTypes = computed(() => {
  const types = portText.map(item => item.type);
  return ['all', ...new Set(types)];
});
</script>

<template>
  <section id="port">
    <div class="port_inner">
      <h2 class="port_title">
        portfolio
      </h2>
      <h3>이미지에 마우스를 올리면 자세한 정보를 볼 수 있습니다!</h3>

      <div class="radio_inner">
        <label v-for="(type, index) in uniqueTypes" :key="index">
          <input type="radio" :value="type" v-model="filter" />
          <h3>{{ type.toUpperCase() }}</h3>
        </label>
      </div>

      <section class="gallery">
        <div class="gallery_inner">
          <ul>
            <li v-for="(item, index) in filteredPortText" :key="index">
              <div class="image_inner">
                <img :src="item.img" :alt="item.title">
                <div class="description_inner">
                  <div class="description_content">
                    <b>{{ item.title }} ({{ item.date }})</b>
                    <p>{{ item.desc }}</p>
                    <a :href="item.link" target="_blank">{{ item.link }}</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
.port_inner {
  padding: 1% 12%;
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

.radio_inner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 190px;
  z-index: 10;

  label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
    margin-right: 5%;

    input {
      position: absolute;
      left: -9999px;

      &:checked+h3 {
        background-color: #EDEBEB;

        &:before {
          box-shadow: inset 0 0 0 0.4375em black;
        }
      }
    }

    h3 {
      display: flex;
      align-items: center;
      padding: 0.375em 0.75em 0.375em 0.375em;
      border-radius: 99em;
      transition: 0.25s ease;
      background-color:#FAFAFA;

      &:hover {
        background-color: #EDEBEB;
      }

      &:before {
        display: flex;
        flex-shrink: 0;
        content: "";
        background-color: #fff;
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        margin-right: 0.375em;
        transition: 0.25s ease;
        box-shadow: inset 0 0 0 0.125em black;
      }
    }
  }
}

.gallery {
  padding: 40px 0 0px;
  position: relative;
  overflow: hidden;

  ul {
    position: relative;

    .image_inner {
      position: relative;
      perspective: 1000px;
      width: 100%;
      height: 200px;

      img {
        width: 100%;
        transition: transform 0.5s;
      }

      .description_inner {
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

      &:hover .description_inner {
        opacity: 1;
      }
    }

    li {
      float: left;
      margin: 0 0.8771929824561403%;
      margin-bottom: 20px;
      width: 30%;
      position: relative;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
  }
}
</style>
