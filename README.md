# Bioinformatics Simulator

An interactive web application for learning and exploring core bioinformatics concepts through hands-on simulations. Built with React and Vite for a modern, responsive experience.

## 🌟 Features

### Three Interactive Simulation Tabs

1. **Codon → Amino Acid Translator**
   - Input RNA sequences (AUGC nucleotides)
   - Real-time translation to amino acids using the standard genetic code
   - Color-coded codon boxes showing amino acid properties
   - Highlights start (AUG) and stop codons

2. **Central Dogma Simulator**
   - Visualize DNA transcription and complementary strand formation
   - Input DNA template strand (3' → 5')
   - See the coding strand (5' → 3') and resulting mRNA
   - Color-coded nucleotide visualization

3. **Sequence Alignment (Needleman-Wunsch)**
   - Global sequence alignment using the Needleman-Wunsch algorithm
   - Customizable scoring parameters (match, mismatch, gap penalty)
   - Interactive scoring matrix with traceback path visualization
   - Alignment statistics: identity percentage, matches, mismatches, gaps

## 🚀 Technologies Used

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite
- **Styling**: CSS with modern design patterns
- **Algorithms**: Custom implementations of bioinformatics algorithms

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShamindaKanchana/bioinfo-simulator.git
   cd bioinfo-simulator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Project Structure

```
bioinfo-simulator/
├── index.html                 # HTML entry point
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
├── src/
│   ├── main.jsx              # React app entry point
│   ├── App.jsx               # Main app component with tab navigation
│   ├── App.css               # Global styles and responsive design
│   ├── components/           # React components
│   │   ├── TabNav.jsx        # Tab navigation component
│   │   ├── CodonTranslator.jsx    # Codon translation interface
│   │   ├── CentralDogma.jsx       # Central dogma simulation
│   │   └── SequenceAlignment.jsx  # Sequence alignment tool
│   ├── data/
│   │   └── codonTable.js     # Genetic code mapping and colors
│   └── utils/
│       ├── sequenceUtils.js  # DNA/RNA sequence utilities
│       └── needlemanWunsch.js # Alignment algorithm implementation
└── README.md
```

## 🎯 Usage

### Codon Translation
- Enter RNA sequence in the text area (use AUGC nucleotides)
- Click "Translate" to see amino acid sequence
- Each codon is displayed in a colored box representing its amino acid

### Central Dogma
- Enter DNA template strand (3' → 5' direction)
- Click "Simulate" to see transcription
- View the complementary coding strand and mRNA product

### Sequence Alignment
- Enter two sequences to align
- Adjust scoring parameters if desired
- Click "Align Sequences" to run the algorithm
- View alignment results, statistics, and scoring matrix

## 🔬 Educational Value

This simulator is designed for:
- Students learning molecular biology
- Researchers needing quick sequence analysis
- Educators demonstrating bioinformatics concepts
- Anyone interested in genetics and sequence analysis

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ for bioinformatics education*
