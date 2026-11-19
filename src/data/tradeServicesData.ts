import { RoutePath } from '../types/navigation';
import { IMAGES } from './plumbingData';
import electricImg from '../assets/images/trade_electric_service_1795110282550.jpg';
import satelliteImg from '../assets/images/trade_satellite_repair_1795110282638.jpg';
import paintingImg from '../assets/images/trade_painting_service_1795110283350.jpg';
import carpentryImg from '../assets/images/trade_carpentry_service_1795110282368.jpg';
import tvImg from '../assets/images/trade_tv_installation_1795110282513.jpg';
import handymanImg from '../assets/images/trade_handyman_service_1795110282274.jpg';
import acImg from '../assets/images/trade_ac_maintenance_1795110282693.jpg';
import weldingImg from '../assets/images/trade_welding_service_1795110283276.jpg';

export interface OurServiceMenuItem {
  index: string;
  label: string;
  slug: string;
  route: RoutePath;
  propertyScope: string;
  responseWindow: string;
  summary: string;
  image: string;
  imageAlt: string;
}

export interface TradeServiceDetail {
  slug: string;
  label: string;
  propertyScope: string;
  responseWindow: string;
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  qatarContext: string;
  checklist: string[];
  idealFor: string[];
}

export const OUR_SERVICES_MENU: OurServiceMenuItem[] = [
  {
    index: '01',
    label: 'Plumbing Service',
    slug: 'plumbing-service',
    route: { page: 'plumbing-service' },
    propertyScope: 'Residential & Commercial',
    responseWindow: '45 min Doha dispatch',
    summary:
      'Emergency pipe leak repairs, acoustic leak detection, drain cleaning, water heaters, rooftop tanks, bathroom & kitchen plumbing across Qatar.',
    image: IMAGES.hero,
    imageAlt: 'Fix Hub Qatar plumber inspecting pressurized manifold piping in Doha',
  },
  {
    index: '02',
    label: 'Electric Service',
    slug: 'electric-service',
    route: { page: 'trade-service', slug: 'electric-service' },
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Same-day Doha dispatch',
    summary:
      'Distribution board diagnostics, RCCB breaker trips, socket and isolator replacement, indoor/outdoor lighting, and pump wiring.',
    image: electricImg,
    imageAlt: 'Electrician testing residential circuit breaker panel in Doha apartment',
  },
  {
    index: '03',
    label: 'Satellite Installation & Repair',
    slug: 'satellite-installation-and-repair',
    route: { page: 'trade-service', slug: 'satellite-installation-and-repair' },
    propertyScope: 'Villas, Apartments & Compounds',
    responseWindow: 'Same-day Doha dispatch',
    summary:
      'Precision rooftop dish mounting, digital signal alignment, multi-LNB setups, and weather-sealed RG6 cabling across Doha.',
    image: satelliteImg,
    imageAlt: 'Technician aligning rooftop satellite dish with digital signal meter in Doha Qatar',
  },
  {
    index: '04',
    label: 'Painting service',
    slug: 'painting-service',
    route: { page: 'trade-service', slug: 'painting-service' },
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Scheduled & express slots',
    summary:
      'Interior and exterior painting, moisture-damaged ceiling restoration, gypsum crack repair, and move-out repainting.',
    image: paintingImg,
    imageAlt: 'Painter rolling smooth matte white paint onto living room wall in Doha',
  },
  {
    index: '05',
    label: 'Carpentry service',
    slug: 'carpentry-service',
    route: { page: 'trade-service', slug: 'carpentry-service' },
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Same-day & scheduled visits',
    summary:
      'Door planing, lock and hinge repairs, kitchen cabinet adjustments, sliding wardrobe rollers, shelving, and furniture assembly.',
    image: carpentryImg,
    imageAlt: 'Carpenter adjusting concealed kitchen cabinet door hinges with precision tools',
  },
  {
    index: '06',
    label: 'TV Installation',
    slug: 'tv-installation',
    route: { page: 'trade-service', slug: 'tv-installation' },
    propertyScope: 'Homes, Majlis & Offices',
    responseWindow: 'Same-day Doha dispatch',
    summary:
      'Laser-leveled TV wall mounting on concrete, block, or gypsum walls with structural anchors, soundbar fit-out, and cable hiding.',
    image: tvImg,
    imageAlt: 'Technician wall-mounting flat screen television with spirit level in living room',
  },
  {
    index: '07',
    label: 'Handyman Service',
    slug: 'handyman-service',
    route: { page: 'trade-service', slug: 'handyman-service' },
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Same-day Doha dispatch',
    summary:
      'Curtain rods, blinds, mirror mounting, anti-mold silicone re-sealing, bathroom hardware, and general property punch-list fixes.',
    image: handymanImg,
    imageAlt: 'Handyman installing modern wall shelf hardware with cordless drill and level',
  },
  {
    index: '08',
    label: 'AC Service & Maintenance',
    slug: 'ac-service-and-maintenance',
    route: { page: 'trade-service', slug: 'ac-service-and-maintenance' },
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Same-day Doha dispatch',
    summary:
      'Split & ducted AC coil jet-washing, filter sanitization, condensate drain flushing, gas pressure checks, and cooling repair.',
    image: acImg,
    imageAlt: 'HVAC technician jet-washing indoor split air conditioning unit in Qatar',
  },
  {
    index: '09',
    label: 'Welding Service',
    slug: 'welding-service',
    route: { page: 'trade-service', slug: 'welding-service' },
    propertyScope: 'Villas, Compounds & Industrial',
    responseWindow: 'Scheduled & urgent repairs',
    summary:
      'On-site villa gate hinge welding, steel staircase rails, AC outdoor brackets, security grilles, and structural metal repair.',
    image: weldingImg,
    imageAlt: 'Welder fabricating heavy steel villa gate hinge on site with safety helmet',
  },
];

