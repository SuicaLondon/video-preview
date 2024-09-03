# Video Preview

This is Suica's project.

## Requirement and Implementation

### Functional Requirement

1. Video List
   1. I did implement the video list with both SSR (Server-Side Rendering) and CSR (Client-Side Rendering)
   2. I did implement the loading state and error handling of the request for both SSR (Server-Side Rendering) and CSR (Client-Side Rendering)
2. Video Component
   1. I did display the Thumbnail
   2. I did display the video information
   3. I did display the Author profile
   4. I did refer the latest UI design of Youtube
3. Video Preview
   1. I did implement the auto play function of the video preview
   2. I did implement the hover action with 0.5 seconds delay
4. Video Blur Behavior 
   1. I did implement the video auto stop and resume functionality
   2. I did implement the switch between video preview and thumbnail
5. Playback Control
   1. I did implement a drapable and clickable track bar
   2. I did implement the interaction of the track bar that allows user to change the position of the video
   3. I did the Synchronization of the time between video and the track bar
6. Timestamp Tracking
   1. I did implement the manual navigation.
   2. I did implement the restore position.
   3. I did implement the default start.
7. Audio Control
   1. I did implement the Sound Button on the right top
   2. I did implement the mute and unmute function of the button
8. Video
   1. I did implement the simple fetch function and React Query configuration to fetch the data
   2. I did implement the query hooks and actions for both SSR (Server-Side Rendering) and CSR (Client-Side Rendering).
   3. I did implement the loading page/state and error handling for both SSR (Server-Side Rendering) and CSR (Client-Side Rendering).
9. Preview Mode
   1. I did implement the preview mode of *interactive* and *static*.
   2. I did implement the type checking of the parameters of both of them.

### Technical Requirement

1. The job description required using React 17+, so I chose Next.js with the App Router to meet this requirement.
2. I selected Tailwind CSS to align more closely with the tech stack that **Plan.com** is currently using.
3. To implement a responsive design, in the absence of a specific design for the page, I decided to take inspiration from YouTube’s layout, making a few adjustments:
    1. I avoided manually calculating the size of each video item as YouTube does, since this approach conflicts with **Tailwind CSS**’s philosophy.
    2. I used a grid layout with different column setups for medium and small devices, and switched to flex layout for extra-large devices.
    3. The design adapts well to most device sizes.
    4. However, there is still room for improvement. For instance, using fixed heights for elements like videos and images can help reduce reflows, enhancing both user experience and performance.
4. I optimized the performance and component design of the video preview:
    1. I implemented both SSR (Server-Side Rendering) and CSR (Client-Side Rendering) for the game list.
    2. I designed three different loading behaviors in the app: one for SSR and page loading, another for CSR, and a third for app loading.
    3. I separated components to enhance rendering efficiency.
    4. I used memoization for components where necessary.
    5. I throttled state updates to improve performance.
    6. I did improve the loading experience of video.
    7. There are still areas that could be improved:
        1. Video content could be **lazy-loaded** using `IntersectionObserver` and React.lazy.
        2. States like currentTime and other video properties could be extracted into state management or `useSyncExternalStore` for better handling.
           1. If the mode is static, throw type error if provided `onVideoStart`/`onVideoEnd`/`onVideoResume`/`onVideoSeek`
           2. It is not using generic but using a little type gymnastics.

### Other things not in the requirement

1. husky and lint-staged
2. some force styling
3. Some coverage of unit test
4. A **Sidebar** to navigate between SSR (Server-Side Rendering) and CSR (Client-Side Rendering).

### Need to be improved

I have listed some of the improvement due to the missing requirement/design or time limitation above. Others were also listed by comment in the codebase. 

1. Some icon could be replaced.
2. Better error handling page and 404 page
3. Use Swagger or other tools to manage the *endpoints* and *DTO*
4. Injected the domain from the *.env* or CI/CD pipeline
5. Integrated with axios or other library, and it will be easier to deal with more complicated cases.
6. Some state could be moved to state management or `useSyncExternalStore` to maximize the performance and simplify the complexity
7. I do need a design system to fix the hight of image/video/card to reduce the reflow and layout shift.
8. Video lazy-loading with `IntersectionObserver` and handle more complicated scenarios.
9. Error handling on Sentry
10. Image should be converted on the backend when it was uploaded to the CMS.

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Then, run the production server
```bash
pnpm run build && pnpm run start
```

Run the test
```bash
pnpm run test
```

