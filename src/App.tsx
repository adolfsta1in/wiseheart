import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LifeBuoy,
  LineChart,
  Menu,
  MessageSquareText,
  Network,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import {
  type ElementType,
  type FormEvent,
  type HTMLAttributes,
  type PropsWithChildren,
  useMemo,
  useRef,
  useState,
} from 'react';

type Language = 'ru' | 'en';

type FadeInProps = PropsWithChildren<{
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  layout?: boolean | 'position' | 'size';
  x?: number;
  y?: number;
}> &
  HTMLAttributes<HTMLElement>;

const navItems = [
  { id: 'about', ru: 'О компании', en: 'About' },
  { id: 'services', ru: 'Услуги', en: 'Services' },
  { id: 'portfolio', ru: 'Портфолио', en: 'Portfolio' },
  { id: 'process', ru: 'Процесс', en: 'Process' },
  { id: 'contact', ru: 'Контакты', en: 'Contact' },
];

const copy = {
  ru: {
    heroBadge: 'Software engineering company',
    heroTitle: 'Проектируем и разрабатываем бизнес-системы для компаний по всему миру',
    heroText:
      'WiseHeart Tech превращает разрозненные процессы в управляемые цифровые продукты: CRM/ERP, веб-платформы, мобильные приложения, рабочие workflow, аналитические панели и AI-автоматизацию.',
    primaryCta: 'Обсудить проект',
    secondaryCta: 'Посмотреть кейсы',
    stats: [
      ['Global', 'работаем независимо от страны'],
      ['CRM', 'системы, сайты и workflow'],
      ['IP', 'зарегистрированы в Кыргызстане'],
    ],
    aboutTitle: 'Инженерная команда для сложных бизнес-процессов',
    aboutText:
      'Мы работаем как технический партнер: разбираемся в процессах, проектируем архитектуру, собираем интерфейсы, backend, интеграции и AI-сценарии, а затем доводим продукт до запуска и развития. Компания зарегистрирована в Кыргызстане, но проекты берем без привязки к стране клиента.',
    servicesTitle: 'Что мы берем в разработку',
    automationTitle: 'AI и автоматизация как рабочая инфраструктура',
    automationText:
      'Мы внедряем искусственный интеллект туда, где он дает измеримую пользу: ускоряет обработку заявок, помогает командам принимать решения, автоматизирует документы, связывает CRM/ERP и делает аналитику понятной руководителям.',
    portfolioTitle: 'Портфолио и кейсы',
    processTitle: 'Как проходит работа',
    techTitle: 'Технологии',
    benefitsTitle: 'Почему выбирают WiseHeart Tech',
    trustTitle: 'Спокойная разработка для серьезных задач',
    faqTitle: 'Вопросы и ответы',
    contactTitle: 'Давайте построим ваш следующий цифровой продукт',
    contactText:
      'Опишите задачу, а мы предложим архитектуру, этапы и понятный план запуска.',
    formName: 'Имя',
    formEmail: 'Email или телефон',
    formMessage: 'Кратко о проекте',
    formSubmit: 'Отправить запрос',
    formHelper: 'После отправки мы откроем Telegram @wisehearttech и скопируем текст заявки, чтобы вы могли сразу отправить его в чат.',
    formSuccess: 'Текст заявки скопирован. Telegram открыт в новом окне, отправьте сообщение в чат @wisehearttech.',
    servicesEyebrow: 'Услуги',
    automationEyebrow: 'AI и автоматизация',
    portfolioEyebrow: 'Кейсы',
    portfolioIntro: 'Ниже показаны направления реальных работ: CRM, сайты, операционные системы и workflow. Названия клиентов можно раскрывать или оставлять под NDA.',
    processEyebrow: 'Процесс',
    stackEyebrow: 'Стек',
    benefitsEyebrow: 'Преимущества',
    trustEyebrow: 'Доверие',
    faqEyebrow: 'Вопросы',
    contactEyebrow: 'Контакты',
    contactNav: 'Связаться',
    similarProject: 'Запросить похожий проект',
    heroVisualStatus: 'Рабочие системы',
    heroTabs: ['Операции', 'AI-поток', 'Аналитика'],
    heroVisualLabel: 'Автоматизация',
    heroVisualTitle: 'Воронка выручки',
    heroWorkflow: ['Лид получен', 'AI-квалификация', 'Задача в CRM', 'Менеджер уведомлен'],
    aiScore: 'AI-оценка',
    integrations: 'Интеграции',
    aiPanelLabel: 'AI-центр управления',
    aiPanelTitle: 'Интеллект процессов',
    automationMetrics: ['Синхронизация CRM', 'Документы AI', 'Умная маршрутизация', 'Аналитика'],
    resultLabel: 'Результат',
    footerText: 'Разработка ПО, автоматизация и AI-интеграции.',
    contactPlaceholders: ['Ваше имя или компания', 'Email, телефон или Telegram', 'CRM, сайт, workflow, AI-автоматизация, мобильное приложение...'],
  },
  en: {
    heroBadge: 'Software engineering company',
    heroTitle: 'We design and build business systems for companies worldwide',
    heroText:
      'WiseHeart Tech turns scattered operations into controlled digital products: CRM/ERP, web platforms, mobile apps, working workflows, analytics dashboards, and AI automation.',
    primaryCta: 'Discuss Project',
    secondaryCta: 'View Portfolio',
    stats: [
      ['Global', 'work without country limits'],
      ['CRM', 'systems, websites, workflows'],
      ['IP', 'registered in Kyrgyzstan'],
    ],
    aboutTitle: 'An engineering team for complex business processes',
    aboutText:
      'We work as a technical partner: understand processes, design architecture, build interfaces, backend, integrations, and AI scenarios, then bring the product to launch and long-term development. The company is registered in Kyrgyzstan and works with clients worldwide.',
    servicesTitle: 'What we can build',
    automationTitle: 'AI and automation as working infrastructure',
    automationText:
      'We integrate AI where it creates measurable value: faster request handling, better decisions, automated documents, connected CRM/ERP workflows, and analytics leaders can actually use.',
    portfolioTitle: 'Portfolio and case studies',
    processTitle: 'How we work',
    techTitle: 'Technologies',
    benefitsTitle: 'Why choose WiseHeart Tech',
    trustTitle: 'Calm delivery for serious business systems',
    faqTitle: 'FAQ',
    contactTitle: 'Let’s build your next digital product',
    contactText: 'Describe the task and we will suggest architecture, stages, and a clear launch plan.',
    formName: 'Name',
    formEmail: 'Email or phone',
    formMessage: 'Project brief',
    formSubmit: 'Send Request',
    formHelper: 'After submit, we will open Telegram @wisehearttech and copy your request text so you can send it directly.',
    formSuccess: 'Request text copied. Telegram opened in a new window, send the message to @wisehearttech.',
    servicesEyebrow: 'Services',
    automationEyebrow: 'AI & Automation',
    portfolioEyebrow: 'Case studies',
    portfolioIntro: 'These directions reflect real work: CRM, websites, operating systems, and workflows. Client names can be disclosed or kept under NDA.',
    processEyebrow: 'Workflow',
    stackEyebrow: 'Stack',
    benefitsEyebrow: 'Benefits',
    trustEyebrow: 'Trust',
    faqEyebrow: 'Questions',
    contactEyebrow: 'Contact',
    contactNav: 'Contact',
    similarProject: 'Request similar project',
    heroVisualStatus: 'Live systems',
    heroTabs: ['Operations', 'AI Flow', 'Analytics'],
    heroVisualLabel: 'Automation',
    heroVisualTitle: 'Revenue workflow',
    heroWorkflow: ['Lead captured', 'AI qualification', 'CRM task created', 'Manager notified'],
    aiScore: 'AI score',
    integrations: 'Integrations',
    aiPanelLabel: 'AI command center',
    aiPanelTitle: 'Workflow intelligence',
    automationMetrics: ['CRM sync', 'Document AI', 'Smart routing', 'Analytics'],
    resultLabel: 'Result',
    footerText: 'Software development, automation and AI integration.',
    contactPlaceholders: ['Your name or company', 'Email, phone, or Telegram', 'CRM, website, workflow, AI automation, mobile app...'],
  },
};

