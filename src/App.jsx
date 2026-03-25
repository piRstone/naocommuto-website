import {
  ArrowRight,
  Bike,
  FlaskConical,
  TramFront,
  ParkingCircle,
} from 'lucide-react'
import busStopImage from './assets/bus-stop.png'
import bikeJourneyImage from './assets/bike-journey.png'
import appStoreBadgeFr from './assets/App_Store_Badge_FR.svg'
import googlePlayBadgeFr from './assets/Google_Play_Store_badge_FR.svg'
import homescreenImage from './assets/homescreen.png'
import logo from './assets/logo-gradient.svg'
import parkingFullImage from './assets/parking-full.png'
import parkingOkImage from './assets/parking-ok.png'

const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.pirstone.naocommuto&hl=fr&gl=FR&referrer=utm_source%3Dnaocommuto.pirstone.com%26utm_medium%3Dwebsite%26utm_campaign%3Dlanding_page'

const featureCards = [
  {
    id: 'live',
    icon: TramFront,
    label: 'Bus, tram, Navibus',
    title: 'Les transports Naolib en direct.',
    description:
      "Voyez en direct le temps d'attente des prochains bus et trams ou même bateaux à vos arrêts favoris, avec une lecture rapide pensée pour les trajets du quotidien.",
    tone: 'from-cyan-400/25 via-white/70 to-white/10',
  },
  {
    id: 'bicloo',
    icon: Bike,
    label: 'Bicloo',
    title: 'Pas un coup de pédale en trop.',
    description:
      "Vérifiez avant de partir si votre trajet à vélo est faisable entre votre station de départ et votre station d'arrivée.",
    tone: 'from-lime-300/30 via-white/70 to-white/10',
  },
  {
    id: 'parking',
    icon: ParkingCircle,
    label: 'Parkings relais',
    title: 'Gardez un oeil sur les places restantes.',
    description:
      'En voiture vers Nantes ? Choisissez rapidement le parking relais le plus pertinent et surveillez en direct sa disponibilité.',
    tone: 'from-blue-400/25 via-white/70 to-white/10',
  },
]

