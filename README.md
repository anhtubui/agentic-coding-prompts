# Agentic Coding Prompts — Planner & Reviewer

Search keywords: Agentic AI, Planner-Critic, Cross-Model Reflection, Evaluator-Optimizer, code review, system prompt.

## Skills

- [Planner System Prompt](./skills/planner/SKILL.md): analysis, planning, implementation, and responding to feedback.
- [Reviewer System Prompt](./skills/reviewer/SKILL.md): independent review, verification, and final acceptance.

## Install with `npx skills`

Install both skills from GitHub:

```bash
npx skills add anhtubui/agentic-coding-prompts --skill planner reviewer
```

Install either skill individually:

```bash
npx skills add anhtubui/agentic-coding-prompts --skill planner
npx skills add anhtubui/agentic-coding-prompts --skill reviewer
```

Choose your coding agent when prompted. Add `-g` to install globally instead of
in the current project, or `-a codex` to target Codex.

Inspect the available skills before installing:

```bash
npx skills add anhtubui/agentic-coding-prompts --list
```

The repository uses the standard [skills directory layout](https://github.com/vercel-labs/skills/blob/main/docs/creating-skills.md):

```text
skills/
├── planner/SKILL.md
└── reviewer/SKILL.md
```

Each skill contains its own name, description, and complete instructions.
Commit and push these files to GitHub to make them available through the commands
above. No npm publication is required.

For local discovery before publishing, run from this repository:

```bash
npx skills add . --list
```

The existing prompt-printing helper remains available locally with
`node index.js planner`, `node index.js reviewer`, and `node index.js list`.
It is separate from the `npx skills` installer.

## How to Use

1. Install the desired skills, then invoke `planner` or `reviewer` through your coding agent's skill interface. For manual use, copy the instructions below the YAML frontmatter into the corresponding model's system prompt.
2. Provide both models with the same original requirements, acceptance criteria, and repository constraints.
3. Associate each review with a specific commit SHA or snapshot ID.
4. Configure tool permissions: the Planner may modify code; the Reviewer may only read and run checks within an authorized environment.

The Planner supports `phase=PLAN` and `phase=IMPLEMENT`. The Reviewer supports `phase=PLAN` and `phase=CODE`. After implementation, the orchestrator sets `phase=CODE` when submitting the artifact for review.

## Recommended Workflow

Requirements → Planner creates a plan → Reviewer reviews the plan → Planner implements → Automated checks run → Reviewer reviews the code → Planner addresses findings → Reviewer performs final acceptance.

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