const services = [
  {
    icon: Code2,
    ru: ['Разработка ПО', 'Индивидуальные платформы, кабинеты и сервисы под процессы компании.'],
    en: ['Custom Software Development', 'Custom platforms, portals, and services shaped around company workflows.'],
  },
  {
    icon: Globe2,
    ru: ['Веб-разработка', 'Корпоративные сайты, порталы, маркетплейсы и SaaS-интерфейсы.'],
    en: ['Web Development', 'Corporate websites, portals, marketplaces, and SaaS interfaces.'],
  },
  {
    icon: Smartphone,
    ru: ['Мобильные приложения', 'Мобильные продукты для клиентов, сотрудников и партнеров.'],
    en: ['Mobile App Development', 'Mobile products for customers, employees, and partners.'],
  },
  {
    icon: Workflow,
    ru: ['Автоматизация процессов', 'Автоматизация заявок, документов, уведомлений и согласований.'],
    en: ['Business Process Automation', 'Automation for requests, documents, notifications, and approvals.'],
  },
  {
    icon: Database,
    ru: ['CRM / ERP системы', 'CRM, ERP и внутренние системы с ролями, отчетностью и интеграциями.'],
    en: ['CRM / ERP Systems', 'CRM, ERP, and internal systems with roles, reports, and integrations.'],
  },
  {
    icon: BrainCircuit,
    ru: ['AI-интеграции', 'AI-модули для поиска, анализа, генерации и принятия решений.'],
    en: ['AI Integration', 'AI modules for search, analysis, generation, and decision support.'],
  },
  {
    icon: Bot,
    ru: ['AI-чатботы и ассистенты', 'Ассистенты для поддержки, продаж, HR, документов и внутренних баз знаний.'],
    en: ['AI Chatbots & Assistants', 'Assistants for support, sales, HR, documents, and internal knowledge bases.'],
  },
  {
    icon: BarChart3,
    ru: ['Дашборды и аналитика', 'Дашборды для KPI, финансов, операций, продаж и менеджмента.'],
    en: ['Dashboard & Analytics', 'Dashboards for KPI, finance, operations, sales, and management.'],
  },
  {
    icon: Network,
    ru: ['Системные интеграции', 'Связь сайтов, CRM, ERP, платежей, телефонии, складов и внешних API.'],
    en: ['System Integrations', 'Connection between websites, CRM, ERP, payments, telephony, warehouses, and external APIs.'],
  },
  {
    icon: ServerCog,
    ru: ['ИТ инфраструктура', 'Настройка серверов, облаков, доменов, почты, доступа, резервного копирования и рабочих окружений.'],
    en: ['IT Infrastructure', 'Server, cloud, domain, email, access, backup, and workspace environment setup.'],
  },
  {
    icon: LifeBuoy,
    ru: ['Поддержка и развитие', 'Развитие, мониторинг, исправления, оптимизация и долгосрочная поддержка.'],
    en: ['Support & Maintenance', 'Development, monitoring, fixes, optimization, and long-term support.'],
  },
];

