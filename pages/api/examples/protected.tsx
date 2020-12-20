// This is an example of to protect an API route
import { getSession } from 'next-auth/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (session) {
    res.send({
      "content": "Nani"
    })
  } else {
    res.send({
      "content": "Nani"
    })
  }
}