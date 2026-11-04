export interface OpeningDay {
  day: string;
  short: string;
  hours: string;
  isOpen: boolean;
}

export const RESTAURANT_DATA = {
  name: 'Joe Beef',
  type: 'Restaurant & Bar',
  tagline: 'Relaxed restaurant & bar serving steaks & seafood in a compact, old-school setting.',
  cityArea: 'Little Burgundy / Petite-Bourgogne, Montréal, QC',
  address: '2491 R. Notre Dame O, Montréal, QC H3J 1N6, Canada',
  plusCode: 'FCMF+6V Montreal, Quebec, Canada',
  phone: '+15149356504',
  phoneDisplay: '+1 (514) 935-6504',
  whatsapp: '+15149356504',
  whatsappDisplay: '+1 (514) 935-6504',
  email: 'contact@joebeef.com',
  mapsUrl: 'https://www.google.com/maps/dir//Joe+Beef,+2491+R.+Notre+Dame+O,+Montreal,+Quebec+H3J+1N6,+Canada/@18.6843723,-81.0148094,3z/data=!4m16!1m7!3m6!1s0x4cc91a7a23de0961:0x4dda44b6c1dd33da!2sJoe+Beef!8m2!3d45.4830556!4d-73.5752778!16s%2Fm%2F0j9kdsm!4m7!1m0!1m5!1m1!1s0x4cc91a7a23de0961:0x4dda44b6c1dd33da!2m2!1d-73.5752487!2d45.4830414?entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D',
  
  hours: [
    { day: 'Tuesday', short: 'Tue', hours: '5:00 PM – 10:30 PM', isOpen: true, dayIndex: 2 },
    { day: 'Wednesday', short: 'Wed', hours: '5:00 PM – 10:30 PM', isOpen: true, dayIndex: 3 },
    { day: 'Thursday', short: 'Thu', hours: '5:00 PM – 10:30 PM', isOpen: true, dayIndex: 4 },
    { day: 'Friday', short: 'Fri', hours: '5:00 PM – 10:30 PM', isOpen: true, dayIndex: 5 },
    { day: 'Saturday', short: 'Sat', hours: '5:00 PM – 10:30 PM', isOpen: true, dayIndex: 6 },
    { day: 'Sunday', short: 'Sun', hours: 'Closed', isOpen: false, dayIndex: 0 },
    { day: 'Monday', short: 'Mon', hours: 'Closed', isOpen: false, dayIndex: 1 },
  ],

  services: [
    {
      title: 'Dine-In Table Service',
      description: 'Full-service dinner seating in an intimate, old-school tavern atmosphere with table service.',
      highlight: 'Dinner Reservations Recommended'
    },
    {
      title: 'Bar & Counter Service',
      description: 'Bustling on-site wooden bar with stools ideal for solo dining, craft cocktails, and raw bar bites.',
      highlight: 'Popular for Solo Dining'
    },
    {
      title: 'Outdoor Seating',
      description: 'Lush garden patio dining during fair weather, pairing fresh air with cold oysters and natural wine.',
      highlight: 'Seasonal Al Fresco'
    },
    {
      title: 'Takeaway & Delivery',
      description: 'Bring the Joe Beef culinary experience home with curated takeaway and on-site services.',
      highlight: 'Convenient Ordering'
    }
  ],

  offerings: [
    {
      category: 'Steaks & Seafood',
      description: 'The foundation of the Joe Beef blackboard: prime cuts, dry-aged beef, and pristine maritime seafood.',
      items: [
        { name: 'Prime Bone-In Ribeye & Striploin', note: 'Dry-aged cuts seared over high heat, served with house jus and marrow butter' },
        { name: 'Fresh Maritime Oysters on the Half Shell', note: 'Shucked to order on crushed ice with classic mignonette and fresh lemon' },
        { name: 'Market Lobster & Seafood Platters', note: 'Poached lobster, chilled shrimp, clams, and seasonal catch' },
        { name: 'Catch of the Day & Fish Service', note: 'Prepared fresh daily with seasonal market vegetables and herbs' },
      ]
    },
    {
      category: 'Small Plates & Organic Dishes',
      description: 'Shared plates celebrating local Quebec producers, seasonal harvests, and organic ingredients.',
      items: [
        { name: 'Organic Seasonal Small Plates', note: 'Farm-fresh vegetables, heritage grains, and creative house preparations' },
        { name: 'Artisanal Charcuterie & Terrines', note: 'House-cured meats served with grainy mustard and pickles' },
        { name: 'Vegetarian Market Creations', note: 'Dedicated flavorful vegetarian offerings driven by the week\'s harvest' },
        { name: 'Vegan Seasonal Plates', note: 'Thoughtful plant-based dishes crafted with full gastronomic rigor' },
      ]
    },
    {
      category: 'Wine & Cocktails',
      description: 'An acclaimed wine cellar focused on natural, organic, and biodynamic producers alongside classic cocktails.',
      items: [
        { name: 'Great Wine List & Cellar Selection', note: 'Deep selection of natural, organic, and rare vintage French and international wines' },
        { name: 'House Cocktails & Aperitifs', note: 'Classic martinis, Old Fashioneds, Negronis, and seasonal concoctions' },
        { name: 'Fine Spirits & Single Malts', note: 'Extensive curation of whiskeys, cognacs, amaros, and artisanal spirits' },
        { name: 'Craft Beers & Ciders', note: 'Selected regional Quebec microbrews and crisp draught pours' },
      ]
    },
    {
      category: 'Late-Night, Coffee & Dessert',
      description: 'Comforting late-night dishes, artisanal espresso, and indulgent desserts to round out the evening.',
      items: [
        { name: 'Late-Night Kitchen Service', note: 'Satisfying tavern fare and warm plates served into late evening' },
        { name: 'Artisanal Coffee & Espresso', note: 'Great specialty coffee, espresso, and digestif pairings' },
        { name: 'House Desserts', note: 'Classic warm puddings, tarts, and seasonal sweet finishes' },
      ]
    }
  ],

  amenities: [
    { label: 'Warm Fireplace', desc: 'Working fireplace delivering a cosy, romantic glow through the room' },
    { label: 'On-Site Bar', desc: 'Classic wooden tavern bar with counter service and spirit selection' },
    { label: 'Wheelchair Accessible', desc: 'Wheelchair-accessible entrance and wheelchair-accessible seating' },
    { label: 'Inclusive & Welcoming', desc: 'LGBTQ+ friendly, transgender safe space, welcoming groups and solo diners' },
    { label: 'Flexible Payments', desc: 'Credit cards, debit cards, and NFC mobile payments accepted' },
    { label: 'Street Parking', desc: 'Free of charge and paid street parking available along Notre-Dame Ouest' },
  ],

  faqs: [
    {
      question: 'Do I need a reservation at Joe Beef?',
      answer: 'Yes, reservations are required or strongly recommended. Because our dining room is compact and intimate, we usually experience a wait for walk-ins. We recommend booking your table online in advance.'
    },
    {
      question: 'What are your dinner hours and days of operation?',
      answer: 'Joe Beef is open five evenings a week, from Tuesday through Saturday, 5:00 PM to 10:30 PM. We are closed on Sundays and Mondays.'
    },
    {
      question: 'Do you cater to vegan and vegetarian diners?',
      answer: 'Yes! While known for steaks and seafood, our kitchen features dedicated organic dishes, seasonal small plates, and delicious vegan and vegetarian options.'
    },
    {
      question: 'Is the restaurant wheelchair accessible?',
      answer: 'Yes, Joe Beef features a wheelchair-accessible entrance and wheelchair-accessible seating options in the dining room.'
    },
    {
      question: 'What is the parking situation in Little Burgundy?',
      answer: 'Both free and paid meter street parking are available along Rue Notre-Dame Ouest and neighboring residential streets. Space can be somewhat difficult to find during peak dinner hours, so we advise allowing a few extra minutes or using rideshare.'
    },
    {
      question: 'Can I dine solo at Joe Beef?',
      answer: 'Absolutely. Joe Beef is popular for solo dining, particularly at our on-site wooden bar counter where you can enjoy full dinner service, great wine, and cocktails.'
    }
  ]
};
