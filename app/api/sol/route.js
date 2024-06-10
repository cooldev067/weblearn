import connectDB from "@/config/db";
import Note from "@/models/solModel";
import { NextResponse } from "next/server";

connectDB();
export async function POST(req) {
  try {
    const { content } = await req.json();
    const newNote = await Note.create({ content });
    return NextResponse.json({ success: true, data: newNote });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
