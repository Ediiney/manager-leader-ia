const pipelineStages = ['Lead', 'Contato', 'Reunião', 'Proposta', 'Cliente']

const sampleCards = [
  { id: 'card-1', title: 'Clínica Sorriso Saudável', stage: 'Lead', value: 'R$ 6.500' },
  { id: 'card-2', title: 'OdontoMais Clínica', stage: 'Contato', value: 'R$ 5.200' },
  { id: 'card-3', title: 'Estética Clínica Vital', stage: 'Reunião', value: 'R$ 4.800' },
  { id: 'card-4', title: 'Studio Digital', stage: 'Proposta', value: 'R$ 9.000' },
  { id: 'card-5', title: 'Clínica Bem Estar', stage: 'Cliente', value: 'R$ 12.000' },
]

export default function CRM() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CRM</h1>
      <p>Pipeline de relacionamento com leads e clientes.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        {pipelineStages.map((stage) => (
          <section key={stage} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1rem' }}>
            <h2 style={{ margin: '0 0 0.75rem' }}>{stage}</h2>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {sampleCards
                .filter((card) => card.stage === stage)
                .map((card) => (
                  <article key={card.id} style={{ padding: '0.75rem', borderRadius: '0.75rem', background: '#fff', boxShadow: '0 1px 2px rgba(15,23,42,0.05)' }}>
                    <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>{card.title}</h3>
                    <p style={{ margin: 0, color: '#475569' }}>{card.value}</p>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
