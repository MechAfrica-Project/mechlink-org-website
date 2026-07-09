
export const articles = [
  {
    slug: "offline-first-ussd-african-agtech",
    title: "Building Offline-First: Why USSD Still Matters in African Agtech",
    category: "Engineering",
    date: "July 7, 2026",
    readTime: "8 min read",
    excerpt: "Smartphones and stable internet are not universal in rural Africa. Here's how MechAfrica's architecture treats USSD and feature phones as first-class citizens, not fallbacks.",
    isFeatured: true,
    coverImage: "https://picsum.photos/id/28/1200/800",
    content: (
      <>
        <h2>Designing for the Network You Actually Have</h2>
        <p>Most software is architected around an assumption: the user has a smartphone, a data plan, and a signal. That assumption breaks down fast once you leave the city center in most of the countries we operate in. For the farmers and service providers MechAfrica serves, a feature phone and a USSD session are often the only reliable path online.</p>
        <p>So we flipped the usual build order. Instead of building a smartphone app and bolting on a &quot;lite&quot; USSD mode later, we designed the coordination logic — matching a farmer to a tractor operator, confirming a booking, settling payment — to work end-to-end over USSD first. The mobile and web apps for service providers are the layer built on top of that same core, not the other way around.</p>

        <h3>Why This Is Harder Than It Sounds</h3>
        <p>USSD sessions are stateless, character-limited, and can drop at any point in a multi-step flow. Every interaction has to be designed so a farmer can start a session, lose signal, and pick back up without losing their place or triggering a duplicate booking. That constraint shapes everything from our session state machine to how we structure confirmation messages.</p>

        <h3>Field Agents Close the Trust Gap</h3>
        <p>Technology alone doesn&apos;t solve rural onboarding. A USSD menu can&apos;t build trust the way a person can. That&apos;s why Field Agents are structural to MechAfrica, not a stopgap: they onboard farmers in person, explain how a booking works, and stay the human point of contact while the digital rails handle matching, scheduling, and mobile money settlement underneath.</p>

        <h3>Our Architectural Blueprint</h3>
        <ol>
          <li><strong>A single coordination core.</strong> Farmer requests, provider availability, and payment state live in one system that USSD, mobile, and web clients all read from — no divergent logic between channels.</li>
          <li><strong>Mobile money as the default rail.</strong> Payments settle through mobile money first, with reconciliation built to handle intermittent connectivity on both sides of a transaction.</li>
          <li><strong>Provider-facing tools for real-time visibility.</strong> Service providers get a live view of demand and matched jobs, so the coordination layer benefits both sides of the marketplace, not just the farmer.</li>
        </ol>
      </>
    )
  },
  {
    slug: "field-agents-human-layer-of-digital-trust",
    title: "Field Agents: The Human Layer Behind Digital Trust",
    category: "Product",
    date: "June 24, 2026",
    readTime: "6 min read",
    excerpt: "No app store download convinces a farmer to trust a new platform with their harvest. Here's why MechAfrica put people, not push notifications, at the center of onboarding.",
    isFeatured: false,
    coverImage: "https://picsum.photos/id/106/1200/800",
    content: (
      <>
        <h2>The Digital Divide Isn&apos;t Just About Signal</h2>
        <p>It&apos;s tempting to treat rural technology adoption as purely an infrastructure problem — get enough towers up, get smartphone prices down, and adoption follows. In practice, the bigger barrier is trust. A farmer weighing whether to book a tractor through a new platform is weighing real risk: a missed planting window, a wasted season, a payment sent into the void.</p>
        <p>MechAfrica&apos;s Field Agents exist to close that gap directly. They&apos;re trained, local, and present — walking farmers through their first booking, answering questions a menu can&apos;t anticipate, and standing behind the platform with a face and a name.</p>

        <h3>What Field Agents Actually Do</h3>
        <p>Onboarding is the obvious part, but Field Agents also handle much of the localized calibration a purely digital platform would struggle with: understanding which service providers are reliable in a given district, translating platform terms into the right local context, and surfacing feedback from the ground back into the product.</p>
      </>
    )
  },
  {
    slug: "designing-for-zero-data",
    title: "Designing for Zero Data: UX Lessons from the Field",
    category: "Design",
    date: "June 12, 2026",
    readTime: "5 min read",
    excerpt: "Every design decision costs kilobytes and cognitive load. What we learned building interfaces for users who may never load a full webpage.",
    isFeatured: false,
    coverImage: "https://picsum.photos/id/180/1200/800",
    content: (
      <>
        <h2>Design Constraints as Design Direction</h2>
        <p>A USSD menu gives you roughly 182 characters and a numeric keypad. There&apos;s no color, no imagery, no whitespace to lean on. Every word has to earn its place, and every flow has to be short enough to complete before a session times out.</p>
        <p>That constraint turned out to be clarifying rather than limiting. It forced us to define the actual decision a farmer needs to make at each step — book, confirm, pay — and strip everything else away. Those same flows, once proven at their most constrained, translate cleanly into the richer mobile and web experiences built for service providers and Field Agents.</p>
      </>
    )
  },
  {
    slug: "the-flywheel-products-services-talent",
    title: "The Flywheel: How Products, Services, and Talent Compound",
    category: "Strategy",
    date: "May 29, 2026",
    readTime: "6 min read",
    excerpt: "MechLink isn't three separate businesses stapled together. Here's how building MechAfrica, delivering client work, and training engineers reinforce each other.",
    isFeatured: false,
    coverImage: "https://picsum.photos/id/201/1200/800",
    content: (
      <>
        <h2>Three Pillars, One Engine</h2>
        <p>MechLink operates on three pillars: Products we build and own, Services delivered under contract, and Talent developed through hands-on training. Treated separately, these would just be three lines of business. Treated as a system, they compound.</p>
        <p>Building MechAfrica surfaces real, hard problems — offline-first sync, USSD session design, mobile money reconciliation at scale — that make our engineering team sharper across the board. That sharpened team is what we bring to client Services work. And Services work, in turn, funds and stress-tests the discipline we teach through our Talent program, whose best graduates go on to build on MechAfrica and client projects themselves.</p>
        <p>None of the three pillars is the &quot;real&quot; business propping up hobbies on the side. Each one makes the other two better.</p>
      </>
    )
  }
];

