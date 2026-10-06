# UI rework, 7 October 2026

The updated home direction replaces the older workbench hero rule. Reference sites are https://www.apoorvgupta.com/ and https://khaledbatt.vercel.app/, reached through the supplied Wall of Portfolios pages.

Use a portrait-led introduction, large sans-serif headings with restrained serif emphasis, unnumbered section labels, a floating capsule header, one featured case study, and a direct email contact. Preserve existing case study routes and interactive models. Project filters derive from categories present in the data, so an empty category is never offered.

The provisional palette uses neutral grayscale values with graphite dark panels. Light and dark roles are defined together in src/index.css. Replace those tokens when the user supplies their palette. Technical preview canvases retain their own dark backgrounds for diagram contrast in both themes.

The header offers crescent moon, sun, and monitor buttons for Dark, Light, and System. Buttons remain inline on mobile and expose accessible names and pressed states. System is the initial preference. An inline bootstrap applies the stored preference before React loads. The selector follows operating-system changes and synchronizes preference between tabs.

