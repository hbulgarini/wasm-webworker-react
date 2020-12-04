/* eslint-disable no-restricted-globals */


export const fetchJson = async () => {
  const { wasm_filter } = await import("../node_modules/hb-wasm-filter/hb_wasm_filter.js");


  self
    .fetch("https://bigjsonbucket.s3.eu-central-1.amazonaws.com/mid.json")
    .then((response) => response.json())
    .then((data) => {
      const results = wasm_filter(data, "Carlson");
      console.log('results',results)

      // @ts-ignore
      self.postMessage({ type: "done", results });
    });
};
