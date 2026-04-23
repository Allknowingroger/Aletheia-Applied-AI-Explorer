/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Beaker, 
  Dna, 
  Zap, 
  Palette, 
  Music, 
  History, 
  ChevronRight, 
  ArrowRight,
  Globe,
  Cpu,
  Layers,
  Sparkles,
  Settings,
  Info,
  Terminal,
  Activity,
  Scan,
  Maximize2
} from 'lucide-react';

// --- Types ---

interface AppliedUse {
  id: string;
  title: string;
  category: string;
  categoryShort: string;
  method: string;
  process: string;
  impact: string;
  icon: any;
  color: string;
  accent: string;
  stats: { label: string; value: string }[];
  externalLinks: { label: string; url: string; type: 'paper' | 'tool' | 'org' }[];
}

const RESEARCH_DATA: AppliedUse[] = [
  {
    id: 'biology',
    title: 'Fundamental Biology & Medicine',
    category: 'Applied Uses in Scientific Research',
    categoryShort: 'BIO/MED',
    method: 'Protein Structure Prediction',
    process: 'Utilizing transformer-based neural architectures, these systems predict the intricate 3D folding patterns of proteins directly from their amino acid sequences. By reaching atomic-level accuracy, the model simulates the physical constraints of molecular biology, effectively bypassing the need for multi-year experimental sessions involving X-ray crystallography or cryo-electron microscopy.',
    impact: 'The primary outcome is a drastic reduction in the drug discovery lifecycle, enabling researchers to identify potential therapeutic targets for previously "undruggable" diseases. Additionally, this methodology is being applied to the bio-engineering of novel enzymes capable of de-polymerizing industrial plastics and understanding the structural hallmarks of neurodegenerative progression in Alzheimer\'s and Parkinson\'s.',
    icon: Dna,
    color: 'text-emerald-400',
    accent: 'emerald',
    stats: [
      { label: 'Precision', value: 'Atomic' },
      { label: 'Efficiency', value: '+300%' },
      { label: 'Focus', value: 'Folding' }
    ],
    externalLinks: [
      { label: 'AlphaFold Protein Database', url: 'https://alphafold.ebi.ac.uk/', type: 'tool' },
      { label: 'DeepMind Protein Paper', url: 'https://www.nature.com/articles/s41586-021-03819-2', type: 'paper' },
      { label: 'RCSB Protein Data Bank', url: 'https://www.rcsb.org/', type: 'org' }
    ]
  },
  {
    id: 'materials',
    title: 'Materials & Chemical Science',
    category: 'Applied Uses in Scientific Research',
    categoryShort: 'CHEM/MAT',
    method: 'Closed-Loop Autonomous Synthesis',
    process: 'This approach integrates Bayesian optimization with high-throughput robotic workcells to create "Self-Driving Labs." The AI actant formulates chemical hypotheses, executes synthesis protocols, and analyzes the results via integrated spectroscopy. This iterative loop operates without human intervention, continuously refining its probabilistic model of the chemical search space to locate optimal material compositions.',
    impact: 'The immediate impact is the rapid discovery of next-generation solid-state electrolytes for safer batteries, high-performance catalysts for hydrogen production, and semiconductor alloys with specific bandgaps for ultra-efficient solar energy conversion. These automated systems can explore more material combinations in a single month than a traditional laboratory could achieve in a decade.',
    icon: Beaker,
    color: 'text-blue-400',
    accent: 'blue',
    stats: [
      { label: 'Automation', value: 'Full' },
      { label: 'Discovery', value: 'Iterative' },
      { label: 'Cycle', value: 'Real-time' }
    ],
    externalLinks: [
      { label: 'Materials Project', url: 'https://materialsproject.org/', type: 'org' },
      { label: 'GNoME Materials Paper', url: 'https://www.nature.com/articles/s41586-023-06735-9', type: 'paper' },
      { label: 'Berkeley Lab A-Lab', url: 'https://a-lab.lbl.gov/', type: 'tool' }
    ]
  },
  {
    id: 'climate',
    title: 'Complexity Modeling in Climate & Physics',
    category: 'Applied Uses in Scientific Research',
    categoryShort: 'PHYS/CLI',
    method: 'Deep Learning Surrogates',
    process: 'Neural network surrogates are trained to emulate the outputs of computationally expensive numerical solvers used in fluid dynamics and weather forecasting. By learning the underlying manifold of the physical system, these models can produce high-fidelity predictions with a fraction of the computational overhead required by traditional Navier-Stokes integrations on supercomputers.',
    impact: 'This technology enables hyper-local extreme weather forecasting, providing early warning systems for flash floods and cyclones with unprecedented lead times. In the domain of clean energy, surrogate models are utilized for real-time control of plasma turbulence in fusion reactors, keeping the reaction stable by predicting and compensating for instabilities in milliseconds.',
    icon: Zap,
    color: 'text-amber-400',
    accent: 'amber',
    stats: [
      { label: 'Speed', value: '10,000x' },
      { label: 'Sim Detail', value: 'Ultra' },
      { label: 'Type', value: 'Surrogate' }
    ],
    externalLinks: [
      { label: 'ECMWF GraphCast', url: 'https://www.ecmwf.int/en/about/media-centre/news/2023/ecmwf-releases-graphcast-ai-weather-forecasts', type: 'tool' },
      { label: 'NVIDIA Earth-2', url: 'https://www.nvidia.com/en-us/high-performance-computing/earth-2/', type: 'org' },
      { label: 'Physics-Informed ML', url: 'https://maziarraissi.github.io/PINNs/', type: 'paper' }
    ]
  },
  {
    id: 'visual',
    title: 'Latent Space Exploration & Ideation',
    category: 'Applied Uses in Artistic Research',
    categoryShort: 'ART/VIS',
    method: 'Iterative Latent Space Navigation',
    process: 'Artists interact with the "Latent Space" of diffusion models—a multi-dimensional mathematical map of visual concepts. By strategically perturbing input prompts and guidance scales, researchers uncover novel visual vernaculars that exist between established styles. This process transforms "prompt engineering" into a sophisticated form of curated topological navigation within a model\'s learned dataset.',
    impact: 'The application significantly accelerates the pre-visualization phases of high-budget architectural and cinematic projects. It allows designers to test hundreds of formal hypotheses in hours rather than weeks, leading to more radical and structurally diverse aesthetic choices. Within the fine arts, it provides a tool for recursive stylistic interrogation and the generation of hybrid visual identities.',
    icon: Palette,
    color: 'text-purple-400',
    accent: 'purple',
    stats: [
      { label: 'Domain', value: 'Generative' },
      { label: 'Iterative', value: 'Visual' },
      { label: 'Logic', value: 'Latent' }
    ],
    externalLinks: [
      { label: 'Stability AI', url: 'https://stability.ai/', type: 'org' },
      { label: 'Midjourney Showcase', url: 'https://www.midjourney.com/showcase', type: 'tool' },
      { label: 'The Neural Aesthetic', url: 'https://ml4a.github.io/', type: 'org' }
    ]
  },
  {
    id: 'audio',
    title: 'Multimodal Composition & Timbre Transfer',
    category: 'Applied Uses in Artistic Research',
    categoryShort: 'ART/AUD',
    method: 'Neural Audio Synthesis',
    process: 'Generative audio architectures employ differentiable digital signal processing (DDSP) to decouple a sound\'s pitch and loudness from its "timbre" or texture. This allows for real-time timbre transfer, where the expressive nuances of one instrument can be mapped onto another. The process involves high-resolution analysis of spectral components to reconstruct audio with neural fidelity.',
    impact: 'This leads to the creation of immersive, adaptive soundtracks that respond dynamically to human movement or environmental data. In restorative musicology, it allows for the high-quality reconstruction of lost instrument voices from historical recordings. Furthermore, it empowers musicians to prototype entirely new acoustic signatures that are physically impossible to produce with traditional mechanical means.',
    icon: Music,
    color: 'text-rose-400',
    accent: 'rose',
    stats: [
      { label: 'Synthesis', value: 'Neural' },
      { label: 'Mapping', value: 'Direct' },
      { label: 'Feedback', value: 'Adaptive' }
    ],
    externalLinks: [
      { label: 'Google Magenta', url: 'https://magenta.tensorflow.org/', type: 'org' },
      { label: 'OpenAI Jukebox', url: 'https://openai.com/research/jukebox', type: 'tool' },
      { label: 'Suno AI', url: 'https://suno.com/', type: 'tool' }
    ]
  },
  {
    id: 'heritage',
    title: 'Cultural Heritage: Restorative Interpretation',
    category: 'Applied Uses in Artistic Research',
    categoryShort: 'CIV/HER',
    method: 'Digital Heritage Inpainting',
    process: 'Neural inpainting models are trained on vast corpuses of historical art and architecture to understand period-specific stylistic logic. When applied to damaged or incomplete artifacts, the AI analyzes surrounding geometric and chromatic patterns to propose statistically probable restorative fills. This is a rigorous process of probabilistic pattern matching constrained by historical accuracy.',
    impact: 'The primary impact is the "virtual restoration" of lost cultural treasures, such as the digital completion of destroyed Klimt murals or the enhancement of faded 15th-century manuscripts. This enables historians and the public to experience heritage in its original context without intrusive physical interventions on the delicate original artifacts, preserving the integrity of the surviving material.',
    icon: History,
    color: 'text-indigo-400',
    accent: 'indigo',
    stats: [
      { label: 'Logic', value: 'Inpaint' },
      { label: 'Data', value: 'Historical' },
      { label: 'Accuracy', value: 'High' }
    ],
    externalLinks: [
      { label: 'Google Arts & Culture', url: 'https://artsandculture.google.com/project/open-heritage', type: 'org' },
      { label: 'UNESCO Digital Heritage', url: 'https://en.unesco.org/themes/information-preservation/digital-heritage', type: 'org' },
      { label: 'AI in Art Restoration', url: 'https://www.art-recognition.com/', type: 'tool' }
    ]
  },
];

