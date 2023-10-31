import { ArticleProps } from "~/components/article/Article";
import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "~/pages/help/topic/[topic]";
import { load } from "outstatic/server";

interface Response {
  message?: string;
  results: ArticleProps[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method !== "GET" || typeof req.query.q !== "string") {
    return res.status(400).json({
      message: "Invalid request.",
      results: []
    });
  }

  const db = await load();
  const results = await db
    .find<
      {
        category: Category[];
      } & ArticleProps
    >({
      collection: "knowledge-base-articles",
      $or: [
        {
          title: {
            $regex: new RegExp(req.query.q, "gi")
          }
        },
        {
          // @ts-expect-error
          category: {
            $regex: new RegExp(req.query.q, "gi")
          }
        },
        {
          description: {
            $regex: new RegExp(req.query.q, "gi")
          }
        },
        {
          slug: {
            $regex: new RegExp(req.query.q, "gi")
          }
        }
      ]
    })
    .project(["title", "description", "slug"])
    .toArray();

  return res.status(200).json({ results });
}
