import { useEffect, useState } from 'react'

type Lead = {
  id: string
  name: string
  website: string
  instagram: string
  phone: string
  whatsapp: string
  city: string
  segment: string
  score: number
  classification: string
}

export default function Leads() {
  const [query, setQuery] = useState('Dentistas São Paulo')
  const [results, setResults] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchResults(query)
  }, [])

  async function fetchResults(searchQuery: string) {
    setLoading(true)
    setMessage('')
    const res = await fetch(`/api/leads/search?q=${encodeURIComponent(searchQuery)}`)
    const data = await res.json()
    setResults(data.results)
    if (!data.results.length) setMessage('Nenhum lead encontrado para essa busca.')
    setLoading(false)
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Lead Finder</h1>
      <p>Busque empresas com potencial de contratar tráfego pago.</p>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          fetchResults(query)
        }}
        style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex: Dentistas São Paulo"
          style={{ flex: 1, padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }}
        />
        <button type="submit" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', background: '#2563eb', color: '#fff', border: 'none' }}>
          Buscar
        </button>
      </form>

      {loading ? (
        <p style={{ marginTop: '1rem' }}>Carregando resultados...</p>
      ) : (
        <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
          {results.map((lead) => (
            <article key={lead.id} style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                <div>
                  <h2 style={{ margin: 0 }}>{lead.name}</h2>
                  <p style={{ margin: '0.25rem 0 0', color: '#6b7280' }}>{lead.segment} • {lead.city}</p>
                </div>
                <span style={{ padding: '0.35rem 0.75rem', borderRadius: '999px', background: '#eef2ff', color: '#3730a3', fontWeight: 600 }}>
                  {lead.classification}
                </span>
              </div>
              <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                <p style={{ margin: 0 }}><strong>Website:</strong> <a href={lead.website} target="_blank" rel="noreferrer">{lead.website}</a></p>
                <p style={{ margin: 0 }}><strong>Instagram:</strong> {lead.instagram}</p>
                <p style={{ margin: 0 }}><strong>Telefone:</strong> {lead.phone}</p>
                <p style={{ margin: 0 }}><strong>WhatsApp:</strong> {lead.whatsapp}</p>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Score: {lead.score}/100</span>
                <button style={{ padding: '0.5rem 0.85rem', background: '#047857', color: '#fff', border: 'none', borderRadius: '0.75rem' }}>
                  Abrir lead
                </button>
              </div>
            </article>
          ))}
          {message ? <p>{message}</p> : null}
        </div>
      )}
    </main>
  )
}