// --- Components ---

const ScanningBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <motion.div 
        animate={{ y: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-20"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-10" />
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 rounded bg-zinc-100 flex items-center justify-center border border-zinc-200 group overflow-hidden">
          <Cpu className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-t-cyan-500/50 border-r-transparent border-b-transparent border-l-transparent rounded"
          />
        </div>
        <div className="flex flex-col -gap-1">
          <span className="font-display font-black text-lg tracking-tighter text-zinc-900 uppercase italic">
            Aletheia
          </span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 leading-none">
            Research Explorer 2.40
          </span>
        </div>
      </div>
      <div className="hidden md:flex gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
        <a href="#science" className="hover:text-cyan-600 transition-colors flex items-center gap-2 group">
          <div className="w-1 h-1 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
           Scientific
        </a>
        <a href="#art" className="hover:text-purple-600 transition-colors flex items-center gap-2 group">
           <div className="w-1 h-1 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
           Artistic
        </a>
        <a href="#about" className="hover:text-zinc-900 transition-colors flex items-center gap-2 group">
           <div className="w-1 h-1 rounded-full bg-zinc-300 group-hover:scale-150 transition-transform" />
           Framework
        </a>
      </div>
    </div>
  </nav>
);

const SectionHeader = ({ title, subtitle, id, color }: { title: string; subtitle: string; id: string; color: string }) => (
  <div id={id} className="mb-14 pt-32">
    <div className="flex items-center gap-6 mb-3">
      <span className={`text-4xl md:text-5xl font-black italic uppercase tracking-tighter ${color.replace('400', '600')} drop-shadow-[0_0_15px_rgba(34,211,238,0.1)]`}>
        {title}
      </span>
      <div className="flex-grow h-[1px] bg-gradient-to-r from-zinc-200 to-transparent" />
      <span className="font-mono text-[10px] text-zinc-300 whitespace-nowrap hidden sm:inline">SECTION_ID: {id.toUpperCase()}</span>
    </div>
    <div className="flex items-center gap-3">
      <Terminal className={`w-3 h-3 ${color.replace('400', '600')} opacity-50`} />
      <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em]">{subtitle}</p>
    </div>
  </div>
);

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scienceResearch = RESEARCH_DATA.filter(d => d.category.includes('Scientific'));
  const artResearch = RESEARCH_DATA.filter(d => d.category.includes('Artistic'));

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-zinc-900 selection:bg-cyan-500/10 selection:text-cyan-700 font-sans antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[95vh] flex flex-col justify-center items-center overflow-hidden px-6">
        <ScanningBackground />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="relative z-10 text-center max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-zinc-200 mb-10 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-500">Applied Dossier: System Analysis</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-display font-black uppercase tracking-tighter italic mb-8 leading-[0.85] text-zinc-900">
            The <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 animate-gradient-x">Dual Horizon</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12 bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm backdrop-blur-md max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-600 mb-2" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">Research Mode</span>
              <span className="font-display font-bold text-lg uppercase italic text-cyan-600 tracking-tight">Acceleration</span>
            </div>
            <div className="h-10 w-[1px] bg-zinc-200 hidden md:block" />
            <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed text-center md:text-left max-w-sm">
              Synthesis of computational speed in the hard sciences and iterative formal discovery in the fine arts.
            </p>
            <div className="h-10 w-[1px] bg-zinc-200 hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <Scan className="w-5 h-5 text-purple-600 mb-2" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">Discovery Mode</span>
              <span className="font-display font-bold text-lg uppercase italic text-purple-600 tracking-tight">Restoration</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] animate-pulse" />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-48">
        
        {/* Scientific Section */}
        <SectionHeader 
          id="science"
          title="Computational Speed" 
          subtitle="Fundamental Scientific Acceleration" 
          color="text-cyan-400"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scienceResearch.map((item, idx) => (
            <ResearchCard key={item.id} item={item} index={idx} onClick={() => setSelectedId(item.id)} />
          ))}
        </div>

        {/* Artistic Section */}
        <SectionHeader 
          id="art"
          title="Creative Discovery" 
          subtitle="Formal and Restorative Research" 
          color="text-purple-400"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artResearch.map((item, idx) => (
            <ResearchCard key={item.id} item={item} index={idx} onClick={() => setSelectedId(item.id)} />
          ))}
        </div>

        {/* About / Framework Section */}
        <section id="about" className="mt-64 relative group">
          <div className="absolute inset-0 bg-white border border-zinc-200 rounded-[40px] -m-6 -z-10 group-hover:bg-zinc-50 transition-colors duration-700 shadow-sm" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="p-10">
              <div className="inline-flex items-center gap-3 text-zinc-300 font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
                <div className="w-12 h-[1px] bg-zinc-200" />
                Dossier_Framework
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black italic uppercase tracking-tighter mb-8 leading-[0.9] text-zinc-900">
                Categorization <br /> of Applied AI
              </h2>
              <p className="text-lg text-zinc-500 font-light leading-relaxed mb-10 max-w-xl">
                This database maps the four primary domains where Artificial Intelligence 
                transitions from abstract theory into concrete application. We analyze 
                how neural networks act as both a temporal accelerator for simulating physics 
                and a restorative lens for cultural heritage.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Domains', value: '4' },
                  { label: 'Processes', value: '6' },
                  { label: 'Impacts', value: 'Global' },
                  { label: 'Status', value: 'Active' },
                ].map(stat => (
                  <div key={stat.label} className="bg-zinc-100/50 border border-zinc-200 p-5 rounded-2xl">
                    <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-display font-bold italic tracking-tighter text-zinc-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative p-6 hidden lg:block">
              <div className="aspect-square bg-gradient-to-tr from-cyan-100/30 to-purple-100/30 border border-zinc-200 rounded-3xl overflow-hidden backdrop-blur-sm relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-dashed border-zinc-200 rounded-full animate-spin-slow" />
                  <div className="absolute w-40 h-40 border-2 border-dashed border-cyan-200 rounded-full animate-reverse-spin" />
                  <Globe className="w-20 h-20 text-zinc-200 absolute animate-pulse" />
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between font-mono text-[9px] text-zinc-300">
                  <span>LAT: 48.8566</span>
                  <span>LNG: 2.3522</span>
                  <span>ALT: 432M</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedId && (
          <Modal 
            item={RESEARCH_DATA.find(d => d.id === selectedId)!} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>

      <footer className="border-t border-zinc-200 py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6 opacity-40">
              <Cpu className="w-6 h-6 text-zinc-900" />
              <span className="font-display font-black text-xl italic tracking-tighter uppercase text-zinc-900">Aletheia</span>
            </div>
            <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] leading-relaxed">
              Synthesizing autonomous discovery systems <br />
              and neural restorative logic. <br />
              Categorization by Research Initiative © 2026
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {['AlphaFold', 'Inpainting', 'Surrogates', 'Latent Space'].map(tag => (
              <span key={tag} className="px-5 py-2 border border-zinc-200 bg-zinc-50 rounded-xl text-[10px] uppercase font-mono tracking-widest text-zinc-400 hover:text-zinc-600 transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ResearchCard({ item, index, onClick }: { item: AppliedUse; index: number; onClick: () => void }) {
  const Icon = item.icon;
  const accentColorClass = item.color.replace('400', '600');
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: "circOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className={`group relative p-10 bg-white border border-zinc-200 hover:border-${item.accent}-500/50 transition-all cursor-pointer overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-xl`}
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-32 h-32 stroke-[0.5px] text-zinc-900" />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
          <div className={`p-4 rounded-2xl bg-zinc-50 border border-zinc-100 ${accentColorClass} group-hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-all`}>
            <Icon className="w-7 h-7" />
          </div>
          <div className="flex gap-1.5 opacity-30">
            <span className="w-1 h-3 bg-zinc-300 block rounded-full" />
            <span className="w-1 h-5 bg-zinc-400 block rounded-full" />
            <span className="w-1 h-3 bg-zinc-300 block rounded-full" />
          </div>
        </div>
        
        <div className="mb-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-400 block mb-2">{item.categoryShort} // 0X</span>
          <h3 className="text-2xl md:text-3xl font-display font-black italic uppercase tracking-tighter leading-[0.9] text-zinc-900 group-hover:translate-x-2 transition-transform duration-500">
            {item.title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {item.stats.slice(0, 2).map(s => (
            <div key={s.label} className="px-3 py-1 bg-zinc-100 border border-zinc-200 font-mono text-[8px] uppercase tracking-widest text-zinc-500 uppercase rounded-full">
               {s.label}: {s.value}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-900 transition-colors">
            Access Data <Maximize2 className="w-3 h-3 group-hover:scale-125 transition-transform" />
          </button>
          <div className="h-[1px] w-12 bg-zinc-200 group-hover:w-20 transition-all duration-700" />
        </div>
      </div>

      {/* Interactive Background Glow */}
      <div className={`absolute inset-0 bg-radial-gradient from-${item.accent}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
    </motion.div>
  );
}

function Modal({ item, onClose }: { item: AppliedUse; onClose: () => void }) {
  const Icon = item.icon;
  const accentColorClass = item.color.replace('400', '600');
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-100/80 backdrop-blur-2xl"
      />
      
      <motion.div
        layoutId={item.id}
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 40 }}
        className="relative z-[110] w-full max-w-6xl bg-white border border-zinc-200 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Side Rail Overlay */}
        <div className="w-full md:w-2/5 p-12 bg-zinc-50 border-r border-zinc-200 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 p-8 opacity-5">
            <Icon className="w-64 h-64 text-zinc-900" />
          </div>
          
          <div className="relative z-10">
            <button 
              onClick={onClose}
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-300 hover:text-zinc-600 mb-20 transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" /> Back to Database
            </button>
            <div className={`mb-10 inline-block p-6 rounded-3xl bg-white border border-zinc-100 ${accentColorClass}`}>
              <Icon className="w-12 h-12" />
            </div>
            <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">{item.category}</p>
            <h2 className="text-5xl md:text-7xl font-display font-black italic uppercase tracking-tighter leading-[0.85] text-zinc-900 mb-8">
              {item.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {item.stats.map(s => (
                <div key={s.label} className="px-4 py-1.5 bg-white border border-zinc-200 rounded-xl">
                  <p className="text-[8px] font-mono uppercase tracking-widest text-zinc-400 mb-0.5">{s.label}</p>
                  <p className="text-sm font-bold tracking-tight text-zinc-900">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-20">
            <div className="flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-300">
              <Activity className="w-3 h-3" />
              RealTime_Sync: Active
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-12 flex flex-col justify-center gap-16 overflow-y-auto custom-scrollbar bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-600 font-mono text-[11px] uppercase tracking-[0.35em]">
                <Settings className="w-4 h-4" />
                <span>Structural Logic</span>
              </div>
              <div className="relative p-8 bg-zinc-50 border border-zinc-100 rounded-3xl">
                <div className="absolute top-4 left-4 font-mono text-[80px] text-zinc-200/50 leading-none select-none">01</div>
                <p className="text-zinc-600 leading-relaxed text-xl font-light italic relative z-10">
                  {item.process}
                </p>
              </div>
              <div className="pl-6 border-l border-cyan-500/30">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2">Primary Method</p>
                <p className="text-base text-cyan-600 font-display font-bold uppercase tracking-tight italic">{item.method}</p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-emerald-600 font-mono text-[11px] uppercase tracking-[0.35em]">
                <Globe className="w-4 h-4" />
                <span>Global Impact</span>
              </div>
              <div className="relative p-8 bg-zinc-50 border border-zinc-100 rounded-3xl">
                <div className="absolute top-4 left-4 font-mono text-[80px] text-zinc-200/50 leading-none select-none">02</div>
                <p className="text-zinc-600 leading-relaxed text-xl font-light relative z-10">
                  {item.impact}
                </p>
              </div>
              <div className="pl-6 border-l border-emerald-500/30">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2">Core Outcome</p>
                <p className="text-base text-emerald-600 font-display font-bold uppercase tracking-tight italic">Applied Solution</p>
              </div>
            </section>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-3 text-zinc-300 font-mono text-[10px] uppercase tracking-[0.35em] mb-6">
              <div className="w-8 h-[1px] bg-zinc-200" />
              Technical References
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {item.externalLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between p-4 bg-zinc-50 border border-zinc-100 rounded-2xl hover:bg-zinc-100 hover:border-zinc-300 transition-all shadow-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-400 mb-1">{link.type}</span>
                    <span className="text-sm font-medium text-zinc-600 group-hover/link:text-zinc-900 transition-colors uppercase tracking-tight">{link.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover/link:translate-x-1 group-hover/link:text-zinc-900 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-12 border-t border-zinc-100">
             <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-100 flex items-center justify-center shadow-sm">
                      <Layers className="w-4 h-4 text-zinc-300" />
                    </div>
                  ))}
                </div>
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-300">Data Points Scanned</p>
             </div>
             <button 
              onClick={onClose}
              className="px-10 py-4 bg-zinc-900 text-white font-mono text-[10px] uppercase font-black tracking-[0.3em] rounded-[1.2rem] hover:bg-cyan-600 transition-all hover:scale-105 shadow-md shadow-zinc-200"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

