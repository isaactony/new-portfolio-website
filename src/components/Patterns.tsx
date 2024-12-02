import React from 'react';

export const GridPattern = () => (
  <div className="absolute inset-0 -z-10 animate-pulse">
    <svg className="absolute h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 40V.5H40" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)" />
    </svg>
  </div>
);

export const DotsPattern = () => (
  <div className="absolute inset-0 -z-10 animate-pulse">
    <svg className="absolute h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern
          id="dots"
          width="25"
          height="25"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#dots)" />
    </svg>
  </div>
);

export const CirclesPattern = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden animate-pulse">
    <svg className="absolute h-full w-full stroke-gray-200/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern
          id="circles"
          width="100"
          height="100"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="50" cy="50" r="40" strokeWidth="2" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#circles)" />
    </svg>
  </div>
);

export const HexagonPattern = () => (
  <div className="absolute inset-0 -z-10 animate-pulse">
    <svg className="absolute h-full w-full stroke-gray-200/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern
          id="hexagons"
          width="50"
          height="43.4"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2) rotate(0)"
        >
          <path
            d="M25 0L50 14.4v28.8L25 43.4L0 43.4V14.4z"
            strokeLinejoin="round"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#hexagons)" />
    </svg>
  </div>
);

export const WavesPattern = () => (
  <div className="absolute inset-0 -z-10 animate-pulse">
    <svg className="absolute h-full w-full stroke-violet-100/20" aria-hidden="true">
      <defs>
        <pattern
          id="waves"
          width="100"
          height="20"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 10C20 5, 30 15, 50 10C70 5, 80 15, 100 10" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#waves)" />
    </svg>
  </div>
);