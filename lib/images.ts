// Central registry for every content photo used across the site.
// Drop generated files at the paths below (see the image prompt sheet) —
// nothing else needs to change once a file lands at its path.

export const heroImages = {
  fieldAgentOnboarding: { src: "/images/hero/hero-field-agent-onboarding.png", alt: "Field Agent onboarding a farmer", width: 1448, height: 1086 },
  tractorOperator: { src: "/images/hero/hero-tractor-operator.png", alt: "Tractor operator in the field", width: 862, height: 1825 },
  farmlandRows: { src: "/images/hero/hero-farmland-rows.png", alt: "Farmland", width: 862, height: 1824 },
  providerDashboardUi: { src: "/images/hero/hero-provider-dashboard-ui.png", alt: "Service provider dashboard", width: 1536, height: 1024 },
  ruralLandscape: { src: "/images/hero/hero-rural-landscape.png", alt: "Rural landscape", width: 1448, height: 1086 },
  matchingMapUi: { src: "/images/hero/hero-matching-map-ui.png", alt: "Real-time provider matching map", width: 1448, height: 1086 },
  cropsCloseup: { src: "/images/hero/hero-crops-closeup.png", alt: "Crops", width: 863, height: 1823 },
  logisticsDelivery: { src: "/images/hero/hero-logistics-delivery.png", alt: "Logistics", width: 863, height: 1823 },
  harvestWide: { src: "/images/hero/hero-harvest-wide.png", alt: "Harvest", width: 1824, height: 862 },
} as const;

export const featureImages = {
  farmerProviderMatching: { src: "/images/features/feature-farmer-provider-matching.png", width: 1448, height: 1086 },
  offlineUssdAccess: { src: "/images/features/feature-offline-ussd-access.png", width: 1448, height: 1086 },
  fieldAgentNetwork: { src: "/images/features/feature-field-agent-network.png", width: 1448, height: 1086 },
  mobileMoneyPayments: { src: "/images/features/feature-mobile-money-payments.png", width: 1448, height: 1086 },
} as const;

export const talentImages = {
  cohortTraining: { src: "/images/talent/talent-cohort-training.png", alt: "Cohort-based, hands-on training session", width: 1254, height: 1254 },
  realClientWork: { src: "/images/talent/talent-real-client-work.png", alt: "Trainee reviewing real client work with a mentor", width: 1254, height: 1254 },
  pathwayMechlink: { src: "/images/talent/talent-pathway-mechlink.png", alt: "Talent program graduate joining MechLink", width: 1254, height: 1254 },
} as const;

export const blogCovers = {
  offlineFirstUssd: "/images/blog/blog-offline-first-ussd.png",
  fieldAgentsTrust: "/images/blog/blog-field-agents-trust.png",
  designingZeroData: "/images/blog/blog-designing-zero-data.png",
  flywheelProductsServicesTalent: "/images/blog/blog-flywheel-products-services-talent.png",
} as const;