const serviceDetails = {
  ru: [
    {
      summary:
        'Разрабатываем надежные внутренние и клиентские системы под реальные процессы компании, роли, данные и интеграции.',
      includes: ['Архитектура продукта и техническое проектирование', 'Личные кабинеты, порталы и внутренние панели', 'Роли пользователей, права доступа и бизнес-логика', 'Интеграции с CRM, платежами, складом и внешними API'],
      outcomes: ['Прозрачные процессы', 'Меньше ручной работы', 'Система готова к росту'],
    },
    {
      summary:
        'Создаем быстрые, аккуратные и конверсионные веб-проекты: от корпоративного сайта до сложного веб-приложения.',
      includes: ['Корпоративные сайты и лендинги', 'Клиентские порталы и SaaS-интерфейсы', 'Адаптивная верстка и современный UI', 'SEO-база, аналитика и формы заявок'],
      outcomes: ['Сильная презентация компании', 'Удобный путь к заявке', 'Готовность к развитию'],
    },
    {
      summary:
        'Проектируем мобильные приложения для клиентов, сотрудников и партнеров с понятными сценариями и стабильной архитектурой.',
      includes: ['Прототипирование ключевых сценариев', 'iOS и Android интерфейсы', 'Авторизация, уведомления и личные кабинеты', 'Связь с backend, CRM и платежными системами'],
      outcomes: ['Удобный мобильный канал', 'Быстрый доступ к сервисам', 'Единая экосистема'],
    },
    {
      summary:
        'Автоматизируем повторяющиеся операции, чтобы команда меньше тратила время на ручные действия и ошибки.',
      includes: ['Маршруты заявок и согласований', 'Уведомления и контроль статусов', 'Автоматическая генерация задач и документов', 'Связь отделов в едином процессе'],
      outcomes: ['Быстрее обработка заявок', 'Меньше потерь в процессах', 'Контроль ответственности'],
    },
    {
      summary:
        'Создаем CRM/ERP и внутренние системы, где продажи, операции, финансы и управление работают в одной среде.',
      includes: ['Карточки клиентов, сделок и задач', 'Роли, отделы и доступы', 'Отчеты, статусы и управленческие панели', 'Интеграции с телефонией, сайтом, оплатами и складом'],
      outcomes: ['Единая база данных', 'Контроль продаж и операций', 'Управляемая команда'],
    },
    {
      summary:
        'Встраиваем AI в продукты и процессы так, чтобы он решал конкретные бизнес-задачи, а не был декоративной функцией.',
      includes: ['AI-поиск по базе знаний', 'Генерация текстов, сводок и ответов', 'Классификация заявок и документов', 'Интеграция OpenAI API и других моделей'],
      outcomes: ['Быстрее принятие решений', 'Меньше рутины', 'Новые AI-сценарии'],
    },
    {
      summary:
        'Разрабатываем AI-чатботов и ассистентов для поддержки, продаж, HR, обучения и внутренних баз знаний.',
      includes: ['Сценарии диалогов и логика ответов', 'Подключение документов и базы знаний', 'Передача сложных запросов сотрудникам', 'Интеграция с CRM, Telegram, сайтом и мессенджерами'],
      outcomes: ['Поддержка 24/7', 'Быстрые ответы клиентам', 'Снижение нагрузки на команду'],
    },
    {
      summary:
        'Собираем аналитические панели, которые показывают руководителям и командам понятную картину бизнеса.',
      includes: ['KPI, продажи, финансы и операционные метрики', 'Интерактивные фильтры и роли доступа', 'Сводки по отделам и проектам', 'Подключение баз данных и внешних сервисов'],
      outcomes: ['Решения на основе данных', 'Видимость показателей', 'Быстрая отчетность'],
    },
    {
      summary:
        'Связываем разрозненные сервисы в единую систему, чтобы данные двигались без ручного копирования.',
      includes: ['REST API и webhooks', 'CRM, ERP, сайты, платежи и телефония', 'Обмен данными между отделами', 'Мониторинг ошибок интеграций'],
      outcomes: ['Единый поток данных', 'Меньше ошибок ввода', 'Системы работают вместе'],
    },
    {
      summary:
        'Помогаем выстроить техническую основу проекта: серверы, облако, домены, почту, доступы и резервное копирование.',
      includes: ['Настройка серверов и облачных окружений', 'Домены, DNS, SSL и корпоративная почта', 'Резервное копирование и базовый мониторинг', 'Доступы, окружения и подготовка к запуску'],
      outcomes: ['Стабильная основа', 'Безопаснее доступы', 'Проект готов к эксплуатации'],
    },
    {
      summary:
        'Поддерживаем и развиваем продукт после запуска: исправляем, улучшаем, оптимизируем и добавляем новые функции.',
      includes: ['Техническая поддержка и исправления', 'Мониторинг ошибок и производительности', 'Развитие функциональности по этапам', 'Оптимизация интерфейса и бизнес-логики'],
      outcomes: ['Продукт не стоит на месте', 'Быстрое реагирование', 'Долгосрочная надежность'],
    },
  ],
  en: [
    {
      summary:
        'We build reliable internal and customer-facing systems around real company processes, roles, data, and integrations.',
      includes: ['Product architecture and technical planning', 'Portals, workspaces, and internal panels', 'User roles, permissions, and business logic', 'CRM, payment, warehouse, and external API integrations'],
      outcomes: ['Clear processes', 'Less manual work', 'Ready for growth'],
    },
    {
      summary:
        'We create fast, polished, and conversion-focused web products, from corporate websites to complex web applications.',
      includes: ['Corporate websites and landing pages', 'Client portals and SaaS interfaces', 'Responsive layouts and modern UI', 'SEO basics, analytics, and lead forms'],
      outcomes: ['Strong company presentation', 'Clear path to request', 'Ready to scale'],
    },
    {
      summary:
        'We design mobile apps for customers, employees, and partners with clear flows and stable architecture.',
      includes: ['Key scenario prototyping', 'iOS and Android interfaces', 'Authentication, notifications, and accounts', 'Backend, CRM, and payment integrations'],
      outcomes: ['Convenient mobile channel', 'Fast access to services', 'Unified ecosystem'],
    },
    {
      summary:
        'We automate repetitive operations so teams spend less time on manual actions and avoid process errors.',
      includes: ['Request and approval routes', 'Notifications and status control', 'Automatic tasks and documents', 'Connected departments in one workflow'],
      outcomes: ['Faster request handling', 'Fewer process gaps', 'Clear responsibility'],
    },
    {
      summary:
        'We create CRM/ERP and internal systems where sales, operations, finance, and management work in one environment.',
      includes: ['Customer, deal, and task cards', 'Roles, departments, and permissions', 'Reports, statuses, and management panels', 'Telephony, website, payment, and warehouse integrations'],
      outcomes: ['Single data base', 'Controlled sales and operations', 'Managed team workflow'],
    },
    {
      summary:
        'We integrate AI into products and processes where it solves specific business tasks instead of acting as decoration.',
      includes: ['AI search across knowledge bases', 'Text, summary, and response generation', 'Request and document classification', 'OpenAI API and other model integrations'],
      outcomes: ['Faster decisions', 'Less routine work', 'New AI scenarios'],
    },
    {
      summary:
        'We build AI chatbots and assistants for support, sales, HR, training, and internal knowledge bases.',
      includes: ['Conversation flows and answer logic', 'Document and knowledge-base connection', 'Escalation to employees', 'CRM, Telegram, website, and messenger integrations'],
      outcomes: ['24/7 support', 'Faster customer answers', 'Lower team workload'],
    },
    {
      summary:
        'We create analytics dashboards that give leaders and teams a clear view of business performance.',
      includes: ['KPI, sales, finance, and operations metrics', 'Interactive filters and access roles', 'Department and project summaries', 'Database and external service connections'],
      outcomes: ['Data-based decisions', 'Visible metrics', 'Fast reporting'],
    },
    {
      summary:
        'We connect separate services into one working system so data moves without manual copying.',
      includes: ['REST API and webhooks', 'CRM, ERP, websites, payments, and telephony', 'Data exchange between departments', 'Integration error monitoring'],
      outcomes: ['Unified data flow', 'Fewer input errors', 'Systems work together'],
    },
    {
      summary:
        'We help build the technical foundation: servers, cloud, domains, email, access, and backups.',
      includes: ['Server and cloud environment setup', 'Domains, DNS, SSL, and corporate email', 'Backups and basic monitoring', 'Access, environments, and launch preparation'],
      outcomes: ['Stable foundation', 'Safer access', 'Ready for operation'],
    },
    {
      summary:
        'We support and improve the product after launch: fixes, optimization, new functionality, and ongoing development.',
      includes: ['Technical support and fixes', 'Error and performance monitoring', 'Feature development by stages', 'UI and business logic optimization'],
      outcomes: ['Product keeps moving', 'Fast response', 'Long-term reliability'],
    },
  ],
};

