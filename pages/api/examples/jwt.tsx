// This is an example of how to read a JSON Web Token from an API route
import jwt from 'next-auth/jwt'
import type { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.SECRET as string | Buffer

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const token = await jwt.getToken({req, secret})
  console.log('JSON Web Token', token)
  res.send(JSON.stringify(token, null, 2))
}