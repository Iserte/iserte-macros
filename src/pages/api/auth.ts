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
    const { key, mac } = req.query as QueryData

    if (!key) {
      return res.send("A chave nao foi encontrada")
    }

    const user = await prisma.user.findUnique({
      where: {
        key
      }
    })

    if (!user) {
      return res.send("Chave de acesso invalida")
    }

    console.log(user.expiresIn, new Date())
    if (user.expiresIn < new Date()) {
      return res.send("Sua chave expirou")
    }

    if (!user.mac) {
      await prisma.user.update({
        where: {
          key
        },
        data: {
          mac
        }
      })
    } else if (user.mac !== mac) {
      return res.send("Voce nao pode logar em mais de um dispositivo")
    }

    return res.send("Logado com sucesso")
  }
  if (req.method === "POST") {
    const user = await prisma.user.create({
      data: req.body,
    })

    return res.json(user)
  }
}
