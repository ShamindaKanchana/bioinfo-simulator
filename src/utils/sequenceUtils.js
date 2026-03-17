// Converts DNA to RNA (T → U)
export function dnaToRna(dna) {
  return dna.toUpperCase().replace(/T/g, 'U')
}

// Returns the complement of a DNA nucleotide
export function complement(nuc) {
  return { A: 'T', T: 'A', G: 'C', C: 'G' }[nuc] || nuc
}

// Returns the RNA complement of a DNA nucleotide (used in transcription)
export function rnaComplement(nuc) {
  return { A: 'U', T: 'A', G: 'C', C: 'G' }[nuc] || nuc
}

// Builds the coding strand from a template strand
export function buildCodingStrand(template) {
  return template.toUpperCase().split('').map(complement).join('')
}

// Transcribes a DNA template strand into mRNA
export function transcribe(template) {
  return template.toUpperCase().split('').map(rnaComplement).join('')
}

// Sanitizes input — keeps only valid nucleotide characters
export function sanitizeDna(input) {
  return input.toUpperCase().replace(/[^ATGC]/g, '')
}

export function sanitizeRna(input) {
  return input.toUpperCase().replace(/[^AUGC]/g, '')
}