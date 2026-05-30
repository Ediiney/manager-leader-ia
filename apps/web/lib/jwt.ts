import jwt, { SignOptions, VerifyOptions, Secret } from 'jsonwebtoken'

const SECRET: Secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET || 'dev-secret'

export function signToken(payload: object, expiresIn = '7d') {
  return jwt.sign(payload, SECRET, { expiresIn: expiresIn as any })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET)
  } catch (err) {
    return null
  }
}
