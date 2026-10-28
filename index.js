#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const prompts = {
  planner: 'planner-system-prompt.md',
  reviewer: 'reviewer-system-prompt.md',
};

const usage = `Usage:
  npx skill list
  npx skill planner
  npx skill reviewer

Available skills:
  planner   Returns the planner system prompt.
  reviewer  Returns the reviewer system prompt.
`;

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log(usage);
  process.exit(0);
}

if (args[0] === 'list') {
  console.log(Object.keys(prompts).join('\n'));
  process.exit(0);
}

const name = args[0];
const fileName = prompts[name];

if (!fileName) {
  console.error(`Unknown skill: ${name}`);
  console.error(usage);
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
