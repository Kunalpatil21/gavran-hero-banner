# Contract Farming Page

## Goal
Create a dedicated, responsive Contract Farming page that closely follows the supplied DWIT Farm mockup while preserving the existing site navigation and footer styling.

## What will be built
- Add `/contract-farming` with unique page metadata.
- Add **Contract Farming** to every existing desktop and mobile navigation list without redesigning the navbar.
- Build the full-width farm banner with Marathi/English messaging, policy highlights, WhatsApp contact, and application CTA.
- Add the Marathi “Contract Farming म्हणजे काय?” explanation with coordinated poultry imagery.
- Add the six-card “Why Choose DWIT Farm?” benefits section.
- Build eight detailed policy cards in a responsive two-column layout:
  - DWIT Farm responsibilities
  - Farmer responsibilities
  - Buy Back Policy
  - Contract duration and renewal
  - Required documents
  - Contract cancellation reasons
  - Farmer benefits
  - Special terms and conditions
- Add a strong DWIT Farm objective band with poultry-farm imagery and Marathi content.
- Add accessible expandable FAQs.
- Add a validated Marathi application form with clear inline errors and success feedback.
- Reuse the existing DWIT Farm phone, WhatsApp, email, and address details in a matching contact panel.
- Reuse the existing section divider and footer unchanged.

## Visual direction
- Match the reference’s cream background, forest green, gold accents, compact Marathi typography, numbered information cards, rounded image panels, and dense but readable long-page rhythm.
- Use a cohesive set of poultry-farming visuals, prioritizing existing project assets and generating only missing imagery needed to match the reference.
- Keep layouts fluid across mobile, tablet, and desktop; two-column areas collapse cleanly to one column.

## Technical details
- Use TanStack Router links and create the new route file before linking it from navigation.
- Keep all styling within the project’s semantic green/gold/cream design tokens.
- Validate application inputs with a Zod schema before showing success; no data will be stored or sent because no submission destination was requested.
- Preserve the reference policies without adding income guarantees, fixed returns, or unsupported commitments.
- Verify the new page at desktop and mobile sizes, check navigation and accordion/form interactions, and confirm there are no browser errors.
