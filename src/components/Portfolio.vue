<template>

  <section class="gallery">
    <div class="row">
      <ul>
        <li>
          <a href="#item01">
            <img src="../assets/images/image.png" alt="">
          </a>
        </li>
        <li>
          <a href="#item01">
            <img src="../assets/images/image.png" alt="">
          </a>
        </li>
        <!-- li 추가 -->
      </ul>
    </div> <!-- / row -->

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
    </div> <!-- / row -->
    <!-- item 추가 -->

  </section> <!-- / projects -->


</template>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll('.gallery ul li a');
  const closeButton = document.querySelector('.close');

  galleryItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute('href');

      const targetItem = document.getElementById(targetId.slice(1)); // Remove leading "#"

      // Open target item
      targetItem.classList.add('item_open');
    });
  });

  closeButton.addEventListener('click', function () {
    const openItems = document.querySelectorAll('.item_open');
    openItems.forEach(item => item.classList.remove('item_open'));
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

body {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: #333;
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

// // HEADER
// header {
// 	background-color: #84b4b1;
// 	color: #fff;
// 	text-align: center;
// 	padding: 30px 0 120px;

// 	h1 {
// 		text-align: center;
// 		text-transform: uppercase;
// 		font-size: 65px;
// 		font-weight: 400;
// 		letter-spacing: 3px;
// 		line-height: 0.8;
// 		padding-top: 50px;
// 		font-family: 'Montserrat', sans-serif;

// 		span {
// 			text-transform: uppercase;
// 			letter-spacing: 7px;
// 			font-size: 25px;
// 			line-height: 1;
// 		}
// 	}

// 	p {
// 		padding-top: 30px;
// 	}
// }

// PROJECTS
.gallery {
  padding: 40px 0 300px;
  position: relative;
  overflow: hidden;

  ul {
    padding-top: 50px;
    position: relative;

    li {
      @extend %col;
      margin-bottom: 20px;
      width: 23.24561403508772%;
      position: relative;

      a {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        line-height: 0;

        &:before {
          position: absolute;
          width: 32px;
          height: 32px;
          top: 40%;
          left: 50%;
          margin: -14px 0 0 -16px;
          background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTcuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+PCEtLURPQ1RZUEUgU1ZHIFBVQkxJQyAiLS9fL1czQy8vRFREQyAvLy9FVCBTVkcgMS4xLy9FbiAiLSIvLy9QVVJMMHR0eC8vLy9TRTtqLTQ2LTkiPgogPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgaWQ9InN2ZzIiIG5hbWVzcGFjZT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcgaW5rc2NhcGU9IjB4Ij8+CiA8L3N2Zz4K) no-repeat;
          content: '';
          opacity: 0;
          z-index: 1;
          transition: all 0.3s linear;
        }

        &:hover:before {
          top: 50%;
          opacity: 1;
        }

        &:after {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          content: '';
          opacity: 0;
          transition: all 0.3s linear;
        }

        &:hover:after {
          opacity: 1;
        }
      }
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
    float: left;
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