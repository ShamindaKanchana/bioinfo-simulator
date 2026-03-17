import { useState } from 'react'
import TabNav from './components/TabNav'
import CodonTranslator from './components/CodonTranslator'
import CentralDogma from './components/CentralDogma'
import SequenceAlignment from './components/SequenceAlignment'

const TABS = [
  { id: 'codon', label: 'Codon → Amino Acid' },
  { id: 'dogma', label: 'Central Dogma' },
  { id: 'align', label: 'Sequence Alignment' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('codon')

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Bioinformatics Simulator</h1>
        <p className="subtitle">Interactive tools for learning sequence biology</p>
      </header>
      <TabNav tabs={TABS} active={activeTab} onChange={setActiveTab} />
      <main className="app-main">
        {activeTab === 'codon' && <CodonTranslator />}
        {activeTab === 'dogma' && <CentralDogma />}
        {activeTab === 'align' && <SequenceAlignment />}
      </main>
    </div>
  )
}