#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const prompts = {
  planner: 'skills/planner/SKILL.md',
  reviewer: 'skills/reviewer/SKILL.md',
};

const usage = `Usage:
  npx skill
  npx skill list
  npx skill planner
  npx skill reviewer

Available skills:
  planner   Print the planner system prompt.
  reviewer  Print the reviewer system prompt.
`;

const args = process.argv.slice(2);

function printUsage() {
  console.log(usage);
}

function listSkills() {
  console.log(Object.keys(prompts).join('\n'));
}

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  printUsage();
  process.exit(0);
}

if (args.includes('--list') || args.includes('-l') || args[0] === 'list') {
  listSkills();
  process.exit(0);
}

const requested = args[0];
const fileName = prompts[requested];

if (!fileName) {
  console.error(`Unknown skill: ${requested}`);
  printUsage();
  process.exit(1);
}

const filePath = path.join(__dirname, fileName);

try {
  const content = fs.readFileSync(filePath, 'utf8');
  process.stdout.write(content);
} catch (error) {
  console.error(`Failed to read ${fileName}: ${error.message}`);
  process.exit(1);
}
