import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Philly Food - Food Truck Catering & Eventi | Il Gusto di Philadelphia',
  description:
    'Rendiamo unico il tuo evento con il gusto del nostro food truck. Catering per feste private, matrimoni, eventi aziendali, team building, festival e fiere. Noleggio truck disponibile. Servizio chiavi in mano in tutta Italia.',
  keywords:
    'food truck, catering, eventi, matrimoni, feste private, eventi aziendali, team building, philadelphia, cheesesteak, noleggio truck',
  openGraph: {
    title: 'Philly Food - Food Truck Catering & Eventi',
    description:
      'Rendiamo unico il tuo evento con il gusto del nostro food truck. Catering per feste private, matrimoni, eventi aziendali, team building, festival e fiere.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
