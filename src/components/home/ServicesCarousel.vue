<template>
  <div class="split-slideshow">
    <div class="slideshow">
      <div class="slider">
        <div class="item">
          <img src="../../assets/production.jpg" />
        </div>
        <div class="item">
          <img src="../../assets/mixing.jpg" />
        </div>
        <div class="item">
          <img src="../../assets/mastering.jpg" />
        </div>
      </div>
    </div>
    <div class="slideshow-text">
      <div class="item">Production</div>
      <div class="item">Mix & Mastering</div>
      <div class="item">Sound Design</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesCarousel",
  created() {}
};
</script>
<style lang="scss">
.slideshow {
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 0;
  width: 99.4vw;
  height: 80%;
  overflow: hidden;

  .slider {
    width: 99.4vw;
    height: 80%;
    z-index: 2;

    * {
      outline: none;
    }

    .item {
      height: 99.4vh;
      width: 80%;
      position: relative;
      overflow: hidden;
      border: none;
      color: black;

      .text {
        display: none;
      }

      img {
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .slick-dots {
    // position: absolute;
    z-index: 100;
    width: 15%;
    height: auto;
    bottom: auto;
    top: 45%;
    // right: 0;
    transform: translateY(-50%);
    left: auto;
    color: #fff;
    display: block;

    li {
      display: block;
      width: 100%;
      height: auto;
      content: "sound";

      & button {
        height: 40px;
        text-align: center;

        &:before {
          content: "";
          background: #fff;
          color: #fff;
          height: 5px;
          width: 20%;
          border-radius: 0;
          position: absolute;
          top: 50%;
          right: 0;
          left: auto;
          transform: translateY(-50%);
          transition: all 0.3s ease-in-out;
          opacity: 0.6;
        }
      }

      &.slick-active {
        button {
          &:before {
            width: 25%;
            opacity: 1;
          }
        }
      }
    }
  }

  &.slideshow-right {
    left: 0;
    z-index: 1;
    width: 50vw;
    pointer-events: none;

    .slider {
      left: 0;
      position: absolute;
    }
  }
}

.slideshow-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  font-size: 80px;
  width: 100vw;
  text-align: center;
  color: #fff;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  background-color: black;
  width: 60%;
  pointer-events: none;
  text-transform: uppercase;
  letter-spacing: 20px;
  line-height: 0.8;

  @media (max-width: 767px) {
    font-size: 40px;
  }
}

.the-most {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 50vw;
  max-width: 200px;
  padding: 10px;

  img {
    max-width: 100%;
  }
}
</style>
