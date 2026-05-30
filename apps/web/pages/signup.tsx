import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, password }),
    })

    const data = await res.json()
    if (res.ok) {
      setMessage('Conta criada com sucesso. Faça login.')
      router.push('/login')
    } else {
      setMessage(data.error || 'Erro ao criar conta.')
    }
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '420px', display: 'grid', gap: '1rem' }}>
        <label>
          Nome
          <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Seu nome" style={{ width: '100%', padding: '0.75rem' }} />
        </label>
        <label>
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="email@exemplo.com" style={{ width: '100%', padding: '0.75rem' }} />
        </label>
        <label>
          Senha
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Senha segura" style={{ width: '100%', padding: '0.75rem' }} />
        </label>
        <button type="submit" style={{ padding: '0.75rem 1rem', background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Criar conta
        </button>
      </form>
      {message ? <p style={{ marginTop: '1rem' }}>{message}</p> : null}
    </main>
  )
}
