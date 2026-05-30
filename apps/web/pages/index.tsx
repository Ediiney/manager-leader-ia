import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '3rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>LeadForge AI</h1>
      <p>Bem-vindo ao MVP do projeto. Aqui você pode acessar as telas básicas de autenticação.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Link href="/login" style={{ padding: '0.75rem 1rem', background: '#2563eb', color: '#fff', borderRadius: '0.5rem', textDecoration: 'none' }}>
          Login
        </Link>
        <Link href="/signup" style={{ padding: '0.75rem 1rem', background: '#047857', color: '#fff', borderRadius: '0.5rem', textDecoration: 'none' }}>
          Cadastro
        </Link>
      </div>
    </main>
  )
}
