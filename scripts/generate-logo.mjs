import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Standalone Emblem Icon SVG (Square 512x512)
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#1e2727" />
      <stop offset="60%" stop-color="#131919" />
      <stop offset="100%" stop-color="#0a0e0e" />
    </radialGradient>

    <!-- Royal Gold Linear Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff1c5" />
      <stop offset="25%" stop-color="#f6af24" />
      <stop offset="55%" stop-color="#d4af37" />
      <stop offset="85%" stop-color="#aa7c11" />
      <stop offset="100%" stop-color="#fcd34d" />
    </linearGradient>

    <!-- Warm Amber Secondary Gradient -->
    <linearGradient id="amberGrad" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fde68a" />
      <stop offset="40%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>

    <!-- Subtle Metallic Sheen -->
    <linearGradient id="sheenGrad" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.0" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.15" />
    </linearGradient>

    <!-- Drop Shadow Filter -->
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#f6af24" flood-opacity="0.35" />
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000000" flood-opacity="0.8" />
    </filter>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#f59e0b" flood-opacity="0.2" />
    </filter>
  </defs>

  <!-- Base Rounded Container with subtle border -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" />
  <rect width="504" height="504" x="4" y="4" rx="108" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" stroke-opacity="0.35" />

  <!-- Outer Fine Geometric Ring -->
  <circle cx="256" cy="256" r="216" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.2" stroke-dasharray="8 6" />
  <circle cx="256" cy="256" r="226" fill="none" stroke="url(#goldGrad)" stroke-width="0.75" stroke-opacity="0.15" />

  <!-- The Architectural Crest Group -->
  <g filter="url(#goldGlow)">
    <!-- Crown Diamond Apex -->
    <path d="M256 74 L272 106 L256 122 L240 106 Z" fill="url(#goldGrad)" />
    <circle cx="256" cy="106" r="4" fill="#ffffff" />

    <!-- External Architectural Frame (Arch / Shield) -->
    <path d="M256 112
             C330 112 388 170 388 244
             C388 326 312 384 256 422
             C200 384 124 326 124 244
             C124 170 182 112 256 112 Z"
          fill="none"
          stroke="url(#goldGrad)"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round" />

    <!-- Inner Fluted Slats (Decorative Wood Panels / بديل الخشب) -->
    <g opacity="0.95">
      <!-- Slat 1 (Left) -->
      <line x1="210" y1="200" x2="210" y2="340" stroke="url(#amberGrad)" stroke-width="5" stroke-linecap="round" />
      <!-- Slat 2 (Left Inner) -->
      <line x1="230" y1="180" x2="230" y2="360" stroke="url(#goldGrad)" stroke-width="6" stroke-linecap="round" />
      <!-- Slat 3 (Center Axis) -->
      <line x1="256" y1="165" x2="256" y2="380" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round" />
      <!-- Slat 4 (Right Inner) -->
      <line x1="282" y1="180" x2="282" y2="360" stroke="url(#goldGrad)" stroke-width="6" stroke-linecap="round" />
      <!-- Slat 5 (Right) -->
      <line x1="302" y1="200" x2="302" y2="340" stroke="url(#amberGrad)" stroke-width="5" stroke-linecap="round" />
    </g>

    <!-- Sweeping Paint Stroke Arc (Art of Painting / دهانات ناعمة متقنة) -->
    <path d="M150 290
             C175 220 220 160 310 160
             C350 160 376 185 365 225
             C352 272 290 310 215 320
             C170 326 142 344 148 375
             C155 408 200 422 256 422"
          fill="none"
          stroke="url(#goldGrad)"
          stroke-width="9"
          stroke-linecap="round" />

    <!-- Paint Roller & Finish Trowel Accent -->
    <path d="M335 152 L365 182 L350 197 L320 167 Z" fill="url(#goldGrad)" />
    <path d="M365 182 L385 202" stroke="url(#amberGrad)" stroke-width="4" stroke-linecap="round" />

    <!-- Radiant Accent Sparkles -->
    <path d="M178 190 Q178 205 163 205 Q178 205 178 220 Q178 205 193 205 Q178 205 178 190 Z" fill="url(#goldGrad)" />
    <path d="M345 315 Q345 326 334 326 Q345 326 345 337 Q345 326 356 326 Q345 326 345 315 Z" fill="url(#goldGrad)" />
  </g>

  <!-- Small Bottom Subtitle / Three Region Dots -->
  <g fill="url(#goldGrad)" opacity="0.9">
    <circle cx="216" cy="452" r="3.5" />
    <circle cx="256" cy="452" r="5" />
    <circle cx="296" cy="452" r="3.5" />
  </g>
