// Maps RNA codons (3 letters) to amino acid abbreviations
export const CODON_TABLE = {
  UUU:'Phe', UUC:'Phe', UUA:'Leu', UUG:'Leu',
  CUU:'Leu', CUC:'Leu', CUA:'Leu', CUG:'Leu',
  AUU:'Ile', AUC:'Ile', AUA:'Ile', AUG:'Met',
  GUU:'Val', GUC:'Val', GUA:'Val', GUG:'Val',
  UCU:'Ser', UCC:'Ser', UCA:'Ser', UCG:'Ser',
  CCU:'Pro', CCC:'Pro', CCA:'Pro', CCG:'Pro',
  ACU:'Thr', ACC:'Thr', ACA:'Thr', ACG:'Thr',
  GCU:'Ala', GCC:'Ala', GCA:'Ala', GCG:'Ala',
  UAU:'Tyr', UAC:'Tyr', UAA:'Stop', UAG:'Stop',
  CAU:'His', CAC:'His', CAA:'Gln', CAG:'Gln',
  AAU:'Asn', AAC:'Asn', AAA:'Lys', AAG:'Lys',
  GAU:'Asp', GAC:'Asp', GAA:'Glu', GAG:'Glu',
  UGU:'Cys', UGC:'Cys', UGA:'Stop', UGG:'Trp',
  CGU:'Arg', CGC:'Arg', CGA:'Arg', CGG:'Arg',
  AGU:'Ser', AGC:'Ser', AGA:'Arg', AGG:'Arg',
  GGU:'Gly', GGC:'Gly', GGA:'Gly', GGG:'Gly',
}

// Color map: amino acid → { bg, text }
export const AA_COLORS = {
  Stop:    { bg: '#fee2e2', text: '#991b1b' },
  Met:     { bg: '#d1fae5', text: '#065f46' },
  Phe:     { bg: '#ede9fe', text: '#4c1d95' },
  Leu:     { bg: '#ede9fe', text: '#4c1d95' },
  Ile:     { bg: '#ede9fe', text: '#4c1d95' },
  Val:     { bg: '#ede9fe', text: '#4c1d95' },
  Ser:     { bg: '#d1fae5', text: '#065f46' },
  Pro:     { bg: '#fef3c7', text: '#92400e' },
  Thr:     { bg: '#d1fae5', text: '#065f46' },
  Ala:     { bg: '#f3f4f6', text: '#374151' },
  Tyr:     { bg: '#fde8d8', text: '#7c2d12' },
  His:     { bg: '#dbeafe', text: '#1e40af' },
  Gln:     { bg: '#dbeafe', text: '#1e40af' },
  Asn:     { bg: '#dbeafe', text: '#1e40af' },
  Lys:     { bg: '#dbeafe', text: '#1e40af' },
  Asp:     { bg: '#fce7f3', text: '#9d174d' },
  Glu:     { bg: '#fce7f3', text: '#9d174d' },
  Cys:     { bg: '#fef3c7', text: '#92400e' },
  Trp:     { bg: '#ede9fe', text: '#4c1d95' },
  Arg:     { bg: '#dbeafe', text: '#1e40af' },
  Gly:     { bg: '#f3f4f6', text: '#374151' },
}

export const isStartCodon = (codon) => codon === 'AUG'
export const isStopCodon  = (codon) => ['UAA','UAG','UGA'].includes(codon)