const {latinMap, cyrillicMap, digitsMap, symbolsMap} = require('./maps.js')
const encrypt = (text) => {
    return text
      .replace(/[A-Za-z]/g, (match) => latinMap[match] || match)  
      .replace(/[А-Яа-я]/g, (match) => cyrillicMap[match] || match) 
      .replace(/[0-9]/g, (match) => digitsMap[match] || match)    
      .replace(/[^A-Za-z0-9А-Яа-я]/g, (match) => symbolsMap[match] || match); 
  };  
  module.exports = Object.assign(encrypt, { default: encrypt });