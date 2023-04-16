// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'

type QueryData = {
  key: string,
  mac: string
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
    const users = await prisma.user.findMany()

    return res.json({ users })
  }
  if (req.method === "POST") {
    const user = await prisma.user.create({
      data: req.body,
    })

    return res.json({ user })
  }
}
