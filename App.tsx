
import React, { useState } from 'react';
import { 
  CheckCircle, 
  Target, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  Zap, 
  Leaf, 
  Dumbbell, 
  Brain, 
  ChevronUp, 
  ShieldCheck 
} from 'lucide-react';

const HOTMART_LINK = "https://go.hotmart.com/B103166329T?ap=9820";

const FeatureCard = ({ title, description, icon: Icon }: any) => (
  <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-1 group">
    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      title: "Cardápios Inteligentes",
      description: "Protocolo nutricional focado em densidade nutritiva para queimar gordura sem passar fome.",
      icon: Leaf
    },
    {
      title: "Treinos Express",
      description: "Séries de 15 minutos que podem ser feitas em qualquer lugar para acelerar o metabolismo.",
      icon: Dumbbell
    },
    {
      title: "Mentalidade Blindada",
      description: "Técnicas de controle de ansiedade e compulsão alimentar para não desistir no meio do caminho.",
      icon: Brain
    },
    {
      title: "Resultados em 24 Dias",
      description: "Um cronograma passo a passo desenhado para gerar transformação visível em menos de um mês.",
      icon: Target
    }
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      result: "-6kg em 24 dias",
      text: "O método mudou minha forma de ver a comida. Não é dieta, é um estilo de vida prático e sustentável!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Ricardo Gomes",
      result: "-5.5kg em 24 dias",
      text: "Achei que não conseguiria pelo cansaço do dia a dia, mas o passo a passo diário torna tudo muito simples.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Julia Costa",
      result: "-4.2kg em 24 dias",
      text: "As receitas são deliciosas e os exercícios curtos salvaram minha rotina corrida.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "Preciso ir à academia?",
      answer: "De forma alguma! Os treinos foram desenhados para serem feitos no conforto da sua casa, utilizando apenas o peso do corpo."
    },
    {
      question: "Vou precisar comprar suplementos caros?",
      answer: "Não. O protocolo é baseado em comida de verdade que você encontra em qualquer supermercado. Focamos no que realmente funciona."
    },
    {
      question: "Como recebo o acesso?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe os dados de acesso no seu e-mail para baixar o guia e começar agora mesmo."
    },
    {
      question: "Tenho alguma garantia?",
      answer: "Sim! Oferecemos uma garantia incondicional de 7 dias. Se você não gostar do conteúdo, devolvemos 100% do seu investimento."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">24</div>
            <span className="font-bold text-xl tracking-tight text-white">DESAFIO 24 DIAS</span>
          </div>
          <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/20">
            Começar Agora
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-soft-gradient relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-purple-500/20">
            <Zap size={16} className="fill-purple-500" />
            <span>Vagas limitadas para a nova turma</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight text-white tracking-tight">
            Transforme seu corpo em <br className="hidden md:block" />
            <span className="gradient-text">24 dias</span> sem passar fome
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Um protocolo completo com cardápios aceleradores, exercícios rápidos e suporte mental para você eliminar gordura de forma definitiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={HOTMART_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-xl shadow-purple-900/40 flex items-center justify-center gap-2"
            >
              QUERO MINHA TRANSFORMAÇÃO <ArrowRight size={20} />
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 md:gap-12 flex-wrap opacity-40">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-purple-500" />
              <span className="font-medium text-white text-sm">Acesso Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-purple-500" />
              <span className="font-medium text-white text-sm">Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-purple-500" />
              <span className="font-medium text-white text-sm">Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O que você vai encontrar</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Tudo o que você precisa para sair do zero e chegar ao seu peso ideal com um método comprovado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Quem já transformou</h2>
            <p className="text-slate-400">Histórias reais de pessoas que seguiram o método.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 flex flex-col items-center text-center shadow-lg hover:border-purple-500/30 transition-colors">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-6 border-4 border-slate-800 shadow-xl" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-purple-500 text-purple-500" />)}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-purple-400 font-semibold text-sm mt-1">{t.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-100 hover:bg-slate-800/50 transition-colors"
                >
                  {faq.question}
                  {openFaq === idx ? <ChevronUp size={20} className="text-purple-500" /> : <ChevronDown size={20} className="text-slate-500" />}
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 py-5 border-t border-slate-800' : 'max-h-0'}`}>
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="preço" className="py-24 bg-purple-950 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-white">
          <Target size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Comece sua transformação hoje</h2>
          <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 shadow-2xl border border-purple-500/20 text-white mb-10 max-w-lg mx-auto transform hover:scale-[1.02] transition-transform">
            <p className="text-purple-400 font-semibold mb-2 uppercase tracking-widest text-sm">OFERTA DE LANÇAMENTO</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-slate-500 line-through text-2xl">R$ 250</span>
              <span className="text-5xl font-black text-purple-500">R$ 67,00</span>
            </div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle size={20} className="text-purple-500 flex-shrink-0" />
                <span className="font-medium">Protocolo Completo de 24 Dias</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={20} className="text-purple-500 flex-shrink-0" />
                <span className="font-medium">Lista de Compras Inteligente</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={20} className="text-purple-500 flex-shrink-0" />
                <span className="font-medium">Guia de Exercícios em Casa</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={20} className="text-purple-500 flex-shrink-0" />
                <span className="font-medium">Manual da Mente Magra</span>
              </li>
            </ul>
            <a 
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-purple-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-900/40 flex items-center justify-center gap-2"
            >
              COMPRAR AGORA <ArrowRight size={24} />
            </a>
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-sm">
              <ShieldCheck size={16} />
              <span>Compra 100% segura e criptografada</span>
            </div>
          </div>
          <p className="text-purple-300 text-sm max-w-md mx-auto">
            Após o pagamento você terá acesso imediato ao material completo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">24</div>
            <span className="font-bold text-lg text-white">DESAFIO 24 DIAS</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">&copy; 2024 Desafio 24 Dias. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-slate-500 text-xs font-medium">
            <a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contato</a>
          </div>
          <p className="mt-10 text-[10px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            *Os resultados podem variar de pessoa para pessoa. Consulte sempre um médico ou nutricionista antes de iniciar qualquer mudança drástica na sua rotina de alimentação ou exercícios.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
