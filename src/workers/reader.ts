/* eslint-disable no-restricted-globals */

export const fetchJson = async () => {
  const { wasm_filter } = await import('../../node_modules/hb-wasm-filter');
  const jsonUrl = process.env.JSON_URL || 'https://bigjsonbucket.s3.eu-central-1.amazonaws.com/mid.json';

  self
    .fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      const results = wasm_filter(data, 'Carlson');
      // @ts-ignore
      self.postMessage({ type: 'done', results });
    });
};
