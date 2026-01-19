<template>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WEBPROG SF 241 Introduction</title>
  <button class="back-btn" onclick="history.back()">← Back</button>
</head>
<body>

<header class="hero">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWejGFY4Kdx4Kh9qJumGdCAWoTU14NtUwtsQ&s"
    alt="Profile Picture"
    class="profile-img"
  >
  <h1>Personal Profile Web Page</h1>
</header>

<main id="app" class="container">

  <section class="card">
    <h2>About Me</h2>
    <p>
      Wassup y'all. I'm Kurt/NBAcraft, an aspiring Network Admin,
      Cybersecurity Analyst, and Cloud Security Analyst.
    </p>
  </section>

  <section class="card">
    <h2>Course</h2>
    <p>Computer Science with specialization in Cybersecurity and Forensics</p>
  </section>

  <section class="card">
    <h2>IT Experience</h2>
    <ul>
      <li>Fundamental skills in Cisco Packet Tracer</li>
      <li>Fundamental skills in Programming (Java, Python)</li>
      <li>Fundamental skills in Linux CLI commands</li>
      <li>Fundamental skills in SQL Workbench</li>
    </ul>
  </section>

  <section class="card">
    <h2>Hobbies & Interests</h2>
    <ul>
      <li>Playing Video Games</li>
      <li>Listening to RnB / Chill Music</li>
      <li>Watching Anime and Asian dramas</li>
    </ul>
  </section>

  <section class="card">
    <h2>Goals In Life</h2>
    <p>A life that’s comfortable, stable, and not constantly on fire.</p>
  </section>

  <!-- Vue Gallery Component -->
  <section class="card">
    <h2>Picture Gallery</h2>
    <image-gallery></image-gallery>
  </section>
</main>
<footer class="footer">
  <p>© 2026 NBAcraft. All rights reserved.</p>
</footer>
</body>
</template>
<script> const { createApp } = Vue;

createApp({
  components: {
    'image-gallery': {
      template: `
        <div class="gallery-grid">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            alt="Gallery image"
            class="gallery-img"
          >
        </div>
      `,
      data() {
        return {
          images: [
            'https://thirdimpactanime.com/wp-content/uploads/2018/04/wotakoi.png',
            'https://cdn.wallpapersafari.com/60/15/XkY4aA.jpg',
            'https://wallpapercave.com/wp/wp9597089.jpg'
          ]
        };
      }
    }
  }
}).mount('#app');</script>
<style src=".css/pfp.css"></style>