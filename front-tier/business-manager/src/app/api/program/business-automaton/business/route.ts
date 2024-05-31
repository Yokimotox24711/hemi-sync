import Business from "@/lib/mongodb/models/business";
import clientPromise from "@/lib/mongodb/mongodb";
import connectMongoDB from "@/lib/mongodb/mongodb";

export async function GET(request: Request) {
  await connectMongoDB();
  const businesses = await Business.find({});
  return Response.json(businesses, { status: 200 });
}

export async function POST(req: Request) {
  try {
    var body = await req.json();
    var business = body.business;
    console.log(business);
    await Business.create(business);
    return Response.json(
      { message: "Business Created Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "error", error: error }, { status: 500 });
  }
}
