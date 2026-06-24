Feature: aSaaSinators landing page positioning
  The static website should express the SaaS-exit argument before implementation details.

  Background:
    Given a visitor lands on the aSaaSinators GitHub Pages site

  Scenario: Lead with the paradigm claim, not the seat tactic
    Then the hero headline should say "The best SaaS is no SaaS."
    And the hero proof strip should emphasize a front door for work, minimum seats, and invisible cutoff
    And the top proof strip should not present "one extra seat" as the customer benefit

  Scenario: Explain the agent as a facilitation layer
    Then the page should describe the agent as the front door for requests, reports, and data access
    And the page should explain that the agent facilitates cross-system work instead of replacing employees
    And the page should show API, export or sync, and browser operation as access modes

  Scenario: Capture the humans-as-glue problem
    Then the integration section should say that people often glue email, CRM, billing, support, reports, and spreadsheets together
    And the page should show that the agent collapses those handoffs into one mediated surface

  Scenario: Define the two migration gates
    Then phase one should be complete when user questions, reports, and jobs route to the agent instead of the SaaS UI
    And final cutoff should happen when critical answers no longer require SaaS data calls
    And cancellation should be framed as an invisible switch, not a big-bang cliff

  Scenario: Show a visual for every assassination stage
    Then each process tab should render a synchronized high-quality visual with the selected phase
    And the Seat visual should show the agent entering as one authorized user
    And the Route visual should show requests flowing through the agent front door
    And the Compress visual should show human SaaS seats shrinking
    And the Cut off visual should show owned workflows answering without SaaS data calls
