import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const newFormData = { ...formData, access_key: process.env.W3FORMS_KEY };
    const response = await axios.post("https://api.web3forms.com/submit", newFormData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });


    return NextResponse.json(response.data);
  } catch (error:any) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: error?.response?.data?.message || error?.data?.message || error?.message || "Failed to submit form" },
      { status: error?.response?.status || 500 }
    );
  }
}
