<script setup lang="ts">
const gridCanvas = useTemplateRef<HTMLCanvasElement>("grid-canvas");

function resizeCanvas() {
  if (!gridCanvas.value) return;

  const ctx = gridCanvas.value?.getContext?.("2d");
  if (!ctx) return;

  const pixelRatio = window.devicePixelRatio || 1;
  gridCanvas.value.width =
    gridCanvas.value.parentElement?.offsetWidth ?? 1 * pixelRatio;

  gridCanvas.value.height = document.body?.offsetHeight ?? 1 * pixelRatio;

  ctx.scale(pixelRatio, pixelRatio);

  gridCanvas.value.style.width =
    gridCanvas.value.parentElement?.offsetWidth + "px";

  gridCanvas.value.style.height = document.body.offsetHeight + "px";
}

function drawSquares() {
  const isSmallScreen = window.innerWidth < 640;

  const squareColor = "rgba(244, 233, 215, 0.5)";
  const strokeColor = "rgba(107, 107, 107, 0.1)";

  if (!gridCanvas.value) return;

  const ctx = gridCanvas.value?.getContext?.("2d");
  if (!ctx) return;

  const heightOfHeroSection =
    document.getElementById("hero-section")?.offsetHeight ?? 0;
  const heightOfMotionGfxBox =
    document.getElementById("motion-gfx-box")?.offsetHeight ?? 0;
  const boxThreshold = heightOfHeroSection - heightOfMotionGfxBox / 5;
  const screenHeight = window.innerHeight;

  const squareSize = 60;
  const rows = Math.ceil(gridCanvas.value.height / squareSize);
  const cols = Math.ceil(gridCanvas.value.width / squareSize);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      ctx.fillStyle =
        y < boxThreshold / squareSize && Math.random() < 0.2 && !isSmallScreen
          ? squareColor
          : "transparent";
      ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
      ctx.strokeStyle = strokeColor;
      ctx.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
    }
  }
}

onMounted(() => {
  resizeCanvas();
  drawSquares();

  window.addEventListener("resize", () => {
    resizeCanvas();
    drawSquares();
  });
});
</script>

<template>
  <div class="absolute -z-20 w-[calc(100vw-1rem)]">
    <canvas ref="grid-canvas"></canvas>
  </div>
</template>
