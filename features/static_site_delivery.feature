Feature: aSaaSinators no-build static site delivery
  The repo should publish a polished static website without introducing a build system.

  Scenario: Site remains self-contained
    Given the repository has a site directory
    Then the page should be served from site/index.html
    And styles should be in site/styles.css
    And progressive behavior should be in site/app.js
    And generated artwork should be committed under site/assets
    And no package.json, node_modules, dist, Vite, Webpack, Parcel, npm, pnpm, or yarn build step should be required

  Scenario: Website implementation follows source documents
    Given docs/site-plan.md describes the section order
    And docs/site-copy.md contains the exact public copy
    And notes/project-notes.md captures the concept notes
    Then site/index.html should include the required headline, cutoff logic, access ladder, and no-build positioning copy
    And scripts/validate_site.py should fail if those source documents are missing

  Scenario: Published page is visually verified
    Given a change is made to copy, layout, imagery, or interaction
    Then local deterministic validation should pass
    And desktop, tablet, mobile, and narrow-mobile first-screen screenshots should pass visual QA
    And desktop, tablet, and mobile full-page screenshots should pass visual QA
    And the cache-busted live GitHub Pages URL should be verified after deployment
