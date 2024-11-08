<script setup>
import Header from "@/components/Header.vue"
import Home from "@/components/Home.vue"
import Skills from "@/components/Skills.vue"
import Portfolio from "@/components/Portfolio.vue"
import License from "@/components/License.vue"
import Contact from "@/components/Contact.vue"
import Footer from "@/components/Footer.vue"
import "../assets/scss/style.scss"
</script>

<template>
  <Header></Header>
  <main id="main" role="main">
    <Home></Home>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <License></License>
    <Contact></Contact>
  </main>
  <Footer></Footer>
</template>
