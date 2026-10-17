import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Zap,
  RotateCcw,
  ArrowUpRight,
  Bot,
  User,
  Minimize2,
  Maximize2,
  CheckCircle2,
} from 'lucide-react';

export interface ChatTurn {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  { label: 'Services Overview', prompt: 'What services and AI solutions does Scale Opus offer?' },
  { label: 'Pricing & Plans', prompt: 'Can you compare your pricing plans and what is included in each?' },
  { label: 'AI Chatbots & Voice', prompt: 'How do your custom AI chatbots and voice assistants work for a business?' },
  { label: 'CRM & Automation', prompt: 'What business processes and CRM workflows can Scale Opus automate?' },
];

const INITIAL_MESSAGE: ChatTurn = {
  id: 'welcome-msg',
  role: 'model',
  text: "Welcome to **Scale Opus**! I'm your AI Solutions Architect.\n\nAsk me anything about our **AI Chatbots, Voice Assistants, Process Automation, Custom Web & Brand Systems, CRM Analytics, or Pricing Plans** — or tell me about your business goals and I'll recommend a tailored blueprint.",
  timestamp: 'Just now',
};

function formatMessageHTML(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  return escaped
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-slate-200">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-white/10 text-[#00f0ff] font-mono text-[11px]">$1</code>')
    .replace(/\n/g, '<br />');
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatTurn[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fastMode, setFastMode] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);
  const [hasUnread, setHasUnread] = useState(true);

  const threadEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    threadEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => {
        scrollToBottom();
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  // Listen for custom global event so buttons on the page can open the AI Concierge
  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ prompt?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.prompt) {
        void sendMessage(customEvent.detail.prompt);
      }
    };
    window.addEventListener('scaleopus:open-chat', handleOpenEvent);
    return () => window.removeEventListener('scaleopus:open-chat', handleOpenEvent);
  });

  const sendMessage = async (rawText?: string) => {
    const textToSend = (rawText ?? input).trim();
    if (!textToSend || isLoading) return;

    setErrorBanner(null);
    if (!rawText) setInput('');

    const nowLabel = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userTurn: ChatTurn = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: nowLabel,
    };

    const historyPayload = messages
      .filter((m) => m.id !== 'welcome-msg')
      .map((m) => ({
        role: m.role,
        text: m.text,
      }));

    setMessages((prev) => [...prev, userTurn]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload,
          fastMode,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Unable to connect to Scale Opus AI service.');
      }

      const botTurn: ChatTurn = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botTurn]);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Unable to reach Gemini AI right now. Please try sending your message again.';
      setErrorBanner(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorBanner(null);
  };

  const jumpToConnect = () => {
    setIsOpen(false);
    const connectEl = document.getElementById('connect');
    if (connectEl) {
      connectEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] font-sans">
      {/* Chat Drawer / Window */}
      {isOpen && (
        <div
          className={`mb-4 flex flex-col overflow-hidden rounded-3xl border border-[#00f0ff]/35 bg-[#080b12]/95 text-slate-100 shadow-[0_20px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(0,240,255,0.18)] backdrop-blur-2xl transition-all duration-300 ${
            isExpanded
              ? 'w-[calc(100vw-3rem)] sm:w-[540px] h-[78vh] max-h-[720px]'
              : 'w-[calc(100vw-3rem)] sm:w-[400px] h-[560px] max-h-[80vh]'
          }`}
          role="dialog"
          aria-label="Scale Opus AI Concierge Chat"
        >
          {/* Top Accent Laser Line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#ff5e1a] via-[#00f0ff] to-[#a855f7]" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#0c111d]/90 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#ff5e1a]/50 bg-gradient-to-br from-[#ff5e1a]/25 to-[#00f0ff]/15 text-[#ff5e1a] shadow-[0_0_15px_rgba(255,94,26,0.3)]">
                <Bot className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0c111d] bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-wide text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Scale Opus AI Concierge
                  </h3>
                  <span className="rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#00f0ff]">
                    Gemini AI
                  </span>
                </div>
                <p className="font-mono text-[10px] text-slate-400">
                  Solutions Architect • Instant Answers 24/7
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setFastMode((prev) => !prev)}
                title={fastMode ? 'Fast Mode (gemini-3.1-flash-lite)' : 'Standard Mode (gemini-3.8-flash)'}
                className={`flex items-center gap-1 rounded-lg border px-2 py-1 font-mono text-[10px] font-bold transition-all ${
                  fastMode
                    ? 'border-amber-400/50 bg-amber-400/15 text-amber-300'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                <Zap className="h-3 w-3" />
                <span className="hidden sm:inline">{fastMode ? 'Fast' : 'Smart'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-white/20 hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                title={isExpanded ? 'Compact view' : 'Expand view'}
                className="hidden sm:flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-white/20 hover:text-white"
              >
                {isExpanded ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-[#ff5e1a]/50 hover:bg-[#ff5e1a]/20 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Message Thread */}
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 scrollbar-thin">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-[#ff5e1a]/40 bg-[#ff5e1a]/15 text-[#ff5e1a]">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[83%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      isUser
                        ? 'rounded-tr-none border border-[#ff5e1a]/40 bg-gradient-to-br from-[#ff5e1a] to-[#e04809] text-white shadow-[0_4px_15px_rgba(255,94,26,0.25)]'
                        : 'rounded-tl-none border border-white/10 bg-[#111726] text-slate-200 shadow-inner'
                    }`}
                  >
                    <div
                      className="space-y-1.5 break-words"
                      dangerouslySetInnerHTML={{ __html: formatMessageHTML(msg.text) }}
                    />
                    <div
                      className={`mt-1.5 flex items-center justify-end gap-1 font-mono text-[9px] ${
                        isUser ? 'text-white/75' : 'text-slate-500'
                      }`}
                    >
                      <span>{msg.timestamp}</span>
                    </div>
                  </div>

                  {isUser && (
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300">
                      <User className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-[#00f0ff]/40 bg-[#00f0ff]/15 text-[#00f0ff]">
                  <Sparkles className="h-3.5 w-3.5 animate-spin" />
                </div>
                <div className="rounded-2xl rounded-tl-none border border-white/10 bg-[#111726] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#00f0ff]" style={{ animationDelay: '0ms' }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#ff5e1a]" style={{ animationDelay: '150ms' }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#a855f7]" style={{ animationDelay: '300ms' }} />
                    <span className="ml-1.5 font-mono text-[10px] text-slate-400">
                      Analyzing Scale Opus knowledge...
                    </span>
                  </div>
                </div>
              </div>
            )}

            {errorBanner && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
                {errorBanner}
              </div>
            )}

            {/* Quick Prompt Chips */}
            {messages.length <= 2 && !isLoading && (
              <div className="pt-2">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  Suggested Questions:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => sendMessage(item.prompt)}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-left font-mono text-[10px] text-slate-300 transition-all hover:border-[#ff5e1a]/50 hover:bg-[#ff5e1a]/15 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={threadEndRef} />
          </div>

          {/* Action Bar: Book Assessment CTA */}
          <div className="flex items-center justify-between border-t border-white/10 bg-[#0b101b] px-4 py-2 font-mono text-[10px]">
            <span className="flex items-center gap-1.5 text-slate-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Ready for a custom blueprint?</span>
            </span>
            <button
              type="button"
              onClick={jumpToConnect}
              className="flex items-center gap-1 font-bold text-[#00f0ff] transition-colors hover:text-[#ff5e1a]"
            >
              <span>Book System Audit</span>
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* Input Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage();
            }}
            className="flex items-center gap-2 border-t border-white/10 bg-[#070a10] p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, AI bots, CRM, pricing..."
              disabled={isLoading}
              className="flex-1 rounded-xl border border-white/15 bg-[#0f1420] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 transition-colors focus:border-[#00f0ff] focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff5e1a] to-[#e04809] text-white shadow-[0_0_15px_rgba(255,94,26,0.4)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle Scale Opus AI Chatbot"
        className="group relative flex items-center gap-3 rounded-full border border-[#00f0ff]/40 bg-[#0b0f19]/95 px-4 py-3 text-white shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(0,240,255,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#ff5e1a]"
      >
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5e1a] to-[#ff3b1a] text-white shadow-[0_0_15px_rgba(255,94,26,0.5)]">
          {isOpen ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
          {hasUnread && !isOpen && (
            <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00f0ff] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00f0ff]" />
            </span>
          )}
        </div>
        <div className="pr-1 text-left">
          <div className="flex items-center gap-1.5">
            <span
              className="text-xs font-bold tracking-wide text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ask Scale Opus AI
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="block font-mono text-[9px] uppercase tracking-wider text-[#00f0ff]">
            Services &amp; Pricing Chat
          </span>
        </div>
      </button>
    </div>
  );
}
