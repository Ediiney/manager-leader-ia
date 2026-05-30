import type { NextApiRequest, NextApiResponse } from 'next'

const sampleLeads = [
  {
    id: 'lead-1',
    name: 'Clínica Sorriso Saudável',
    website: 'https://sorrisosaudavel.com.br',
    instagram: '@sorrisosaudavel',
    phone: '(11) 98765-4321',
    whatsapp: '(11) 98765-4321',
    city: 'São Paulo',
    segment: 'Dentista',
    score: 84,
    classification: 'Quente',
  },
  {
    id: 'lead-2',
    name: 'OdontoMais Clínica',
    website: 'https://odontomais.com.br',
    instagram: '@odontomais',
    phone: '(11) 91234-5678',
    whatsapp: '(11) 91234-5678',
    city: 'São Paulo',
    segment: 'Dentista',
    score: 68,
    classification: 'Morno',
  },
  {
    id: 'lead-3',
    name: 'Estética Clínica Vital',
    website: 'https://clinicavital.com.br',
    instagram: '@clinicavital',
    phone: '(11) 99876-5432',
    whatsapp: '(11) 99876-5432',
    city: 'São Paulo',
    segment: 'Estética',
    score: 57,
    classification: 'Morno',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = (req.query.q as string) || ''
  const filtered = sampleLeads.filter((lead) =>
    lead.name.toLowerCase().includes(query.toLowerCase()) ||
    lead.segment.toLowerCase().includes(query.toLowerCase()) ||
    lead.city.toLowerCase().includes(query.toLowerCase())
  )
  res.status(200).json({ results: filtered })
}
