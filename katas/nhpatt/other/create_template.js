const createTemplate = template => values => template.replace(/\{\{(.+?)\}\}/g, (_, k) => values[k] || "");

let f = createTemplate("{{firstName}} {{lastName}} likes {{interests}}");
console.log(f({firstName: 'John', lastName: 'Smith', interests: 'sport'}));