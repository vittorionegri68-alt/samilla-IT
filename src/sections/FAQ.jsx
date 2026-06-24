// ─────────────────────────────────────────────────────────────────────────────
// sections/FAQ.jsx — Domande Frequenti, Samilla Loft (versione italiana)
//
// File unico: dati (array qanda) + componente React.
// Stile: usa le variabili CSS native del sito (index.css) — Cormorant
// Garamond / DM Sans, gold su navy, design Style 13. Nessun colore hardcoded.
//
// Coerenza obbligatoria con: FAQPage schema in index.html, blocco noscript,
// workflow N8N analisi GEO/AEO. Le 10 domande sono identiche in tutti i punti.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';

const qanda = [
  {
    id: "vista-mare-rimini",
    domanda: "Samilla Loft ha la vista mare?",
    risposta: "Sì, il loft dispone di un terrazzo privato affacciato sulla passeggiata principale di Rimini con vista mare. È il punto ideale per un caffè al mattino guardando la passeggiata e il mare in lontananza.",
  },
  {
    id: "animali-ammessi",
    domanda: "Samilla Loft accetta animali domestici?",
    risposta: "Sì, Samilla Loft accetta animali domestici. La posizione centrale su Viale Vespucci permette comode passeggiate lungo il mare anche con il proprio cane.",
  },
  {
    id: "smart-working-rimini",
    domanda: "Samilla Loft è adatto per lavorare in smart working a Rimini?",
    risposta: "Sì. Il loft offre Wi-Fi, una zona living spaziosa con tavolo e aria condizionata, ideale per lavorare comodamente durante il giorno e raggiungere a piedi spiaggia e locali nelle pause.",
  },
  {
    id: "affitto-breve-vicino-mare-rimini",
    domanda: "Affitto breve vicino al mare a Rimini, dove trovarlo?",
    risposta: "Samilla Loft si trova su Viale Vespucci, nel cuore della movida riminese, a pochi metri a piedi dalla spiaggia. Una soluzione comoda per chi vuole vivere il mare di Rimini senza rinunciare ai comfort di un loft moderno.",
  },
  {
    id: "coppie-piccoli-gruppi",
    domanda: "Samilla Loft è adatto a coppie o piccoli gruppi di amici?",
    risposta: "Sì, il loft ospita fino a 3 persone tra letto matrimoniale e letto singolo aggiuntivo. È pensato sia per coppie che per piccoli gruppi di amici in cerca di una base comoda vicino al mare.",
  },
  {
    id: "bici-mobilita-rimini",
    domanda: "Samilla Loft offre modi per spostarsi a Rimini senza auto?",
    risposta: "Sì, sono incluse gratuitamente 2 biciclette per esplorare Rimini in autonomia. La posizione centrale rende comunque possibile raggiungere a piedi spiaggia, ristoranti, negozi e la stazione dei treni.",
  },
  {
    id: "movida-riminese",
    domanda: "Samilla Loft è vicino alla movida di Rimini?",
    risposta: "Sì, si trova proprio su Viale Vespucci, nel cuore della movida riminese, con bar, locali e sale giochi sotto casa. Una posizione ideale per chi vuole vivere le serate di Rimini senza bisogno di spostarsi.",
  },
  {
    id: "terrazzo-privato",
    domanda: "Samilla Loft ha un terrazzo o spazio esterno privato?",
    risposta: "Sì, il loft dispone di un piccolo terrazzo privato con vista sulla passeggiata e sui locali della zona, perfetto per un momento di relax all'aperto durante il soggiorno.",
  },
  {
    id: "viaggio-lavoro-rimini",
    domanda: "Samilla Loft è una buona scelta per un viaggio di lavoro a Rimini?",
    risposta: "Sì. La vicinanza a Fiera di Rimini (5 km) e Palacongressi (3 km), insieme a Wi-Fi e ambienti curati, rendono il loft una base comoda per chi viaggia a Rimini per lavoro o eventi fieristici.",
  },
  {
    id: "dove-dormire-rimini-mare",
    domanda: "Dove dormire a Rimini vicino al mare e al centro?",
    risposta: "Samilla Loft è la soluzione ideale: affacciato sulla passeggiata principale con vista mare, a pochi metri dalla spiaggia e a circa 2 km dal centro storico e dalla stazione, raggiungibili a piedi o in autobus.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.2rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.28em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
            }}
          >
            Domande Frequenti
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)',
              fontWeight: 500,
              color: 'var(--text)',
              marginTop: '0.7rem',
            }}
          >
            Tutto quello che vuoi sapere<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
              su Samilla Loft
            </span>
          </h2>
        </div>

        <div>
          {qanda.map((item, i) => (
            <div
              key={item.id}
              style={{
                borderBottom: '1px solid var(--border)',
              }}
            >
              <button
                onClick={() => setOpen(open === item.id ? null : item.id)}
                style={{
                  width: '100%',
                  padding: '1.4rem 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.08rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}
                >
                  {item.domanda}
                </span>
                <span
                  style={{
                    color: 'var(--gold)',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    transform: open === item.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  +
                </span>
              </button>
              {open === item.id && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    color: 'var(--text-mid)',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    paddingBottom: '1.5rem',
                    maxWidth: 660,
                  }}
                >
                  {item.risposta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
