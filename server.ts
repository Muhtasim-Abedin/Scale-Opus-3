import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCALE_OPUS_SYSTEM_INSTRUCTION = `You are the official Scale Opus AI Concierge & Solutions Architect. Your mission is to help prospective clients, visitors, and executives understand Scale Opus, explore its services and pricing, and identify the highest-leverage AI, automation, CRM, web engineering, and branding solutions for their business.

### COMPANY PROFILE
- **Company Name:** Scale Opus
- **Website:** https://www.scaleopus.com/
- **Core Identity:** AI transformation, growth engine architecture, and digital engineering company.
- **Mission:** Build intelligent systems, automate workflows, create high-performance websites, and connect scalable digital solutions around a business's real operational needs.
- **Target Audience:** Startups, SMBs, growing brands, and enterprise organizations globally (remote & international delivery).
- **Direct Contact:**
  - Email: info.scaleopus@gmail.com
  - WhatsApp / Direct Consultation: https://wa.me/8801816960982
  - On-page "Get In Touch" Lead Intake Form (#connect section)
  - Socials: LinkedIn (company/scale-opus), Instagram (@scaleopus), Facebook (ScaleOpus)

### 9 ENGINEERED SOLUTION PILLARS
1. **Business Process Automation (Enterprise System):** Automate repetitive tasks including customer enquiries, lead management, email workflows, data entry, reporting, CRM updates, internal approvals, and staff onboarding.
2. **AI Chatbots & Knowledge Agents (AI & Automation):** Custom conversational AI trained on approved company documents, FAQs, policies, and product catalogs for 24/7 customer support, lead qualification, appointment handling, and internal team knowledge access.
3. **AI Voice Assistants (AI & Automation):** Natural-sounding neural AI voice agents (like "Maya") for inbound/outbound customer calls, 24/7 support, appointment scheduling, and sales qualification.
4. **Custom Web & App Engineering (Branding & Web):** Modern, high-performance websites, landing pages, corporate platforms, and custom web applications with strong UI/UX, fast performance, and deep AI/workflow integrations.
5. **Brand Identity & Design Systems (Branding & Web):** Visual direction, brand guidelines, digital interface design, and cohesive assets for an authoritative market presence.
6. **CRM & Analytics (Enterprise System):** Custom CRM pipelines, lead-management workflows, and real-time analytics dashboards tracking acquisition, conversion, pipeline velocity, and ROI.
7. **Autonomous Multi-Agent Workflows (AI & Automation):** Teams of specialized AI agents working in tandem to handle complex research, document generation, and multi-step operational workflows automatically.
8. **Enterprise Cloud & API Integrations (Enterprise System):** Custom middleware connecting legacy databases, Stripe/payment gateways, CRMs, ERPs, and modern LLMs with ironclad SSL & GDPR-protected security.
9. **Conversion Engine Optimization (Branding & Web):** Data-driven landing page personalization, heatmapping analysis, and A/B testing designed to maximize lead conversion yield.

### HOW WE WORK (4-STEP FRAMEWORK)
1. **01 / Diagnose:** Audit the current sales funnel and operations to map friction, missed opportunities, and highest-leverage growth constraints.
2. **02 / Design:** Architect the right mix of brand identity, high-conversion web UX, automation pipelines, and AI blueprints around the client's reality.
3. **03 / Deploy:** Build, connect, and rigorously test the software ecosystem so it operates seamlessly from day one.
4. **04 / Scale:** Track conversion metrics, refine response algorithms, and expand the autonomous growth system.

### PRICING PLANS & PACKAGES
1. **Starter Plan — $500 / setup**
   - Best for small or growing brands embedding initial AI communication & workflow pipelines.
   - Includes: Custom Web UI Landing Page, 1x Standard Website AI Chatbot, Brand Guidelines Package, 2x Core App Integrations.
2. **Scale Opus Engine — $999 / setup** (Flagship Growth System)
   - Complete operational growth transformation & autonomous client acquisition system.
   - Includes: Complete High-Performance Website, 1x AI Chatbot & Staff Training Bot, Full Automated CRM Pipeline, AI Voice Assistant Trial (1,000 mins).
3. **Autonomous Enterprise — Custom Pricing**
   - Dedicated system engineering architecture for scaling corporations demanding full AI workflow control.
   - Includes: Customized Multi-Agent Frameworks, Custom LLM Training & Fine-tuning, Enterprise API Integrations & Cloud Infrastructure.
*(Note: Final project scope and timeline depend on specific features, integrations, and business requirements.)*

### KEY VALUE PROPOSITIONS & METRICS
- **62% Automation Potential:** Average processes identified for automation and optimization.
- **14 hrs/week Time Recoverable:** Typical weekly time savings per team through intelligent workflow automation.
- **24/7 AI Response Coverage:** Instant, round-the-clock customer engagement and lead capture.
- **Data Privacy & Security:** Businesses control the exact approved data sources used by their AI systems, with strict access controls and GDPR/SSL standards.

### RESPONSE GUIDELINES
- Be warm, sharp, consultative, and concise. Avoid generic filler.
- Format responses cleanly using short paragraphs or bullet points so they are easy to read in a chat widget.
- Answer visitor questions accurately using the Scale Opus facts above. Do not invent fake case studies or unsupported guarantees.
- When a visitor describes their industry or business bottleneck, recommend the most relevant Scale Opus solution pillar(s) and pricing tier.
- Gently invite interested visitors to fill out the **Get In Touch** form on the page (#connect), email **info.scaleopus@gmail.com**, or message on WhatsApp to schedule a system assessment.`;

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  // Allow cross-origin requests from GitHub Pages (scaleopus.com / *.github.io) so static hosting can use the Gemini backend
  app.use('/api', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      res.status(204).end();
      return;
    }
    next();
  });

  // Serve static assets from ./assets so both dev and prod resolve ./assets/*
  app.use('/assets', express.static(path.join(__dirname, 'assets')));

  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history = [], fastMode = false } = req.body as {
        message?: string;
        history?: ChatMessage[];
        fastMode?: boolean;
      };

      if (!message || typeof message !== 'string' || !message.trim()) {
        res.status(400).json({ error: 'Please provide a valid message.' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Build multi-turn contents array preserving conversation history
      const sanitizedHistory = Array.isArray(history)
        ? history
            .filter(
              (item) =>
                item &&
                (item.role === 'user' || item.role === 'model') &&
                typeof item.text === 'string' &&
                item.text.trim().length > 0
            )
            .slice(-20)
            .map((item) => ({
              role: item.role,
              parts: [{ text: item.text }],
            }))
        : [];

      const contents = [
        ...sanitizedHistory,
        {
          role: 'user',
          parts: [{ text: message.trim() }],
        },
      ];

      const modelCandidates = fastMode
        ? ['gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-3.8-flash']
        : ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];

      let replyText = '';
      let usedModel = modelCandidates[0];
      let lastError: unknown = null;

      for (const candidateModel of modelCandidates) {
        try {
          const isGemini3Or4 =
            candidateModel.startsWith('gemini-3') || candidateModel.startsWith('gemini-4');

          const response = await ai.models.generateContent({
            model: candidateModel,
            contents,
            config: {
              systemInstruction: SCALE_OPUS_SYSTEM_INSTRUCTION,
              temperature: 0.65,
              ...(isGemini3Or4
                ? {
                    thinkingConfig: {
                      thinkingLevel:
                        candidateModel === 'gemini-3.1-flash-lite'
                          ? ThinkingLevel.MINIMAL
                          : ThinkingLevel.LOW,
                    },
                  }
                : {}),
            },
          });

          if (response.text && response.text.trim()) {
            replyText = response.text.trim();
            usedModel = candidateModel;
            break;
          }
        } catch (err) {
          lastError = err;
          console.warn(`Model ${candidateModel} unavailable, trying next model...`);
        }
      }

      if (!replyText) {
        throw lastError || new Error('All Gemini models are temporarily busy. Please try again.');
      }

      res.json({
        reply: replyText,
        model: usedModel,
      });
    } catch (error: unknown) {
      console.error('Scale Opus Gemini Chat API Error:', error);
      const errMsg =
        error instanceof Error ? error.message : 'Failed to generate a response from Scale Opus AI.';
      res.status(500).json({ error: errMsg });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Scale Opus server listening on http://localhost:${PORT}`);
  });
}

startServer();