const quickFacts = [
  'Créé pour les transports nantais',
  'Basé sur les données publiques Naolib',
  'Mises à jour en temps réel',
  '100 % gratuite et indépendante',
]

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="page-shell relative min-h-screen overflow-hidden text-slate-950">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(71,196,255,0.16),transparent_24%),radial-gradient(circle_at_88%_6%,rgba(144,238,113,0.18),transparent_24%),linear-gradient(180deg,#fcfdff_0%,#eef2f6_52%,#f8fafc_100%)]" />
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-60" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-4 pt-6 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="glass-panel inline-flex items-center overflow-hidden rounded-full pr-4 text-sm font-medium text-slate-700 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img src={logo} alt="NaoCommuto" className="h-12 w-12 shrink-0 scale-[1.3]" />
          <span className="py-2 pl-3 font-bold">NaoCommuto</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-3 md:flex">
          <a
            href="#features"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Fonctionnalités
          </a>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-full px-4 py-2 text-sm font-semibold text-slate-900"
          >
            Télécharger sur Google Play
          </a>
        </nav>
      </header>

      <main id="top" className="pb-16">
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-6 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:pb-28 lg:pt-12">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/55 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_40px_rgba(148,163,184,0.18)] backdrop-blur-xl">
              <FlaskConical className="h-4 w-4 text-amber-500" />
              Application en bêta
            </div>

            <h1 className="max-w-3xl font-['Space_Grotesk',sans-serif] text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Ne perdez plus{' '}
              <span className="bg-linear-to-r from-[#76BCFF] to-[#78D702] bg-clip-text text-transparent">
                une minute
              </span>
              {' '}à Nantes
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              NaoCommuto centralise les prochains passages de bus et trams, la
              disponibilité des Bicloo et les places restantes dans les
              parkings relais pour vous faire gagner du temps tous les jours.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold !text-white shadow-[0_16px_40px_rgba(15,23,42,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
                style={{ color: '#ffffff' }}
              >
                <span className="text-white">Télécharger sur Google Play</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </a>
              <a
                href="#features"
                className="glass-panel inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Voir les fonctionnalités
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact}
                  className="glass-panel rounded-full px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>

          <div className="float-slow">
            <PhoneShell>
              <img
                src={homescreenImage}
                alt="Capture d'écran de l'accueil NaoCommuto"
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </PhoneShell>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-7xl mb-8 lg:mb-12 px-6 py-6 sm:px-8 lg:px-12"
        >
          <SectionIntro
            eyebrow="En temps réel"
            title="L’information utile, au moment où vous en avez besoin."
            text="Comparez les options utiles autour de vous et adaptez votre trajet selon le temps d’attente, la disponibilité des vélos ou les places restantes."
          />

          <div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {featureCards.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-8 lg:px-12">
          <div className="glass-panel overflow-hidden rounded-4xl p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div>
                <h2 className="mt-5 max-w-2xl font-['Space_Grotesk',sans-serif] text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
                  Passez moins de temps dans les transports
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  Optimisez vos déplacements à Nantes en prenant le meilleur moyen de transport pour ne pas perdre une minute.
                </p>
              </div>

              <div className="grid gap-4">
                <InsightCard
                  title="Données en temps réel"
                  text="Les informations sont mises à jour en direct, sans avoir à recharger la page."
                />
                <InsightCard
                  title="Interface intuitive"
                  text="Personnalisez votre écran avec les modes de transport que vous utilisez le plus."
                />
                <InsightCard
                  title="Multi-modal"
                  text="Que vous preniez le tram, le bus, le vélo ou la voiture, toutes les informations dont vous avez besoin sont à portée de main."
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer
        id="cta"
        className="mt-8 bg-slate-950 px-6 pb-10 pt-20 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-['Space_Grotesk',sans-serif] text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Prêt à optimiser vos déplacements ?
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400 sm:text-2xl sm:leading-11">
              Téléchargez NaoCommuto et ne perdez plus jamais de temps dans les
              transports à Nantes.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
              <div className="flex flex-col items-center gap-3">
                <div className="cursor-default opacity-45 select-none">
                  <img
                    src={appStoreBadgeFr}
                    alt="Télécharger sur l’App Store"
                    className="h-[3.45rem] w-auto scale-[1.12]"
                  />
                </div>
                <p className="text-sm text-slate-500">
                  L&apos;app arrive bientôt sur iOS.
                </p>
              </div>

              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:-translate-y-0.5"
              >
                <img
                  src={googlePlayBadgeFr}
                  alt="Disponible sur Google Play"
                  className="h-[3.45rem] w-auto"
                />
              </a>
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-slate-500 sm:text-base">
              Cette application est indépendante et n’est pas affiliée,
              sponsorisée ou approuvée par Nantes Métropole, Naolib ou toute
              autre entité publique.
            </p>
          </div>

          <div className="mt-20 border-t border-slate-800 pt-8">
            <div className="flex flex-col gap-6 text-slate-400 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-lg text-slate-400">
                © {currentYear} piRstone — <a href="https://pirstone.com" target='_blank' rel='noopener noreferrer' className="transition-colors hover:text-white">pirstone.com</a>
              </p>

              <nav aria-label="Liens de pied de page" className="flex flex-col gap-4 text-lg sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10">
                <a href="https://pirstone.com/nao-commuto/privacy" className="transition-colors hover:text-white">
                  Politique de confidentialité
                </a>
                <a href="https://pirstone.com/nao-commuto/cgu" className="transition-colors hover:text-white">
                  Conditions d&apos;utilisation
                </a>
                <a href="mailto:naocommuto@pirstone.com" className="transition-colors hover:text-white">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {text}
      </p>
    </div>
  )
}

function FeatureCard({ feature }) {
  const Icon = feature.icon

  return (
    <article className="glass-panel feature-card overflow-hidden rounded-4xl p-6 sm:p-7">
      <div
        className={`absolute inset-0 bg-linear-to-br ${feature.tone} opacity-90`}
      />
      <div className="relative flex h-full flex-col">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-medium text-slate-600">
          <Icon className="h-4 w-4" />
          {feature.label}
        </div>

        <h3 className="mt-5 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[1.8rem]">
          {feature.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {feature.description}
        </p>

        <div className="mt-6">
          {feature.id === 'live' && (
            <div className="overflow-hidden p-3 rounded-[1.75rem] border border-white/70 bg-white/75 shadow-[0_18px_50px_rgba(148,163,184,0.18)] backdrop-blur-xl">
              <img
                src={busStopImage}
                alt="Capture d'écran des prochains passages à un arrêt"
                className="h-full w-full object-cover"
              />
            </div>
          )}
          {feature.id === 'bicloo' && (
            <div className="overflow-hidden p-3 rounded-[1.75rem] border border-white/70 bg-white/75 shadow-[0_18px_50px_rgba(148,163,184,0.18)] backdrop-blur-xl">
              <img
                src={bikeJourneyImage}
                alt="Capture d'écran d'un trajet Bicloo"
                className="h-full w-full object-cover"
              />
            </div>
          )}
          {feature.id === 'parking' && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden p-3 rounded-[1.75rem] border border-white/70 bg-white/75 shadow-[0_18px_50px_rgba(148,163,184,0.18)] backdrop-blur-xl">
                <img
                  src={parkingOkImage}
                  alt="Capture d'écran d'un parking relais avec des places disponibles"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden p-3 rounded-[1.75rem] border border-white/70 bg-white/75 shadow-[0_18px_50px_rgba(148,163,184,0.18)] backdrop-blur-xl">
                <img
                  src={parkingFullImage}
                  alt="Capture d'écran d'un parking relais complet"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

function PhoneShell({ children }) {
  return (
    <div className="phone-shell mx-auto w-full max-w-84 rounded-[2.4rem] p-3 shadow-[0_30px_90px_rgba(148,163,184,0.28)]">
      <div className="phone-screen overflow-hidden rounded-4xl bg-[#f4f4f1]">
        {children}
      </div>
    </div>
  )
}

function InsightCard({ title, text }) {
  return (
    <div className="lift-card rounded-[1.6rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl">
      <p className="text-lg font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  )
}

export default App
