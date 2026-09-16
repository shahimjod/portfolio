import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "./smoother";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.instance?.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const roleEls = gsap.utils.toArray<HTMLElement>(".landing-role");
  if (roleEls.length > 1) {
    const roleTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    roleEls.forEach((roleElement) => {
      const split = new SplitText(roleElement, {
        type: "chars,lines",
        linesClass: "split-h2",
      });
      gsap.set(split.chars, { autoAlpha: 0, yPercent: 120 });
      roleTimeline
        .to(split.chars, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "power3.out",
        })
        .to({}, { duration: 1.8 })
        .to(split.chars, {
          autoAlpha: 0,
          yPercent: -120,
          duration: 0.5,
          stagger: 0.02,
          ease: "power3.in",
        });
    });
  }
}