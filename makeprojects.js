const {
    writeFileSync,
} = require('fs');

const PROJECTS = require('./projects.json');

console.log(PROJECTS.length);
console.log(PROJECTS[0]);

for (const [order, project] of PROJECTS.entries()) {
    console.log('writing ' + project.title);

    const fileName = project.image.split('.')[0] + '.md';
    writeFileSync(
        './content/projects/' + fileName,
        `---
title: "${project.title}"
type: "${project.type.join(' ')}"
${project.external ? `external: "${project.external}"` : ''}
image: "${project.image}"
description: "${project.description}"
year: "${project.year}"
order: ${order}.0
---
`,
        'utf8',
    );
}

