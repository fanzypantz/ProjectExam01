<template>
  <section class="container-normal gallery scrolltarget">
    <div class="images">
      <div
        @click="handleClick(0)"
        :class="'gallery-image-container ' + getClass(0)"
      >
        <img
          id="img-01"
          class="image fade"
          src="../assets/images/gallery01.jpg"
          alt=""
        />
        <p id="text-01" class="text">Grid Fins</p>
      </div>
      <div
        @click="handleClick(1)"
        :class="'gallery-image-container ' + getClass(1)"
      >
        <img
          id="img-02"
          class="image fade"
          src="../assets/images/gallery02.jpg"
          alt=""
        />
        <p id="text-02" class="text">Hawthorne Site</p>
      </div>
      <div
        @click="handleClick(2)"
        :class="'gallery-image-container ' + getClass(2)"
      >
        <img
          id="img-03"
          class="image fade"
          src="../assets/images/gallery03.jpg"
          alt=""
        />
        <p id="text-03" class="text">Return from Space</p>
      </div>

      <div
        @click="handleClick(3)"
        :class="'gallery-image-container ' + getClass(3)"
      >
        <img
          id="img-04"
          class="image fade"
          src="../assets/images/gallery04.jpg"
          alt=""
        />
        <p id="text-04" class="text">Raptor Engines</p>
      </div>

      <div
        @click="handleClick(4)"
        :class="'gallery-image-container ' + getClass(4)"
      >
        <img
          id="img-05"
          class="image selected fade"
          src="../assets/images/gallery05.jpg"
          alt=""
        />
        <p id="text-05" class="text">Dragon Capsule</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',

  data() {
    return {
      currentFocus: 1,
      isAnimating: false,
    };
  },

  methods: {
    getClass(index) {
      if (index > this.currentFocus) {
        if (index > this.currentFocus + 1) {
          return 'far-right';
        } else {
          return 'right';
        }
      } else if (index === this.currentFocus) {
        return 'current-focus';
      } else if (index < this.currentFocus) {
        if (index < this.currentFocus - 1) {
          return 'far-left';
        } else {
          return 'left';
        }
      } else {
        return '';
      }
    },

    leftClick() {
      this.isAnimating = true;
      this.currentFocus = this.currentFocus - 1;
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },

    rightClick() {
      this.isAnimating = true;
      this.currentFocus = this.currentFocus + 1;
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },

    handleClick(index) {
      if (index !== this.currentFocus && !this.isAnimating) {
        if (index > 0 && index < 4) {
          if (index > this.currentFocus) {
            this.rightClick();
          } else {
            this.leftClick();
          }
        }
      }
    },
  },
};
</script>

<style lang="sass">
$delay: 500ms

.gallery
  display: flex
  align-items: center

  .images
    position: relative
    height: 60%
    width: 100%
    display: flex

  .gallery-image-container
    position: absolute
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25)
    margin: 0
    transition: top $delay ease, left $delay ease, width $delay ease, height $delay ease, transform $delay ease, opacity $delay ease

    .text
      color: white
      padding-left: 20px
      margin: 0
      line-height: 40px
      background-color: #005288
      transition: opacity $delay ease, tranform $delay ease

    img
      width: 100%
      height: calc(100% - 40px)
      object-fit: cover
      transition: height $delay ease

  .far-right, .far-left
    width: 300px
    height: 300px
    opacity: 0
    transform: scale(0)
    top: calc(100% - 300px)

  .left, .right
    width: 300px
    height: 300px
    top: calc(100% - 300px)

    img
      height: 100%

    .text
      opacity: 0
      transform: scaleY(0)

  .far-left
    left: 0
    transform-origin: bottom left

  .far-right
    left: calc(100% - 300px)
    transform-origin: bottom right

  .left
    left: 0
    transform-origin: bottom left

  .right
    left: calc(100% - 300px)
    transform-origin: bottom right

  .current-focus
    left: 50%
    top: 0
    transform: translateX(-50%)
    width: 400px
    height: 500px
</style>
