<script setup lang="ts">
const aiSection = useTemplateRef<HTMLDivElement>("ai-section");
const featuresSection = useTemplateRef<HTMLDivElement>("features-section");
const justiceSection = useTemplateRef<HTMLDivElement>("justice-and-impact-section");

const isHeroWaitlistInputFocused = ref(false);

function handleNavItemClick(item: "home" | "ai" | "features" | "justice-and-impact" | "waitlist") {
  switch (item) {
    case "home":
      window.scrollTo({ top: 0, behavior: "smooth" });
      break;
    case "ai":
      window.scrollTo({
        top: (aiSection.value?.offsetTop ?? 0) - 100,
        behavior: "smooth",
      });
      break;
    case "features":
      window.scrollTo({
        top: (featuresSection.value?.offsetTop ?? 0) - 100,
        behavior: "smooth",
      });
      break;
    case "justice-and-impact":
      window.scrollTo({
        top: (justiceSection.value?.offsetTop ?? 0) - 100,
        behavior: "smooth",
      });
      break;
    case "waitlist":
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.getElementById("hero-waitlist-input")?.focus();
      break;
  }
}

const email = ref("");
const formState = ref<"idle" | "invalid" | "submitting" | "submitted">("idle");

async function handleJoinWaitlist() {
  if (formState.value === "submitted") return;
  if (!email.value || !email.value.includes("@")) {
    formState.value = "invalid";
    setTimeout(() => {
      formState.value = "idle";
    }, 3000);
    return;
  }

  formState.value = "submitting";
  try {
    // await api.joinWaitlist(email.value);
    setTimeout(() => {
      formState.value = "submitted";
      alert("Successfully joined the waitlist!");
    }, 2000);
  } catch (error) {
    console.error("Error joining waitlist:", error);
    formState.value = "invalid";
    setTimeout(() => {
      formState.value = "idle";
    }, 3000);
    alert("Failed to join the waitlist.");
  }
}
</script>

