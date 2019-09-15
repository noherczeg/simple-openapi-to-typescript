module.exports = (enumData) => `
/* Generated source, do not modify! */

export enum ${enumData.$$name} {
  ${enumData.data.map((status) => `
    ${status.code} = ${typeof status.value === 'string' ? `'${status.value}'` : status.value},
  `).join('')}
}

`;
