import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { router } from './app/routes'
import './styles/index.css'

const redirectPath = sessionStorage.getItem('redirect')
if (redirectPath) {
  sessionStorage.removeItem('redirect')
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const relative =
    base && redirectPath.startsWith(base) ? redirectPath.slice(base.length) || '/' : redirectPath
  void router.navigate(relative, { replace: true })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
