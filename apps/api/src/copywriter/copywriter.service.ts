import { Injectable, Logger } from '@nestjs/common'

export type CopyRequest = {
  segment: string
  city: string
  score: number
  problems: string
}

@Injectable()
export class CopywriterService {
  private readonly logger = new Logger(CopywriterService.name)

  async generate(input: CopyRequest) {
    const prompt = this.buildPrompt(input)

    if (!process.env.OPENAI_API_KEY) {
      this.logger.warn('OPENAI_API_KEY not configured; using fallback copy template')
      return {
        copy: this.fallbackCopy(input),
      }
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'Você é um copywriter que gera mensagens de prospecção de tráfego pago.' },
            { role: 'user', content: prompt },
          ],
          max_tokens: 350,
          temperature: 0.8,
        }),
      })

      const json = await response.json()
      const text = json?.choices?.[0]?.message?.content

      if (!text) {
        this.logger.warn('OpenAI responded without text, using fallback copy')
        return { copy: this.fallbackCopy(input) }
      }

      return { copy: text.trim() }
    } catch (error) {
      this.logger.error('OpenAI request failed', error)
      return { copy: this.fallbackCopy(input) }
    }
  }

  private buildPrompt(input: CopyRequest) {
    return `Gere uma mensagem de prospecção para um gestor de tráfego entrar em contato com uma empresa do segmento ${input.segment} em ${input.city}. O lead possui score ${input.score}/100 e os problemas identificados são: ${input.problems}. Crie uma abordagem de WhatsApp ou email curta, persuasiva e personalizada.`
  }

  private fallbackCopy(input: CopyRequest) {
    return `Olá! Vi que sua empresa de ${input.segment} em ${input.city} está pronta para melhorar resultados com tráfego pago. Com um score de ${input.score}, já dá para ver potencial. Se você quer aumentar leads qualificados, podemos conversar sobre uma estratégia customizada, otimizada para os problemas: ${input.problems}.`
  }
}
