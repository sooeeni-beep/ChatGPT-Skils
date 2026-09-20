export const theme = {
  ink: '#111329', muted: '#626b87', purple: '#6d28d9', purpleDark: '#581c87',
  electric: '#2563eb', red: '#ef4444', green: '#10b981',
  surface: '#f8fafc', border: '#e4e6fa',
  heroGlow: 'radial-gradient(circle at 58% 20%,#ece8ff 0,transparent 42%),radial-gradient(circle at 92% 42%,#e9efff 0,transparent 36%)',
};
export const navLinks = [
  ['Home','#home'],['Indicators','#indicators'],['Experts & Strategies','#experts'],
  ['Scripts & Utilities','#scripts'],['Education','#education'],['Trading Journal','#journal'],
  ['Signals','#signals'],['Affiliate','#affiliate'],['Custom Request','#custom-request']
];
export const products = [
  {name:'SuperTrend Pro',sub:'MT5 Indicator',platform:'MT5',price:49,tag:'Bestseller',accent:'#10b981',seed:0},
  {name:'Grid Master EA',sub:'MT4 Expert Advisor',platform:'MT4',price:79,tag:'Popular',accent:'#ef4444',seed:1},
  {name:'Breakout Strategy',sub:'TradingView Strategy',platform:'TradingView',price:39,tag:'New',accent:'#7c3aed',seed:2},
];
export const markets = ['FOREX','GOLD','NASDAQ','S&P 500','CRYPTO','COMMODITIES','STOCKS'];

/** Reference screenshot bounds at 1280 × 1170, left/top/right/bottom in pixels.
 * Source image is a flattened bitmap: crop regions contain adjacent pixels;
 * keep original image separately for high fidelity rather than assuming isolated layers.
 */
export const screenshotGeometry = {
  viewport: {width:1280,height:1170},
  header:[0,0,1280,95], hero:[27,105,1255,476],
  heroAd:[559,111,1180,468], laptop:[611,121,1065,445],
  phone:[1040,196,1173,459], floatingBadges:[572,196,710,354],
  categories:[29,486,1252,713],
  categoryPreviews:[[47,598,174,668],[292,599,438,662],[544,592,681,665],[783,601,923,665],[1033,589,1164,667]],
  affiliate:[29,726,633,878], custom:[645,726,1252,878],
  featured:[28,889,630,1098], testimonials:[645,891,937,1097],
  signup:[948,892,1251,1094], marketTrust:[0,1107,1280,1170]
};
export const assetPolicy = {
  decorativeSource:'reference screenshot', iconLibrary:'lucide-react',
  extraction:'Use exact source-image crops only when original pixel data can be committed to the repository.',
  fallback:'Use responsive HTML/CSS/SVG components; never claim a synthesized device is an exact pixel crop.'
};