const automationFeatures = [
  {
    ru: ['AI для процессов', 'Классификация заявок, генерация ответов, подсказки менеджерам и контроль SLA.'],
    en: ['AI for processes', 'Request classification, response generation, manager prompts, and SLA control.'],
  },
  {
    ru: ['AI-ассистенты', 'Ассистенты для команд, клиентов, обучения, поддержки и внутренней базы знаний.'],
    en: ['AI assistants', 'Assistants for teams, customers, training, support, and internal knowledge bases.'],
  },
  {
    ru: ['Документы', 'Извлечение данных, проверка договоров, автоматическая подготовка шаблонов.'],
    en: ['Documents', 'Data extraction, contract review, and automatic template preparation.'],
  },
  {
    ru: ['CRM / ERP', 'Интеллектуальные рекомендации, автоматические карточки, скоринг и сводки по клиентам.'],
    en: ['CRM / ERP', 'Smart recommendations, automatic cards, scoring, and customer summaries.'],
  },
];

const projects = [
  {
    ru: ['Корпоративный сайт для IT-компании', 'Веб-платформа', 'Структура услуг, сильная презентация команды, заявки через форму и подготовка к SEO-продвижению.'],
    en: ['Corporate website for an IT company', 'Web platform', 'Service structure, strong team presentation, lead form flow, and preparation for SEO growth.'],
  },
  {
    ru: ['Операционная система ресторана', 'Workflow и учет', 'Заказы, смены, склад, меню, роли сотрудников и отчеты собраны в одном рабочем интерфейсе.'],
    en: ['Restaurant operating system', 'Workflow and accounting', 'Orders, shifts, inventory, menu, staff roles, and reports inside one working interface.'],
  },
  {
    ru: ['CRM для отдела продаж', 'Бизнес-система', 'Единая база клиентов, сделки, задачи, уведомления, статусы и управленческая отчетность.'],
    en: ['Sales department CRM', 'Business system', 'Single client base, deals, tasks, notifications, statuses, and management reporting.'],
  },
  {
    ru: ['E-commerce платформа', 'Коммерция', 'Каталог, корзина, оплата, личный кабинет и интеграции со складскими процессами.'],
    en: ['E-commerce platform', 'Commerce', 'Catalog, cart, payments, customer account, and warehouse process integrations.'],
  },
  {
    ru: ['AI-ассистент поддержки', 'AI-автоматизация', 'Ответы по базе знаний, маршрутизация запросов, краткие сводки и передача оператору.'],
    en: ['AI support assistant', 'AI automation', 'Knowledge-base answers, request routing, short summaries, and handoff to an operator.'],
  },
  {
    ru: ['Бизнес-дашборд руководителя', 'Аналитика', 'KPI, финансы, статусы проектов, динамика продаж и понятные срезы для принятия решений.'],
    en: ['Executive business dashboard', 'Analytics', 'KPI, finance, project statuses, sales dynamics, and clear views for decisions.'],
  },
];

const process = [
  { ru: 'Диагностика', en: 'Discovery' },
  { ru: 'Планирование', en: 'Planning' },
  { ru: 'Дизайн', en: 'Design' },
  { ru: 'Разработка', en: 'Development' },
  { ru: 'Тестирование', en: 'Testing' },
  { ru: 'Запуск', en: 'Launch' },
  { ru: 'Поддержка', en: 'Support' },
];

const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker',
  'AWS',
  'OpenAI API',
  'REST API',
  'Mobile',
];

const benefits = [
  {
    ru: ['Бизнес-фокус', 'Начинаем с целей, экономики и процессов, а не с абстрактной разработки.'],
    en: ['Business-focused approach', 'We start with goals, economics, and processes instead of abstract development.'],
  },
  {
    ru: ['Индивидуальные решения', 'Проектируем систему под вашу модель работы, роли и будущий рост.'],
    en: ['Custom solutions', 'We design systems around your operating model, roles, and future growth.'],
  },
  {
    ru: ['Масштабируемая архитектура', 'Закладываем архитектуру, которую можно развивать без переписывания с нуля.'],
    en: ['Scalable architecture', 'We build architecture that can grow without rewriting from scratch.'],
  },
  {
    ru: ['Чистый UI/UX', 'Делаем интерфейсы понятными для сотрудников, клиентов и руководителей.'],
    en: ['Clean UI/UX', 'We create interfaces that are clear for employees, customers, and managers.'],
  },
  {
    ru: ['Системы, готовые к AI', 'Готовим данные, интеграции и сценарии для аккуратного внедрения AI.'],
    en: ['AI-ready systems', 'We prepare data, integrations, and workflows for careful AI adoption.'],
  },
  {
    ru: ['Долгосрочная поддержка', 'Остаемся рядом после запуска: поддержка, развитие, мониторинг и улучшения.'],
    en: ['Long-term support', 'We stay after launch: support, development, monitoring, and improvements.'],
  },
];

