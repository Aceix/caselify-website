<script setup lang="ts">
const blocks = [
  {
    // 2x1 on top left
    x: 0,
    y: 1,
    width: 2,
    height: 1,
  },
  {
    // 1x1 top left
    x: 3,
    y: 0,
    width: 1,
    height: 1,
  },
  {
    // L-shape top left
    x: 2,
    y: 3,
    width: 2,
    height: 2,
    shape: 'L' as const,
  },
  {
    // 2x1 top middle
    x: 7,
    y: 0,
    width: 2,
    height: 1,
  },
  {
    // L-shape top right
    x: 11,
    y: 2,
    width: 2,
    height: 2,
    shape: 'L-reverse' as const,
  },
  {
    // 2x1 top right
    x: 14,
    y: 1,
    width: 2,
    height: 1,
  },

  // Bottom section
  {
    // L-shape bottom left
    x: 2,
    y: 8,
    width: 2,
    height: 2,
    shape: 'L' as const,
  },
  {
    // 1x1 bottom left
    x: 0,
    y: 6,
    width: 1,
    height: 1,
  },
  {
    // 1x1 bottom middle
    x: 5,
    y: 7,
    width: 1,
    height: 1,
  },
  {
    // L-shape bottom middle
    x: 8,
    y: 9,
    width: 2,
    height: 2,
    shape: 'L-reverse' as const,
  },
  {
    // 1x1 bottom right
    x: 12,
    y: 7,
    width: 1,
    height: 1,
  },
  {
    // 2x1 bottom right
    x: 14,
    y: 8,
    width: 2,
    height: 1,
  },
]

function getBlockClass(block: (typeof blocks)[0]) {
  const classes = []
  if (block.shape === 'L') {
    classes.push('clip-path-[polygon(0%_0%,100%_0%,100%_50%,50%_50%,50%_100%,0%_100%)]')
  }
  else if (block.shape === 'L-reverse') {
    classes.push('clip-path-[polygon(0%_0%,100%_0%,100%_100%,50%_100%,50%_50%,0%_50%)]')
  }
  return classes.join(' ')
}
</script>

<template>
  <div class="absolute inset-0 h-full w-full">
    <div
      class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem]"
    />
    <div class="absolute inset-0 grid h-full w-full grid-cols-16 grid-rows-10">
      <div
        v-for="(block, i) in blocks"
        :key="i"
        class="bg-[#f7f3e9]"
        :class="getBlockClass(block)"
        :style="{
          gridColumnStart: block.x + 1,
          gridRowStart: block.y + 1,
          gridColumnEnd: block.x + 1 + block.width,
          gridRowEnd: block.y + 1 + block.height,
        }"
      />
    </div>
  </div>
</template>
