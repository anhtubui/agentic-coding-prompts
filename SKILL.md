---
name: Agentic Coding Prompts
description: Reusable Planner–Reviewer prompts for an agentic coding workflow, including independent code review and final acceptance validation.
---

# Agentic Coding Prompts

This skill provides reusable system prompts for a two-model coding workflow:

- Planner: analyzes requirements, creates a plan, and implements the solution.
- Reviewer: independently reviews the plan and code, verifies behavior, and confirms final acceptance.

Use this skill when you need a structured, high-signal workflow for implementing and validating code changes with explicit review gates.

## Included prompts

- `planner-system-prompt.md`: planning and implementation guidance for the coding agent.
- `reviewer-system-prompt.md`: independent review, verification, and final acceptance criteria.

## Typical use

1. Provide the same requirements and constraints to the Planner and Reviewer.
2. Have the Planner draft a solution plan and implementation.
3. Have the Reviewer assess correctness, edge cases, risks, and verification evidence.
4. Require the Planner to address review findings before final acceptance.

## Expected workflow

Requirements -> Plan -> Review -> Implement -> Verify -> Final review -> Acceptance

This skill is intended for agentic coding tasks where explicit critique and validation matter more than a single-pass implementation.
