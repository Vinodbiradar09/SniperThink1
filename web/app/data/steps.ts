import type { Step } from "../types/index";

const steps: Step[] = [
  {
    id: 1,
    step: "01",
    title: "Analyze",
    description: "See exactly where you are and where you're stuck.",
    detail:
      "Connect your tools and uncover insights. From KPIs to lead flows, SniperThink shows you where you are—and where you're stuck. No more guessing, no more delayed decisions.",
    animationVariant: "slideLeft",
  },
  {
    id: 2,
    step: "02",
    title: "Automate",
    description: "Let the system do the work — without losing control.",
    detail:
      "Automate alerts, reports, responses, and lead qualification without sacrificing control. Your systems run 24/7 so your team doesn't have to.",
    animationVariant: "slideRight",
  },
  {
    id: 3,
    step: "03",
    title: "Accelerate",
    description: "Move faster. Focus only where it counts.",
    detail:
      "With smart signals and agent-driven outreach, your team focuses only where it counts. Act faster, scale smoother — precision over volume.",
    animationVariant: "scaleUp",
  },
  {
    id: 4,
    step: "04",
    title: "Align",
    description: "Every decision, team, and system — one direction.",
    detail:
      "Bring clarity to every business decision before it's too late. SniperThink aligns your data, your agents, and your team into a single growth direction.",
    animationVariant: "rotateIn",
  },
];

export { steps };