</svg>`;

// 2. Full Horizontal Brand Logo SVG (800x240) - For Header, Hero, Footer, Letterhead
const fullLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 240" width="880" height="240">
  <defs>
    <radialGradient id="fullBgGrad" cx="30%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#192121" />
      <stop offset="100%" stop-color="#0e1313" />
    </radialGradient>

    <linearGradient id="fullGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff2c9" />
      <stop offset="30%" stop-color="#f6af24" />
      <stop offset="65%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#aa7c11" />
    </linearGradient>

    <linearGradient id="fullAmber" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fde68a" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>

    <filter id="fullGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#f6af24" flood-opacity="0.3" />
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <rect width="880" height="240" rx="32" fill="url(#fullBgGrad)" />
  <rect width="874" height="234" x="3" y="3" rx="29" fill="none" stroke="url(#fullGold)" stroke-width="1.5" stroke-opacity="0.25" />

  <!-- Logo Mark on Right (RTL Oriented: Mark is on Right, Typography to Left) -->
  <g transform="translate(680, 20) scale(0.39)" filter="url(#fullGlow)">
    <!-- Base Glow Behind Emblem -->
    <circle cx="256" cy="256" r="230" fill="#f6af24" opacity="0.06" />

    <!-- Outer Fine Geometric Ring -->
    <circle cx="256" cy="256" r="216" fill="none" stroke="url(#fullGold)" stroke-width="3" stroke-opacity="0.3" stroke-dasharray="10 8" />

    <!-- Crown Diamond Apex -->
    <path d="M256 70 L276 104 L256 122 L236 104 Z" fill="url(#fullGold)" />
    <circle cx="256" cy="104" r="5" fill="#ffffff" />

    <!-- External Architectural Frame -->
    <path d="M256 112
             C330 112 388 170 388 244
             C388 326 312 384 256 422
             C200 384 124 326 124 244
             C124 170 182 112 256 112 Z"
          fill="none"
          stroke="url(#fullGold)"
          stroke-width="14"
          stroke-linecap="round"
          stroke-linejoin="round" />

    <!-- Inner Fluted Slats (بديل الخشب والرخام) -->
    <g opacity="0.95">
      <line x1="205" y1="200" x2="205" y2="340" stroke="url(#fullAmber)" stroke-width="8" stroke-linecap="round" />
      <line x1="230" y1="180" x2="230" y2="360" stroke="url(#fullGold)" stroke-width="10" stroke-linecap="round" />
      <line x1="256" y1="165" x2="256" y2="380" stroke="url(#fullGold)" stroke-width="12" stroke-linecap="round" />
      <line x1="282" y1="180" x2="282" y2="360" stroke="url(#fullGold)" stroke-width="10" stroke-linecap="round" />
      <line x1="307" y1="200" x2="307" y2="340" stroke="url(#fullAmber)" stroke-width="8" stroke-linecap="round" />
    </g>

    <!-- Sweeping Paint Stroke Arc -->
    <path d="M150 290
             C175 220 220 160 310 160
             C350 160 376 185 365 225
             C352 272 290 310 215 320
             C170 326 142 344 148 375
             C155 408 200 422 256 422"
          fill="none"
          stroke="url(#fullGold)"
          stroke-width="16"
          stroke-linecap="round" />

    <!-- Roller Accent -->
    <path d="M335 150 L368 183 L350 201 L317 168 Z" fill="url(#fullGold)" />
    <!-- Sparkles -->
    <path d="M178 190 Q178 205 163 205 Q178 205 178 220 Q178 205 193 205 Q178 205 178 190 Z" fill="url(#fullGold)" />
    <path d="M345 315 Q345 326 334 326 Q345 326 345 337 Q345 326 356 326 Q345 326 345 315 Z" fill="url(#fullGold)" />
  </g>

  <!-- Vertical Subtle Divider -->
  <line x1="655" y1="45" x2="655" y2="195" stroke="url(#fullGold)" stroke-width="1.5" stroke-opacity="0.35" />

  <!-- Arabic Typography Block -->
  <g text-anchor="end" direction="rtl" style="font-family: 'Tajawal', 'Segoe UI', Tahoma, sans-serif;">
    <!-- Main Arabic Title -->
    <text x="625" y="105" font-size="52" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
      دهانات <tspan fill="url(#fullGold)">وديكورات</tspan>
    </text>

    <!-- Subtitle: Regions -->
    <text x="625" y="148" font-size="22" font-weight="600" fill="#d4af37" letter-spacing="0.5">
      مكة المكرمة  •  جدة  •  الطائف
    </text>

    <!-- Luxury Descriptor Line -->
    <text x="625" y="186" font-size="14" font-weight="500" fill="#9ca3af" letter-spacing="1">
      تنفيذ تشطيبات الواجهات • بديل الخشب والرخام • دهانات داخلية وخارجية
    </text>
  </g>

  <!-- Left Accent Badge -->
  <g transform="translate(60, 68)">
    <rect width="116" height="104" rx="14" fill="#141a1a" stroke="url(#fullGold)" stroke-width="1.2" stroke-opacity="0.4" />
    <text x="58" y="44" font-size="12" font-weight="700" fill="#f6af24" text-anchor="middle" letter-spacing="1.5" font-family="'Segoe UI', Arial, sans-serif">
      EST. 2026
    </text>
    <line x1="20" y1="56" x2="96" y2="56" stroke="url(#fullGold)" stroke-width="0.8" stroke-opacity="0.4" />
    <text x="58" y="78" font-size="11" font-weight="600" fill="#e5e7eb" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif">
      PREMIUM
    </text>
    <text x="58" y="93" font-size="9" font-weight="500" fill="#9ca3af" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif">
      QUALITY
    </text>
  </g>
</svg>`;

