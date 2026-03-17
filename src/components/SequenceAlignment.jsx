import { useState } from 'react'
import { needlemanWunsch, alignmentStats } from '../utils/needlemanWunsch.js'

export default function SequenceAlignment() {
  const [seq1, setSeq1] = useState('ATCG')
  const [seq2, setSeq2] = useState('ATCG')
  const [matchScore, setMatchScore] = useState(1)
  const [mismatchScore, setMismatchScore] = useState(-1)
  const [gapPenalty, setGapPenalty] = useState(-2)
  const [result, setResult] = useState(null)

  const align = () => {
    const res = needlemanWunsch(seq1.toUpperCase(), seq2.toUpperCase(), matchScore, mismatchScore, gapPenalty)
    const stats = alignmentStats(res.aligned1, res.aligned2)
    setResult({ ...res, stats })
  }

  return (
    <div>
      <h2 className="panel-title">Sequence Alignment (Needleman-Wunsch)</h2>
      <div className="inline-row">
        <div className="inline-field">
          <div className="field-label">Sequence 1</div>
          <input type="text" value={seq1} onChange={e => setSeq1(e.target.value)} />
        </div>
        <div className="inline-field">
          <div className="field-label">Sequence 2</div>
          <input type="text" value={seq2} onChange={e => setSeq2(e.target.value)} />
        </div>
      </div>
      <div className="inline-row">
        <div className="inline-field">
          <div className="field-label">Match Score</div>
          <input type="number" value={matchScore} onChange={e => setMatchScore(+e.target.value)} />
        </div>
        <div className="inline-field">
          <div className="field-label">Mismatch Score</div>
          <input type="number" value={mismatchScore} onChange={e => setMismatchScore(+e.target.value)} />
        </div>
        <div className="inline-field">
          <div className="field-label">Gap Penalty</div>
          <input type="number" value={gapPenalty} onChange={e => setGapPenalty(+e.target.value)} />
        </div>
      </div>
      <button className="run-btn" onClick={align}>Align Sequences</button>
      {result && (
        <div>
          <div className="score-row">
            <div className="score-card"><strong>Score:</strong> {result.finalScore}</div>
            <div className="score-card"><strong>Identity:</strong> {result.stats.identity}%</div>
            <div className="score-card"><strong>Matches:</strong> {result.stats.matches}</div>
            <div className="score-card"><strong>Mismatches:</strong> {result.stats.mismatches}</div>
            <div className="score-card"><strong>Gaps:</strong> {result.stats.gaps}</div>
          </div>
          <div className="step-label">Aligned Sequences</div>
          <div className="nuc-row">
            {result.aligned1.split('').map((n, i) => (
              <span key={i} className={`nuc ${n === '-' ? 'nuc-gap' : result.aligned2[i] === n ? 'nuc-match' : 'nuc-mismatch'}`}>{n}</span>
            ))}
          </div>
          <div className="nuc-row">
            {result.aligned2.split('').map((n, i) => (
              <span key={i} className={`nuc ${n === '-' ? 'nuc-gap' : result.aligned1[i] === n ? 'nuc-match' : 'nuc-mismatch'}`}>{n}</span>
            ))}
          </div>
          <div className="matrix-wrap">
            <table className="matrix-table">
              <tbody>
                {result.matrix.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={result.traceback.has(`${i},${j}`) ? 'path' : i === 0 || j === 0 ? 'seq-header' : ''}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}