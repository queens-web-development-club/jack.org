import { Montserrat } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={Montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}