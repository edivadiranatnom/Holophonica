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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
        transform: translate(-50%, -50%);
      }
    }
  }

  &.slideshow-right {
    left: 0;
    z-index: 1;
    width: 40vw;
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
  font-size: 20px;
  width: 100vw;
  text-align: center;
  color: #fff;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  width: 80%;
  pointer-events: none;
  text-transform: uppercase;
  letter-spacing: 20px;
  line-height: 1;

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
