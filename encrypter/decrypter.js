const {reversedLatinMap, reversedCyrillicMap, reversedDigitsMap, reversedSymbolsMap} = require('./maps.js')
const decrypt = (text) => {
    return text      
    .replace(/[A-Za-z]/g, (match) => reversedLatinMap[match] || match)  
    .replace(/[А-Яа-я]/g, (match) => reversedCyrillicMap[match] || match) 
    .replace(/[0-9]/g, (match) => reversedDigitsMap[match] || match)    
    .replace(/[^A-Za-z0-9А-Яа-я]/g, (match) => reversedSymbolsMap[match] || match); 
  }
  module.exports = Object.assign(decrypt, { default: decrypt });