export const TRADE_SERVICES: TradeServiceDetail[] = [
  {
    slug: 'electric-service',
    label: 'Electric Service',
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Same-day Doha dispatch',
    image: electricImg,
    imageAlt: 'Electrician testing residential circuit breaker panel in Doha apartment',
    summary:
      'Safe fault troubleshooting, distribution board repairs, socket and switch replacement, indoor/outdoor lighting, and water heater electrical connections across Qatar.',
    description:
      'Fix Hub Qatar provides dependable electrical maintenance and repair services for villas, apartments, offices, and retail units. From tripping RCCB breakers and damaged UK-style sockets to LED lighting upgrades and water pump wiring, our technicians work neatly and follow Qatar electrical safety practices.',
    qatarContext:
      'High AC and water heater loads during Qatar summers frequently expose loose DB terminals and aging isolators. We use heat-resistant cabling, certified breakers, and proper earthing verification.',
    checklist: [
      'Circuit breaker, RCCB/ELCB trip diagnostics and DB balancing',
      '13A socket, dimmer switch, and cooker/heater isolator replacement',
      'Indoor, majlis, and outdoor waterproof LED lighting installation',
      'Water pump, booster controller, and ceiling exhaust fan wiring',
    ],
    idealFor: [
      'Villas and apartments experiencing sudden breaker trips',
      'Offices and shops upgrading lighting or power points',
      'Landlords preparing properties between tenant handovers',
    ],
  },
  {
    slug: 'satellite-installation-and-repair',
    label: 'Satellite Installation & Repair',
    propertyScope: 'Villas, Apartments & Compounds',
    responseWindow: 'Same-day Doha dispatch',
    image: satelliteImg,
    imageAlt: 'Technician aligning rooftop satellite dish with digital signal meter in Doha Qatar',
    summary:
      'Precision dish mounting, multi-satellite LNB alignment, signal troubleshooting, coaxial cabling, and receiver setup for clear reception in Doha.',
    description:
      'Whether installing a new rooftop dish or fixing "No Signal" errors after high winds and dust storms, Fix Hub Qatar aligns dishes with digital signal meters for stable HD and 4K channels across Nilesat, Arabsat/Badr, Es’hailSat, and Hotbird.',
    qatarContext:
      'Coastal wind gusts and UV exposure in Doha degrade exposed coaxial connectors and loosen dish brackets. We fit weather-sealed F-connectors, UV-shielded RG6 cabling, and galvanized mounts.',
    checklist: [
      'Digital meter alignment for Es’hailSat, Nilesat, Badr, and Hotbird',
      'Single, twin, quad, and DiSEqC multi-LNB configuration',
      'Concealed or neat surface RG6 coaxial cable routing across rooms',
      'Wind-resistant rooftop bracket tightening and weatherproof connector sealing',
    ],
    idealFor: [
      'New villa and apartment move-ins requiring fresh dish setup',
      'Homes experiencing pixelated channels or signal loss after storms',
      'Multi-room setups connecting majlis, living areas, and bedrooms',
    ],
  },
  {
    slug: 'painting-service',
    label: 'Painting service',
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Scheduled & express slots',
    image: paintingImg,
    imageAlt: 'Painter rolling smooth matte white paint onto living room wall in Doha',
    summary:
      'Interior and exterior wall painting, moisture-damaged ceiling restoration, gypsum crack filling, and move-out repainting with clean surface protection.',
    description:
      'Fix Hub Qatar delivers crisp, low-odor interior and exterior painting for villas, apartments, and offices across Qatar. After plumbing leak repairs or tenant handovers, we skim-coat gypsum patches, prime damp areas, and apply washable matte or silk finishes without paint splatters.',
    qatarContext:
      'Humidity, AC condensation, and past plumbing leaks often cause bubbling paint on gypsum ceilings. We strip loose layers, apply stain-blocking primer, and color-match adjacent surfaces.',
    checklist: [
      'Furniture, floor, and skirting board masking before painting starts',
      'Gypsum crack repair, sanding, and damp-stain primer sealing',
      'Washable Jotun/National interior emulsion and feature wall finishes',
      'Move-in / move-out full apartment repainting for security deposit handover',
    ],
    idealFor: [
      'Ceiling and wall restoration following pipe or AC leak repairs',
      'Tenants completing landlord handover repainting in Doha & The Pearl',
      'Offices and retail showrooms refreshing customer areas',
    ],
  },
  {
    slug: 'carpentry-service',
    label: 'Carpentry service',
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Same-day & scheduled visits',
    image: carpentryImg,
    imageAlt: 'Carpenter adjusting concealed kitchen cabinet door hinges with precision tools',
    summary:
      'Door alignment, lock and hinge replacement, kitchen cabinet repairs, wardrobe sliding tracks, custom shelving, and furniture assembly across Doha.',
    description:
      'From swollen bathroom doors and sagging kitchen cabinet hinges to broken wardrobe rollers and flat-pack furniture assembly, our carpentry technicians restore smooth operation and clean alignment throughout your home or workplace.',
    qatarContext:
      'Moisture near bathrooms and heavy daily use can warp door frames or wear out soft-close hinges. We carry quality European concealed hinges, heavy-duty locks, and sliding track hardware.',
    checklist: [
      'Wooden door planing, alignment, mortise lock, and handle replacement',
      'Kitchen cabinet hinge, drawer runner, and under-sink base panel repair',
      'Sliding wardrobe track cleaning, roller replacement, and adjustment',
      'Custom wall shelving, curtain pelmets, and bedroom/office furniture assembly',
    ],
    idealFor: [
      'Villas and apartments needing kitchen cabinet or door repairs',
      'Families assembling beds, wardrobes, and study desks',
      'Offices fitting reception counters, locks, and storage shelving',
    ],
  },
  {
    slug: 'tv-installation',
    label: 'TV Installation',
    propertyScope: 'Homes, Majlis & Offices',
    responseWindow: 'Same-day Doha dispatch',
    image: tvImg,
    imageAlt: 'Technician wall-mounting flat screen television with spirit level in living room',
    summary:
      'Secure wall-mount TV installation on concrete, block, or gypsum walls with laser leveling, swivel/fixed brackets, and clean cable concealment.',
    description:
      'Mount your OLED, QLED, or commercial display safely and perfectly level. Fix Hub Qatar evaluates the wall substrate—concrete, hollow block, or gypsum board—uses heavy-duty Fischer anchors or toggle bolts, and organizes HDMI and power cords neatly.',
    qatarContext:
      'Many apartments in Lusail, The Pearl, and West Bay feature double-layer gypsum partition walls that cannot hold large 65"–85" TVs with standard plastic plugs. We use structural stud/cavity anchors rated for heavy displays.',
    checklist: [
      'Wall substrate inspection (concrete, block, marble cladding, or gypsum)',
      'Fixed, tilting, or full-motion articulating bracket mounting',
      'Soundbar mounting and clean PVC trunking or concealed cord routing',
      'Laser leveling and load-safety verification for 32" to 98" screens',
    ],
    idealFor: [
      'Living rooms, majlis seating areas, and master bedrooms',
      'Corporate meeting rooms and clinic waiting lobbies',
      'Upgrading from stand placement to child-safe wall mounting',
    ],
  },
  {
    slug: 'handyman-service',
    label: 'Handyman Service',
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Same-day Doha dispatch',
    image: handymanImg,
    imageAlt: 'Handyman installing modern wall shelf hardware with cordless drill and level',
    summary:
      'All-in-one home and office maintenance covering curtain rods, mirrors, picture hanging, silicone sealing, minor plumbing/electrical fixes, and odd jobs.',
    description:
      'Save time with one reliable Fix Hub Qatar technician for your whole property punch-list. Whether hanging heavy mirrors, installing blinds and curtain tracks, resealing bathtubs, or fixing loose door stoppers, we bring the tools and hardware to finish every task neatly.',
    qatarContext:
      'Ideal for new apartment move-ins and annual villa upkeep across Doha, where multiple small mounting and sealing tasks pile up at once.',
    checklist: [
      'Curtain rods, roller blinds, heavy frames, and bathroom mirror mounting',
      'Anti-mold silicone re-sealing around bathtubs, showers, and kitchen counters',
      'Door stoppers, towel rails, coat hooks, and shelf anchor installation',
      'General multi-task punch-list completion in a single visit',
    ],
    idealFor: [
      'New tenants setting up apartments in West Bay, Lusail, or The Pearl',
      'Busy families ticking off a home maintenance checklist in one visit',
      'Offices and retail units needing quick fixture repairs',
    ],
  },
  {
    slug: 'ac-service-and-maintenance',
    label: 'AC Service & Maintenance',
    propertyScope: 'Residential & Commercial',
    responseWindow: 'Same-day Doha dispatch',
    image: acImg,
    imageAlt: 'HVAC technician jet-washing indoor split air conditioning unit in Qatar',
    summary:
      'Split, ducted, and central AC filter cleaning, coil jet-washing, drain line unclogging, thermostat checks, and cooling diagnostics across Qatar.',
    description:
      'Keep your indoor air cool and prevent water dripping from indoor AC units. Fix Hub Qatar cleans evaporator coils, clears blocked condensate drain pipes, inspects capacitors and airflow, and restores strong cooling efficiency.',
    qatarContext:
      'Fine desert dust in Qatar quickly clogs AC filters and condensate pans, causing ice buildup, high electricity bills, and water leaks onto ceilings and floors. Routine servicing prevents mid-summer breakdowns.',
    checklist: [
      'Indoor unit filter removal, antimicrobial wash, and fin coil cleaning',
      'Pressurized condensate drain line flushing to stop indoor water dripping',
      'Outdoor condenser coil jet-wash and airflow clearance',
      'Thermostat calibration, cooling temperature check, and gas pressure test',
    ],
    idealFor: [
      'Split and ducted AC units blowing warm air or dripping water',
      'Pre-summer villa and compound preventive AC maintenance',
      'Offices, clinics, and shops maintaining comfortable cooling',
    ],
  },
  {
    slug: 'welding-service',
    label: 'Welding Service',
    propertyScope: 'Villas, Compounds & Industrial',
    responseWindow: 'Scheduled & urgent repairs',
    image: weldingImg,
    imageAlt: 'Welder fabricating heavy steel villa gate hinge on site with safety helmet',
    summary:
      'On-site metal gate repair, hinge welding, steel staircase railings, AC outdoor stand fabrication, security grilles, and structural steel fixes.',
    description:
      'Fix Hub Qatar provides mobile arc and MIG welding services across Doha for broken villa gate hinges, rusted fence panels, rooftop water-tank frames, AC compressor brackets, and custom metal fabrication repairs.',
    qatarContext:
      'Coastal humidity in Qatar accelerates rust at gate bottom hinges, carport frames, and outdoor AC stands. We grind away corrosion, reinforce joints with solid steel welds, and apply anti-rust primer finish.',
    checklist: [
      'Villa sliding & swing gate hinge welding, realignment, and track repair',
      'Steel window grilles, balcony handrails, and staircase balustrade repairs',
      'Heavy-duty AC outdoor unit brackets and rooftop tank support frames',
      'Rust grinding, weld reinforcement, and zinc-rich anti-corrosion priming',
    ],
    idealFor: [
      'Villas and compounds with sagging or detached steel gates',
      'Commercial properties needing sturdy steel supports or safety rails',
      'Custom metal bracket and shed frame repairs on site',
    ],
  },
];
