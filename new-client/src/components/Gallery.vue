<template>
  <section class="container-normal gallery scrolltarget">
    <div class="images">
      <img
        id="img-01"
        class="image fade"
        src="../assets/images/gallery04.jpg"
        alt=""
      />
      <img
        id="img-02"
        class="image fade"
        src="../assets/images/gallery02.jpg"
        alt=""
      />
      <img
        id="img-03"
        class="image fade"
        src="../assets/images/gallery05.jpg"
        alt=""
      />
      <img
        id="img-04"
        class="image fade"
        src="../assets/images/gallery03.jpg"
        alt=""
      />
      <img
        id="img-05"
        class="image selected fade"
        src="../assets/images/gallery01.jpg"
        alt=""
      />
    </div>
    <div class="description">
      <div class="container-gallery-text fade">
        <div class="line">
          <p>1.</p>
          <svg xmlns="http://www.w3.org/2000/svg">
            <line x1="0%" y1="3px" x2="100%" y2="3px" />
          </svg>
        </div>
        <p id="text-01" class="text">1. Grid Fins</p>
      </div>
      <div class="container-gallery-text fade">
        <div class="line">
          <p>2.</p>
          <svg xmlns="http://www.w3.org/2000/svg">
            <line x1="0%" y1="3px" x2="100%" y2="3px" />
          </svg>
        </div>
        <p id="text-02" class="text">2. Return from Space</p>
      </div>
      <div class="container-gallery-text fade">
        <div class="line">
          <p>3.</p>
          <svg xmlns="http://www.w3.org/2000/svg">
            <line x1="0%" y1="3px" x2="100%" y2="3px" />
          </svg>
        </div>
        <p id="text-03" class="text">3. Dragon Capsule</p>
      </div>
      <div class="container-gallery-text fade">
        <div class="line">
          <p>4.</p>
          <svg xmlns="http://www.w3.org/2000/svg">
            <line x1="0%" y1="3px" x2="100%" y2="3px" />
          </svg>
        </div>
        <p id="text-04" class="text">4. Hawthorne Site</p>
      </div>
      <div class="container-gallery-text fade">
        <div class="line">
          <p>5.</p>
          <svg xmlns="http://www.w3.org/2000/svg">
            <line x1="0%" y1="3px" x2="100%" y2="3px" />
          </svg>
        </div>
        <p id="text-05" class="text">5. Raptor Engines</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
};
</script>
