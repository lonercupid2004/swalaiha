import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'

const chapters = [
  {
    title: '🌸 Welcome Screen',
    subtitle: 'Bismillah — A special journey for Swalaiha begins...',
    body: 'In the name of Allah, the Most Merciful, the Most Compassionate. This page is made with love, gratitude, and sincere dua.',
    accent: 'Alhamdulillah for your life, your smile, and your light.'
  },
  {
    title: '✨ Chapter 1: A Gift from Allah',
    subtitle: 'A soul sent as a blessing',
    body: 'Your birth was a mercy in our family story. Every moment with you reminds us to be grateful to Allah for the gifts we can never fully count.',
    accent: '“If you are grateful, I will surely increase you.” (Quran 14:7)'
  },
  {
    title: '💕 Chapter 2: Beautiful Soul',
    subtitle: 'Kindness written into your heart',
    body: 'Your gentle words, your caring heart, and your beautiful smile make everyone around you feel safe and loved. MashaAllah, your character is a treasure.',
    accent: 'From your loving sibling: you make ordinary days feel brighter.'
  },
  {
    title: '🌙 Chapter 3: Duas for You',
    subtitle: 'May your life be filled with barakah',
    body: 'اللهم ارزقها الصحة والعافية، وزدها إيمانًا ونورًا، وافتح لها أبواب السعادة والنجاح.',
    accent: 'O Allah, grant her health, strengthen her faith, and fill her life with happiness and success.'
  },
  {
    title: '🎂 Chapter 4: Birthday Moment',
    subtitle: 'Happy Birthday, dear Swalaiha',
    body: 'Today we celebrate not only your birthday, but the blessing of your presence. May every year bring you closer to Allah and to everything good.',
    accent: 'Soft smiles, warm prayers, and heartfelt love for you today.'
  },
  {
    title: '🤲 Chapter 5: Future & Blessings',
    subtitle: 'Dunya and akhirah success',
    body: 'May Allah write for you a future full of purpose, halal joy, beneficial knowledge, righteous companions, and the highest place in Jannah.',
    accent: 'Your loving sibling will always pray for your peace, strength, and beautiful destiny.'
  }
]

const floatingIcons = ['⭐', '💖', '🌙', '✨', '🕊️', '🌸']

export default function App() {
  const [audioOn, setAudioOn] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const moonX = useTransform(scrollYProgress, [0, 1], ['0%', '85%'])

  const decorations = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: `${(index * 97) % 100}%`,
        delay: (index % 6) * 0.7,
        icon: floatingIcons[index % floatingIcons.length]
      })),
    []
  )

  return (
    <main className="relative h-screen overflow-hidden pattern-bg">
      <motion.div style={{ x: moonX }} className="absolute top-3 z-20 text-3xl" aria-hidden>
        🌙
      </motion.div>

      <button
        type="button"
        onClick={() => setAudioOn((prev) => !prev)}
        className="absolute right-4 top-4 z-30 rounded-full border border-gold/50 bg-white/85 px-4 py-2 text-sm font-semibold shadow-glow backdrop-blur"
      >
        {audioOn ? 'Nasheed ambience: ON' : 'Nasheed ambience: OFF'}
      </button>

      {decorations.map((item) => (
        <motion.div
          key={item.id}
          className="pointer-events-none absolute text-xl opacity-60"
          style={{ left: item.left, top: '-10%' }}
          animate={{ y: ['0vh', '120vh'], opacity: [0, 0.7, 0] }}
          transition={{ repeat: Infinity, duration: 14, delay: item.delay, ease: 'linear' }}
          aria-hidden
        >
          {item.icon}
        </motion.div>
      ))}

      <section
        ref={containerRef}
        className="islamic-grid relative z-10 h-screen snap-y snap-mandatory overflow-y-auto px-4 pb-24 pt-20 sm:px-8"
      >
        {chapters.map((chapter, index) => (
          <motion.article
            key={chapter.title}
            className="mx-auto mb-8 flex min-h-[82vh] w-full max-w-3xl snap-start items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full rounded-3xl border border-white/65 bg-white/70 p-6 shadow-xl backdrop-blur md:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">Story Scene {index + 1}</p>
              <h1 className="font-heading text-3xl leading-tight text-slate-800 md:text-5xl">{chapter.title}</h1>
              <p className="mt-3 text-lg text-slate-600 md:text-xl">{chapter.subtitle}</p>
              <p className="mt-5 text-base leading-8 md:text-lg">{chapter.body}</p>
              <p className="mt-5 rounded-2xl bg-lavender/60 p-4 text-sm italic text-slate-700 md:text-base">
                {chapter.accent}
              </p>
            </div>
          </motion.article>
        ))}

        <motion.article
          className="mx-auto flex min-h-[82vh] w-full max-w-3xl snap-start items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.45 }}
        >
          <div className="w-full rounded-3xl border border-gold/40 bg-white/75 p-6 text-center shadow-2xl backdrop-blur md:p-12">
            <h2 className="font-arabic text-4xl text-gold md:text-6xl">سولايحة</h2>
            <h3 className="mt-3 font-heading text-3xl md:text-5xl">💌 Final Screen</h3>
            <p className="mt-4 text-lg md:text-2xl">I love you for the sake of Allah.</p>
            <p className="mt-3 text-slate-600">May your heart always say Alhamdulillah and your life always reflect MashaAllah.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="rounded-full bg-gradient-to-r from-gold to-amber-300 px-6 py-3 font-semibold text-white shadow-glow"
              >
                Replay Journey
              </button>
              <a
                href="mailto:?subject=Birthday%20Love%20for%20Swalaiha&body=May%20Allah%20bless%20you%20always%2C%20dear%20Swalaiha!"
                className="rounded-full border border-gold/60 bg-white px-6 py-3 font-semibold text-slate-700"
              >
                Send a Message
              </a>
            </div>
          </div>
        </motion.article>
      </section>
    </main>
  )
}
