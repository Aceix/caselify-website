<script setup lang="ts"></script>

<template>
  <!-- <GridPattern /> -->

  <main class="w-full flex flex-col items-center justify-start">
    <section
      id="hero-section"
      class="container mt-48 flex flex-col items-center"
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

      <Tag icon="" content="Smarter Cases, Less Paperwork" />
      <h1 class="caselify-h1 mt-6">
        AI Legal Intelligence; <br />
        Beyond Case Management
      </h1>
      <p class="mt-6 text-center">
        Securely manage every case with AI that drafts, organises and <br />
        learns with your practice.
      </p>
      <div class="mt-6">
        <div
          class="h-14 w-[450px] py-1 px-1.5 bg-background rounded-md flex"
        >
          <UiInput
            type="text"
            aria-label="Join the waitlist"
            placeholder="Email Address"
            class="h-full border-none shadow-none focused:outline-0 focused:ring-0"
          />
          <UiButton class="h-full">Join the waitlist</UiButton>
        </div>
      </div>

      <!-- motion graphic -->
      <div class="w-4/5 h-[600px] mt-16 bg-white rounded-4xl"></div>
    </section>

    <section id="ai-features" class="container">
      <Tag icon="" content="AI Features" />
      <h2>
        Supercharge your operations <br />
        with built-in AI features
      </h2>

      <div class="flex">
        <div class="flex flex-col rounded-4xl bg-bg-blue">
          <img src="" alt="ai analytics" />
          <h3>Intelligent Case Analytics &amp; Insights</h3>
          <p>
            Turn raw data into real-time intelligence. From overdue tasks to
            workload bottlenecks, AI surfaces the insights that matter so you
            can make faster, smarter decisions.
          </p>
        </div>
        <div class="flex flex-col rounded-4xl bg-bg-yellow">
          <h3>AI-Powered Document Assistant</h3>
          <p>
            Summarize, draft, and translate in minutes. Let AI cut through long
            files so your team can focus on strategy instead of paperwork.
          </p>
          <img src="" alt="ai document processing" />
        </div>
      </div>

      <div class="flex bg-white">
        <div class="flex flex-col rounded-4xl">
          <h3>AI-Driven Research</h3>
          <p>
            Go beyond search. Our AI doesn&apos;t just find information, it
            interprets it, summarizing cases, comparing versions, and presenting
            insights you can trust in minutes.
          </p>
        </div>
        <img src="" alt="ai research" />
      </div>
    </section>

    <section id="core-features" class="container">
      <Tag icon="" content="Core Features" />
      <h2>
        All Your Firm&apos;s Needs, Covered From <br />
        Start to Finish
      </h2>

      <div class="flex">
        <div class="flex flex-col flex-2 bg-white rounded-4xl">
          <h3>Smart Lead Intake</h3>
          <img src="" alt="lead intake" />
          <p>
            Turn prospects into clients with ease. Automate intake, capture
            details quickly, and never lose track of new opportunities.
          </p>
        </div>
        <div class="flex flex-col flex-1 bg-white rounded-4xl">
          <h3>Contacts Management</h3>
          <img src="" alt="contacts management" />
          <p>
            Keep every relationship in one place. Clients, witnesses, and
            experts are neatly organized so you can access the right information
            when you need it most.
          </p>
        </div>
      </div>

      <div class="flex">
        <div class="flex flex-col flex-1 bg-white rounded-4xl">
          <h3>Document Management</h3>
          <img src="" alt="document management" />
          <p>
            Your documents, always protected. Upload, store, and access files
            with enterprise-grade security and instant retrieval.
          </p>
        </div>
        <div class="flex flex-col flex-2 bg-white rounded-4xl">
          <h3>Case Hub</h3>
          <img src="" alt="case hub" />
          <p>
            Every detail of a matter in one place—review the overview, track
            court dates in the calendar, manage documents and tasks, capture
            notes, coordinate with contacts & staff, log time entries, and
            follow status updates without missing a beat.
          </p>
        </div>
      </div>
    </section>

    <section id="waitlist" class="container">
      <h2>Join the Future of AI-First Legal Practice</h2>
      <p>
        Get early access to Caselify and transform how your firm manages cases.
      </p>
      <div class="">
        <input
          type="text"
          placeholder="Email Address"
          aria-label="Join the waitlist"
        />
        <UiButton>Join the waitlist</UiButton>
      </div>
    </section>
  </main>

  <footer class="w-full flex flex-col items-center">
    <div class="container py-12 text-text-sub">
      <div class="flex justify-between items-center">
        <img src="" alt="Caselify Logo" />
        <a href="mailto:support@caselify.com"> support@caselify.com </a>
      </div>
      <hr class="border-t border-[rgba(196,194,188,1)] my-8" />
      <div class="flex justify-between items-center">
        <p>Product of Hyperlandhq</p>
        <p>&copy;2025 Caselify</p>
      </div>
    </div>
  </footer>
</template>
