# validador-fiscal-mx

<!-- BADGES-DONATIONS-START -->
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Donate-orange?logo=ko-fi)](https://ko-fi.com/gerardolucero)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-yellow?logo=buy-me-a-coffee)](https://buymeacoffee.com/lucerorios0)
<!-- BADGES-DONATIONS-END -->


[![npm version](https://badge.fury.io/js/validador-fiscal-mx.svg)](https://badge.fury.io/js/validador-fiscal-mx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Validación completa de RFC, CURP, NSS y otros identificadores fiscales mexicanos con detección automática.

## Instalación

```bash
npm install validador-fiscal-mx
```

## Uso

```javascript
import { validarRFC, validarCURP, validarNSS, detectarTipo } from 'validador-fiscal-mx';

// Validar RFC
const rfc = validarRFC('ABCD800101ABC');
console.log(rfc); // { esValido: true, tipo: 'RFC', datos: {...} }

// Detectar tipo automáticamente
const tipo = detectarTipo('ABCD800101HDFRRL00');
console.log(tipo); // 'CURP'

// Validar CURP
const curp = validarCURP('ABCD800101HDFRRL00');
```

## API

### `validarRFC(rfc)`
Valida RFC de persona física o moral.

### `validarCURP(curp)`
Valida CURP y extrae información personal.

### `validarNSS(nss)`
Valida Número de Seguridad Social.

### `validarCedula(cedula)`
Valida Cédula Profesional.

### `detectarTipo(identificador)`
Detecta automáticamente el tipo de identificador.

## Características

- ✅ Validación RFC (físicas/morales)
- ✅ Validación CURP completa
- ✅ Validación NSS IMSS
- ✅ Validación Cédula Profesional
- ✅ Detección automática de tipo
- ✅ Extracción de datos (fecha, sexo, estado)
- ✅ Filtrado de palabras inconvenientes

## Licencia

MIT © Gerardo Lucero

<!-- DONATIONS-START -->
## 💖 Apoya el Ecosistema Mexicano OSS

Si estos paquetes te ayudan (RFC, ISR, Nómina, Bancos, Feriados, Nombres, Códigos Postales, Validadores), considera invitarme un café o apoyar el mantenimiento:

- [Ko-fi](https://ko-fi.com/gerardolucero)
- [Buy Me a Coffee](https://buymeacoffee.com/lucerorios0)

> Gracias por tu apoyo 🙌. Priorizaré issues/PRs con **contexto de uso en México** (SAT/IMSS/INFONAVIT, bancos, feriados) y publicaré avances en los READMEs.
<!-- DONATIONS-END -->
