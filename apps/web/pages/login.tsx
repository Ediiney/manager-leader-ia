import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()
    if (res.ok) {
      setMessage('Login efetuado. JWT salvo no console.')
      console.log('token', data.token)
      router.push('/')
    } else {
      setMessage(data.error || 'Credenciais inválidas.')
    }
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '420px', display: 'grid', gap: '1rem' }}>
        <label>
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="email@exemplo.com" style={{ width: '100%', padding: '0.75rem' }} />
        </label>
        <label>
          Senha
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Senha" style={{ width: '100%', padding: '0.75rem' }} />
        </label>
        <button type="submit" style={{ padding: '0.75rem 1rem', background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Entrar
        </button>
      </form>
      {message ? <p style={{ marginTop: '1rem' }}>{message}</p> : null}
    </main>
  )
}
