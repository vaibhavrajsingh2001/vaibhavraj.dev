type CalArguments = unknown[]

interface CalApi {
  (...args: CalArguments): void
  config?: {
    forwardQueryParams?: boolean
  }
  loaded?: boolean
  ns: Record<string, CalApi>
  q: CalArguments[]
}

declare global {
  interface Window {
    Cal?: CalApi
  }
}

function createQueueApi(): CalApi {
  const api = ((...args: CalArguments) => {
    api.q.push(args)
  }) as CalApi

  api.ns = {}
  api.q = []

  return api
}

function installCal() {
  if (window.Cal) {
    return window.Cal
  }

  const cal = ((...args: CalArguments) => {
    if (!cal.loaded) {
      cal.ns = {}
      cal.q ||= []

      const script = document.createElement('script')
      script.src = 'https://app.cal.com/embed/embed.js'
      script.async = true
      document.head.appendChild(script)

      cal.loaded = true
    }

    if (args[0] === 'init') {
      const namespace = args[1]

      if (typeof namespace === 'string') {
        cal.ns[namespace] ||= createQueueApi()
        cal.ns[namespace].q.push(args)
        cal.q.push(['initNamespace', namespace])
        return
      }
    }

    cal.q.push(args)
  }) as CalApi

  cal.ns = {}
  cal.q = []
  window.Cal = cal

  return cal
}

export default defineNuxtPlugin(() => {
  const cal = installCal()

  cal('init', '30min', { origin: 'https://app.cal.com' })

  cal.config ||= {}
  cal.config.forwardQueryParams = true

  cal.ns['30min']?.('ui', {
    cssVarsPerTheme: {
      light: { 'cal-brand': '#091a28' },
      dark: { 'cal-brand': '#ffffff' },
    },
    hideEventTypeDetails: false,
    layout: 'month_view',
  })
})