const faqs = [
  {
    ru: ['С чего начинается проект?', 'С короткой диагностики задачи: цели, процессы, пользователи, ограничения, интеграции и ожидаемый результат. После этого мы предлагаем этапы и архитектуру.'],
    en: ['How does a project start?', 'With a focused diagnosis: goals, processes, users, constraints, integrations, and expected outcome. Then we suggest stages and architecture.'],
  },
  {
    ru: ['Можно ли доработать уже существующую систему?', 'Да. Мы можем провести аудит текущего продукта, стабилизировать его, обновить интерфейс, добавить интеграции или внедрить AI-функции.'],
    en: ['Can you improve an existing system?', 'Yes. We can audit the current product, stabilize it, refresh the interface, add integrations, or implement AI features.'],
  },
  {
    ru: ['Вы делаете только сайты?', 'Нет. Сайты входят в работу, но основной фокус WiseHeart Tech: бизнес-системы, CRM/ERP, автоматизация, мобильные продукты, AI-интеграции и аналитика.'],
    en: ['Do you only build websites?', 'No. Websites are part of the work, but WiseHeart Tech focuses on business systems, CRM/ERP, automation, mobile products, AI integrations, and analytics.'],
  },
  {
    ru: ['Какие контакты поставить на сайт?', 'Пока оставлены заглушки для email, WhatsApp и Telegram. Их можно быстро заменить на реальные данные.'],
    en: ['Which contacts should be used?', 'Placeholders for email, WhatsApp, and Telegram are currently included. They can be quickly replaced with real details.'],
  },
];

