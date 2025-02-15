const latinMap = {
  'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H',
  'I': 'I', 'J': 'J', 'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P',
  'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X',
  'Y': 'Y', 'Z': 'Z',
  'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h',
  'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p',
  'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x',
  'y': 'y', 'z': 'z'
};

const cyrillicMap = {
  'А': 'А', 'Б': 'Б', 'В': 'В', 'Г': 'Г', 'Д': 'Д', 'Е': 'Е', 'Ё': 'Ё', 'Ж': 'Ж',
  'З': 'З', 'И': 'И', 'Й': 'Й', 'К': 'К', 'Л': 'Л', 'М': 'М', 'Н': 'Н', 'О': 'О',
  'П': 'П', 'Р': 'Р', 'С': 'С', 'Т': 'Т', 'У': 'У', 'Ф': 'Ф', 'Х': 'Х', 'Ц': 'Ц',
  'Ч': 'Ч', 'Ш': 'Ш', 'Щ': 'Щ', 'Ь': 'Ь', 'Ю': 'Ю', 'Я': 'Я',
  'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ё': 'ё', 'ж': 'ж',
  'з': 'з', 'и': 'и', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о',
  'п': 'п', 'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц',
  'ч': 'ч', 'ш': 'ш', 'щ': 'щ', 'ь': 'ь', 'ю': 'ю', 'я': 'я'
};

const digitsMap = {
  '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7',
  '8': '8', '9': '9'
};

const symbolsMap = {
  '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*',
  '(': '(', ')': ')', '-': '-', '=': '=', '{': '{', '}': '}', '[': '[', ']': ']',
  '\\': '\\', '|': '|', ';': ';', ':': ':', '"': '"', "'": "'", ',': ',', '.': '.',
  '<': '<', '>': '>', '?': '?', '`': '`', '~': '~'
};

const reverseMap = (map) => {
  return Object.fromEntries(Object.entries(map).map(([key, value]) => [value, key]));
};

const reversedLatinMap = reverseMap(latinMap);
const reversedCyrillicMap = reverseMap(cyrillicMap);
const reversedDigitsMap = reverseMap(digitsMap);
const reversedSymbolsMap = reverseMap(symbolsMap);

const Maps = { latinMap, cyrillicMap, digitsMap, symbolsMap, reversedLatinMap, reversedCyrillicMap, reversedDigitsMap, reversedSymbolsMap };

module.exports = Object.assign(Maps, { default: Maps });