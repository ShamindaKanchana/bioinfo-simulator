/**
 * Needleman-Wunsch global sequence alignment algorithm.
 * Returns { matrix, traceback, aligned1, aligned2 }
 */
export function needlemanWunsch(seq1, seq2, matchScore = 1, mismatchScore = -1, gapPenalty = -2) {
  const m = seq1.length
  const n = seq2.length

  // Initialize scoring matrix and traceback matrix
  const M = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  const T = Array.from({ length: m + 1 }, () => Array(n + 1).fill(null))

  for (let i = 0; i <= m; i++) { M[i][0] = i * gapPenalty; T[i][0] = 'up' }
  for (let j = 0; j <= n; j++) { M[0][j] = j * gapPenalty; T[0][j] = 'left' }
  T[0][0] = null

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const sc = seq1[i - 1] === seq2[j - 1] ? matchScore : mismatchScore
      const diag = M[i - 1][j - 1] + sc
      const up   = M[i - 1][j] + gapPenalty
      const left = M[i][j - 1] + gapPenalty
      M[i][j] = Math.max(diag, up, left)
      T[i][j] = diag >= up && diag >= left ? 'diag' : up >= left ? 'up' : 'left'
    }
  }

  // Traceback
  let a1 = '', a2 = '', i = m, j = n
  const path = new Set()
  while (i > 0 || j > 0) {
    path.add(`${i},${j}`)
    if (i > 0 && j > 0 && T[i][j] === 'diag') { a1 = seq1[i-1] + a1; a2 = seq2[j-1] + a2; i--; j-- }
    else if (i > 0 && T[i][j] === 'up')         { a1 = seq1[i-1] + a1; a2 = '-' + a2; i-- }
    else                                          { a1 = '-' + a1; a2 = seq2[j-1] + a2; j-- }
  }
  path.add('0,0')

  return { matrix: M, traceback: path, aligned1: a1, aligned2: a2, finalScore: M[m][n] }
}

// Compute alignment statistics
export function alignmentStats(a1, a2) {
  let matches = 0, gaps = 0, mismatches = 0
  for (let k = 0; k < a1.length; k++) {
    if (a1[k] === '-' || a2[k] === '-') gaps++
    else if (a1[k] === a2[k]) matches++
    else mismatches++
  }
  const total = matches + mismatches
  const identity = total > 0 ? Math.round((matches / total) * 100) / 100 : 0
  return { matches, mismatches, gaps, identity }
}