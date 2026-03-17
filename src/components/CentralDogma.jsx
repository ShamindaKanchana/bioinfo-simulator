import { useState } from 'react'
import { dnaToRna, buildCodingStrand, transcribe, sanitizeDna } from '../utils/sequenceUtils.js'

export default function CentralDogma() {
  const [dnaTemplate, setDnaTemplate] = useState('ATCGATCG')
  const [result, setResult] = useState(null)

  const simulate = () => {
    const clean = sanitizeDna(dnaTemplate)
    const coding = buildCodingStrand(clean)
    const mrna = transcribe(clean)
    setResult({ template: clean, coding, mrna })
  }

  return (
    <div>
      <h2 className="panel-title">Central Dogma Simulator</h2>
      <div className="field-label">DNA Template Strand (3' → 5')</div>
      <textarea
        rows={2}
        value={dnaTemplate}
        onChange={e => setDnaTemplate(e.target.value)}
        placeholder="Enter DNA template..."
      />
      <button className="run-btn" onClick={simulate}>Simulate</button>
      {result && (
        <div>
          <div className="step-label">1. DNA Template (3' → 5')</div>
          <div className="nuc-row">
            {result.template.split('').map((n, i) => (
              <span key={i} className={`nuc nuc-${n}`}>{n}</span>
            ))}
          </div>
          <div className="step-label">2. DNA Coding Strand (5' → 3')</div>
          <div className="nuc-row">
            {result.coding.split('').map((n, i) => (
              <span key={i} className={`nuc nuc-${n}`}>{n}</span>
            ))}
          </div>
          <div className="step-label">3. mRNA (5' → 3')</div>
          <div className="nuc-row">
            {result.mrna.split('').map((n, i) => (
              <span key={i} className={`nuc nuc-${n === 'U' ? 'U' : n}`}>{n}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}