<template>
  <GridPattern class="hidden md:block" />

  <AppBar @nav-item-clicked="handleNavItemClick" />

  <main class="w-full flex flex-col items-center justify-start">
    <section
      id="hero-section"
      class="container px-[1rem] md:px-0 mt-48 flex flex-col items-center"
    >
      <!-- blue hue effect -->
      <svg
        class="w-[calc(100vw-1rem)] absolute top-0 -z-10"
        height="831"
        viewBox="0 0 1512 831"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.072" filter="url(#filter0_f_948_34491)">
          <rect
            x="-248.616"
            y="-1269.89"
            width="2000"
            height="2000"
            rx="1000"
            fill="url(#paint0_linear_948_34491)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_948_34491"
            x="-348.616"
            y="-1369.89"
            width="2200"
            height="2200"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_948_34491"
            />
          </filter>
          <linearGradient
            id="paint0_linear_948_34491"
            x1="751.384"
            y1="-1269.89"
            x2="757.706"
            y2="728.845"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1" stop-color="#1469C4" />
            <stop offset="1" stop-color="#FFCD42" />
          </linearGradient>
        </defs>
      </svg>

      <Tag icon="sparkle" content="Smarter Cases, Less Paperwork" />
      <h1 class="caselify-h1 mt-6">
        AI Legal Intelligence; <br />
        Beyond Case Management
      </h1>
      <p class="mt-6 text-center">
        Securely manage every case with AI that drafts, organises and <br />
        learns with your practice.
        <span class="font-semibold text-[rgba(14,18,27,1)]">
          Built for Africa, and expanding globally!
        </span>
      </p>
      <div class="mt-6">
        <div
          class="transition-all min-h-14 flex items-center max-w-[450px] py-1 px-1.5 bg-background rounded-md shadow-[0px_0px_0px_0.72px_rgba(18,55,105,0.08),0px_0.72px_1.44px_0px_rgba(164,172,185,0.24)]"
          :class="{
            'flex-col md:flex-row': isHeroWaitlistInputFocused,
            'outline-2 outline-offset-2 outline-red-400':
              formState === 'invalid',
          }"
        >
          <UiInput
            id="hero-waitlist-input"
            ref="hero-waitlist-input"
            type="email"
            aria-label="Join the waitlist"
            placeholder="Email Address"
            class="h-full min-h-9 border-none shadow-none focus:outline-0 focus:ring-0"
            :model-value="email"
            :disabled="formState === 'submitted'"
            @update:model-value="email = String($event)"
            @focused="isHeroWaitlistInputFocused = $event ? $event : !!email"
            @keyup.enter="handleJoinWaitlist"
          />
          <UiButton
            class="h-full"
            :class="{
              'w-full md:w-fit mt-2 md:mt-0': isHeroWaitlistInputFocused,
            }"
            @click="handleJoinWaitlist"
          >
            {{ formState === 'submitted' ? 'Thank you!' : 'Join the waitlist' }}
            <span v-if="formState === 'submitting'" class="ms-2 animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>              
            </span>
          </UiButton>
        </div>
      </div>

      <!-- motion graphic -->
      <div
        id="motion-gfx-box"
        class="max-w-[1077px] max-h-[600px] mt-16 bg-white rounded-4xl p-4 md:p-8"
      >
        <video
          src="/assets/caselify-demo.mp4"
          poster="/assets/caselify-demo.webp"
          class=""
          autoplay
          loop
          muted
        ></video>
      </div>
    </section>

    <section
      id="ai-features"
      ref="ai-section"
      class="container px-[1rem] md:px-0 mt-24 md:mt-48 flex flex-col items-center"
    >
      <Tag icon="sparkle" content="AI Features" />
      <h2 class="caselify-h2 mt-2">
        Supercharge your operations <br />
        with built-in AI features
      </h2>

      <div class="flex flex-col md:flex-row gap-4 mt-12">
        <div
          class="flex-1 flex flex-col rounded-4xl border border-stroke bg-bg-blue p-6"
        >
          <img
            src="@/assets/imgs/ai-1.png"
            alt="ai analytics"
            class="w-full h-auto shadow-[0_12px_16.8px_-3px_rgba(0,0,0,0.05),0_2.75px_3.84px_-2px_rgba(0,0,0,0.07)]"
          />
          <h3 class="caselify-h3 mt-4">
            Intelligent Case Analytics &amp; Insights
          </h3>
          <p class="mt-2">
            Turn raw data into real-time intelligence. From overdue tasks to
            workload bottlenecks, AI surfaces the insights that matter so you
            can make faster, smarter decisions.
          </p>
        </div>
        <div
          class="flex-1 flex flex-col rounded-4xl border border-stroke bg-bg-yellow p-6"
        >
          <h3 class="caselify-h3">AI-Powered Document Assistant</h3>
          <p class="mt-2">
            Summarize, draft, and translate in minutes. Let AI cut through long
            files so your team can focus on strategy instead of paperwork.
          </p>
          <img
            src="@/assets/imgs/ai-2.png"
            alt="ai document processing"
            class="mt-4 w-full h-auto"
          />
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row bg-white rounded-4xl border border-stroke mt-4 p-6"
      >
        <div class="flex-1 flex flex-col justify-center gap-2 rounded-4xl">
          <h3 class="caselify-h3">AI-Driven Research</h3>
          <p>
            Go beyond search. Our AI doesn&apos;t just find information, it
            interprets it, summarizing cases, comparing versions, and presenting
            insights you can trust in minutes.
          </p>
        </div>
        <img src="@/assets/imgs/ai-3.png" alt="ai research" class="flex-1" />
      </div>
    </section>

    <section
      id="core-features"
      ref="features-section"
      class="container px-[1rem] md:px-0 mt-24 md:mt-48 flex flex-col items-center"
    >
      <Tag icon="bookmark" content="Core Features" />
      <h2 class="caselify-h2 mt-2">
        All Your Firm&apos;s Needs, Covered From <br />
        Start to Finish
      </h2>

      <div class="flex flex-col md:flex-row gap-4 mb-4 mt-12">
        <div
          class="flex flex-col flex-2 border border-stroke bg-white rounded-4xl p-6"
        >
          <h3 class="caselify-h3 mb-4">Smart Lead Intake</h3>
          <img src="@/assets/imgs/feat-1.png" alt="lead intake" />
          <p class="mt-4">
            Turn prospects into clients with ease. Automate intake, capture
            details quickly, and never lose track of new opportunities.
          </p>
        </div>
        <div
          class="flex flex-col flex-1 border border-stroke bg-white rounded-4xl p-6"
        >
          <h3 class="caselify-h3 mb-4">Contacts Management</h3>
          <img src="@/assets/imgs/feat-2.png" alt="contacts management" />
          <p class="mt-4">
            Keep every relationship in one place. Clients, witnesses, and
            experts are neatly organized so you can access the right information
            when you need it most.
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-4">
        <div
          class="flex flex-col flex-1 bg-white border border-stroke rounded-4xl p-6"
        >
          <h3 class="caselify-h3 mb-4">Document Management</h3>
          <img src="@/assets/imgs/feat-3.png" alt="document management" />
          <p class="mt-4">
            Your documents, always protected. Upload, store, and access files
            with enterprise-grade security and instant retrieval.
          </p>
        </div>
        <div
          class="flex flex-col flex-2 bg-white border border-stroke rounded-4xl p-6"
        >
          <h3 class="caselify-h3 mb-4">Case Hub</h3>
          <img src="@/assets/imgs/feat-4.png" alt="case hub" />
          <p class="mt-4">
            Every detail of a matter in one place—review the overview, track
            court dates in the calendar, manage documents and tasks, capture
            notes, coordinate with contacts & staff, log time entries, and
            follow status updates without missing a beat.
          </p>
        </div>
      </div>
    </section>

    <section
      id="justice-and-impact-section"
      ref="justice-and-impact-section"
      class="container px-[1rem] md:px-0 mt-24 md:mt-48 flex flex-col items-center"
    >
      <Tag icon="bookmark" content="Social Impacts" />
      <h2 class="caselify-h2 mt-2">
        Expanding Access to Justice <br />
        Through Technology
      </h2>

      <div class="flex flex-col md:flex-row gap-4 mb-4 mt-12">
        <div
          class="flex flex-col flex-1 border border-stroke bg-white rounded-4xl p-6"
        >
          <h3 class="caselify-h3 mb-4">Pro Bono &amp; Legal Aid</h3>
          <img src="@/assets/imgs/justice-1.png" alt="lead intake" />
          <p class="mt-4">
            Easily log, organize, and manage pro bono matters alongside billable work. Caselify empowers firms to meet reporting requirements while ensuring their contribution to access-to-justice is visible, measurable, and impactful.
          </p>
        </div>
        <div
          class="flex flex-col flex-2 border border-stroke bg-white rounded-4xl p-6"
        >
          <h3 class="caselify-h3 mb-4">Justice Impact Analysis</h3>
          <img src="@/assets/imgs/justice-2.png" alt="justice impact analysis" />
          <p class="mt-4">
            Track the real-world outcomes of your legal work. From pro bono hours to the number of communities supported, Caselify gives you clear insights into how your practice advances justice.
          </p>
        </div>
      </div>
    </section>

    <section
      id="waitlist"
      class="container px-[1rem] md:px-0 mt-24 md:mt-48 flex flex-col items-center"
    >
      <h2 class="caselify-h2">Join the Future of AI-First Legal Practice</h2>
      <p class="mt-6 text-center md:text-start">
        Get early access to Caselify and transform how your firm manages cases.
      </p>
      <div class="mt-6">
        <div
          class="transition-all min-h-14 flex items-center max-w-[450px] py-1 px-1.5 bg-white rounded-md shadow-[0px_0px_0px_0.72px_rgba(18,55,105,0.08),0px_0.72px_1.44px_0px_rgba(164,172,185,0.24)]"
          :class="{
            'flex-col md:flex-row': isHeroWaitlistInputFocused,
            'outline-2 outline-offset-2 outline-red-400':
              formState === 'invalid',
          }"
        >
          <UiInput
            id="hero-waitlist-input"
            ref="hero-waitlist-input"
            type="email"
            aria-label="Join the waitlist"
            placeholder="Email Address"
            class="h-full min-h-9 border-none shadow-none focus:outline-0 focus:ring-0"
            :model-value="email"
            :disabled="formState === 'submitted'"
            @update:model-value="email = String($event)"
            @focused="isHeroWaitlistInputFocused = $event ? $event : !!email"
            @keyup.enter="handleJoinWaitlist"
          />
          <UiButton
            class="h-full"
            :class="{
              'w-full md:w-fit mt-2 md:mt-0': isHeroWaitlistInputFocused,
            }"
            @click="handleJoinWaitlist"
          >
            {{ formState === 'submitted' ? 'Thank you!' : 'Join the waitlist' }}
            <span v-if="formState === 'submitting'" class="ms-2 animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>              
            </span>
          </UiButton>
        </div>
      </div>
    </section>
  </main>

  <footer class="mt-24 md:mt-48 bg-white w-full flex flex-col items-center">
    <div class="container px-[1rem] md:px-0 py-20 text-text-sub">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center"
      >
        <img src="/assets/caselify-logo-dark.svg" alt="Caselify Logo" />
        <a href="mailto:support@caselify.com"> support@caselify.com </a>
      </div>
      <hr class="border-t border-[rgba(196,194,188,1)] my-8" />
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center"
      >
        <p>Product of Hyperlandhq</p>
        <p>&copy;{{ new Date().getFullYear() }} Caselify</p>
      </div>
    </div>
  </footer>
</template>
