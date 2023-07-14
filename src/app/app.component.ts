import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "cv-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <main>
      <div class="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
          <svg class="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]" aria-hidden="true">
            <defs>
              <radialGradient id=":R1d6:-desktop" cx="100%">
                <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
                <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
                <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
              <radialGradient id=":R1d6:-mobile" cy="100%">
                <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
                <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
                <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#:R1d6:-desktop)" class="hidden lg:block"></rect>
            <rect width="100%" height="100%" fill="url(#:R1d6:-mobile)" class="lg:hidden"></rect>
          </svg>
          <div class="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"></div>
        </div>
        <div class="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
          <div class="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
            <div class="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
              <div class="relative">
                <svg
                  viewBox="0 0 881 211"
                  fill="white"
                  aria-hidden="true"
                  class="pointer-events-none absolute -right-44 top-14 w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70"
                >
                  <defs>
                    <filter id=":Rmd6:"><feGaussianBlur in="SourceGraphic" stdDeviation=".5"></feGaussianBlur></filter>
                  </defs>
                  <path
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-dasharray="1"
                    stroke-dashoffset="1"
                    pathLength="1"
                    fill="transparent"
                    d="M 247,103L261,86L307,104L357,36"
                    class="invisible"
                    style="stroke-dashoffset: 0; visibility: visible;"
                  ></path>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="247" cy="103" r="1" style="transform-origin: 15.4375rem 6.4375rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="261" cy="86" r="1" style="transform-origin: 16.3125rem 5.375rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="307" cy="104" r="1" style="transform-origin: 19.1875rem 6.5rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="357" cy="36" r="1" style="transform-origin: 22.3125rem 2.25rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <path
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-dasharray="1"
                    stroke-dashoffset="1"
                    pathLength="1"
                    fill="transparent"
                    d="M 586,120L516,100L491,62L440,107L477,180L516,100"
                    class="invisible"
                    style="stroke-dashoffset: 0; visibility: visible; fill: rgba(255, 255, 255, 0.02);"
                  ></path>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="586" cy="120" r="1" style="transform-origin: 36.625rem 7.5rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="516" cy="100" r="1" style="transform-origin: 32.25rem 6.25rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="491" cy="62" r="1" style="transform-origin: 30.6875rem 3.875rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="440" cy="107" r="1" style="transform-origin: 27.5rem 6.6875rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="477" cy="180" r="1" style="transform-origin: 29.8125rem 11.25rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <path
                    stroke="white"
                    stroke-opacity="0.2"
                    stroke-dasharray="1"
                    stroke-dashoffset="1"
                    pathLength="1"
                    fill="transparent"
                    d="M 733,100L803,120L879,113L823,164L803,120"
                    class="invisible"
                    style="stroke-dashoffset: 0; visibility: visible; fill: rgba(255, 255, 255, 0.02);"
                  ></path>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="733" cy="100" r="1" style="transform-origin: 45.8125rem 6.25rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="803" cy="120" r="1" style="transform-origin: 50.1875rem 7.5rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="879" cy="113" r="1" style="transform-origin: 54.9375rem 7.0625rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="823" cy="164" r="1" style="transform-origin: 51.4375rem 10.25rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="4" cy="4" r="1" style="transform-origin: 0.25rem 0.25rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="4" cy="44" r="1" style="transform-origin: 0.25rem 2.75rem; opacity: 0.2; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="36" cy="22" r="1" style="transform-origin: 2.25rem 1.375rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="50" cy="146" r="1" style="transform-origin: 3.125rem 9.125rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="64" cy="43" r="1" style="transform-origin: 4rem 2.6875rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="76" cy="30" r="1" style="transform-origin: 4.75rem 1.875rem; opacity: 0.2; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="101" cy="116" r="1" style="transform-origin: 6.3125rem 7.25rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="140" cy="36" r="1" style="transform-origin: 8.75rem 2.25rem; opacity: 0.2; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="149" cy="134" r="1" style="transform-origin: 9.3125rem 8.375rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="162" cy="74" r="1" style="transform-origin: 10.125rem 4.625rem; opacity: 0.2; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="171" cy="96" r="1" style="transform-origin: 10.6875rem 6rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="210" cy="56" r="1" style="transform-origin: 13.125rem 3.5rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="235" cy="90" r="1" style="transform-origin: 14.6875rem 5.625rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="275" cy="82" r="1" style="transform-origin: 17.1875rem 5.125rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="306" cy="6" r="1" style="transform-origin: 19.125rem 0.375rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="307" cy="64" r="1" style="transform-origin: 19.1875rem 4rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="380" cy="68" r="1" style="transform-origin: 23.75rem 4.25rem; opacity: 0.2; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="380" cy="108" r="1" style="transform-origin: 23.75rem 6.75rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="391" cy="148" r="1" style="transform-origin: 24.4375rem 9.25rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="405" cy="18" r="1" style="transform-origin: 25.3125rem 1.125rem; opacity: 0.2; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="412" cy="86" r="1" style="transform-origin: 25.75rem 5.375rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="426" cy="210" r="1" style="transform-origin: 26.625rem 13.125rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="427" cy="56" r="1" style="transform-origin: 26.6875rem 3.5rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="538" cy="138" r="1" style="transform-origin: 33.625rem 8.625rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="563" cy="88" r="1" style="transform-origin: 35.1875rem 5.5rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="611" cy="154" r="1" style="transform-origin: 38.1875rem 9.625rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="637" cy="150" r="1" style="transform-origin: 39.8125rem 9.375rem; opacity: 1; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="651" cy="146" r="1" style="transform-origin: 40.6875rem 9.125rem; opacity: 0.2; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="682" cy="70" r="1" style="transform-origin: 42.625rem 4.375rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="683" cy="128" r="1" style="transform-origin: 42.6875rem 8rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="781" cy="82" r="1" style="transform-origin: 48.8125rem 5.125rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="785" cy="158" r="1" style="transform-origin: 49.0625rem 9.875rem; opacity: 0.2; transform: scale(var(--motion-scale));"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;">
                    <circle cx="832" cy="146" r="1" style="transform-origin: 52rem 9.125rem; opacity: 0.2; transform: scale(var(--motion-scale));" filter="url(#:Rmd6:)"></circle>
                  </g>
                  <g class="opacity-0" style="opacity: 1;"><circle cx="852" cy="89" r="1" style="transform-origin: 53.25rem 5.5625rem; opacity: 1; transform: scale(var(--motion-scale));"></circle></g>
                </svg>
                <div class="">
                  <h2 class="mb-10 font-display text-4xl/tight font-dancing font-extrabold  text-white">Welcome</h2>
                  <div class="flex items-center">
                    <img class="h-24 w-24" src="/assets/picofme/picofme1.png" alt="Sagnol Kamdem photo" />
                    <h1 class="ml-10 font-display text-4xl/tight font-semibold text-sky-300">Sagnol KAMDEM</h1>
                  </div>
                </div>
                <h1 class="mt-14 font-display text-4xl/tight font-light text-white">
                  <span class="text-change text-sky-300">Angular Developer ❤️</span>
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Hello, I am a
                  <span class="mx-3 font-semibold relative whitespace-nowrap text-sky-300">
                    Web developer
                    <svg class="absolute -bottom-4 -right-2 sm:w-32 w-14 h-8" aria-hidden="true" viewBox="0 0 215 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.73413 11.2C91.0178 7.4676 275.109 1.12 313.196 5.6L3.73413 11.2Z" fill="#7dd3fc"></path>
                    </svg>
                  </span>

                  and
                  <span class="mx-3 font-semibold relative whitespace-nowrap text-sky-300">
                    web integrator
                    <svg class="absolute -bottom-4 -right-2 sm:w-32 w-14 h-8" aria-hidden="true" viewBox="0 0 215 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.73413 11.2C91.0178 7.4676 275.109 1.12 313.196 5.6L3.73413 11.2Z" fill="#7dd3fc"></path>
                    </svg>
                  </span>
                  based at Douala. That is my personnal website. You can have all the necessary information about me.
                </p>
                <a href="mailto:sagnolkamdem721@gmail.com" class="mt-8 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-sky-300 text-black hover:bg-sky-500" type="button">
                  <span class="relative text-lg items-center flex top-px">
                    Email me
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2 text-black">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                </a>
                <div class="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                  <a
                    class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
                    href="https://www.linkedin.com/in/sagnol-boutal-kamdem-djoko-2617111ab/"
                  >
                    <span class="absolute inset-0  -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="4.983" cy="5.009" r="2.188"></circle>
                      <path
                        d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                      ></path>
                    </svg>
                    <span class="self-baseline text-lg text-white">LinkedIn</span></a
                  ><a
                    class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
                    href="https://github.com/sagnolkamdem"
                    ><span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      ></path>
                    </svg>
                    <span class="self-baseline text-lg text-white">GitHub</span></a
                  ><a
                    class="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
                    href="https://twitter.com/KamdemSagnol"
                    ><span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                      ></path>
                    </svg>
                    <span class="self-baseline text-lg text-white">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
              <p class="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">Made by Саньол камдем with Tailwind and love ❤️☺️</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <button type="button" class="group absolute right-4 top-4 z-50 -m-2.5 p-2.5">
        <span class="sr-only">Switch to light theme</span
        ><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-slate-900 opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"></path>
        </svg>
      </button> -->
      <div class="relative flex-auto">
        <div class="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
          <svg class="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0" aria-hidden="true">
            <defs>
              <pattern id=":R1t6:" width="6" height="8" patternUnits="userSpaceOnUse">
                <path d="M0 0H6M0 8H6" class="stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:R1t6:)"></rect>
          </svg>
        </div>

        <main class="space-y-20 py-6 sm:space-y-32 sm:py-10">
          <div class="flex lg:flex lg:w-full lg:justify-end lg:pl-32 max-w-7xl px-6 lg:px-8">
            <div class="pointer-events-auto md:hidden">
              <button
                class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10"
                type="button"
                aria-expanded="false"
              >
                Menu<svg viewBox="0 0 8 6" aria-hidden="true" class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                  <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
            <nav class="pointer-events-auto hidden md:block">
              <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                <li>
                  <a class="relative block px-3 py-2 transition text-sky-300 dark:text-sky-300" href="#experience"
                    >Experience<span
                      class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-300/0 via-sky-300/40 to-sky-300/0 dark:from-sky-300/0 dark:via-sky-300/40 dark:to-sky-300/0"
                    ></span
                  ></a>
                </li>
                <li><a class="relative block px-3 py-2 transition hover:text-sky-300" href="/#education">Education</a></li>
                <li><a class="relative block px-3 py-2 transition hover:text-sky-300" href="/#skills">Skills</a></li>
                <li><a class="relative block px-3 py-2 transition hover:text-sky-300" href="/#projects">Projects</a></li>
              </ul>
            </nav>
          </div>
          <article id="#experience" class="scroll-mt-16" style="padding-bottom: 0px;">
            <div>
              <header class="relative mb-10 xl:mb-0">
                <div
                  class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8"
                >
                  <a class="inline-flex" href="/#commit-message-suggestions"><span class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50">Experience</span></a>
                  <div class="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"></div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                  <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                    <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                      <div class="flex">
                        <a class="inline-flex" href="/#commit-message-suggestions"><span class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">Experience</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                  <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography">
                    <div class="relative mt-2 overflow-hidden rounded-xl bg-gray-50 [&amp;+*]:mt-8">
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <h2 class="font-display flex text-4xl/tight font-semibold text-sky-300">
                      Experience
                      <svg viewBox="0 0 16 16" class="w-6 h-6" aria-hidden="true">
                        <path
                          fill="#38BDF8"
                          d="M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"
                        ></path>
                        <path
                          fill="#7DD3FC"
                          d="M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"
                        ></path>
                      </svg>
                    </h2>
                    <div class="mt-16 sm:mt-20">
                      <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                        <div class="flex max-w-3xl flex-col space-y-16">
                          <article class="md:grid md:grid-cols-4 md:items-baseline">
                            <div class="md:col-span-3 group relative flex flex-col items-start">
                              <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                <div
                                  class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"
                                ></div>
                                <div class="flex flex-col">
                                  <span class="absolute -inset-x-4  -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10 text-slate-700">ISDG SARL, Douala</span>
                                  <p class="relative z-10 text-slate-700 mt-2">Job title: <span class="text-sky-300">WEB AND MOBILE DEVELOPER</span></p>
                                </div>
                              </h2>
                              <time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" datetime="2022-09-05"
                                ><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>Dec 2021 -
                                Today</time
                              >
                              <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from
                                now when humanity has spread across our entire solar system.
                              </p>
                            </div>
                            <time class="mt-1 md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500" datetime="2022-09-05">Dec 2021 - Today</time>
                          </article>
                          <article class="md:grid md:grid-cols-4 md:items-baseline">
                            <div class="md:col-span-3 group relative flex flex-col items-start">
                              <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                <div
                                  class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"
                                ></div>
                                <div class="flex flex-col">
                                  <span class="absolute -inset-x-4  -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span
                                  ><span class="relative z-10 text-slate-700">Faculté de Genie Industriel, Douala</span>
                                  <p class="relative z-10 text-slate-700 mt-2">Job title: <span class="text-sky-300">COMPUTER SCIENTIST</span></p>
                                </div>
                              </h2>
                              <time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" datetime="2022-09-05"
                                ><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>Jun 2019 -
                                Aug 2020</time
                              >
                              <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from
                                now when humanity has spread across our entire solar system.
                              </p>
                            </div>
                            <time class="mt-1 md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500" datetime="2022-09-05">Jun 2019 - Aug 2020</time>
                          </article>
                          <article class="md:grid md:grid-cols-4 md:items-baseline">
                            <div class="md:col-span-3 group relative flex flex-col items-start">
                              <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                <div
                                  class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"
                                ></div>
                                <div class="flex flex-col">
                                  <span class="absolute -inset-x-4  -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10 text-slate-700">Univers Mobile SARL, Douala</span>
                                  <p class="relative z-10 text-slate-700 mt-2">Job title: <span class="text-sky-300">COMPUTER SCIENTIST</span></p>
                                </div>
                              </h2>
                              <time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" datetime="2022-09-05"
                                ><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>Aug 2020 -
                                Dec 2020</time
                              >
                              <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from
                                now when humanity has spread across our entire solar system.
                              </p>
                            </div>
                            <time class="mt-1 md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500" datetime="2022-09-05">Aug 2020 - Dec 2020</time>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="education" class="scroll-mt-16" style="padding-bottom: 0px;">
            <div>
              <header class="relative mb-10 xl:mb-0">
                <div
                  class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8"
                >
                  <a class="inline-flex" href="/#commit-message-suggestions"><span class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50">Education</span></a>
                  <div class="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"></div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                  <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                    <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                      <div class="flex">
                        <a class="inline-flex" href="/#commit-message-suggestions"><span class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">Education</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                  <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography">
                    <div class="relative mt-2 overflow-hidden rounded-xl bg-gray-50 [&amp;+*]:mt-8">
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <h2 class="font-display flex text-4xl/tight font-semibold text-sky-300">
                      Education
                      <svg viewBox="0 0 16 16" class="w-6 h-6" aria-hidden="true">
                        <path
                          fill="#38BDF8"
                          d="M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"
                        ></path>
                        <path
                          fill="#7DD3FC"
                          d="M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"
                        ></path>
                      </svg>
                    </h2>
                    <div class="mt-16 sm:mt-20">
                      <div class="shadow-lg rounded-lg space-y-6 p-6">
                        <div class="flex-1 flex items-center">
                          <img class="h-24 w-24 object-fill" src="/assets/picofme/logo-iug.svg" alt="iug logo" />
                          <div class="ml-10">
                            <p class="text-slate-400 font-light text-sm">2020 - 2021</p>
                            <p class="text-sky-300 text-lg font-semibold">BAC+3: Professional Bachelor Degree in SOFTWARE ENGINIERING</p>
                            <P>University Institute of the Gulf of Guinea</P>
                          </div>
                        </div>
                        <div class="flex-1 flex items-center">
                          <img class="h-24 w-24 object-fill" src="/assets/picofme/logo-iug.svg" alt="iug logo" />
                          <div class="ml-10">
                            <p class="text-slate-400 font-light text-sm">2019 - 2020</p>
                            <p class="text-sky-300 text-lg font-semibold">BAC+2: High National Diploma in Information System Management</p>
                            <P>University Institute of the Gulf of Guinea</P>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="skills" class="scroll-mt-16" style="padding-bottom: 0px;">
            <div>
              <header class="relative mb-10 xl:mb-0">
                <div
                  class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8"
                >
                  <a class="inline-flex" href="/#commit-message-suggestions"><span class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50">Skills</span></a>
                  <div class="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"></div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                  <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                    <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                      <div class="flex">
                        <a class="inline-flex" href="/#commit-message-suggestions"><span class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">Skills</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                  <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography">
                    <div class="relative mt-2 overflow-hidden rounded-xl bg-gray-50 [&amp;+*]:mt-8">
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <h2 class="font-display flex text-4xl/tight font-semibold text-sky-300">
                      Skills
                      <svg viewBox="0 0 16 16" class="w-6 h-6" aria-hidden="true">
                        <path
                          fill="#38BDF8"
                          d="M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"
                        ></path>
                        <path
                          fill="#7DD3FC"
                          d="M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"
                        ></path>
                      </svg>
                    </h2>
                    <div class="mt-16 sm:mt-20">
                      <div class="space-y-6">
                        <div class="p-6">
                          <h3 class="text-slate-500 font-bold text-3xl text-end">Front</h3>
                          <div class="h-px bg-slate-300 mt-1"></div>
                          <div class="mt-6 flex space-x-6 space-y-4 items-center flex-wrap">
                            <img class="h-16 w-16 object-fill" src="/assets/technos/html.jpeg" alt="html logo" />
                            <img class="h-16 w-16 object-fill" src="/assets/technos/css.webp" alt="css logo" />
                            <img class="h-12 w-12 object-fill" src="/assets/technos/sass.jpeg" alt="sass logo" />
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 24 16" fill="none">
                              <g clip-path="url(#clip0_502_1022)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M11.8531 0.800049C8.69203 0.800049 6.7169 2.37104 5.9263 5.51303C7.11174 3.94204 8.49461 3.35303 10.0749 3.74555C10.9765 3.96944 11.6213 4.61976 12.3343 5.33977C13.4965 6.5122 14.8418 7.86906 17.7794 7.86906C20.9399 7.86906 22.9155 6.29806 23.7057 3.15654C22.5207 4.72753 21.1378 5.31654 19.5575 4.92356C18.6554 4.69966 18.0107 4.04934 17.2976 3.3298C16.1354 2.15644 14.7907 0.800049 11.8531 0.800049ZM5.9263 7.86906C2.76573 7.86906 0.790142 9.44005 0 12.582C1.18545 11.011 2.56831 10.422 4.14813 10.8146C5.05022 11.0384 5.69497 11.6888 6.408 12.4088C7.57022 13.5812 8.91499 14.9381 11.8531 14.9381C15.0136 14.9381 16.9892 13.3675 17.7794 10.2255C16.5939 11.7965 15.211 12.3855 13.6308 11.993C12.7291 11.7687 12.0844 11.1183 11.3714 10.3988C10.2091 9.22637 8.8639 7.86906 5.9263 7.86906Z"
                                  fill="#38BDF8"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_502_1022">
                                  <rect width="24" height="14.4" fill="white" transform="translate(0 0.800049)" />
                                </clipPath>
                              </defs>
                            </svg>
                            <img class="h-12 w-12 object-fill" src="/assets/technos/javascript.jpeg" alt="javascript logo" />
                            <img class="h-12 w-12 object-fill" src="/assets/technos/typescript.jpeg" alt="typescript logo" />
                            <img class="h-16 w-16 object-fill" src="/assets/technos/angularjs.jpeg" alt="angularjs logo" />
                            <img class="h-16 w-16 object-fill" src="/assets/technos/rxjs.webp" alt="rxjs logo" />
                          </div>
                        </div>
                        <div class="p-6">
                          <h3 class="text-slate-500 font-bold text-3xl text-end">Back</h3>
                          <div class="h-px bg-slate-300 mt-1"></div>
                          <div class="mt-6 flex space-x-6 space-y-4 items-center flex-wrap">
                            <img class="h-12 w-12 object-fill" src="/assets/technos/javascript.jpeg" alt="javascript logo" />
                            <img class="h-12 w-12 object-fill" src="/assets/technos/typescript.jpeg" alt="typescript logo" />
                            <img class="h-12 w-12 object-fill" src="/assets/technos/mysql.webp" alt="mysql logo" />
                            <img class="h-12 w-12 object-fill" src="/assets/technos/postgresql.jpeg" alt="postgresql logo" />
                            <img class="h-16 w-16 object-fill" src="/assets/technos/node.jpeg" alt="node logo" />
                            <!-- <img class="h-16 w-16 object-fill" src="/assets/technos/express.jpeg" alt="express logo" /> -->
                            <img class="h-14 w-14 object-fill" src="/assets/technos/nest.jpeg" alt="nest logo" />
                          </div>
                        </div>
                        <div class="p-6">
                          <h3 class="text-slate-500 font-bold text-3xl text-end">Others</h3>
                          <div class="h-px bg-slate-300 mt-1"></div>
                          <div class="mt-6 flex space-x-6 space-y-4 items-center flex-wrap">
                            <img class="h-16 w-16 object-fill" src="/assets/technos/git.png" alt="git logo" />
                            <img class="h-12 w-12 object-fill" src="/assets/technos/karma.webp" alt="karma logo" />
                            <img class="h-16 w-16 object-fill" src="/assets/technos/redux.jpeg" alt="redux logo" />
                            <img class="h-16 w-16 object-fill" src="/assets/technos/figma.jpeg" alt="figma logo" />
                            <img class="h-14 w-14 object-fill" src="/assets/technos/graphql.webp" alt="graphql logo" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="projects" class="scroll-mt-16" style="padding-bottom: 0px;">
            <div>
              <header class="relative mb-10 xl:mb-0">
                <div
                  class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8"
                >
                  <a class="inline-flex" href="/#commit-message-suggestions"><span class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50">Projects</span></a>
                  <div class="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"></div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                  <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                    <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                      <div class="flex">
                        <a class="inline-flex" href="/#commit-message-suggestions"><span class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">Projects</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                  <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography">
                    <div class="relative mt-2 overflow-hidden rounded-xl bg-gray-50 [&amp;+*]:mt-8">
                      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <h2 class="font-display flex text-4xl/tight font-semibold text-sky-300">
                      Projects
                      <svg viewBox="0 0 16 16" class="w-6 h-6" aria-hidden="true">
                        <path
                          fill="#38BDF8"
                          d="M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"
                        ></path>
                        <path
                          fill="#7DD3FC"
                          d="M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"
                        ></path>
                      </svg>
                    </h2>
                    <div class="mt-16 sm:mt-20">
                      <div class="mt-16 sm:mt-20">
                        <ul role="list" class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
                          <li class="group relative flex flex-col items-start">
                            <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                              <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="h-8 w-8" src="/assets/technos/icon.png" style="color: transparent;" />
                            </div>
                            <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                              <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                              <a href="https://tabiblib-services.com/"
                                ><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10 text-slate-900">TABIBLIB</span></a
                              >
                            </h2>
                            <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Tabiblib est une application 100% algérienne. Qui offre la possibilité aux utilisateurs de prendre rendez-vous en ligne chez un professionnel de santé à tout moment près
                              de chez eux.
                            </p>
                            <p class="relative z-10 mt-6 flex text-sm font-medium text-slate-300 transition group-hover:text-sky-300">
                              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
                                <path
                                  d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                  fill="currentColor"
                                ></path></svg
                              ><span class="ml-2">https://tabiblib-services.com/</span>
                            </p>
                          </li>
                          <li class="group relative flex flex-col items-start">
                            <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-8 w-8 fill-transparent" viewBox="0 0 20 20" fill="none">
                                <path d="M20 0H0V20H20V0Z" fill="url(#pattern0)" />
                                <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_502_1176" transform="scale(0.005)" />
                                  </pattern>
                                  <image
                                    id="image0_502_1176"
                                    width="200"
                                    height="200"
                                    xlink:href="data:image/png;base64,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"
                                  />
                                </defs>
                              </svg>
                            </div>
                            <h2 class="mt-6 text-base font-semibold text-zinc-800">
                              <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                              <a href="https://loov-solutions.com/"
                                ><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10 text-slate-900">LOOV</span></a
                              >
                            </h2>
                            <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Solution de paiement en ligne qui permet à ses utilisateurs d’accepter le paiement par carte bancaire et mobile money dans l'afrique de l'ouest et au Cameroun.
                            </p>
                            <p class="relative z-10 mt-6 flex text-sm font-medium text-slate-300 transition group-hover:text-sky-300">
                              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
                                <path
                                  d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                  fill="currentColor"
                                ></path></svg
                              ><span class="ml-2">https://loov-solutions.com/</span>
                            </p>
                          </li>
                          <li class="group relative flex flex-col items-start">
                            <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                              <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8">
                                <g clip-path="url(#clip0_5982_2611)">
                                  <path d="M0.665039 3.41627L6.93504 6.99522L13.205 3.41627L6.93504 0L0.665039 3.41627Z" fill="#099170"></path>
                                  <path d="M20.96 7.32059L27.065 10.7369L33.335 7.32059L27.065 3.74164L20.96 7.32059Z" fill="#FFDC44"></path>
                                  <path d="M0.5 26.6794L13.37 34V27.0048L6.605 23.1005V7.64593L0.5 4.06699V26.6794Z" fill="#099170"></path>
                                  <path d="M27.395 11.3876V18.5454L33.5 14.9665L33.4835 7.97128L27.395 11.3876Z" fill="#FFDC44"></path>
                                  <path d="M14.03 27.0048V34L26.735 26.6794V19.6842L14.03 27.0048Z" fill="#FFDC44"></path>
                                  <path d="M7.26501 7.64593V22.2871L13.37 18.7081V4.06699L7.26501 7.64593Z" fill="#E21B30"></path>
                                  <path d="M20.63 14.9665L26.735 18.5454V11.3876L20.63 7.97128V14.9665Z" fill="#FFDC44"></path>
                                  <path d="M7.51245 22.8565L13.7 26.3541L26.405 19.1148L20.3 15.4546L7.51245 22.8565Z" fill="#E21B30"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5982_2611"><rect width="33" height="34" fill="white" transform="translate(0.5)"></rect></clipPath>
                                </defs>
                              </svg>
                            </div>
                            <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                              <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                              <a href="https://jobs-staging.laravel.cm/"
                                ><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10 text-slate-900">JOBS PORTAIL</span></a
                              >
                            </h2>
                            <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Jobs Portail permet de trouver l'emploi que vous aimez, recherchez les entreprises qui connaissent la plus forte croissance et offrent des contracts de travail et stage.
                            </p>
                            <p class="relative z-10 mt-6 flex text-sm font-medium text-slate-300 transition group-hover:text-sky-300">
                              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
                                <path
                                  d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                  fill="currentColor"
                                ></path></svg
                              ><span class="ml-2">https://jobs-staging.laravel.cm/</span>
                            </p>
                          </li>
                          <li class="group relative flex flex-col items-start">
                            <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                              <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="h-8 w-8 object-fill" src="/assets/cosna.png" style="color: transparent;" />
                            </div>
                            <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                              <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                              <a href="https://cosna-afrique.com/"
                                ><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10 text-slate-900">COSNA AFRIQUE</span></a
                              >
                            </h2>
                            <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Moyen de transfert d'argent simple, rapide et sécurisé! Plus de 50,443 personnes transfèrent de l’argent à leurs proches, amis et partenaires d’affaires avec Cosna
                              Afrique.
                            </p>
                            <p class="relative z-10 mt-6 flex text-sm font-medium text-slate-300 transition group-hover:text-sky-300">
                              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
                                <path
                                  d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                  fill="currentColor"
                                ></path></svg
                              ><span class="ml-2">https://cosna-afrique.com/</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </main>
  `,
  styles: [
    `
      .text-change {
        position: relative;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-left: 2px solid #7dd3fc;
          background-color: #030712;
          animation: animate 4s steps(12) infinite;
        }
      }

      @keyframes animate {
        40%,
        60% {
          left: calc(100% + 4px);
        }
        100% {
          left: 0%;
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = "Sagnol KAMDEM";

  ngOnInit(): void {
    this.updateWords();
  }

  updateWords(): void {
    if (document) {
      const text = document.querySelector(".text-change")!;
      const textLoad = () => {
        setTimeout(() => {
          text.textContent = "Nestjs Developer 👽";
        }, 0);
        setTimeout(() => {
          text.textContent = "Typescript Lover 💙";
        }, 4000);
        setTimeout(() => {
          text.textContent = "Angular Developer ❤️";
        }, 8000);
      };

      textLoad();
      setInterval(textLoad, 12000);
    }
  }
}
