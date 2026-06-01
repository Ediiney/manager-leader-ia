import { useState } from 'react'

type CopyRequest = {
  segment: string
  city: string
  score: string
  problems: string
}

export default function Copywriter() {
  const [form, setForm] = useState<CopyRequest>({
    segment: 'Dentista',
    city: 'São Paulo',
    score: '80',
    problems: 'baixa captação online, pouco tráfego orgânico e anúncios ineficientes',
  })
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')
    setResult('')

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333'
    try {
      const response = await fetch(`${apiUrl}/copywriter/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segment: form.segment,
          city: form.city,
          score: Number(form.score),
          problems: form.problems,
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        setError(data.message || 'Falha ao gerar copy')
      } else {
        setResult(data.copy)
      }
    } catch (err) {
      setError('Falha de rede ao gerar a copy')
    }

    setLoading(false)
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>IA Copywriter</h1>
      <p>Gere abordagens de prospecção baseadas no segmento, cidade e score do lead.</p>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '640px', marginTop: '1rem' }}>
        <label>
          Segmento
          <input
            value={form.segment}
            onChange={(event) => setForm({ ...form, segment: event.target.value })}
            placeholder="Por exemplo: Dentista"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }}
          />
        </label>
        <label>
          Cidade
          <input
            value={form.city}
            onChange={(event) => setForm({ ...form, city: event.target.value })}
            placeholder="Por exemplo: São Paulo"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }}
          />
        </label>
        <label>
          Score do lead
          <input
            value={form.score}
            onChange={(event) => setForm({ ...form, score: event.target.value })}
            type="number"
            min="0"
            max="100"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }}
          />
        </label>
        <label>
          Problemas identificados
          <textarea
            value={form.problems}
            onChange={(event) => setForm({ ...form, problems: event.target.value })}
            rows={4}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }}
          />
        </label>
        <button type="submit" style={{ width: 'fit-content', padding: '0.85rem 1.25rem', background: '#9333ea', color: '#fff', border: 'none', borderRadius: '0.75rem', cursor: 'pointer' }}>
          {loading ? 'Gerando...' : 'Gerar copy'}
        </button>
      </form>

      {error ? <p style={{ color: '#b91c1c', marginTop: '1rem' }}>{error}</p> : null}
      {result ? (
        <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '1rem', background: '#f3f4f6', whiteSpace: 'pre-wrap' }}>
          <h2>Copy Gerada</h2>
          <p>{result}</p>
        </div>
      ) : null}
    </main>
  )
}
