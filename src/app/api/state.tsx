import { NextResponse } from "next/server";

let state = {
  speedhack: 1,
  godMode: false,
  username: "player"
};

// GET: read state
export async function GET() {
  return NextResponse.json(state);
}

// POST: update state
export async function POST(req: Request) {
  const body = await req.json();
  state = { ...state, ...body };

  return NextResponse.json({
    success: true,
    state
  });
}