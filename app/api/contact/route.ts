import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, eventDate, guests, message } = body

    // Validate required fields
    if (!name || !email || !phone || !eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format event type for display
    const eventTypeLabels: Record<string, string> = {
      'festa-privata': 'Festa privata / Matrimonio',
      'evento-aziendale': 'Evento aziendale / Team building',
      'festival': 'Festival / Fiera',
      'noleggio': 'Noleggio truck',
      'altro': 'Altro',
    }

    const eventTypeLabel = eventTypeLabels[eventType] || eventType

    // Format the email content
    const emailHtml = `
      <h2>Nuova richiesta di contatto da Philli Food</h2>
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Tipo di evento:</strong> ${eventTypeLabel}</p>
        ${eventDate ? `<p><strong>Data evento:</strong> ${eventDate}</p>` : ''}
        ${guests ? `<p><strong>Numero ospiti:</strong> ${guests}</p>` : ''}
        ${message ? `<p><strong>Messaggio:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
      </div>
    `

    const emailText = `
Nuova richiesta di contatto da Philli Food

Nome: ${name}
Email: ${email}
Telefono: ${phone}
Tipo di evento: ${eventTypeLabel}
${eventDate ? `Data evento: ${eventDate}` : ''}
${guests ? `Numero ospiti: ${guests}` : ''}
${message ? `\nMessaggio:\n${message}` : ''}
    `.trim()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Philli Food <roberto@robdll.com>', // You'll need to verify your domain with Resend
      to: ['info@lillos.net'],
      subject: `Nuova richiesta di contatto: ${name} - ${eventTypeLabel}`,
      html: emailHtml,
      text: emailText,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

