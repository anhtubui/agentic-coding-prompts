# Agentic Coding Prompts — Planner & Reviewer

Search keywords: Agentic AI, Planner-Critic, Cross-Model Reflection, Evaluator-Optimizer, code review, system prompt.

## Prompts

- [Planner System Prompt](./planner-system-prompt.md): analysis, planning, implementation, and responding to feedback.
- [Reviewer System Prompt](./reviewer-system-prompt.md): independent review, verification, and final acceptance.

## How to Use

1. Copy the contents of the code block in each file into the corresponding model's system prompt.
2. Provide both models with the same original requirements, acceptance criteria, and repository constraints.
3. Associate each review with a specific commit SHA or snapshot ID.
4. Configure tool permissions: the Planner may modify code; the Reviewer may only read and run checks within an authorized environment.

The Planner supports `phase=PLAN` and `phase=IMPLEMENT`. The Reviewer supports `phase=PLAN` and `phase=CODE`. After implementation, the orchestrator sets `phase=CODE` when submitting the artifact to the Reviewer.

## Recommended Workflow

Requirements → Planner creates a plan → Reviewer reviews the plan → Planner implements → Automated checks run → Reviewer reviews the code → Planner addresses findings → Reviewer performs final acceptance on the final revision.

- Allow a maximum of three revision rounds per phase by default. When the limit is reached, report remaining issues without automatically approving the work.
- If a disagreement persists across two rounds without new evidence, ask the user to decide.
- Complete the workflow when the final revision is approved, required checks pass, and no blocking findings remain.
- Technical approval does not automatically authorize merging, deployment, or publishing.

The Reviewer includes the Final Acceptance Review step discussed after the original prompts. A third model is optional.

## Quick Checklist

- [ ] Requirements have clear acceptance criteria.
- [ ] Relevant code and repository instructions have been read.
- [ ] Changes stay within the assigned scope.
- [ ] Main flows, error handling, and relevant edge cases have been checked.
- [ ] Security, performance, and compatibility have been assessed where applicable.
- [ ] Verification commands and actual results have been recorded.
- [ ] Every finding has an ID and is addressed with evidence.
- [ ] The final review checks all requirements against the correct revision.

Use `N/A + reason` for items that do not apply.
