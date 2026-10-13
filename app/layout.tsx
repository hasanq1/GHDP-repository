import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Greater Houston Defense Partnership | Houston Capability. National Impact.',description:'Connecting Greater Houston’s government contracting, Space, Defense AI, energy, and veteran communities. Join the December 10, 2026 kickoff.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html: "try{var t=localStorage.getItem('ghdp-theme');document.documentElement.dataset.theme=t==='dark'||t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch{document.documentElement.dataset.theme='light'}"}}/></head><body>{children}</body></html>}