export const roles = [
  {
    slug: "mobile-ussd-engineer",
    title: "Mobile & USSD Engineer",
    department: "Engineering",
    location: "Accra, Ghana (Hybrid)",
    type: "Full-time",
    description: (
      <>
        <p>You&apos;ll work on the coordination core that powers MechAfrica across USSD, mobile, and web — the systems that let a farmer with a feature phone book a tractor as reliably as a service provider managing a fleet from a smartphone.</p>
        <h3>What you will do</h3>
        <ul>
          <li>Build and harden USSD session flows designed for intermittent connectivity and low-end devices.</li>
          <li>Develop React Native experiences for Field Agents and service providers.</li>
          <li>Design backend services for real-time matching, scheduling, and mobile money settlement.</li>
          <li>Work directly with Field Agents to translate on-the-ground feedback into product decisions.</li>
        </ul>
      </>
    )
  },
  {
    slug: "field-operations-lead",
    title: "Field Operations Lead — Farmer & Agent Network",
    department: "Operations",
    location: "Accra, Ghana (Hybrid)",
    type: "Full-time",
    description: (
      <>
        <p>You&apos;ll build and manage the Field Agent network that bridges MechAfrica&apos;s digital platform and the rural communities it serves — recruiting, training, and supporting the people who onboard farmers and service providers on the ground.</p>
        <h3>What you will do</h3>
        <ul>
          <li>Recruit, train, and support Field Agents across our launch districts in Ghana.</li>
          <li>Build localized trust with farmers and mechanization service providers.</li>
          <li>Feed on-the-ground insights back into product and engineering priorities.</li>
          <li>Own onboarding quality and retention metrics for the farmer and provider network.</li>
        </ul>
      </>
    )
  },
  {
    slug: "talent-program-mentor",
    title: "Talent Program Mentor — Software Engineering",
    department: "Talent",
    location: "Remote / Accra",
    type: "Contract",
    description: (
      <>
        <p>You&apos;ll mentor cohorts in MechLink&apos;s hands-on Talent program, helping aspiring engineers build real skills against real product and client work — with the best graduates going on to build on MechAfrica and MechLink client projects.</p>
        <h3>What you will do</h3>
        <ul>
          <li>Mentor cohort participants through structured, project-based curriculum.</li>
          <li>Review code and provide feedback grounded in production engineering standards.</li>
          <li>Help design practical exercises drawn from real MechAfrica and client challenges.</li>
          <li>Identify standout graduates for MechLink Product and Services teams.</li>
        </ul>
      </>
    )
  }
];
