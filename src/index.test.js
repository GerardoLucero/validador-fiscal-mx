import validador from './index.js';

describe('validador-fiscal-mx', () => {
  describe('validarRFC', () => {
    test('debe validar RFC válido de persona física', () => {
      expect(validador.validarRFC('PEGJ850115AB1')).toBe(true);
      expect(validador.validarRFC('LOMP901225XY2')).toBe(true);
    });

    test('debe validar RFC válido de persona moral', () => {
      expect(validador.validarRFC('ABC123456T1A')).toBe(true);
    });

    test('debe rechazar RFC inválido', () => {
      expect(validador.validarRFC('INVALID')).toBe(false);
      expect(validador.validarRFC('')).toBe(false);
      expect(validador.validarRFC(null)).toBe(false);
      expect(validador.validarRFC(undefined)).toBe(false);
      expect(validador.validarRFC(123)).toBe(false);
    });

    test('debe manejar espacios en RFC', () => {
      expect(validador.validarRFC(' PEGJ850115AB1 ')).toBe(true);
      expect(validador.validarRFC('pegj850115ab1')).toBe(true);
    });
  });

  describe('validarCURP', () => {
    test('debe validar CURP válida', () => {
      expect(validador.validarCURP('PEGJ850115HJCRRL09')).toBe(true);
      expect(validador.validarCURP('LOMM901225MMCRRL04')).toBe(true);
    });

    test('debe rechazar CURP inválida', () => {
      expect(validador.validarCURP('INVALID')).toBe(false);
      expect(validador.validarCURP('')).toBe(false);
      expect(validador.validarCURP(null)).toBe(false);
      expect(validador.validarCURP(undefined)).toBe(false);
      expect(validador.validarCURP(123)).toBe(false);
    });

    test('debe manejar espacios en CURP', () => {
      expect(validador.validarCURP(' PEGJ850115HJCRRL09 ')).toBe(true);
      expect(validador.validarCURP('pegj850115hjcrrl09')).toBe(true);
    });
  });

  describe('validarNSS', () => {
    test('debe validar NSS válido', () => {
      expect(validador.validarNSS('12345678901')).toBe(true);
      expect(validador.validarNSS('98765432109')).toBe(true);
    });

    test('debe rechazar NSS inválido', () => {
      expect(validador.validarNSS('123456789')).toBe(false);
      expect(validador.validarNSS('123456789012')).toBe(false);
      expect(validador.validarNSS('')).toBe(false);
      expect(validador.validarNSS(null)).toBe(false);
      expect(validador.validarNSS(undefined)).toBe(false);
      expect(validador.validarNSS(123)).toBe(false);
    });

    test('debe manejar guiones en NSS', () => {
      expect(validador.validarNSS('12-34-56-78901')).toBe(true);
      expect(validador.validarNSS('12 34 56 78901')).toBe(true);
    });
  });

  describe('detectarTipo', () => {
    test('debe detectar tipos correctamente', () => {
      expect(validador.detectarTipo('PEGJ850115AB1')).toBe('RFC');
      expect(validador.detectarTipo('PEGJ850115HJCRRL09')).toBe('CURP');
      expect(validador.detectarTipo('12345678901')).toBe('NSS');
      expect(validador.detectarTipo('12-34-56-78901')).toBe('NSS');
      expect(validador.detectarTipo('INVALID')).toBe('DESCONOCIDO');
    });

    test('debe manejar valores nulos', () => {
      expect(validador.detectarTipo(null)).toBe('DESCONOCIDO');
      expect(validador.detectarTipo(undefined)).toBe('DESCONOCIDO');
      expect(validador.detectarTipo('')).toBe('DESCONOCIDO');
    });

    test('debe manejar espacios', () => {
      expect(validador.detectarTipo(' PEGJ850115AB1 ')).toBe('RFC');
    });
  });

  describe('validarIdentificador', () => {
    test('debe validar y clasificar RFC', () => {
      const resultado = validador.validarIdentificador('PEGJ850115AB1');
      expect(resultado.tipo).toBe('RFC');
      expect(resultado.esValido).toBe(true);
      expect(resultado.identificador).toBe('PEGJ850115AB1');
    });

    test('debe validar y clasificar CURP', () => {
      const resultado = validador.validarIdentificador('PEGJ850115HJCRRL09');
      expect(resultado.tipo).toBe('CURP');
      expect(resultado.esValido).toBe(true);
      expect(resultado.identificador).toBe('PEGJ850115HJCRRL09');
    });

    test('debe validar y clasificar NSS', () => {
      const resultado = validador.validarIdentificador('12345678901');
      expect(resultado.tipo).toBe('NSS');
      expect(resultado.esValido).toBe(true);
      expect(resultado.identificador).toBe('12345678901');
    });

    test('debe manejar identificador inválido', () => {
      const resultado = validador.validarIdentificador('INVALID');
      expect(resultado.tipo).toBe('DESCONOCIDO');
      expect(resultado.esValido).toBe(false);
      expect(resultado.identificador).toBe('INVALID');
    });

    test('debe manejar valores nulos', () => {
      const resultado = validador.validarIdentificador(null);
      expect(resultado.tipo).toBe('DESCONOCIDO');
      expect(resultado.esValido).toBe(false);
      expect(resultado.identificador).toBe(undefined);
    });
  });
});
