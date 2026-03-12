import type { ApiResponse, InterestFormData } from "../types/index";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const postInterest = async (data: InterestFormData): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/api/interest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error: ApiResponse = await response.json();
    throw new Error(error.message ?? "internal server error");
  }
  const result: ApiResponse = await response.json();
  return result;
};

export { postInterest };
