"use strict";

(() => {
    const FALLBACK_RESPONSE = `I'm designed to help with questions about Scale Opus services, AI solutions, automation, websites, and digital systems.

I may not have the specific information you're looking for yet.

Could you tell me more about what you are trying to achieve?
Alternatively, you can connect with our team for a more detailed discussion.`;

    const SALES_CLOSE = "Would you like to discuss your requirements with our team?";

    const knowledgeBase = [
        {
            id: "company-overview",
            patterns: [
                "what is scale opus",
                "tell me about scale opus",
                "who is scale opus",
                "what does your company do"
            ],
            response: `Scale Opus is an AI transformation and digital engineering company. We help businesses build intelligent systems, automate workflows, create high-performance websites, and connect scalable digital solutions around their real operational needs.`
        },
        {
            id: "services-overview",
            patterns: [
                "what does scale opus do",
                "what services do you offer",
                "show me your services",
                "how can you help",
                "what do you guys do"
            ],
            response: `Scale Opus provides business process automation, AI chatbots and knowledge agents, AI voice assistants, custom web and app engineering, brand identity systems, CRM and analytics, multi-agent workflows, cloud and API integrations, and conversion optimization.`,
            salesRelated: true
        },
        {
            id: "audience",
            patterns: [
                "who is scale opus for",
                "who do you work with",
                "what business sizes do you serve",
                "do you work with startups",
                "do you work with small businesses",
                "do you work with enterprise companies"
            ],
            response: "Scale Opus works with startups, small and medium businesses, growing companies, and enterprise organizations that want to improve efficiency, customer experience, or growth through technology."
        },
        {
            id: "difference",
            patterns: [
                "what makes scale opus different",
                "why choose scale opus",
                "how are you different",
                "why should i hire you"
            ],
            response: "Scale Opus focuses on practical systems built around your workflow, goals, and operational challenges. We combine business analysis, design, AI, automation, and engineering instead of offering a generic one-size-fits-all tool.",
            salesRelated: true
        },
        {
            id: "location",
            patterns: [
                "where is scale opus located",
                "where are you located",
                "where are you based",
                "what countries do you serve",
                "do you work remotely"
            ],
            response: "Scale Opus is a digital-first company serving businesses remotely and internationally. Our team can arrange an online consultation for a specific project or partnership.",
            salesRelated: true
        },
        {
            id: "contact",
            patterns: [
                "how can i contact you",
                "contact scale opus",
                "what is your email",
                "email address",
                "whatsapp number",
                "speak to your team",
                "book a consultation"
            ],
            response: `You can email Scale Opus at info.scaleopus@gmail.com or use the Get In Touch form on this page. You can also start a WhatsApp conversation using the contact link in the footer.`,
            salesRelated: true
        },
        {
            id: "chatbot-build",
            patterns: [
                "can you build an ai chatbot",
                "i need a chatbot for my business",
                "create a customer support bot",
                "build a sales chatbot",
                "ai chatbot development"
            ],
            response: `Yes. Scale Opus develops custom AI chatbots around your approved business information, customer needs, and communication goals.

They can support customer service, lead qualification, product guidance, appointment handling, and internal knowledge access.`,
            salesRelated: true
        },
        {
            id: "chatbot-types",
            patterns: [
                "what types of chatbots do you build",
                "what chatbot solutions do you offer",
                "different chatbot types"
            ],
            response: "We can build website support bots, sales and lead-qualification assistants, internal company assistants, FAQ automation bots, onboarding assistants, and AI knowledge systems.",
            salesRelated: true
        },
        {
            id: "chatbot-function",
            patterns: [
                "how does an ai chatbot work",
                "how do chatbots work",
                "how will the chatbot answer questions"
            ],
            response: "A custom AI chatbot uses approved business knowledge and language understanding to identify a user's intent and return a relevant response. Depending on the project, it can be connected to a website, documents, databases, APIs, and business workflows."
        },
        {
            id: "chatbot-training",
            patterns: [
                "can you train a chatbot on my company data",
                "can the chatbot understand my company",
                "use my documents for the chatbot",
                "chatbot company knowledge"
            ],
            response: "Yes. A custom assistant can use approved sources such as product information, service details, company documents, FAQs, policies, and internal processes. The exact data access and controls are defined for the project.",
            salesRelated: true
        },
        {
            id: "chatbot-employees",
            patterns: [
                "will a chatbot replace employees",
                "will ai replace my staff",
                "does ai replace people"
            ],
            response: "AI assistants are designed to support your team. They reduce repetitive work and handle common enquiries so employees can spend more time on judgment, relationships, and higher-value tasks."
        },
        {
            id: "voice-assistant",
            patterns: [
                "do you build ai voice assistants",
                "i need a voice assistant",
                "voice assistant for my business",
                "voice ai development",
                "what does the voice assistant do"
            ],
            response: "Yes. Scale Opus can develop AI voice assistants for customer enquiries, appointment scheduling, sales qualification, and support workflows, based on the requirements of the business.",
            salesRelated: true
        },
        {
            id: "phone-calls",
            patterns: [
                "can ai answer phone calls",
                "can you automate phone calls",
                "voice ai for customer calls"
            ],
            response: "AI voice solutions can be designed to handle customer conversations through suitable voice channels. The right setup depends on call volume, workflow, integrations, escalation rules, and the experience you want customers to have.",
            salesRelated: true
        },
        {
            id: "human-voice",
            patterns: [
                "does the ai voice sound human",
                "is the voice assistant natural",
                "human sounding ai voice"
            ],
            response: "Modern AI voice systems can use natural pacing, pauses, and conversational phrasing. The demo on this page shows the intended friendly experience, while the final voice and workflow would be selected for the project."
        },
        {
            id: "website-build",
            patterns: [
                "do you build websites",
                "can you build my website",
                "i need a new website",
                "website development",
                "custom web development"
            ],
            response: "Yes. Scale Opus creates modern, high-performance websites and web applications for businesses that need strong branding, clear customer journeys, scalable functionality, and optional AI or workflow integrations.",
            salesRelated: true
        },
        {
            id: "website-types",
            patterns: [
                "what types of websites do you create",
                "what website solutions do you offer",
                "do you make landing pages",
                "do you build web applications"
            ],
            response: "We create business websites, landing pages, corporate platforms, AI-powered websites, and custom web applications.",
            salesRelated: true
        },
        {
            id: "website-redesign",
            patterns: [
                "can you redesign my website",
                "improve my existing website",
                "my website needs a redesign",
                "website redesign"
            ],
            response: "Yes. We can improve an existing website through stronger UI/UX, faster performance, modern visual design, AI integration, workflow automation, and conversion-focused structure.",
            salesRelated: true
        },
        {
            id: "website-maintenance",
            patterns: [
                "do you provide website maintenance",
                "can you maintain my website",
                "ongoing website support"
            ],
            response: "Website maintenance and ongoing support can be discussed according to the platform, technical requirements, and level of continuing service needed.",
            salesRelated: true
        },
        {
            id: "automation",
            patterns: [
                "what can you automate",
                "can you automate my business",
                "business process automation",
                "automate repetitive tasks",
                "automate emails",
                "workflow automation"
            ],
            response: "Common automation opportunities include customer enquiries, lead management, email workflows, data entry, reporting, CRM updates, internal approvals, staff onboarding, and other repetitive administrative processes.",
            salesRelated: true
        },
        {
            id: "automation-benefits",
            patterns: [
                "what are the benefits of automation",
                "why should my business automate",
                "why automate business processes"
            ],
            response: "Automation can save time, reduce manual errors, improve consistency, speed up response times, create better visibility, and allow your team to focus on strategic work."
        },
        {
            id: "crm",
            patterns: [
                "do you build crm systems",
                "can you help with crm",
                "crm automation",
                "customer relationship management",
                "lead management system"
            ],
            response: "Scale Opus can design CRM and lead-management workflows that organize customer data, improve follow-up, automate pipeline activity, and connect reporting with the rest of your business systems.",
            salesRelated: true
        },
        {
            id: "integration",
            patterns: [
                "can you integrate my existing systems",
                "connect business systems",
                "api integration",
                "system integration",
                "connect my crm"
            ],
            response: "Yes. Scale Opus can connect suitable business systems through APIs and automation workflows. The available integration depends on the access and capabilities provided by each platform.",
            salesRelated: true
        },
        {
            id: "branding",
            patterns: [
                "do you offer branding",
                "brand identity design",
                "help with my brand",
                "logo and brand design",
                "design system"
            ],
            response: "Scale Opus offers brand identity and design systems that can include visual direction, brand guidelines, digital interface design, and cohesive assets for a consistent market presence.",
            salesRelated: true
        },
        {
            id: "analytics",
            patterns: [
                "do you provide analytics",
                "business analytics dashboard",
                "crm analytics",
                "reporting dashboard",
                "track business performance"
            ],
            response: "Scale Opus can build CRM and analytics experiences that bring together relevant acquisition, pipeline, performance, and operational information for clearer decision-making.",
            salesRelated: true
        },
        {
            id: "pricing",
            patterns: [
                "how much does scale opus cost",
                "what are your prices",
                "show me pricing",
                "how much is the starter plan",
                "how much is the scale opus engine",
                "project cost"
            ],
            response: `The Starter Plan is listed at $500 setup, the Scale Opus Engine at $999 setup, and Autonomous Enterprise uses custom pricing.

The final scope depends on the features, integrations, and business requirements. You can open the pricing cards on this page to review what is included.`,
            salesRelated: true
        },
        {
            id: "packages",
            patterns: [
                "do you have packages",
                "what packages do you offer",
                "compare your plans",
                "solution packages"
            ],
            response: "Scale Opus offers a Starter Plan, the Scale Opus Engine, and an Autonomous Enterprise option. They range from a focused initial implementation to a broader growth system and custom enterprise architecture.",
            salesRelated: true
        },
        {
            id: "quote",
            patterns: [
                "how do i get a quote",
                "request a quotation",
                "send me a proposal",
                "get an estimate"
            ],
            response: "Use the Get In Touch form on this page to share your business segment, target solution, and goals. The Scale Opus team can then review the requirements and discuss a suitable proposal.",
            salesRelated: true
        },
        {
            id: "security",
            patterns: [
                "is my data secure",
                "how do you protect business data",
                "data privacy and security",
                "is the ai secure"
            ],
            response: "Security is considered when designing each solution, including appropriate architecture, controlled access, and responsible data handling. The exact security and compliance requirements are defined for the project."
        },
        {
            id: "ai-data",
            patterns: [
                "will you use my data to train ai",
                "how is my information used",
                "ai training privacy",
                "can i control what the ai knows",
                "choose ai data sources"
            ],
            response: "A business can define the approved information sources used by its AI system. Data access, knowledge boundaries, privacy considerations, and usage controls should be agreed as part of the project."
        },
        {
            id: "business-help",
            patterns: [
                "how can scale opus help my business",
                "what solution do i need",
                "help me choose a service",
                "i need help growing my business",
                "improve my sales",
                "i need help with sales"
            ],
            response: `The best solution depends on the challenge you want to solve.

Tell me your industry, the process taking up the most time, and the result you want to improve. I can point you toward the most relevant Scale Opus service.`,
            salesRelated: true
        },
        {
            id: "ai-start",
            patterns: [
                "i want ai but do not know where to start",
                "how do i start using ai",
                "where should my business start with ai",
                "new to ai"
            ],
            response: "A useful first step is to identify repetitive work, slow customer response, disconnected information, or an operational bottleneck. Scale Opus can then assess where a focused AI or automation project is likely to create the clearest value.",
            salesRelated: true
        },
        {
            id: "business-analysis",
            patterns: [
                "can you analyse my business",
                "can you analyze my workflow",
                "business assessment",
                "find automation opportunities"
            ],
            response: "Yes. During a consultation, the team can review your workflow, goals, and bottlenecks to identify suitable AI, automation, website, CRM, or integration opportunities.",
            salesRelated: true
        },
        {
            id: "technology",
            patterns: [
                "what ai technologies do you use",
                "what is your technology stack",
                "what tools do you use",
                "do you use large language models"
            ],
            response: "Scale Opus works with modern AI technologies, large language models, automation platforms, cloud infrastructure, databases, APIs, and custom software engineering. The exact stack is selected according to the approved project requirements."
        },
        {
            id: "openai",
            patterns: [
                "do you use openai",
                "can you integrate openai",
                "openai integration"
            ],
            response: "OpenAI technologies can be integrated into a suitable business solution when they match the project's requirements, data controls, and intended workflow.",
            salesRelated: true
        },
        {
            id: "cloud",
            patterns: [
                "do you use cloud platforms",
                "cloud infrastructure",
                "cloud solutions",
                "enterprise cloud integration"
            ],
            response: "Cloud infrastructure and API integrations can be incorporated to create scalable and reliable digital systems, subject to the requirements and available platform access.",
            salesRelated: true
        },
        {
            id: "affordability",
            patterns: [
                "ai is too expensive",
                "can i afford ai",
                "low budget ai project",
                "business too small for ai"
            ],
            response: "Businesses can start with a focused solution aimed at one valuable workflow, then expand after proving the operational benefit. The Starter Plan is the entry-level option currently shown on this page.",
            salesRelated: true
        },
        {
            id: "nontechnical",
            patterns: [
                "i do not understand technology",
                "i am not technical",
                "technology is confusing",
                "can you explain it simply"
            ],
            response: "Absolutely. Scale Opus can discuss the business problem and desired outcome in plain language, then translate that into a suitable technical approach. You do not need to define the technology yourself.",
            salesRelated: true
        },
        {
            id: "timeline",
            patterns: [
                "how long does a project take",
                "what is the delivery time",
                "how quickly can you build it",
                "project timeline"
            ],
            response: "Delivery time depends on the approved scope, integrations, content, and complexity. The team would need to review your requirements before confirming a timeline.",
            salesRelated: true
        }
    ];

    const stopWords = new Set([
        "a", "about", "an", "and", "are", "as", "at", "be", "can", "could",
        "do", "does", "for", "from", "how", "i", "in", "is", "it", "me",
        "help", "my", "of", "on", "please", "tell", "the", "this", "to", "we",
        "what", "where", "which", "who", "why", "with", "would", "you", "your"
    ]);

    const phraseAliases = [
        [/\bweb\s*site(s)?\b/g, "website"],
        [/\bchat\s*bot(s)?\b/g, "chatbot"],
        [/\bvoice\s*bot(s)?\b/g, "voice assistant"],
        [/\be[-\s]?mail(s)?\b/g, "email"],
        [/\bwhats\s*app\b/g, "whatsapp"],
        [/\bcustomer relationship management\b/g, "crm"],
        [/\bartificial intelligence\b/g, "ai"],
        [/\bquotation\b/g, "quote"],
        [/\bestimate\b/g, "quote"],
        [/\bcustomer service\b/g, "customer support"],
        [/\b(?:make|create|develop)\b/g, "build"],
        [/\bfees?\b/g, "price"],
        [/\bcosts?|costing\b/g, "price"],
        [/\brates?\b/g, "price"],
        [/\bsite\b/g, "website"],
        [/\bcompany\b/g, "business"],
        [/\bfirm\b/g, "business"]
    ];

    const directConversation = [
        {
            test: /^(hi|hii+|hello|hey|hiya|good morning|good afternoon|good evening)(\s+there)?[!. ]*$/,
            id: "greeting",
            response: "Hello! Welcome to Scale Opus. What would you like help with—AI solutions, automation, websites, CRM, pricing, or something else?"
        },
        {
            test: /^(thanks|thank you|thankyou|thx|appreciate it|great)[!. ]*$/,
            id: "thanks",
            response: "You're welcome! If you tell me what you want to improve in your business, I can help you find the most relevant Scale Opus solution."
        },
        {
            test: /^(bye|goodbye|see you|talk later)[!. ]*$/,
            id: "goodbye",
            response: "Thanks for visiting Scale Opus. Feel free to return whenever you have a question about AI, automation, websites, or digital systems."
        },
        {
            test: /^(help|help me|i need help)[!. ]*$/,
            id: "help",
            response: "Of course. Tell me what you are trying to improve—for example customer support, sales follow-up, repetitive work, your website, CRM, or reporting—and I’ll guide you to the relevant Scale Opus service."
        }
    ];

    function normalize(text) {
        let normalized = String(text || "")
            .toLowerCase()
            .replace(/[’']/g, "")
            .replace(/[^a-z0-9\s-]/g, " ")
            .replace(/-/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        phraseAliases.forEach(([pattern, replacement]) => {
            normalized = normalized.replace(pattern, replacement);
        });

        return normalized.replace(/\s+/g, " ").trim();
    }

    function stem(token) {
        if (token.length > 5 && token.endsWith("ies")) return `${token.slice(0, -3)}y`;
        if (token.length > 5 && token.endsWith("ing")) return token.slice(0, -3);
        if (token.length > 4 && token.endsWith("ed")) return token.slice(0, -2);
        if (token.length > 4 && token.endsWith("es")) return token.slice(0, -2);
        if (token.length > 3 && token.endsWith("s")) return token.slice(0, -1);
        return token;
    }

    function tokenize(text) {
        return normalize(text)
            .split(" ")
            .map(stem)
            .filter((token) => token && !stopWords.has(token));
    }

    function editDistance(left, right) {
        if (left === right) return 0;
        if (!left.length) return right.length;
        if (!right.length) return left.length;

        const previous = Array.from({ length: right.length + 1 }, (_, index) => index);
        const current = new Array(right.length + 1);

        for (let i = 1; i <= left.length; i += 1) {
            current[0] = i;
            for (let j = 1; j <= right.length; j += 1) {
                current[j] = Math.min(
                    current[j - 1] + 1,
                    previous[j] + 1,
                    previous[j - 1] + (left[i - 1] === right[j - 1] ? 0 : 1)
                );
            }
            for (let j = 0; j <= right.length; j += 1) previous[j] = current[j];
        }

        return previous[right.length];
    }

    function tokenSimilarity(left, right) {
        if (left === right) return 1;
        if (left.length < 4 || right.length < 4) return 0;
        const distance = editDistance(left, right);
        const similarity = 1 - distance / Math.max(left.length, right.length);
        return similarity >= 0.78 ? similarity : 0;
    }

    function patternScore(input, pattern) {
        const normalizedInput = normalize(input);
        const normalizedPattern = normalize(pattern);
        const inputTokens = tokenize(normalizedInput);
        const patternTokens = tokenize(normalizedPattern);

        if (!inputTokens.length || !patternTokens.length) return 0;
        if (normalizedInput === normalizedPattern) return 1;
        if (normalizedInput.includes(normalizedPattern)) return 0.98;

        let matchedWeight = 0;
        const usedInputIndexes = new Set();

        patternTokens.forEach((patternToken) => {
            let bestSimilarity = 0;
            let bestIndex = -1;
            inputTokens.forEach((inputToken, index) => {
                if (usedInputIndexes.has(index)) return;
                const similarity = tokenSimilarity(patternToken, inputToken);
                if (similarity > bestSimilarity) {
                    bestSimilarity = similarity;
                    bestIndex = index;
                }
            });
            if (bestIndex >= 0) {
                usedInputIndexes.add(bestIndex);
                matchedWeight += bestSimilarity;
            }
        });

        const coverage = matchedWeight / patternTokens.length;
        const precision = matchedWeight / inputTokens.length;
        const evidenceBonus = matchedWeight >= 2 ? 0.12 : 0;
        return Math.min(0.97, coverage * 0.7 + precision * 0.18 + evidenceBonus);
    }

    function appendSalesClose(response, salesRelated) {
        if (!salesRelated || response.endsWith(SALES_CLOSE)) return response;
        return `${response}\n\n${SALES_CLOSE}`;
    }

    function getResponse(message) {
        const normalizedMessage = normalize(message);

        const conversationalMatch = directConversation.find(({ test }) => test.test(normalizedMessage));
        if (conversationalMatch) {
            return {
                confidence: 1,
                response: conversationalMatch.response,
                matched: true,
                intent: conversationalMatch.id
            };
        }

        const ranked = knowledgeBase
            .map((entry) => ({
                entry,
                confidence: Math.max(...entry.patterns.map((pattern) => patternScore(message, pattern)))
            }))
            .sort((left, right) => right.confidence - left.confidence);

        const best = ranked[0];
        const runnerUp = ranked[1];
        const ambiguous = runnerUp
            && best.confidence >= 0.7
            && runnerUp.confidence >= 0.7
            && best.confidence - runnerUp.confidence < 0.045;

        if (!best || best.confidence < 0.7 || ambiguous) {
            return {
                confidence: best?.confidence || 0,
                response: FALLBACK_RESPONSE,
                matched: false,
                intent: "fallback"
            };
        }

        return {
            confidence: best.confidence,
            response: appendSalesClose(best.entry.response, best.entry.salesRelated),
            matched: true,
            intent: best.entry.id
        };
    }

    window.ScaleOpusChatbot = {
        getResponse,
        knowledgeBaseVersion: "2.0"
    };
})();
