import { loadContent } from '../lib/content';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { ArrowRightIcon, ZapIcon, ShieldIcon, CpuIcon } from 'lucide-react';

export default async function FeaturesPage() {
  const features = [
    {
      icon: <ZapIcon className="w-8 h-8" />,
      title: "Instant Deploy",
      description: "Push to git, and your site is live. No complex configuration required.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2000&auto=format&fit=crop"
    },
    {
      icon: <ShieldIcon className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security built into every layer of the platform.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop"
    },
    {
      icon: <CpuIcon className="w-8 h-8" />,
      title: "AI Powered",
      description: "Built-in AI agents optimize your workflow automatically.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="bg-dark-950 min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2000&auto=format&fit=crop"
            alt="Features Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-950" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <p className="text-primary-400 font-mono mb-6 tracking-widest uppercase animate-fade-in-up">
            System Capabilities
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter animate-fade-in-up delay-100">
            Built for the <span className="text-gradient-purple">Future</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
            Experience the next generation of development tools. 
            Designed for speed, security, and scalability.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-32 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="card-glass rounded-2xl p-8 backdrop-blur-xl bg-dark-900/80">
              <div className="w-16 h-16 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-6 border border-primary-500/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {feature.description}
              </p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section Placeholder */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Ready to <span className="text-gradient-cyan">Deploy</span>?
          </h2>
          
          <div className="relative mx-auto max-w-4xl aspect-video rounded-xl border border-white/10 bg-dark-900/50 overflow-hidden flex items-center justify-center group">
             <div className="text-center">
                <div className="text-6xl mb-4 opacity-50 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <p className="text-gray-400">Interactive Demo Module Loading...</p>
             </div>
             
             {/* Scanline effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent h-[20%] animate-scan" />
          </div>
        </div>
      </section>
    </main>
  );
}
