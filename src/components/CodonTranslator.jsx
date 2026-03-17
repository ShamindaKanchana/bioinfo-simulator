import { useState } from 'react'
import { CODON_TABLE, AA_COLORS, isStartCodon, isStopCodon } from '../data/codonTable.js'

export default function CodonTranslator() {
  const [rna, setRna] = useState('AUGUUUCGC')
  const [result, setResult] = useState(null)

  const translate = () => {
    const cleanRna = rna.toUpperCase().replace(/[^AUGC]/g, '')
    const codons = []
    for (let i = 0; i < cleanRna.length; i += 3) {
      const codon = cleanRna.slice(i, i + 3)
      if (codon.length === 3) {
        const aa = CODON_TABLE[codon] || '?'
        codons.push({ codon, aa, isStart: isStartCodon(codon), isStop: isStopCodon(codon) })
      }
    }
    setResult({ input: cleanRna, codons })
  }

  return (
    <div>
      <h2 className="panel-title">Codon → Amino Acid Translator</h2>
      <div className="field-label">RNA Sequence (AUGC)</div>
      <textarea
        rows={3}
        value={rna}
        onChange={e => setRna(e.target.value)}
        placeholder="Enter RNA sequence..."
      />
      <button className="run-btn" onClick={translate}>Translate</button>
      {result && (
        <div className="info-box">
          <div className="codon-grid">
            {result.codons.map((item, i) => {
              const colors = AA_COLORS[item.aa] || { bg: '#f3f4f6', text: '#374151' }
              return (
                <div
                  key={i}
                  className="codon-box"
                  style={{ background: colors.bg, color: colors.text }}
                >
                  <div className="codon-letters">{item.codon}</div>
                  <div className="codon-aa">{item.aa}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}