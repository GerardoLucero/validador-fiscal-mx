# validador-fiscal-mx

[![npm version](https://badge.fury.io/js/validador-fiscal-mx.svg)](https://www.npmjs.com/package/validador-fiscal-mx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Validación completa de RFC, CURP, NSS y otros identificadores fiscales mexicanos con detección automática de tipo.

## ✨ Características

- 🔍 **Validación completa** de RFC, CURP, NSS
- 🤖 **Detección automática** del tipo de identificador
- 🛡️ **Validación robusta** con expresiones regulares
- 📦 **Sin dependencias externas**
- ⚡ **Ligero y rápido**

## 🚀 Instalación

```bash
npm install validador-fiscal-mx
```

## 📖 Uso

```javascript
import validadorFiscal from 'validador-fiscal-mx';

// Validar RFC
const esRFCValido = validadorFiscal.validarRFC('PEGJ850115AB1');
console.log(esRFCValido); // true

// Validar CURP
const esCURPValida = validadorFiscal.validarCURP('PEGJ850115HJCRRL09');
console.log(esCURPValida); // true

// Detectar tipo automáticamente
const tipo = validadorFiscal.detectarTipo('12345678901');
console.log(tipo); // 'NSS'

// Validación completa
const resultado = validadorFiscal.validarIdentificador('PEGJ850115AB1');
console.log(resultado);
// { identificador: 'PEGJ850115AB1', tipo: 'RFC', esValido: true }
```

## 🔧 API

### `validarRFC(rfc: string): boolean`
Valida un RFC mexicano (persona física o moral).

### `validarCURP(curp: string): boolean`
Valida una CURP mexicana.

### `validarNSS(nss: string): boolean`
Valida un Número de Seguridad Social.

### `detectarTipo(identificador: string): string`
Detecta automáticamente el tipo de identificador.

### `validarIdentificador(identificador: string): object`
Validación completa con información del tipo y validez.

## 🧪 Tests

```bash
npm test
npm run test:coverage
```

## 📄 Licencia

MIT © Gerardo Lucero
