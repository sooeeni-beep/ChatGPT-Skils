import React from 'react';
import { ArrowRight, Play, ShoppingCart, ChevronRight } from 'lucide-react';

export function BrandMark({small=false}) {
 return <a href="#home" aria-label="GreenOrRed homepage" className="inline-flex items-center gap-2.5 shrink-0">
   <span className={`font-black tracking-[-.12em] italic leading-none ${small?'text-[31px]':'text-[39px]'}`}><span className="text-violet-700">G</span><span className="text-emerald-500">/</span><span className="text-red-500">R</span></span>
   <span className="flex flex-col"><strong className="text-[18px] sm:text-[21px] font-extrabold tracking-tight leading-none text-[#1e2547]">GreenOrRed</strong><span className="text-[10px] sm:text-[11px] text-slate-500 mt-1">Trade Smarter. Together.</span></span>
 </a>;
}
export function ActionButton({children,kind='purple',href='#featured',className='',onClick}) {
 const shades = {purple:'bg-gradient-to-r from-violet-700 to-violet-600 text-white shadow-[0_6px_15px_#6d28d925] hover:from-violet-800 hover:to-violet-700', green:'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:brightness-95',red:'bg-gradient-to-r from-rose-600 to-red-500 text-white hover:brightness-95', orange:'bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:brightness-95', blue:'bg-gradient-to-r from-blue-700 to-blue-600 text-white hover:brightness-95', outline:'border border-violet-400 bg-white/80 text-violet-700 hover:bg-violet-50'};
 const cls=`inline-flex justify-center items-center gap-2 rounded-md px-4 py-2.5 text-[12px] sm:text-[13px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 ${shades[kind]} ${className}`;
 return onClick ? <button onClick={onClick} className={cls}>{children}</button> : <a href={href} className={cls}>{children}</a>;
}
export function IconButton({children,label,onClick,className=''}) {return <button aria-label={label} onClick={onClick} className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-violet-200 text-violet-700 bg-white hover:bg-violet-50 ${className}`}>{children}</button>}
export function PlatformBadge({name}) {
 const abbr = { 'MetaTrader 4':'MT4','MetaTrader 5':'MT5',cTrader:'cT',TradingView:'TV',MT4:'MT4',MT5:'MT5'};
 const color = name.includes('Meta')||name.startsWith('MT')?'text-emerald-600':name==='cTrader'?'text-red-500':'text-[#10172c]';
 return <span className="inline-flex items-center gap-1 whitespace-nowrap"><b className={`text-[13px] ${color}`}>{abbr[name]||name}</b><span className="text-[10px] font-semibold">{name}</span></span>;
}
export function SectionHeading({children,more=false}) {return <div className="flex items-center justify-between gap-2"><h2 className="text-[17px] md:text-[19px] font-extrabold tracking-tight text-[#172038]">{children}</h2>{more&&<a href="#featured" className="text-[11px] font-semibold text-violet-700 inline-flex items-center gap-1">View All <ArrowRight size={13}/></a>}</div>}
const paths = [
 'M0 75 L16 62 30 67 46 51 61 56 76 35 89 43 106 16 122 31 138 20 151 29 168 4 184 19 200 5',
 'M0 73 L15 76 27 60 43 71 57 49 70 52 85 34 98 41 114 23 128 29 140 5 157 15 174 3 187 21 200 5',
 'M0 63 L15 65 28 77 43 54 59 59 75 41 90 57 105 23 118 31 131 18 148 42 162 20 180 24 200 5'
];
export function Sparkline({seed=0,red=false,white=false,className=''}) {return <svg viewBox="0 0 200 85" preserveAspectRatio="none" aria-hidden="true" className={className}><path d={paths[seed%3]} fill="none" stroke={red?'#fb7185':white?'#a7f3d0':'#10b981'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
const candles = [42,48,41,53,60,55,64,63,71,58,65,74,69,82,77,86,91,85,94,100,95,106,100,109,117,111,124,118,129,136,129,139,134,146,141,153,148,158];
export function MarketChart({className='',compact=false}) {
 return <div aria-label="Illustrative candlestick market chart" role="img" className={`relative overflow-hidden bg-[#09182d] ${className}`}><div className="absolute inset-0 opacity-60" style={{backgroundImage:'linear-gradient(#25415c66 1px,transparent 1px),linear-gradient(90deg,#25415c66 1px,transparent 1px)',backgroundSize:compact?'22px 19px':'42px 30px'}}/>
  <svg viewBox="0 0 420 220" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
   <path d="M0 188 Q45 175 75 155 T155 133 T245 105 T320 71 T420 20" fill="none" stroke="#1ebc99" opacity=".8" strokeWidth="2"/>
   <path d="M0 198 Q45 183 75 171 T155 158 T245 122 T320 93 T420 45" fill="none" stroke="#8b5cf6" opacity=".8" strokeWidth="1.6"/>
   {candles.map((v,i)=>{const x=12+i*10.5,up=i%5!==2,y=207-v,h=6+(i*7)%15;return <g key={i}><line x1={x} x2={x} y1={y-8} y2={y+h+7} stroke={up?'#21d6a2':'#fb526d'} strokeWidth="1.3"/><rect x={x-2.2} y={y} width="4.5" height={h} rx=".5" fill={up?'#11c994':'#ef4564'}/></g>})}
  </svg><div className="absolute left-2 top-2 text-[8px] font-semibold tracking-widest text-slate-500">EURUSD · 1H</div>
 </div>;
}
export function HandNote({children,className=''}) {return <span className={`font-['Comic_Sans_MS',cursive] italic leading-tight text-violet-700 -rotate-6 ${className}`}>{children}</span>}
export function ArrowLink({children,href='#featured'}) {return <a href={href} className="inline-flex items-center gap-1 text-violet-700 text-xs font-semibold hover:underline">{children}<ChevronRight size={15}/></a>}
export { ArrowRight,Play,ShoppingCart };

/** Reusable layered hero advertising surface: absolutely positioned mockups remain
 * independent of navigation and content. Replace only the graphics when licensed
 * original asset layers are available. */
export function CustomGlowFX({children,className=''}) {
 return <div className={`relative isolate ${className}`}><div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-[44%] bg-[radial-gradient(ellipse_at_30%_35%,#e5dfff_0%,transparent_58%),radial-gradient(ellipse_at_82%_45%,#dfeaff_0%,transparent_65%)] blur-xl"/>{children}</div>;
}
export function HeroAdContainer({children,className=''}) {
 return <CustomGlowFX className={`relative h-[300px] sm:h-[370px] lg:h-[390px] ${className}`}><div className="absolute inset-0">{children}</div></CustomGlowFX>;
}
export function AdBannerContainer({children,className=''}) {
 return <div className={`relative isolate overflow-hidden rounded-lg border p-4 shadow-[0_4px_14px_#34245d08] ${className}`}>{children}</div>;
}
export function CoinGrowthArt(){
 return <svg aria-hidden="true" viewBox="0 0 130 100" className="h-[86px] w-[112px] drop-shadow-lg"><defs><linearGradient id="coin" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffdc84"/><stop offset="1" stopColor="#f97316"/></linearGradient></defs><path d="M6 92h120" stroke="#fed7aa" strokeWidth="2"/>{[28,44,59,78].map((h,i)=><rect key={i} x={18+i*27} y={94-h} width="17" height={h} rx="3" fill="url(#coin)" stroke="#fdba74"/>)}<circle cx="25" cy="72" r="18" fill="url(#coin)" stroke="#fff7ed" strokeWidth="3"/><text x="25" y="78" textAnchor="middle" fill="white" fontWeight="bold" fontSize="21">$</text><path d="M41 57 70 31 89 39 116 8m-17 0h17v17" stroke="#fb923c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>;
}
export function DocumentGearArt(){
 return <svg aria-hidden="true" viewBox="0 0 130 98" className="h-[90px] w-[112px] drop-shadow-md"><rect x="22" y="16" width="78" height="60" rx="6" fill="#2563eb"/><rect x="29" y="23" width="64" height="44" rx="3" fill="#eff6ff"/><path d="m49 36-8 8 8 8m24-16 8 8-8 8m-22 9 6-34" stroke="#1d4ed8" fill="none" strokeLinecap="round" strokeWidth="3"/><path d="M16 82h92" stroke="#1e40af" strokeWidth="7" strokeLinecap="round"/><path d="m105 17 4 4 6-2 3 5-3 5 3 5-5 4-6-3-5 3-5-4 3-6-4-4 3-5 6 1z" fill="#93c5fd"/></svg>;
}