// 3. Compact Transparent Navbar Logo SVG (for seamlessly blending in the dark navbar)
const navLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 76" width="340" height="76">
  <defs>
    <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff1c5" />
      <stop offset="35%" stop-color="#f6af24" />
      <stop offset="70%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
    <filter id="navGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#f6af24" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Icon on Right (RTL) -->
  <g transform="translate(268, 6) scale(0.125)" filter="url(#navGlow)">
    <circle cx="256" cy="256" r="236" fill="#1b2323" stroke="url(#navGold)" stroke-width="6" />
    <path d="M256 70 L276 104 L256 122 L236 104 Z" fill="url(#navGold)" />
    <!-- Shield -->
    <path d="M256 112 C330 112 388 170 388 244 C388 326 312 384 256 422 C200 384 124 326 124 244 C124 170 182 112 256 112 Z"
          fill="none" stroke="url(#navGold)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Slats -->
    <line x1="215" y1="190" x2="215" y2="350" stroke="url(#navGold)" stroke-width="10" stroke-linecap="round" />
    <line x1="256" y1="165" x2="256" y2="380" stroke="url(#navGold)" stroke-width="14" stroke-linecap="round" />
    <line x1="297" y1="190" x2="297" y2="350" stroke="url(#navGold)" stroke-width="10" stroke-linecap="round" />
    <!-- Arc -->
    <path d="M150 290 C175 220 220 160 310 160 C350 160 376 185 365 225 C352 272 290 310 215 320 C170 326 142 344 148 375 C155 408 200 422 256 422"
          fill="none" stroke="url(#navGold)" stroke-width="16" stroke-linecap="round" />
    <!-- Apex Sparkle -->
    <circle cx="256" cy="104" r="6" fill="#ffffff" />
  </g>

  <!-- Divider -->
  <line x1="256" y1="14" x2="256" y2="62" stroke="url(#navGold)" stroke-width="1.2" stroke-opacity="0.35" />

  <!-- Arabic Typography -->
  <g text-anchor="end" style="font-family: 'Tajawal', 'Segoe UI', Tahoma, sans-serif;">
    <text x="242" y="38" font-size="21" font-weight="800" fill="#ffffff" letter-spacing="-0.3">
      دهانات <tspan fill="url(#navGold)">وديكورات</tspan>
    </text>
    <text x="242" y="58" font-size="12" font-weight="600" fill="#f6af24" letter-spacing="0.2">
      مكة المكرمة • جدة • الطائف
    </text>
  </g>
</svg>`;

async function main() {
  const publicDir = path.resolve('public');
  const assetsDir = path.resolve('public/assets');

  // Write SVGs
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), fullLogoSvg);
  fs.writeFileSync(path.join(publicDir, 'logo-icon.svg'), iconSvg);
  fs.writeFileSync(path.join(publicDir, 'logo-navbar.svg'), navLogoSvg);
  fs.writeFileSync(path.join(assetsDir, 'favicon.svg'), iconSvg);

  console.log('Saved SVG logos to /public');

  // Render high-res PNG versions via Sharp
  await sharp(Buffer.from(fullLogoSvg))
    .resize(1200, 327)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'logo.png'));

  await sharp(Buffer.from(iconSvg))
    .resize(512, 512)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'logo-icon.png'));

  // Also create a 1200x630 OpenGraph Banner with the logo centered
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <radialGradient id="ogBg" cx="50%" cy="50%" r="75%">
        <stop offset="0%" stop-color="#1e2727" />
        <stop offset="60%" stop-color="#121717" />
        <stop offset="100%" stop-color="#080c0c" />
      </radialGradient>
      <linearGradient id="ogGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff2c9" />
        <stop offset="30%" stop-color="#f6af24" />
        <stop offset="70%" stop-color="#d4af37" />
        <stop offset="100%" stop-color="#aa7c11" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#ogBg)" />
    <!-- Decorative border -->
    <rect width="1160" height="590" x="20" y="20" rx="24" fill="none" stroke="url(#ogGold)" stroke-width="1.5" stroke-opacity="0.3" />
    
    <!-- Centered Logo Component -->
    <g transform="translate(160, 195)">
      ${fullLogoSvg.replace(/<svg[^>]*>|<\/svg>/g, '').replace(/rx="32"/g, 'rx="20"')}
    </g>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('Successfully generated:');
  console.log(' - /public/logo.svg (Full brand logo)');
  console.log(' - /public/logo-icon.svg (Square emblem icon)');
  console.log(' - /public/logo-navbar.svg (Transparent navbar header logo)');
  console.log(' - /public/logo.png (1200x327 raster logo)');
  console.log(' - /public/logo-icon.png (512x512 app icon)');
  console.log(' - /public/og-image.png (1200x630 OpenGraph card)');
  console.log(' - /public/assets/favicon.svg (Updated favicon)');
}

main().catch(console.error);
