import { ScrollSmoother } from "gsap/ScrollSmoother";

interface SmootherRef {
  instance: ScrollSmoother | undefined;
}

export const smoother: SmootherRef = { instance: undefined };