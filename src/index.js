'use strict';

/**
 * Validación completa de RFC, CURP, NSS y otros identificadores fiscales mexicanos
 */

const RFC_REGEX = /^[A-Z&Ñ]{3,4}[0-9]{6}[A-Z0-9]{3}$/;
const CURP_REGEX = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9A-Z][0-9]$/;
const NSS_REGEX = /^[0-9]{11}$/;

export function validarRFC(rfc) {
  if (!rfc || typeof rfc !== 'string') return false;
  const rfcLimpio = rfc.trim().toUpperCase();
  return RFC_REGEX.test(rfcLimpio);
}

export function validarCURP(curp) {
  if (!curp || typeof curp !== 'string') return false;
  const curpLimpia = curp.trim().toUpperCase();
  return CURP_REGEX.test(curpLimpia);
}

export function validarNSS(nss) {
  if (!nss || typeof nss !== 'string') return false;
  const nssLimpio = nss.trim().replace(/[-\s]/g, '');
  return NSS_REGEX.test(nssLimpio);
}

export function detectarTipo(identificador) {
  if (!identificador) return 'DESCONOCIDO';
  const id = identificador.trim().toUpperCase();
  if (RFC_REGEX.test(id)) return 'RFC';
  if (CURP_REGEX.test(id)) return 'CURP';
  if (NSS_REGEX.test(id.replace(/[-]/g, ''))) return 'NSS';
  return 'DESCONOCIDO';
}

export function validarIdentificador(identificador) {
  const tipo = detectarTipo(identificador);
  let esValido = false;
  
  switch (tipo) {
  case 'RFC': esValido = validarRFC(identificador); break;
  case 'CURP': esValido = validarCURP(identificador); break;
  case 'NSS': esValido = validarNSS(identificador); break;
  }
  
  return {
    identificador: identificador?.trim().toUpperCase(),
    tipo,
    esValido
  };
}

export default { validarRFC, validarCURP, validarNSS, detectarTipo, validarIdentificador };