function FadeIn({
  as = 'div',
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 28,
  children,
  ...props
}: FadeInProps) {
  const MotionElement = useMemo(() => motion.create(as), [as]);

  return (
    <MotionElement
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '40px', amount: 0.08 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

function MagneticButton({
  children,
  variant = 'primary',
  href,
}: PropsWithChildren<{ variant?: 'primary' | 'secondary'; href: string }>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const transform = useMotionTemplate`translate3d(${x}px, ${y}px, 0)`;

  return (
    <motion.a
      href={href}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) / 8);
        y.set((event.clientY - rect.top - rect.height / 2) / 8);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ transform }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 active:scale-[0.98] sm:px-7 ${
        variant === 'primary'
          ? 'bg-[#0F172A] text-white shadow-[0_20px_45px_-22px_rgba(15,23,42,0.65)] hover:bg-[#1E293B]'
          : 'border border-slate-200 bg-white/70 text-[#0F172A] shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] backdrop-blur hover:border-[#7DD3FC]'
      }`}
    >
      {children}
      <ArrowRight size={17} strokeWidth={2} />
    </motion.a>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-sky-500">{eyebrow}</p>
      <h2 className="text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">{title}</h2>
      {text ? <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">{text}</p> : null}
    </FadeIn>
  );
}

function Navbar({ language, setLanguage }: { language: Language; setLanguage: (value: Language) => void }) {
  const [open, setOpen] = useState(false);
  const c = copy[language];

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:px-5">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0F172A] text-white shadow-inner">
            <Sparkles size={18} strokeWidth={2} />
          </span>
          <span className="text-sm font-black tracking-tight text-[#0F172A] sm:text-base">WiseHeart Tech</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-[#0F172A]">
              {item[language]}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <div className="rounded-full border border-slate-200 bg-white p-1">
            {(['ru', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase transition ${
                  language === lang ? 'bg-[#0F172A] text-white' : 'text-slate-500 hover:text-[#0F172A]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-[#BAE9FD] px-5 py-2.5 text-sm font-bold text-[#0F172A] transition hover:bg-[#7DD3FC]">
            {c.contactNav}
          </a>
        </div>

        <button onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-[#0F172A] lg:hidden">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-[28px] border border-white/70 bg-white/90 p-3 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-sky-50">
              {item[language]}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function HeroVisual({ language }: { language: Language }) {
  const c = copy[language];
  const tabs = c.heroTabs;

  return (
    <div className="relative min-h-[520px]">
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-4 top-2 h-28 w-28 rounded-[2rem] bg-gradient-to-br from-[#BAE9FD] to-white shadow-[0_30px_80px_-35px_rgba(14,165,233,0.75)]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 18, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-2 h-24 w-24 rounded-full border border-sky-100 bg-white shadow-[0_28px_70px_-38px_rgba(15,23,42,0.5)]"
      />

      <FadeIn y={44} className="absolute inset-x-0 top-20 mx-auto max-w-[620px] rounded-[34px] border border-white/80 bg-white/70 p-3 shadow-[0_40px_100px_-45px_rgba(15,23,42,0.45)] backdrop-blur-2xl sm:p-4">
        <div className="rounded-[26px] border border-slate-100 bg-[#F8FBFF] p-4">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-slate-300" />
              <span className="h-3 w-3 rounded-full bg-[#BAE9FD]" />
              <span className="h-3 w-3 rounded-full bg-[#7DD3FC]" />
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500">{c.heroVisualStatus}</div>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2 rounded-full bg-white p-1 shadow-inner">
            {tabs.map((tab, index) => (
              <motion.div
                key={tab}
                animate={{ backgroundColor: index === 1 ? '#0F172A' : '#FFFFFF', color: index === 1 ? '#FFFFFF' : '#64748B' }}
                className="rounded-full px-3 py-2 text-center text-[11px] font-bold"
              >
                {tab}
              </motion.div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] bg-white p-4 shadow-[0_18px_50px_-36px_rgba(15,23,42,0.45)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-500">{c.heroVisualLabel}</p>
                  <h3 className="mt-1 text-xl font-black text-[#0F172A]">{c.heroVisualTitle}</h3>
                </div>
                <Gauge className="text-sky-400" size={28} strokeWidth={2} />
              </div>
              <div className="space-y-3">
                {c.heroWorkflow.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0.45, x: -8 }}
                    animate={{ opacity: [0.5, 1, 0.5], x: 0 }}
                    transition={{ duration: 3.5, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2"
                  >
                    <CheckCircle2 size={16} className="text-sky-500" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[24px] bg-[#0F172A] p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">{c.aiScore}</span>
                  <BrainCircuit size={22} className="text-[#7DD3FC]" />
                </div>
                <p className="mt-6 text-4xl font-black tracking-tight">84.7</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-[#7DD3FC]"
                    initial={{ width: '22%' }}
                    animate={{ width: ['22%', '84%', '72%', '84%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
              <div className="rounded-[24px] border border-slate-100 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{c.integrations}</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[ServerCog, Database, Cloud].map((Icon, index) => (
                    <div key={index} className="grid h-14 place-items-center rounded-2xl bg-sky-50 text-sky-500">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

function HeroSection({ language }: { language: Language }) {
  const c = copy[language];

  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FBFF_58%,#EAF7FF_100%)] px-4 pb-20 pt-32 sm:px-6 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(186,233,253,0.75),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(125,211,252,0.28),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-600 shadow-[0_18px_45px_-32px_rgba(14,165,233,0.65)] backdrop-blur">
            <Zap size={14} strokeWidth={2} />
            {c.heroBadge}
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl">
            {c.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{c.heroText}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#contact">{c.primaryCta}</MagneticButton>
            <MagneticButton href="#portfolio" variant="secondary">
              {c.secondaryCta}
            </MagneticButton>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {c.stats.map(([value, label]) => (
              <div key={label} className="rounded-[24px] border border-white/80 bg-white/65 p-4 shadow-[0_22px_55px_-42px_rgba(15,23,42,0.45)] backdrop-blur">
                <p className="text-3xl font-black tracking-tight text-[#0F172A]">{value}</p>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <HeroVisual language={language} />
      </div>
    </section>
  );
}

function AboutSection({ language }: { language: Language }) {
  const c = copy[language];

  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-sky-500">WiseHeart Tech</p>
          <h2 className="text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">{c.aboutTitle}</h2>
        </FadeIn>
        <FadeIn delay={0.12} className="rounded-[34px] border border-slate-100 bg-gradient-to-br from-white to-sky-50/60 p-6 shadow-[0_28px_80px_-55px_rgba(15,23,42,0.38)] sm:p-9">
          <p className="text-lg leading-9 text-slate-600">{c.aboutText}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {(language === 'ru' ? ['Стратегия', 'Инженерия', 'Внедрение AI'] : ['Strategy', 'Engineering', 'AI adoption']).map((item) => (
              <div key={item} className="rounded-2xl border border-white bg-white/80 px-4 py-3 text-sm font-bold text-[#0F172A] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesSection({ language }: { language: Language }) {
  const c = copy[language];
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const serviceOrder =
    selectedService === null
      ? services.map((_, index) => index)
      : [selectedService, ...services.map((_, index) => index).filter((index) => index !== selectedService)];
  const labels =
    language === 'ru'
      ? {
          details: 'Подробнее',
          collapse: 'Свернуть',
          includes: 'Что входит',
          outcomes: 'Что получает бизнес',
          cta: 'Обсудить эту услугу',
        }
      : {
          details: 'Learn more',
          collapse: 'Collapse',
          includes: 'What is included',
          outcomes: 'Business outcomes',
          cta: 'Discuss this service',
        };

  const selectService = (index: number, isExpanded: boolean) => {
    setSelectedService(isExpanded ? null : index);

    if (!isExpanded) {
      window.setTimeout(() => {
        servicesGridRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 80);
    }
  };

  return (
    <section id="services" className="bg-[#F8FBFF] px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.servicesEyebrow} title={c.servicesTitle} />
        <div ref={servicesGridRef} className="grid scroll-mt-28 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceOrder.map((index) => {
            const service = services[index];
            const Icon = service.icon;
            const [title, description] = service[language];
            const details = serviceDetails[language][index];
            const isExpanded = selectedService === index;

            return (
            <FadeIn
              as="article"
              key={title}
              delay={index * 0.035}
              onClick={() => selectService(index, isExpanded)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  selectService(index, isExpanded);
                }
              }}
              role="button"
              tabIndex={0}
              className={`group flex cursor-pointer flex-col overflow-hidden rounded-[28px] border bg-white p-5 text-left shadow-[0_24px_70px_-55px_rgba(15,23,42,0.45)] transition-[border-color,box-shadow,transform] duration-300 hover:border-sky-100 focus:outline-none focus:ring-4 focus:ring-sky-100 ${
                isExpanded
                  ? 'border-sky-100 sm:col-span-2 lg:col-span-4'
                  : 'h-[252px] border-white hover:-translate-y-1'
              }`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-500 transition group-hover:bg-[#BAE9FD] group-hover:text-[#0F172A]">
                  <Icon size={23} strokeWidth={2} />
                </div>
                <span className={`grid h-9 w-9 place-items-center rounded-full border transition ${
                  isExpanded ? 'rotate-45 border-sky-100 bg-sky-50 text-sky-500' : 'border-slate-100 text-slate-400 group-hover:border-sky-100 group-hover:bg-sky-50 group-hover:text-sky-500'
                }`}>
                  {isExpanded ? <X size={16} strokeWidth={2} /> : <ArrowRight size={16} strokeWidth={2} />}
                </span>
              </div>
              <h3 className="text-lg font-black tracking-tight text-[#0F172A]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>

              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0,
                  y: isExpanded ? 0 : -10,
                }}
                transition={{
                  height: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: isExpanded ? 0.28 : 0.16, delay: isExpanded ? 0.12 : 0 },
                  y: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                }}
                className="overflow-hidden"
              >
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <p className="max-w-2xl text-base leading-7 text-slate-600">{details.summary}</p>

                  <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-[24px] border border-slate-100 bg-slate-50/70 p-4">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-sky-500">{labels.includes}</h4>
                      <div className="mt-4 grid gap-2">
                        {details.includes.map((item) => (
                          <div key={item} className="flex gap-3 rounded-2xl bg-white px-3 py-2.5">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-sky-500" size={16} strokeWidth={2} />
                            <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] bg-[#0F172A] p-4 text-white">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#7DD3FC]">{labels.outcomes}</h4>
                      <div className="mt-4 grid gap-2">
                        {details.outcomes.map((item, itemIndex) => (
                          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                            <span className="text-xs font-black text-[#7DD3FC]">0{itemIndex + 1}</span>
                            <p className="mt-2 text-sm font-black leading-5">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-5 py-3 text-sm font-black text-white transition hover:bg-[#1E293B] active:scale-[0.98]"
                  >
                    {labels.cta}
                    <ArrowRight size={16} strokeWidth={2} />
                  </a>
                </div>
              </motion.div>

              <span className={`mt-auto pt-6 text-xs font-black uppercase tracking-[0.2em] text-sky-500 transition ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {isExpanded ? labels.collapse : labels.details}
              </span>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AutomationSection({ language }: { language: Language }) {
  const c = copy[language];
  const [active, setActive] = useState(0);

  return (
    <section className="overflow-hidden bg-white px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-sky-100 bg-[linear-gradient(135deg,#0F172A_0%,#1E293B_54%,#0B4A6D_100%)] p-5 text-white shadow-[0_40px_110px_-60px_rgba(15,23,42,0.8)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <FadeIn className="self-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#7DD3FC]">{c.automationEyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{c.automationTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">{c.automationText}</p>
          <div className="mt-8 grid gap-3">
            {automationFeatures.map((feature, index) => {
              const [title] = feature[language];

              return (
              <button
                key={title}
                onClick={() => setActive(index)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                  active === index ? 'border-[#7DD3FC] bg-white/12 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {title}
              </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl sm:p-5">
          <div className="rounded-[26px] bg-white p-4 text-[#0F172A] sm:p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-500">{c.aiPanelLabel}</p>
                <h3 className="mt-1 text-2xl font-black">{c.aiPanelTitle}</h3>
              </div>
              <Bot className="text-sky-500" size={32} strokeWidth={2} />
            </div>
            <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="py-6">
              <h4 className="text-xl font-black">{automationFeatures[active][language][0]}</h4>
              <p className="mt-3 leading-7 text-slate-500">{automationFeatures[active][language][1]}</p>
            </motion.div>
            <div className="grid gap-3 sm:grid-cols-2">
              {c.automationMetrics.map((item, index) => (
                <div key={item} className="rounded-2xl bg-sky-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold">{item}</span>
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                  </div>
                  <div className="h-2 rounded-full bg-white">
                    <motion.div
                      className="h-full rounded-full bg-[#7DD3FC]"
                      initial={{ width: '25%' }}
                      whileInView={{ width: `${64 + index * 7}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total, language }: { project: (typeof projects)[number]; index: number; total: number; language: Language }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const targetScale = 1 - (total - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0.12, 1], [1, targetScale]);
  const c = copy[language];
  const [title, category, description] = project[language];

  return (
    <div ref={ref} className="h-[76vh] min-h-[620px]">
      <motion.article
        style={{ scale, top: `calc(5.5rem + ${index * 22}px)`, willChange: 'transform' }}
        className="sticky overflow-hidden rounded-[36px] border border-slate-200 bg-white p-4 shadow-[0_34px_90px_-60px_rgba(15,23,42,0.55)] sm:p-6"
      >
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-h-[360px] rounded-[28px] border border-slate-100 bg-[radial-gradient(circle_at_20%_18%,rgba(186,233,253,0.95),transparent_34%),linear-gradient(135deg,#FFFFFF_0%,#F1F8FC_42%,#E5E7EB_100%)] p-5">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-slate-300" />
              <span className="h-3 w-3 rounded-full bg-sky-200" />
              <span className="h-3 w-3 rounded-full bg-sky-400" />
            </div>
            <div className="grid h-[290px] gap-3 sm:grid-cols-[0.7fr_1.3fr]">
              <div className="grid gap-3">
                <div className="rounded-3xl bg-white/80 p-4 shadow-sm backdrop-blur">
                  <LineChart className="mb-8 text-sky-500" size={28} />
                  <div className="h-3 w-20 rounded-full bg-slate-200" />
                  <div className="mt-3 h-3 w-28 rounded-full bg-sky-100" />
                </div>
                <div className="rounded-3xl bg-[#0F172A] p-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">{c.resultLabel}</p>
                  <p className="mt-7 text-3xl font-black">{index + 1}.0</p>
                </div>
              </div>
              <div className="rounded-3xl bg-white/85 p-4 shadow-sm backdrop-blur">
                <div className="mb-4 h-5 w-36 rounded-full bg-slate-200" />
                <div className="grid gap-3">
                  {[72, 48, 86, 64].map((width, itemIndex) => (
                    <div key={itemIndex} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                      <div className="h-3 rounded-full bg-white">
                        <div className="h-full rounded-full bg-[#7DD3FC]" style={{ width: `${width}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-2 sm:p-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-500">{category}</p>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-[#0F172A]">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-500">{description}</p>
            </div>
            <a href="#contact" className="mt-8 inline-flex w-max items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-[#0F172A] transition hover:border-sky-200 hover:bg-sky-50">
              {c.similarProject}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function PortfolioSection({ language }: { language: Language }) {
  const c = copy[language];

  return (
    <section id="portfolio" className="bg-[#F8FBFF] px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.portfolioEyebrow} title={c.portfolioTitle} text={c.portfolioIntro} />
        {projects.map((project, index) => (
          <ProjectCard key={project.en[0]} project={project} index={index} total={projects.length} language={language} />
        ))}
      </div>
    </section>
  );
}

function ProcessSection({ language }: { language: Language }) {
  const c = copy[language];

  return (
    <section id="process" className="bg-white px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.processEyebrow} title={c.processTitle} />
        <div className="grid gap-3 lg:grid-cols-7">
          {process.map((step, index) => (
            <FadeIn key={step.en} delay={index * 0.06} className="relative rounded-[26px] border border-slate-100 bg-white p-5 shadow-[0_22px_65px_-55px_rgba(15,23,42,0.45)]">
              <span className="text-xs font-black text-sky-500">0{index + 1}</span>
              <h3 className="mt-8 text-lg font-black text-[#0F172A]">{step[language]}</h3>
              <div className="mt-5 h-1 rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-[#7DD3FC]" style={{ width: `${42 + index * 8}%` }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechAndBenefits({ language }: { language: Language }) {
  const c = copy[language];

  return (
    <section className="bg-[#F8FBFF] px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader eyebrow={c.stackEyebrow} title={c.techTitle} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technologies.map((tech) => (
              <FadeIn key={tech} className="rounded-2xl border border-white bg-white px-4 py-4 text-center text-sm font-black text-[#0F172A] shadow-[0_18px_50px_-42px_rgba(15,23,42,0.45)]">
                {tech}
              </FadeIn>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow={c.benefitsEyebrow} title={c.benefitsTitle} />
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const [title, text] = benefit[language];

              return (
              <FadeIn key={title} delay={index * 0.045} className="rounded-[28px] border border-white bg-white p-6 shadow-[0_24px_70px_-55px_rgba(15,23,42,0.45)]">
                <ShieldCheck className="mb-5 text-sky-500" size={28} strokeWidth={2} />
                <h3 className="text-lg font-black text-[#0F172A]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection({ language }: { language: Language }) {
  const c = copy[language];

  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-[40px] border border-slate-100 bg-gradient-to-br from-white to-sky-50 p-6 shadow-[0_35px_90px_-65px_rgba(15,23,42,0.55)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-sky-500">{c.trustEyebrow}</p>
            <h2 className="text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">{c.trustTitle}</h2>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {(language === 'ru'
              ? [
                  ['Discovery перед разработкой', 'Сначала разбираем процессы, роли, данные, интеграции и ограничения. После этого предлагаем архитектуру и этапы.'],
                  ['Проекты под NDA', 'Кейсы можно показывать анонимно: без раскрытия клиента, но с понятной задачей, решением и результатом.'],
                  ['Работа без границ', 'Компания зарегистрирована в Кыргызстане, а разработку и коммуникацию выстраиваем независимо от страны клиента.'],
                  ['Передача и поддержка', 'После запуска остаются код, документация, доступы, инструкции и понятный план дальнейшего развития.'],
                ]
              : [
                  ['Discovery before development', 'We first understand processes, roles, data, integrations, and constraints. Then we propose architecture and stages.'],
                  ['NDA-ready projects', 'Cases can be shown anonymously: no client disclosure, but with clear task, solution, and result.'],
                  ['Borderless work', 'The company is registered in Kyrgyzstan, while development and communication work independently of client country.'],
                  ['Handover and support', 'After launch, the client gets code, documentation, access, instructions, and a clear development plan.'],
                ]
            ).map(([title, text]) => (
              <FadeIn key={title} className="rounded-[28px] border border-white bg-white/75 p-6 shadow-sm backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-500">{title}</p>
                <p className="mt-5 text-lg leading-8 text-slate-700">{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ language }: { language: Language }) {
  const c = copy[language];
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#F8FBFF] px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow={c.faqEyebrow} title={c.faqTitle} />
        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const [question, answer] = faq[language];

            return (
            <FadeIn key={question} delay={index * 0.04} className="overflow-hidden rounded-[26px] border border-white bg-white shadow-[0_20px_60px_-52px_rgba(15,23,42,0.45)]">
              <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-[#0F172A]">
                {question}
                <ChevronDown className={`shrink-0 transition ${open === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              <motion.div initial={false} animate={{ height: open === index ? 'auto' : 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 leading-7 text-slate-500">{answer}</p>
              </motion.div>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ language }: { language: Language }) {
  const c = copy[language];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const contact = String(data.get('contact') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const requestText =
      language === 'ru'
        ? `Заявка с сайта WiseHeart Tech\n\nИмя/компания: ${name}\nКонтакт: ${contact}\nПроект: ${message}`
        : `Request from WiseHeart Tech website\n\nName/company: ${name}\nContact: ${contact}\nProject: ${message}`;

    void navigator.clipboard?.writeText(requestText).catch(() => undefined);
    window.open('https://t.me/wisehearttech', '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-slate-100 bg-[#0F172A] p-5 text-white shadow-[0_40px_120px_-70px_rgba(15,23,42,0.9)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <FadeIn className="self-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#7DD3FC]">{c.contactEyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{c.contactTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">{c.contactText}</p>
          <div className="mt-8 grid gap-3">
            {([
              [Phone, 'WhatsApp: +996 554 520 356', 'https://wa.me/996554520356'],
              [Sparkles, 'Telegram: @wisehearttech', 'https://t.me/wisehearttech'],
              [MessageSquareText, language === 'ru' ? 'Работаем с клиентами по всему миру' : 'Working with clients worldwide', '#contact'],
            ] satisfies [LucideIcon, string, string][]).map(([Icon, text, href]) => (
              <a key={String(text)} href={href} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-300/30 hover:bg-white/10">
                <Icon size={18} className="text-[#7DD3FC]" />
                {text}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="rounded-[32px] bg-white p-5 text-[#0F172A] sm:p-7">
          <form onSubmit={handleSubmit} className="grid gap-4">
            {[
              ['name', c.formName, c.contactPlaceholders[0]],
              ['contact', c.formEmail, c.contactPlaceholders[1]],
            ].map(([id, label, placeholder]) => (
              <label key={id} className="grid gap-2">
                <span className="text-sm font-black">{label}</span>
                <input
                  required
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:bg-white"
                />
              </label>
            ))}
            <label className="grid gap-2">
              <span className="text-sm font-black">{c.formMessage}</span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder={c.contactPlaceholders[2]}
                className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:bg-white"
              />
            </label>
            <p className="text-sm leading-6 text-slate-500">{c.formHelper}</p>
            {submitted ? (
              <div className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-slate-700">{c.formSuccess}</div>
            ) : null}
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 font-bold text-white transition hover:bg-[#1E293B] active:scale-[0.98]">
              {c.formSubmit}
              <ArrowRight size={17} />
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer({ language }: { language: Language }) {
  return (
    <footer className="bg-[#0F172A] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">WiseHeart Tech</p>
          <p className="mt-2 text-sm text-slate-400">{copy[language].footerText}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-white">
              {item[language]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>('ru');

  return (
    <main className="min-h-screen overflow-x-clip bg-white font-sans text-[#0F172A]">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <AutomationSection language={language} />
      <PortfolioSection language={language} />
      <ProcessSection language={language} />
      <TechAndBenefits language={language} />
      <TrustSection language={language} />
      <FaqSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </main>
  );
}
