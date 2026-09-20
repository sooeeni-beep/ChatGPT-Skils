# Skill: Image-to-PSD Asset Extractor & Layer Deconstruction

## Purpose
Enables AI models and coding agents to treat a single flat layout screenshot as a multi-layered Photoshop (PSD) or Figma file, preventing the synthesis or substitution of generic icons/components.

## Deconstruction & Execution Rules:
1. Virtual PSD Slicing: Break the input screenshot into explicit asset bounds rather than guessing UI elements.
2. Exact Asset Extraction & Mapping:
   - Hero Ad Container (Top Right): Extract/crop the dark-mode laptop (with candlestick chart), mobile phone (with live asset prices), and floating badges (MT4, MT5, cTrader, TradingView).
   - Preview Graphics: Extract mini-charts for Indicators, equity curves for EAs, video thumbnails for Education, and live percentage badges for Signals.
   - Banner Graphics: Extract 3D stacked coins (Affiliate) and 3D gear/document badges (Custom Requests).
   - Vector Icons: Map every functional icon (Cart, Search, User, Box, Graduation Cap, Thumbs Up, Broadcast) to exact stroke-matched Lucide-React/FontAwesome icons.
3. Overlaid Absolute Positioning: Use CSS absolute overlap for floating hero elements to retain 1:1 spatial fidelity with the source image.
