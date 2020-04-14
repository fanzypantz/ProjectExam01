<template>
  <div class="container-main">
    <section id="header-index" class="one-page scrollable scroll-0"></section>

    <section class="container-normal history scrollable scroll-1">
      <h2 class="fade">Making</h2>
      <h2 id="history" class="fade">Hi</h2>
      <div class="reflight fade">
        <h3>First reflight</h3>
        <svg xmlns="http://www.w3.org/2000/svg">
          <line x1="0%" y1="5px" x2="100%" y2="5px" />
        </svg>
        <h3>First delivery</h3>
      </div>
      <p class="text fade">
        SpaceX has gained worldwide attention for a series of historic
        milestones. It is the only private company capable of returning a
        spacecraft from low Earth orbit, which it first accomplished in 2010.
        The company made history again in 2012 when its Dragon spacecraft became
        the first commercial spacecraft to deliver cargo to and from the
        International Space Station.
      </p>
      <a href="rockets.html" class="hangar fade">
        <img src="../assets/images/hangar.jpg" alt="spacex hangar" />
        <div class="link-text">
          <h3>Falcon Rockets</h3>
        </div>
      </a>
    </section>

    <section id="hero01" class="one-page scrollable scroll-2">
      <div class="slogan">
        <p class="text fade">
          "If you get up in the morning and think the future is going to be
          better, it is a bright day. Otherwise, it's not."
        </p>
        <p class="signature fade">-Elon Musk</p>
      </div>
    </section>

    <section class="container-normal gallery scrollable scroll-3">
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

    <section id="hero02" class="one-page scrollable scroll-4">
      <div class="slogan">
        <p class="text fade">
          "When Henry Ford made cheap, reliable cars, people said, 'Nah, what's
          wrong with a horse?' That was a huge bet he made, and it worked."
        </p>
        <p class="signature fade">-Elon Musk</p>
      </div>
    </section>

    <section id="index-cta" class="container-normal scrollable scroll-5">
      <a id="dragon-space" href="rockets.html#falcon-9">
        <img
          class="fade"
          src="../assets/images/dragon_capsule.jpg"
          alt="dragon capsule in space"
        />
        <div class="link-text fade">
          <h3>Dragon Capsules</h3>
        </div>
      </a>
      <div id="two-row-dragon">
        <a id="landing" href="missions.html#missions">
          <img
            class="fade"
            src="../assets/images/ofc_ilu_landing.jpg"
            alt="falcon core landing"
          />
          <div class="link-text fade">
            <h3>Launch Missions</h3>
          </div>
        </a>
        <a id="core-hangar" href="reusability.html#cores">
          <img
            class="fade"
            src="../assets/images/falcon_core.jpg"
            alt="falcon core in hangar"
          />
          <div class="link-text fade">
            <h3>Falcon Cores</h3>
          </div>
        </a>
      </div>
    </section>

    <section id="hero03" class="one-page scrollable scroll-6">
      <div class="slogan">
        <p class="text fade">
          "We're going to make it happen. As God is my bloody witness, I'm
          hell-bent on making it work."
        </p>
        <p class="signature fade">-Elon Musk</p>
      </div>
    </section>

    <section id="business" class="container-normal scrollable scroll-7">
      <div class="column">
        <h1 id="dreams" class="fade">Relive your dreams</h1>
        <img
          class="fade"
          src="../assets/images/business01.jpg"
          alt="man looking at planning board"
        />
      </div>
      <div class="column">
        <img
          class="fade"
          src="../assets/images/elon_musk.jpg"
          alt="elon musk"
        />
        <h1 id="jobs" class="fade">Available Jobs</h1>
        <a
          class="career-button fade"
          href="https://www.spacex.com/careers"
          target="_blank"
          >Career</a
        >
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
};
</script>
