# validador-fiscal-mx

Validación completa de RFC, CURP, NSS y otros identificadores fiscales mexicanos con detección automática de tipo.

[![Ko-fi](https://img.shields.io/badge/Ko--fi-FF5E5B?style=flat&logo=ko-fi&logoColor=white)](https://ko-fi.com/gerardolucero)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/lucerorios0)
[![GitHub Stars](https://img.shields.io/github/stars/GerardoLucero/validador-fiscal-mx?style=social)](https://github.com/GerardoLucero/validador-fiscal-mx)
[![npm version](https://badge.fury.io/js/validador-fiscal-mx.svg)](https://www.npmjs.com/package/validador-fiscal-mx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Validación de RFC** — personas físicas (13 chars) y morales (12 chars)
- **Validación de CURP** — estructura, estado, dígito verificador
- **Validación de NSS** — Número de Seguridad Social IMSS (11 dígitos)
- **Detección automática** — identifica el tipo de identificador sin que lo especifiques
- **Sin dependencias externas** — validación por expresiones regulares
- **TypeScript ready** — definiciones de tipos incluidas

## Instalación

```bash
npm install validador-fiscal-mx
```

## Uso

```javascript
import validadorFiscal from 'validador-fiscal-mx';
```

### Validar RFC

```javascript
// Persona física (13 caracteres)
const rfcFisico = validadorFiscal.validarRFC('PEGJ850115AB1');
console.log(rfcFisico); // true

// Persona moral (12 caracteres)
const rfcMoral = validadorFiscal.validarRFC('XIA990101AB1');
console.log(rfcMoral); // true

// RFC inválido
const invalido = validadorFiscal.validarRFC('12345');
console.log(invalido); // false
```

### Validar CURP

```javascript
const esCURPValida = validadorFiscal.validarCURP('PEGJ850115HJCRRL09');
console.log(esCURPValida); // true
```

### Validar NSS

```javascript
const esNSSValido = validadorFiscal.validarNSS('12345678901');
console.log(esNSSValido); // true
```

### Detección automática

```javascript
// Detecta el tipo sin especificarlo
const tipoRFC = validadorFiscal.detectarTipo('PEGJ850115AB1');
console.log(tipoRFC); // 'RFC'

const tipoCURP = validadorFiscal.detectarTipo('PEGJ850115HJCRRL09');
console.log(tipoCURP); // 'CURP'

const tipoNSS = validadorFiscal.detectarTipo('12345678901');
console.log(tipoNSS); // 'NSS'

const desconocido = validadorFiscal.detectarTipo('abc123');
console.log(desconocido); // 'DESCONOCIDO'
```

### Validación completa

```javascript
const resultado = validadorFiscal.validarIdentificador('PEGJ850115AB1');
console.log(resultado);
// { identificador: 'PEGJ850115AB1', tipo: 'RFC', esValido: true }
```

## API

### `validarRFC(rfc: string): boolean`

Valida un RFC mexicano. Acepta tanto personas físicas (13 chars) como personas morales (12 chars).

### `validarCURP(curp: string): boolean`

Valida una CURP mexicana de 18 caracteres.

### `validarNSS(nss: string): boolean`

Valida un Número de Seguridad Social (11 dígitos).

### `detectarTipo(identificador: string): string`

Detecta automáticamente el tipo: `'RFC'`, `'CURP'`, `'NSS'` o `'DESCONOCIDO'`.

### `validarIdentificador(identificador: string): object`

Validación completa con tipo y resultado. Retorna `{ identificador, tipo, esValido }`.

## Caso de uso: formulario con validación automática

```javascript
import validadorFiscal from 'validador-fiscal-mx';

function validarCampoFiscal(valor) {
  const resultado = validadorFiscal.validarIdentificador(valor);

  if (resultado.tipo === 'DESCONOCIDO') {
    return { valido: false, mensaje: 'No se reconoce como RFC, CURP o NSS' };
  }

  return {
    valido: resultado.esValido,
    tipo: resultado.tipo,
    mensaje: resultado.esValido
      ? `${resultado.tipo} válido`
      : `${resultado.tipo} con formato incorrecto`
  };
}
```

## Testing

```bash
npm test
npm run test:coverage
```

## Licencia

MIT © [Gerardo Lucero](https://github.com/GerardoLucero)

---

- [calcula-rfc](https://www.npmjs.com/package/calcula-rfc) — Calcula RFC desde datos personales
- [calcula-curp](https://www.npmjs.com/package/calcula-curp) — Calcula CURP desde datos personales
- [generador-datos-mx](https://www.npmjs.com/package/generador-datos-mx) — Genera datos de prueba mexicanos
