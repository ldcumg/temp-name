import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // GET 로직

    return NextResponse.json({ data: null }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // POST 로직

    return NextResponse.json({ data: body }, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();

    // PATCH 로직

    return NextResponse.json({ data: body }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // DELETE 로직

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
