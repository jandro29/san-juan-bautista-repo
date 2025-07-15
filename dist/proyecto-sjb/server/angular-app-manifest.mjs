
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXBQ7JUC.js",
      "chunk-2TSWSPGZ.js",
      "chunk-BD4MZY7C.js",
      "chunk-7SRX2BHT.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OUJPHC3N.js",
      "chunk-CXIZGAJW.js"
    ],
    "route": "/inicio-control-de-pagos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7IGRB5ZR.js",
      "chunk-RI4OYPUK.js",
      "chunk-OUXDEDZO.js",
      "chunk-2BVJ5QC4.js",
      "chunk-BD4MZY7C.js",
      "chunk-7SRX2BHT.js",
      "chunk-CXIZGAJW.js",
      "chunk-DI6EMUXY.js"
    ],
    "route": "/estudiantes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLU5KZC5.js",
      "chunk-3WUBDBKL.js",
      "chunk-2TSWSPGZ.js",
      "chunk-RI4OYPUK.js",
      "chunk-OUXDEDZO.js",
      "chunk-2BVJ5QC4.js",
      "chunk-BD4MZY7C.js",
      "chunk-7SRX2BHT.js",
      "chunk-CXIZGAJW.js",
      "chunk-DI6EMUXY.js"
    ],
    "route": "/mensualidades"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLTCLQKY.js",
      "chunk-3WUBDBKL.js",
      "chunk-2TSWSPGZ.js",
      "chunk-RI4OYPUK.js",
      "chunk-OUXDEDZO.js",
      "chunk-2BVJ5QC4.js",
      "chunk-BD4MZY7C.js",
      "chunk-7SRX2BHT.js",
      "chunk-CXIZGAJW.js",
      "chunk-DI6EMUXY.js"
    ],
    "route": "/matriculas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QW4TX5KY.js",
      "chunk-2TSWSPGZ.js",
      "chunk-RI4OYPUK.js",
      "chunk-OUXDEDZO.js",
      "chunk-2BVJ5QC4.js",
      "chunk-BD4MZY7C.js",
      "chunk-7SRX2BHT.js",
      "chunk-CXIZGAJW.js",
      "chunk-DI6EMUXY.js"
    ],
    "route": "/reportes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LPNSFTU7.js",
      "chunk-2TSWSPGZ.js",
      "chunk-2BVJ5QC4.js",
      "chunk-7SRX2BHT.js",
      "chunk-DI6EMUXY.js"
    ],
    "route": "/registrate"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSOQ62T3.js",
      "chunk-OUXDEDZO.js",
      "chunk-2BVJ5QC4.js",
      "chunk-BD4MZY7C.js",
      "chunk-7SRX2BHT.js",
      "chunk-DI6EMUXY.js"
    ],
    "route": "/registrar-alumno"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1044, hash: '6e38e75e04ecbc26b0e7a78ee7b0ffa13f852d397ef37082316e684e3d695072', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1584, hash: '5ecd316139113fd5b7db1ed45aba35777f7be0e8d096c4085884e4858821a246', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 68171, hash: 'bfa46b85908eec38290f29f8c2e3123eaa3cb745ad1ad3db442e0a4e5af8687b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 4594, hash: 'd4fac75ea79cd5d180577fe55f72948a8da95d641939bf78973c5c425076999e', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'matriculas/index.html': {size: 101381, hash: 'f5b92c4675edc144d40069de738d50245926d30d32d5ed0624225e19f9c756c4', text: () => import('./assets-chunks/matriculas_index_html.mjs').then(m => m.default)},
    'registrate/index.html': {size: 69725, hash: '5de24c629c7bfef82d48cb3880cef72af8c7e2049d35c1947b22eff291900a80', text: () => import('./assets-chunks/registrate_index_html.mjs').then(m => m.default)},
    'mensualidades/index.html': {size: 102173, hash: '4ddff90fd975d61059b67c345dc2fbcff400dbcf57ab9d2730d19ac034c9be9f', text: () => import('./assets-chunks/mensualidades_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 102023, hash: 'fbd0256d190b5d38b47eddf01d70acab94794d4076f3f7c74095b8d19cbaca16', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'registrar-alumno/index.html': {size: 73588, hash: '626f342061e87991a793fdaffadba91f852a82c722ea1d2f9356a79a7868db7c', text: () => import('./assets-chunks/registrar-alumno_index_html.mjs').then(m => m.default)},
    'estudiantes/index.html': {size: 78967, hash: '16a19016c4ebade452142dd712c28efe7569f7abdf3e19c4fba2893c619d3af0', text: () => import('./assets-chunks/estudiantes_index_html.mjs').then(m => m.default)}
  },
};
