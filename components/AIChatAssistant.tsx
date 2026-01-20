
import React, { useState, useRef, useEffect } from 'react';
import { chatWithDexaBot } from '../services/geminiService';

export const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "Namaste! I'm Dexa. How can I help you today? Are you interested in Basic Money Skills, AI & Python, Communication, or Logical Aptitude courses for your child?"}
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

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setIsLoading(true);

    const botResponse = await chatWithDexaBot([], userMsg);
    setMessages(prev => [...prev, {role: 'bot', text: botResponse}]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-amber-500 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl z-[100] transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-[100] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-amber-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">D</div>
              <div>
                <h4 className="font-bold text-sm">Dexa Assistant</h4>
                <p className="text-[10px] opacity-80">Online | AI-Powered Counselor</p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-amber-500 text-white rounded-br-none' 
                  : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl rounded-bl-none shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-grow bg-slate-100 border-none outline-none px-4 py-2 rounded-xl text-sm focus:ring-1 focus:ring-amber-500"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
