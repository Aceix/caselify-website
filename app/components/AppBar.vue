<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

defineEmits<
  (e: "nav-item-clicked", item: "home" | "ai" | "features" | "waitlist") => void
>();

const { y } = useWindowScroll({ behavior: "smooth" });
</script>

<template>
  <header
    class="mx-[1rem] md:mx-0 w-[calc(100%-2rem)] md:w-full transition-all fixed top-8 left-1/2 -translate-x-[calc(50%+1rem)] md:-translate-x-1/2 container py-2 md:py-4 px-4 md:px-6 bg-white rounded-md flex items-center justify-between border border-stroke"
    :class="{
      '!bg-white/50 backdrop-blur-xs': y > 300,
    }"
  >
    <img
      src="/assets/caselify-logo-dark.svg"
      alt="caselify logo"
      class="cursor-pointer"
      title="Go Home"
      @click="
        () => {
          y = 0;
          $emit('nav-item-clicked', 'home');
        }
      "
    />
    <nav class="hidden lg:flex gap-8">
      <span
        class="cursor-pointer hover:underline active:text-text-sub"
        @click="$emit('nav-item-clicked', 'ai')"
      >
        AI Superpowers
      </span>
      <span
        class="cursor-pointer hover:underline active:text-text-sub"
        @click="$emit('nav-item-clicked', 'features')"
      >
        Features
      </span>
    </nav>
    <UiButton
      style="
        background: rgba(14, 18, 27, 1),
          linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      "
      @click="$emit('nav-item-clicked', 'waitlist')"
    >
      Join the Waitlist
    </UiButton>
  </header>
</template>
