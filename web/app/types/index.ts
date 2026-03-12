interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
  detail: string;
  animationVariant: "slideLeft" | "slideRight" | "scaleUp" | "rotateIn";
}

interface InterestFormData {
  name: string;
  email: string;
  selectedStep: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export type { Step, InterestFormData, ApiResponse, FormStatus };
