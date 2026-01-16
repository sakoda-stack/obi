
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, X, ChevronUp, Bot, User, Sparkles } from 'lucide-react';
import { fetchAIResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'LEBEN AIコンシェルジュです。提携業務や制度に関するご相談を承ります。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await fetchAIResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-12 right-12 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-[#121212] w-[380px] h-[550px] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-gold/20 mb-6 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          {/* Header */}
          <div className="bg-black p-6 flex justify-between items-center text-white border-b border-gold/10">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gold/10 rounded-sm">
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block font-brand text-lg font-bold tracking-widest uppercase">Concierge</span>
                <span className="text-[9px] font-black text-gold uppercase tracking-widest">AI Support</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-black">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-sm text-[13px] leading-relaxed tracking-wide ${
                  msg.role === 'user' 
                    ? 'bg-gold text-black font-bold shadow-xl shadow-gold/10' 
                    : 'bg-[#1E1E1E] border border-white/5 text-white/80'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1E1E1E] p-5 rounded-sm">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-black border-t border-gold/10">
            <div className="flex items-center gap-3 bg-[#1E1E1E] p-1 rounded-sm border border-white/10 focus-within:border-gold transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message concierge..."
                className="flex-1 text-sm bg-transparent px-4 py-3 focus:outline-none placeholder:text-white/20 text-white"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gold text-black p-3 rounded-sm hover:bg-gold-light transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[8px] text-center text-white/20 mt-4 font-black tracking-[0.3em] uppercase">Powered by Gemini AI Technology</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative"
      >
        <div className="absolute -inset-1 bg-gold rounded-sm blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-gold text-black px-10 py-5 rounded-sm shadow-2xl flex items-center gap-5 transition-all transform group-hover:-translate-y-1 active:scale-95 border border-gold-light/20">
          <MessageSquare className="w-6 h-6" />
          <span className="font-black text-[10px] tracking-[0.3em] uppercase hidden sm:inline">Concierge Support</span>
          <ChevronUp className={`w-4 h-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
    </div>
  );
};

export default ChatBot;
