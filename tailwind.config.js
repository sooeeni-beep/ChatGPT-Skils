/** @type {import('tailwindcss').Config} */
export default {
  content:['./index.html','./src/**/*.{js,jsx,ts,tsx}','./ChatGPT Skils/**/*.{js,jsx,ts,tsx}'],
  theme:{extend:{fontFamily:{sans:['Inter','ui-sans-serif','system-ui','sans-serif']},
    colors:{brand:{purple:'#6d28d9',deep:'#581c87',blue:'#2563eb',red:'#ef4444',green:'#10b981'}},
    boxShadow:{card:'0 3px 12px rgba(46,36,85,.07)'}
  }},
  plugins:[]
};
