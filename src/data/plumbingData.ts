import heroImg from '../assets/images/hero_plumbing_doha_1794689216110.jpg';
import bathroomImg from '../assets/images/bathroom_renovation_qatar_1794689215494.jpg';
import commercialImg from '../assets/images/commercial_plumbing_system_1794689216317.jpg';
import heaterImg from '../assets/images/water_heater_maintenance_1794689216516.jpg';
import kitchenImg from '../assets/images/kitchen_drain_plumbing_1794689217139.jpg';
import emergencyImg from '../assets/images/service_emergency_plumbing_1794691899151.jpg';
import leakDetectionImg from '../assets/images/service_leak_detection_1794691899138.jpg';
import pipeInstallImg from '../assets/images/service_pipe_installation_1794691899404.jpg';
import drainCleaningImg from '../assets/images/service_drain_cleaning_1794691898329.jpg';
import toiletBasinImg from '../assets/images/service_toilet_basin_1794691901112.jpg';
import waterTankImg from '../assets/images/service_water_tank_1794691901149.jpg';
import tapMixerImg from '../assets/images/service_tap_mixer_1794691901550.jpg';
import showerFittingsImg from '../assets/images/service_shower_fittings_1794691900911.jpg';

export const IMAGES = {
  hero: heroImg,
  bathroom: bathroomImg,
  commercial: commercialImg,
  heater: heaterImg,
  kitchen: kitchenImg,
  emergency: emergencyImg,
  leakDetection: leakDetectionImg,
  pipeInstall: pipeInstallImg,
  drainCleaning: drainCleaningImg,
  toiletBasin: toiletBasinImg,
  waterTank: waterTankImg,
  tapMixer: tapMixerImg,
  showerFittings: showerFittingsImg,
} as const;

export const BRAND_LOGO =
  '/assets/aistudio/d422fa9a-aa57-4105-a5bc-5b0d379e8545_57b59014.jfif';

