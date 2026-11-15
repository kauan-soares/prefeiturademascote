(() => {
  'use strict';

  // Troque pelos números reais (DDI + DDD + número, só dígitos). Ex.: 5573999999999
  const NUMEROS = {
    art: '5573999999999',
    fiscal: '5573999999999',
    geral: '5573999999999'
  };

  const MENSAGENS = {
    art: 'Olá! Gostaria de atendimento sobre ART e Certidões.',
    fiscal: 'Olá! Gostaria de atendimento sobre Fiscalização e Obras.',
    geral: 'Olá! Gostaria de atendimento geral.'
  };

  const botoes = {
    art: document.getElementById('btn-art'),
    fiscal: document.getElementById('btn-fiscal'),
    geral: document.getElementById('btn-geral')
  };

  for (const chave in botoes) {
    botoes[chave].href =
      `https://wa.me/${NUMEROS[chave]}?text=${encodeURIComponent(MENSAGENS[chave])}`;
  }
})();