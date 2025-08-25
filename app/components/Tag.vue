<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<template>
  <span
    class="inline-flex items-center gap-x-2 w-fit rounded-sm bg-white px-2 py-1.25 text-text-sub font-medium text-xs"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4687 6.25L13.4922 4.10156L11.3437 3.125L13.4922 2.14844L14.4687 0L15.4453 2.14844L17.5937 3.125L15.4453 4.10156L14.4687 6.25ZM14.4687 17.1875L13.4922 15.0391L11.3437 14.0625L13.4922 13.0859L14.4687 10.9375L15.4453 13.0859L17.5937 14.0625L15.4453 15.0391L14.4687 17.1875ZM6.65625 14.8437L4.70312 10.5469L0.40625 8.59375L4.70312 6.64062L6.65625 2.34375L8.60937 6.64062L12.9062 8.59375L8.60937 10.5469L6.65625 14.8437ZM6.65625 11.0547L7.4375 9.375L9.11719 8.59375L7.4375 7.8125L6.65625 6.13281L5.875 7.8125L4.19531 8.59375L5.875 9.375L6.65625 11.0547Z"
        fill="url(#paint0_linear_966_36195)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_966_36195"
          x1="9"
          y1="0"
          x2="9"
          y2="17.1875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD1F8C" />
          <stop offset="1" stop-color="#FDCF18" />
        </linearGradient>
      </defs>
    </svg>

    <span>{{ content }}</span>
  </span>
</template>