export const COMPANY_INFO = {
  brand: 'Fix Hub Qatar',
  phoneDisplay: '+974 3103 6428',
  phoneHref: 'tel:+97431036428',
  whatsappDisplay: '+974 3103 6428',
  whatsappNumber: '97431036428',
  email: 'fixhubqatar@gmail.com',
  address: 'Doha, Qatar.',
  hours: '24/7 Emergency Dispatch · Standard Service Sat–Thu, 07:00–21:00',
  warranty: '90-Day Workmanship Warranty',
  dispatchTime: '45 Min Avg. Doha Dispatch',
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg =
    'Hello Fix Hub Qatar, I would like to request a plumbing service or quotation.';
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    message || defaultMsg
  )}`;
}

export type ServiceCategory =
  | 'Emergency & Repairs'
  | 'Bathrooms & Kitchens'
  | 'Pipes, Tanks & Systems';

export interface PlumbingService {
  index: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  propertyScope: string;
  responseWindow: string;
  summary: string;
  description: string;
  qatarContext: string;
  image: string;
  imageAlt: string;
  checklist: string[];
  materials: string[];
  idealFor: string[];
}

export const PLUMBING_SERVICES: PlumbingService[] = [
  {
    index: '01',
    slug: 'emergency-plumbing-services',
    title: 'Emergency Plumbing Services',
    shortTitle: 'Emergency Plumbing',
    category: 'Emergency & Repairs',
    propertyScope: 'Residential & Commercial',
    responseWindow: '45 min Doha dispatch',
    summary:
      'Rapid 24/7 dispatch across Doha and surrounding areas for burst pipes, main valve failures, flooding, and sudden drain backups.',
    description:
      'When a pressurized supply line bursts or a sewage line backs up inside a villa or office, every minute increases structural water damage. Fix Hub Qatar operates fully equipped service vans ready around the clock to isolate mains, stop active leaks, clear severe blockages, and restore safe water supply without delay.',
    qatarContext:
      'High ambient summer temperatures and rooftop booster pump pressure fluctuations in Qatar frequently stress flexi-hoses and PPR joints. Our emergency teams carry heavy-duty replacement hoses, brass gate valves, and pressure regulators on board for first-visit resolution.',
    image: IMAGES.emergency,
    imageAlt: 'Fix Hub Qatar emergency plumber tightening brass main isolation valve on pressurized pipe in Doha',
    checklist: [
      'Immediate main isolation valve shut-off and pressure relief',
      'Burst pipe, split flexi-hose, and failed joint containment',
      'Emergency sewage and floor drain blockage extraction',
      'Post-repair hydrostatic pressure verification across affected lines',
    ],
    materials: [
      'WRAS-approved braided stainless steel flexi-connectors',
      'Heavy-duty brass isolation and non-return valves',
      'PN20 PPR pipe sections and thermal fusion couplings',
    ],
    idealFor: [
      'Villas and compounds experiencing sudden ceiling or shaft leaks',
      'Commercial kitchens, clinics, and retail outlets requiring zero downtime',
      'Apartment towers in West Bay, Lusail, and The Pearl',
    ],
  },
  {
    index: '02',
    slug: 'water-leakage-detection-and-repair',
    title: 'Water Leakage Detection and Repair',
    shortTitle: 'Leak Detection & Repair',
    category: 'Emergency & Repairs',
    propertyScope: 'Non-Invasive Diagnostics',
    responseWindow: 'Same-day inspection',
    summary:
      'Pinpoint acoustic and thermal leak detection behind tiled walls, under marble floors, and along concealed yard supply lines.',
    description:
      'Hidden water leaks raise Kahramaa utility bills, stain gypsum ceilings, and loosen stone flooring long before a puddle appears. Using calibrated acoustic sensors, thermal imaging, and line pressure testing, our specialists locate the exact breach without unnecessary demolition.',
    qatarContext:
      'Many villas in Doha feature imported marble and porcelain tiling over concrete screeds. Targeted acoustic localization ensures only the exact tile or drywall access point is opened for permanent pipe repair.',
    image: IMAGES.leakDetection,
    imageAlt: 'Plumbing specialist scanning tiled bathroom wall with thermal imaging camera and acoustic leak sensor',
    checklist: [
      'Cold and hot water circuit static pressure drop test',
      'Thermal and acoustic pinpointing behind walls and beneath slabs',
      'Targeted access repair with minimal tile or plaster disruption',
      'Final pressure hold confirmation and moisture check',
    ],
    materials: [
      'Calibrated acoustic leak detection transducers',
      'Digital manometers and pressure test pumps',
      'High-pressure PPR and copper repair couplings',
    ],
    idealFor: [
      'Unexpectedly high Kahramaa water bills or nonstop booster pump cycling',
      'Dampness, efflorescence, or peeling paint near bathroom shafts',
      'Underground villa courtyard and pool-room supply line drops',
    ],
  },
  {
    index: '03',
    slug: 'pipe-installation-repair-and-replacement',
    title: 'Pipe Installation, Repair and Replacement',
    shortTitle: 'Pipe Installation & Repair',
    category: 'Pipes, Tanks & Systems',
    propertyScope: 'PPR, PEX, Copper & PVC',
    responseWindow: 'Scheduled or urgent',
    summary:
      'Full cold/hot supply piping, main riser replacements, manifold balancing, and drainage pipework engineered for Qatar water pressure.',
    description:
      'Whether upgrading corroded galvanized pipes in an older villa or routing new supply and waste lines for an interior fit-out, we engineer clean, pressure-balanced pipework built to handle continuous booster pump loads and thermal expansion.',
    qatarContext:
      'Exposure to intense solar heat on roofs and in external shafts degrades uninsulated piping over time. We install UV-stabilized insulation and proper expansion loops suited to Qatar building conditions.',
    image: IMAGES.pipeInstall,
    imageAlt: 'Precision thermal-fusion PPR and copper water supply piping with brass isolation valves',
    checklist: [
      'System layout sizing and pressure-loss assessment',
      'Thermal fusion PPR, press-fit copper, or solvent-welded uPVC installation',
      'UV-resistant elastomeric thermal insulation on exposed rooftop runs',
      '1.5x working pressure hydrostatic test prior to commissioning',
    ],
    materials: [
      'German-grade PN20 PPR hot and cold supply pipes',
      'Heavy-wall uPVC drainage and vent piping',
      'Closed-cell UV-jacketed pipe insulation and stainless clamps',
    ],
    idealFor: [
      'Replacing rust-colored water lines in established Doha neighborhoods',
      'New villa extensions, majlis builds, and commercial unit fit-outs',
      'Correcting low water flow across multi-story residences',
    ],
  },
  {
    index: '04',
    slug: 'blocked-drain-and-drainage-cleaning',
    title: 'Blocked Drain and Drainage Cleaning',
    shortTitle: 'Blocked Drain Cleaning',
    category: 'Emergency & Repairs',
    propertyScope: 'Indoor & Mainlines',
    responseWindow: 'Same-day clearance',
    summary:
      'Mechanical rodding, high-pressure jetting, and grease-trap clearance for sinks, floor traps, showers, and main sewer lines.',
    description:
      'Recurring slow drains, gurgling floor traps, and foul odors point to grease buildup, scale, or sand intrusion inside waste lines. We clear the entire bore of the pipe rather than punching a temporary hole with harsh chemicals that damage seals.',
    qatarContext:
      'Fine desert dust, hair, and cooking fats combine inside shallow floor-trap gullies across Doha homes and restaurants. Our rotary descalers and hydro-jetting nozzles restore full drainage flow cleanly.',
    image: IMAGES.drainCleaning,
    imageAlt: 'Uniformed plumbing technician operating motorized rotary drain cleaning machine on outdoor floor trap',
    checklist: [
      'Floor trap, P-trap, and gully cover disassembly and descaling',
      'Motorized rotary cable snaking for interior waste lines',
      'High-pressure water jetting for exterior inspection chambers',
      'Odor-seal verification and flow-rate testing',
    ],
    materials: [
      'Motorized drain augers with interchangeable cutter heads',
      'High-pressure hydro-jetting hoses for mainlines',
      'Heavy-duty brass and stainless anti-odor floor drain inserts',
    ],
    idealFor: [
      'Blocked kitchen sinks, dishwashers, and commercial grease lines',
      'Overflowing bathroom floor traps and slow shower wastes',
      'Villa perimeter manhole and main sewer line maintenance',
    ],
  },
  {
    index: '05',
    slug: 'bathroom-plumbing-and-renovation',
    title: 'Bathroom Plumbing and Renovation',
    shortTitle: 'Bathroom Plumbing',
    category: 'Bathrooms & Kitchens',
    propertyScope: 'Full Rough-In & Fit-Out',
    responseWindow: 'Project scheduled',
    summary:
      'Complete first-fix and second-fix bathroom plumbing including concealed cisterns, linear shower drains, mixers, and waterproofing tie-ins.',
    description:
      'A modern bathroom depends on exact rough-in depths, dead-level waste gradients, and leak-free concealed valves before a single tile is laid. We work alongside homeowners and interior contractors to deliver clean, quiet, hotel-grade bathroom plumbing.',
    qatarContext:
      'We handle European concealed frame systems (such as Geberit and Grohe standards) common across Lusail, The Pearl, and West Bay apartments, ensuring accessible service plates and zero wall-cavity seepage.',
    image: IMAGES.bathroom,
    imageAlt: 'Modern renovated bathroom with concealed cistern toilet and brushed mixer taps in Doha',
    checklist: [
      'First-fix hot/cold PPR supply routing and concealed mixer body leveling',
      'Concealed WC cistern frame anchoring and flush volume calibration',
      'Linear and point shower drain slope alignment with wet-area membrane',
      'Final silicone sealing, fixture commissioning, and pressure test',
    ],
    materials: [
      'Concealed WC carrier frames and acoustic waste sleeves',
      'Anti-microbial sanitary silicone and stainless braided connectors',
      'Pressure-tested concealed brass diverter bodies',
    ],
    idealFor: [
      'Master bathroom upgrades in villas and compound residences',
      'Apartment bathroom modernization in Lusail and The Pearl',
      'Guest washroom and majlis ablution area installations',
    ],
  },
  {
    index: '06',
    slug: 'kitchen-plumbing-solutions',
    title: 'Kitchen Plumbing Solutions',
    shortTitle: 'Kitchen Plumbing',
    category: 'Bathrooms & Kitchens',
    propertyScope: 'Residential & Catering',
    responseWindow: 'Same-day or scheduled',
    summary:
      'Sink and pull-out mixer installations, RO water filter hookups, dishwasher/appliance supply lines, and grease-resistant waste piping.',
    description:
      'Your kitchen relies on tightly coordinated under-counter supply valves, appliance tees, trap clearances, and clean drainage. We install new kitchen sinks, filtration units, and commercial prep lines with tidy, accessible shut-off isolation.',
    qatarContext:
      'Under-sink reverse osmosis (RO) drinking water systems and chilled water lines are essential in Qatar households. We integrate RO feed valves and drain saddles without compromising main trap seals.',
    image: IMAGES.kitchen,
    imageAlt: 'Contemporary kitchen sink, high-arc chrome mixer tap, and under-counter plumbing',
    checklist: [
      'Undermount or drop-in sink cutout sealing and basket strainer mounting',
      'Dedicated angle valves for hot/cold mixer, dishwasher, and fridge ice line',
      'RO drinking water filter tap installation and pressure-regulated feed',
      'Deep-seal P-trap configuration to prevent cabinet odors',
    ],
    materials: [
      'Quarter-turn chrome brass angle valves',
      'Food-grade 1/4-inch RO tubing and push-fit isolation tees',
      'Heavy-gauge polypropylene sink traps with appliance spigots',
    ],
    idealFor: [
      'New kitchen cabinetry handovers and appliance upgrades',
      'Replacing dripping under-sink traps and corroded angle valves',
      'Adding RO drinking water taps and ice-maker supply lines',
    ],
  },
  {
    index: '07',
    slug: 'toilet-basin-and-sink-installation',
    title: 'Toilet, Basin and Sink Installation',
    shortTitle: 'Toilet & Basin Installation',
    category: 'Bathrooms & Kitchens',
    propertyScope: 'Sanitaryware Fit-Out',
    responseWindow: 'Same-day installation',
    summary:
      'Precision mounting and sealing for wall-hung and floor-mounted toilets, shattaf bidet sprays, vessel basins, and vanity sinks.',
    description:
      'Improperly seated toilets rock, leak sewer gas, and stain floor grout; poorly leveled basins pool water around the counter. Our plumbers align wax/rubber pan collars, concealed bolts, and shattaf isolation valves cleanly.',
    qatarContext:
      'Every bathroom in Qatar relies on durable shattaf (handheld bidet spray) installations. We pair high-pressure stainless braided hoses with dedicated quarter-turn isolation valves to prevent overnight hose bursts.',
    image: IMAGES.toiletBasin,
    imageAlt: 'Wall-hung porcelain toilet with dual-flush plate, stainless shattaf bidet spray, and washbasin vanity',
    checklist: [
      'Floor or wall-hung WC pan collar alignment and anti-leak flange seal',
      'Dual-flush cistern mechanism calibration and refill float adjustment',
      'Shattaf bidet spray installation with pressure-rated isolation valve',
      'Washbasin bottle trap, pop-up waste, and waterproof perimeter sealing',
    ],
    materials: [
      'EPDM multi-lip WC pan connectors and heavy-duty anchor bolts',
      'High-pressure stainless steel shattaf hoses and brass holders',
      'Chrome brass bottle traps and mold-resistant neutral-cure silicone',
    ],
    idealFor: [
      'Replacing cracked toilets, noisy cisterns, or leaking flush valves',
      'Upgrading vanity washbasins in home and office restrooms',
      'Installing burst-resistant shattaf assemblies across every bathroom',
    ],
  },
  {
    index: '08',
    slug: 'water-heater-installation-and-repair',
    title: 'Water Heater Installation and Repair',
    shortTitle: 'Water Heater Service',
    category: 'Pipes, Tanks & Systems',
    propertyScope: 'Electric & Central Heaters',
    responseWindow: 'Same-day service',
    summary:
      'Installation, thermostat calibration, heating element replacement, and safety valve servicing for wall-mounted and central water heaters.',
    description:
      'Whether your electric storage heater is tripping the breaker, delivering lukewarm water, or dripping from its pressure-relief valve, we diagnose the electrical, thermal, and hydraulic components safely in one visit.',
    qatarContext:
      'Hard mineral deposits and wide seasonal ambient temperature swings in Doha shorten heating element and magnesium anode lifespans. Annual descaling and safety valve testing keep heaters efficient and safe.',
    image: IMAGES.heater,
    imageAlt: 'Technician testing water heater copper connections and pressure gauge',
    checklist: [
      'Thermostat, heating element, and thermal cut-out continuity testing',
      'Pressure & temperature (T&P) safety relief valve inspection and replacement',
      'Sacrificial magnesium anode check and sediment tank flushing',
      'New horizontal, vertical, or central cylinder mounting and commissioning',
    ],
    materials: [
      'OEM-grade copper heating elements and dual-pole thermostats',
      '7-bar brass non-return and pressure relief safety valves',
      'Heavy-duty anchor brackets for concrete and blockwork walls',
    ],
    idealFor: [
      'Heaters tripping RCD circuit breakers or failing to heat water',
      'Leaking overhead ceiling heaters in apartments and villas',
      'Seasonal switching and preventive servicing before winter months',
    ],
  },
  {
    index: '09',
    slug: 'water-tank-installation-and-maintenance',
    title: 'Water Tank Installation and Maintenance',
    shortTitle: 'Water Tank Maintenance',
    category: 'Pipes, Tanks & Systems',
    propertyScope: 'Rooftop & Ground Tanks',
    responseWindow: 'Scheduled sanitization',
    summary:
      'Insulated water tank installation, booster pump pairing, float-valve replacement, and hygienic tank cleaning and disinfection.',
    description:
      'Your building water tank holds the water your family or staff uses daily. We install multi-layer UV-insulated polyethylene tanks, service mechanical and electronic float valves, balance booster pumps, and scrub and sanitize tanks thoroughly.',
    qatarContext:
      'In Qatar summers, uninsulated rooftop tanks overheat water and harbor sediment buildup. We fit insulated tank covers, automatic water chillers/cooling connections, and food-grade disinfection routines.',
    image: IMAGES.waterTank,
    imageAlt: 'Insulated rooftop potable water tank, stainless booster pump, and float valve assembly in Doha',
    checklist: [
      'Complete tank drain-down, sediment vacuuming, and high-pressure interior wash',
      'Food-safe chlorine sanitization and pH/clarity rinse verification',
      'Brass or stainless float valve, overflow screen, and breather check',
      'Booster pump pressure switch, expansion vessel, and dry-run protection setup',
    ],
    materials: [
      '4-layer UV-stabilized insulated potable water tanks',
      'Heavy-duty brass equilibrium float valves and non-return foot valves',
      'Approved potable-safe tank sanitization solutions',
    ],
    idealFor: [
      'Villas and compounds needing semi-annual tank cleaning in Doha',
      'Overheating or overflowing rooftop tanks with stuck float valves',
      'Low shower pressure requiring booster pump calibration or replacement',
    ],
  },
  {
    index: '10',
    slug: 'tap-faucet-and-mixer-replacement',
    title: 'Tap, Faucet and Mixer Replacement',
    shortTitle: 'Tap & Mixer Replacement',
    category: 'Bathrooms & Kitchens',
    propertyScope: 'All Brands & Finishes',
    responseWindow: 'Same-day replacement',
    summary:
      'Clean, scratch-free replacement of basin mixers, kitchen pull-out faucets, concealed shower cartridges, and garden bib taps.',
    description:
      'A dripping tap wastes hundreds of liters per week and leaves calcified stains on stone counters. We replace worn ceramic cartridges, swap outdated mixers without damaging chrome or matte black finishes, and upgrade stiff shut-off valves.',
    qatarContext:
      'Mineral scaling in pressurized hot/cold lines commonly jams single-lever cartridges. We service Grohe, Hansgrohe, Kohler, Kludi, and standard regional mixer lines with exact-fit cartridges and aerators.',
    image: IMAGES.tapMixer,
    imageAlt: 'Plumber installing brushed chrome single-lever basin mixer faucet with precision wrench',
    checklist: [
      'Old tap removal without chipping marble, quartz, or porcelain',
      'Ceramic cartridge or thermostatic valve core replacement',
      'Flow-restrictor aerator cleaning and hot/cold supply line flushing',
      'Zero-drip leak inspection under full booster pump pressure',
    ],
    materials: [
      '35mm and 40mm European-standard ceramic mixer cartridges',
      'Soft-jaw protective wrenches for brushed brass and matte black finishes',
      'Stainless braided supply tails with EPDM inner cores',
    ],
    idealFor: [
      'Dripping bathroom basin taps and stiff shower mixer levers',
      'Upgrading kitchen sinks to pull-down spray or filtered dual-flow faucets',
      'Exterior villa courtyard hose bibs and driver-room taps',
    ],
  },
  {
    index: '11',
    slug: 'shower-and-sanitary-fittings-installation',
    title: 'Shower and Sanitary Fittings Installation',
    shortTitle: 'Shower & Sanitary Fittings',
    category: 'Bathrooms & Kitchens',
    propertyScope: 'Rain Showers & Accessories',
    responseWindow: 'Same-day or scheduled',
    summary:
      'Installation of concealed rain shower heads, thermostatic mixer bars, sliding rail sets, glass-partition drains, and bathroom hardware.',
    description:
      'Overhead rain showers and thermostatic mixers require balanced hot/cold pressure and level wall anchoring to perform properly. We mount concealed ceiling arms, exposed thermostatic bars, and sanitary accessories cleanly into tile and marble.',
    qatarContext:
      'Uneven pressure between rooftop cold tanks and heated lines causes sudden temperature swings in rain showers. We check pressure balance and install check-valves so water temperature stays steady.',
    image: IMAGES.showerFittings,
    imageAlt: 'Walk-in rain shower with ceiling rainfall head, concealed thermostatic mixer, and handheld rail',
    checklist: [
      'Hot and cold pressure balancing verification for thermostatic mixers',
      'Diamond-core tile drilling without cracking porcelain or natural stone',
      'Ceiling rain arm, diverter, and hand-shower bracket alignment',
      'Towel warmers, robe hooks, and sanitary accessory anchoring',
    ],
    materials: [
      'Diamond wet-core tile bits for porcelain and marble',
      'Stainless steel wall anchors and waterproof bushing seals',
      'Brass non-return check valves for thermostatic mixer protection',
    ],
    idealFor: [
      'Upgrading standard showers to overhead rain and handheld systems',
      'Resolving fluctuating hot/cold shower temperatures',
      'Post-handover sanitary accessory fit-outs in new apartments',
    ],
  },
  {
    index: '12',
    slug: 'plumbing-inspection-and-preventive-maintenance',
    title: 'Plumbing Inspection and Preventive Maintenance',
    shortTitle: 'Inspection & Maintenance',
    category: 'Pipes, Tanks & Systems',
    propertyScope: 'Villas, Towers & Facilities',
    responseWindow: 'Scheduled audit',
    summary:
      'Comprehensive multi-point plumbing health checks, pre-handover snagging inspections, and scheduled preventive maintenance plans.',
    description:
      'Preventive inspections catch weeping angle valves, aging flexi-hoses, failing tank floats, and silent toilet cistern leaks before they become costly emergency callouts. We deliver a clear condition checklist with prioritized recommendations.',
    qatarContext:
      'Ideal before moving into a leased villa in Al Waab, handing over an investment apartment in Lusail, or preparing a commercial building for summer peak water demand.',
    image: IMAGES.hero,
    imageAlt: 'Plumbing technician performing preventive manifold pressure and valve inspection in Doha',
    checklist: [
      'Full pressure check across booster pumps, PRVs, and main risers',
      'Every under-sink flexi-hose, angle valve, and shattaf hose inspection',
      'WC cistern dye test to uncover silent flapper/fill-valve water loss',
      'Water heater safety valve, thermostat, and roof tank float check',
    ],
    materials: [
      'Calibrated digital water pressure gauges',
      'Non-toxic cistern leak detection dye tablets',
      'Written digital inspection report with photographic evidence',
    ],
    idealFor: [
      'Pre-move-in villa and apartment snagging across Doha',
      'Landlords managing compound properties between tenancies',
      'Homeowners seeking peace of mind prior to extended summer travel',
    ],
  },
  {
    index: '13',
    slug: 'residential-and-commercial-plumbing-solutions',
    title: 'Residential and Commercial Plumbing Solutions',
    shortTitle: 'Residential & Commercial',
    category: 'Pipes, Tanks & Systems',
    propertyScope: 'End-to-End Contracts',
    responseWindow: 'Dedicated team',
    summary:
      'Tailored plumbing installations, booster pump stations, AMC contracts, and facility support for private homes and commercial properties in Qatar.',
    description:
      'From single-family villas to multi-tenant office floors, clinics, cafés, and warehouses, Fix Hub Qatar scales dedicated technicians and stocked service vehicles to match your property schedule and compliance expectations.',
    qatarContext:
      'Commercial operators in Doha require minimal customer disruption and clear invoicing; residential clients value respectful, tidy technicians in their family homes. Our teams are trained specifically for both environments.',
    image: IMAGES.commercial,
    imageAlt: 'Commercial mechanical plant room with insulated potable water pipelines and booster pumps',
    checklist: [
      'Dedicated site assessment and transparent scope-of-work quotation',
      'Scheduled preventive maintenance visits (quarterly or semi-annual AMC)',
      'Priority emergency response SLA for commercial contract clients',
      'Complete work-order logs and clean job-site handover',
    ],
    materials: [
      'Commercial-grade multi-stage booster pumps and expansion tanks',
      'WRAS/BS-compliant valves, backflow preventers, and manifolds',
      'Heavy-duty grease interceptors and commercial drain assemblies',
    ],
    idealFor: [
      'Residential compounds, private villas, and property managers',
      'Offices, medical clinics, restaurants, salons, and retail stores',
      'Industrial facilities and staff accommodations across Qatar',
    ],
  },
];

export interface ServiceArea {
  name: string;
  zone: string;
  dispatch: string;
  propertyTypes: string;
  notes: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'West Bay & Diplomatic Area',
    zone: 'Central Doha',
    dispatch: '30–40 min',
    propertyTypes: 'High-rise towers, corporate offices, hotels, embassies',
    notes: 'Booster pump pressure balancing, concealed cistern servicing, and commercial restroom maintenance.',
  },
  {
    name: 'The Pearl-Qatar',
    zone: 'North Doha',
    dispatch: '35–45 min',
    propertyTypes: 'Luxury apartments, townhouses, waterfront retail & cafés',
    notes: 'Concealed European bathroom fittings, acoustic leak detection, and kitchen appliance plumbing.',
  },
  {
    name: 'Lusail City',
    zone: 'Lusail & Fox Hills',
    dispatch: '35–50 min',
    propertyTypes: 'Modern residential towers, commercial plazas, new villas',
    notes: 'Pre-handover snagging inspections, thermostatic shower balancing, and commercial AMC support.',
  },
  {
    name: 'Al Sadd, Bin Mahmoud & Musheireb',
    zone: 'Inner Doha',
    dispatch: '25–35 min',
    propertyTypes: 'Apartments, clinics, restaurants, retail shops, offices',
    notes: '24/7 emergency callouts, grease-line drain clearing, and fast tap/heater replacements.',
  },
  {
    name: 'Al Waab, Al Aziziyah & Aspire Zone',
    zone: 'West Doha',
    dispatch: '30–45 min',
    propertyTypes: 'Family compounds, standalone villas, schools, sports facilities',
    notes: 'Rooftop water tank cleaning, villa booster pumps, courtyard pipe repairs, and bathroom renovations.',
  },
  {
    name: 'Al Gharrafa, Madinat Khalifa & Al Duhail',
    zone: 'Northwest Doha',
    dispatch: '35–45 min',
    propertyTypes: 'Private villas, residential compounds, local businesses',
    notes: 'Central water heater servicing, main pipe replacements, and preventive annual checkups.',
  },
  {
    name: 'Al Wakrah & Al Wukair',
    zone: 'South Qatar',
    dispatch: '40–55 min',
    propertyTypes: 'Ezdan villages, coastal villas, commercial hubs',
    notes: 'Full residential maintenance, tank float valves, leak repairs, and drainage clearance.',
  },
  {
    name: 'Al Rayyan & Muaither',
    zone: 'Greater Doha West',
    dispatch: '35–50 min',
    propertyTypes: 'Large family villas, majlis extensions, workshops',
    notes: 'Multi-bathroom fit-outs, new PPR piping runs, and underground water leak diagnostics.',
  },
  {
    name: 'Industrial Area, Mesaieed & Al Khor',
    zone: 'Industrial & North/South',
    dispatch: 'Scheduled / Urgent Dispatch',
    propertyTypes: 'Warehouses, industrial facilities, staff accommodations, coastal homes',
    notes: 'Heavy-duty piping, high-capacity water tank banks, pump stations, and facility maintenance.',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  service: string;
  quote: string;
  outcome: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Tariq Al-Mansoori',
    role: 'Villa Owner',
    location: 'Al Waab, Doha',
    service: 'Water Leakage Detection & Repair',
    quote:
      'Our rooftop booster pump was running every two minutes and our water bill spiked. Fix Hub Qatar traced the concealed leak beneath our ground-floor corridor using acoustic equipment, replaced one faulty PPR elbow, and left the floor spotless.',
    outcome: 'Leak isolated with only one tile lifted; water consumption returned to normal within 24 hours.',
  },
  {
    name: 'Nadia Haddad',
    role: 'Operations Coordinator',
    location: 'West Bay Commercial Tower',
    service: 'Commercial Plumbing & Drain Cleaning',
    quote:
      'We needed urgent after-hours drain clearance and sensor tap replacements across three office washrooms before morning staff arrival. Their technicians arrived on time, worked quietly, and provided a clear report for facility management.',
    outcome: 'Zero daytime business disruption and all 6 washroom lines cleared in a single night shift.',
  },
  {
    name: 'Faisal Al-Kuwari',
    role: 'Apartment Resident',
    location: 'The Pearl-Qatar',
    service: 'Bathroom Plumbing & Concealed Cistern',
    quote:
      'Two other technicians wanted to break our bathroom wall tiles to fix a constantly running concealed toilet cistern. The Fix Hub Qatar plumber serviced the internal valve cleanly through the flush plate opening in under an hour.',
    outcome: 'Saved wall tiling completely; cistern flush and shattaf isolation valve upgraded on the spot.',
  },
  {
    name: 'Rami Khoury',
    role: 'Restaurant Manager',
    location: 'Al Sadd, Doha',
    service: 'Kitchen Plumbing & Grease Drain Clearance',
    quote:
      'A backed-up prep sink line during lunch service can shut down a kitchen. Fix Hub Qatar reached our branch in 35 minutes, hydro-jetted the main waste line, and fitted a proper cleanout tee so ongoing maintenance stays effortless.',
    outcome: 'Kitchen drainage restored within 75 minutes of initial call.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'How quickly can Fix Hub Qatar reach my home or office for a plumbing emergency?',
    answer:
      'For urgent leaks, burst pipes, or severe drain blockages in Doha, our mobile teams target a 30 to 50 minute arrival depending on traffic and district. We operate 24/7 dispatch lines via phone and WhatsApp.',
  },
  {
    question: 'Do you provide a clear price estimate before starting plumbing work?',
    answer:
      'Yes. Once our technician inspects the issue on site, you receive a transparent breakdown of labor and required materials before any repair begins. There are no hidden callout surprises.',
  },
  {
    question: 'Can you locate a concealed water leak without breaking all my bathroom or floor tiles?',
    answer:
      'Yes. We use pressure isolation tests, thermal cameras, and acoustic listening equipment to pinpoint concealed pipe leaks accurately, limiting access work strictly to the exact repair spot.',
  },
  {
    question: 'How often should rooftop water tanks be cleaned in Qatar?',
    answer:
      'Due to dust and warm summer water temperatures, we recommend professional tank draining, scrubbing, and food-safe sanitization every 6 months for residential villas and quarterly for commercial buildings.',
  },
  {
    question: 'Do you handle both residential villas and commercial maintenance contracts?',
    answer:
      'Yes. Fix Hub Qatar serves individual apartments and family villas as well as offices, clinics, restaurants, retail shops, and warehouses with both on-demand callouts and scheduled Annual Maintenance Contracts (AMC).',
  },
  {
    question: 'What warranty do you offer on plumbing repairs and installations?',
    answer:
      'Every repair and installation completed by Fix Hub Qatar is backed by our 90-day workmanship warranty, alongside manufacturer warranties on approved PPR pipes, brass valves, water heaters, and booster pumps.',
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'protecting-rooftop-water-tanks-qatar-summer',
    title: 'How to Protect Your Rooftop Water Tank During Qatar Summers',
    category: 'Water Tanks & Quality',
    readTime: '4 min read',
    publishedDate: 'October 2026',
    image: IMAGES.waterTank,
    imageAlt: 'Insulated rooftop water storage tank and booster pump system maintained in Doha',
    excerpt:
      'High UV exposure and 45°C+ roof temperatures in Doha can degrade tank fittings and encourage sediment buildup. Here is a practical 6-month maintenance checklist.',
    sections: [
      {
        heading: 'Why Summer Heat Affects Tank Integrity',
        body: 'In Doha and across Qatar, rooftop tanks absorb intense solar radiation from May through October. Warm, stagnant water accelerates scale formation on float valves and weakens uninsulated external supply risers.',
      },
      {
        heading: 'Three Checks Every Homeowner Should Schedule',
        body: 'First, verify that your tank lid gasket seals tightly to keep desert dust and insects out. Second, inspect the mechanical float valve to ensure water shuts off cleanly below the overflow pipe. Third, schedule a full drain-down, sediment scrub, and potable-safe sanitization every six months.',
      },
      {
        heading: 'Insulating Exposed Roof Risers',
        body: 'Adding UV-jacketed closed-cell insulation around rooftop PPR pipes and installing a shaded tank cover lowers incoming tap water temperatures noticeably and extends valve life.',
      },
    ],
  },
  {
    slug: 'signs-of-hidden-water-leaks-in-doha-villas',
    title: '5 Early Signs of a Hidden Water Leak in Your Villa or Apartment',
    category: 'Leak Detection',
    readTime: '5 min read',
    publishedDate: 'September 2026',
    image: IMAGES.leakDetection,
    imageAlt: 'Thermal imaging and acoustic water leak detection behind tiled bathroom wall',
    excerpt:
      'Before water stains appear on gypsum ceilings, your booster pump and water meter leave clear warning signs. Learn what to watch for.',
    sections: [
      {
        heading: '1. Booster Pump Short-Cycling',
        body: 'If your rooftop or ground booster pump switches on for a few seconds every few minutes while every tap and appliance is closed, pressure is escaping somewhere in the supply network—often through a weeping toilet cistern or an underground hairline crack.',
      },
      {
        heading: '2. Warm Patches Under Floor Tiles',
        body: 'A hot-water line leak beneath porcelain or marble flooring often creates a noticeable warm spot underfoot long before grout darkens.',
      },
      {
        heading: '3. Non-Invasive Acoustic Verification',
        body: 'Avoid exploratory demolition. Acoustic and pressure testing isolates whether the drop sits in the cold circuit, hot circuit, or garden irrigation loop before a single tile is touched.',
      },
    ],
  },
  {
    slug: 'preventing-blocked-kitchen-drains-without-harsh-chemicals',
    title: 'Why Chemical Drain Openers Damage Pipes—and What Works Instead',
    category: 'Drainage Care',
    readTime: '4 min read',
    publishedDate: 'August 2026',
    image: IMAGES.kitchen,
    imageAlt: 'Modern residential kitchen sink and chrome mixer faucet',
    excerpt:
      'Pouring caustic liquids down a slow kitchen sink can warp PVC traps and corrode chrome waste fittings. Discover safer mechanical clearing habits.',
    sections: [
      {
        heading: 'The Risk to Under-Sink Traps and Seals',
        body: 'Acid and caustic drain cleaners generate intense exothermic heat when trapped inside standing water. In modern uPVC and polypropylene waste traps, that heat softens rubber O-rings and causes delayed under-cabinet leaks.',
      },
      {
        heading: 'Mechanical Descaling & Hot Flush Routines',
        body: 'Fitting a fine mesh basket strainer catches food solids before they enter the P-trap. When grease solidifies further down the horizontal run, motorized rotary snaking or hydro-jetting scours the pipe wall cleanly without chemical residue.',
      },
    ],
  },
  {
    slug: 'water-heater-safety-valves-annual-checkup',
    title: 'Water Heater Maintenance: Why the Safety Relief Valve Matters',
    category: 'Water Heaters',
    readTime: '3 min read',
    publishedDate: 'July 2026',
    image: IMAGES.heater,
    imageAlt: 'Technician checking domestic water heater copper lines and pressure relief valve',
    excerpt:
      'Many ceiling-mounted water heaters in Qatar run year-round without inspection until they drip or trip breakers. A 20-minute valve check prevents ceiling damage.',
    sections: [
      {
        heading: 'Understanding the Pressure & Non-Return Valve',
        body: 'Every pressurized storage water heater relies on a combined non-return and pressure-relief valve on the cold inlet. Over time, mineral scale locks the internal spring, preventing safe pressure discharge.',
      },
      {
        heading: 'Annual Descaling and Thermostat Calibration',
        body: 'Setting your thermostat to 55°C–60°C prevents excessive lime buildup while maintaining hygienic hot water. Having a qualified technician flush sediment and test the thermostat annually avoids unexpected cold showers and ceiling leaks.',
      },
    ],
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Call or WhatsApp Inquiry',
    description:
      'Reach our Doha dispatch desk by phone or WhatsApp, describe your plumbing issue or project, and receive an immediate arrival window.',
  },
  {
    step: '02',
    title: 'On-Site Inspection & Upfront Quote',
    description:
      'A uniformed technician diagnoses the fault accurately with calibrated tools and provides a clear, itemized quote before starting work.',
  },
  {
    step: '03',
    title: 'Precision Repair or Installation',
    description:
      'We complete the repair or fit-out using pressure-rated PPR, brass, and European-standard components while protecting surrounding finishes.',
  },
  {
    step: '04',
    title: 'Pressure Test & Clean Handover',
    description:
      'Every repair undergoes leak and pressure verification, the work area is left spotless, and your job is covered by our 90-day warranty.',
  },
];
