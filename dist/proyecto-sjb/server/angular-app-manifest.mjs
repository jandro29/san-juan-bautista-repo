
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sa-juan-bautista-repo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sa-juan-bautista-repo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3E5P4AP6.js"
    ],
    "route": "/sa-juan-bautista-repo/inicio-control-de-pagos"
  },
  {
    "renderMode": 2,
    "route": "/sa-juan-bautista-repo/estudiantes"
  },
  {
    "renderMode": 2,
    "route": "/sa-juan-bautista-repo/mensualidades"
  },
  {
    "renderMode": 2,
    "route": "/sa-juan-bautista-repo/matriculas"
  },
  {
    "renderMode": 2,
    "route": "/sa-juan-bautista-repo/reportes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28637, hash: '785b5cac1ae011a7653270a3762e793a6010e5e321d04b4987d27bd83bb0b0ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17333, hash: 'b30ea3cd58709e8830e9268f03e4f1752ad929d9d49f75109ea93505c25483b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 35137, hash: '481020c05a89f3e0c7f9bff1aed62e279be474ddfd18039f33b1c44e20db17d2', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'matriculas/index.html': {size: 126492, hash: 'a6cb0393a00438a9caa9e89af5695ac2ec8cef4e65fa2374dd40c7fa24beaf80', text: () => import('./assets-chunks/matriculas_index_html.mjs').then(m => m.default)},
    'index.html': {size: 86809, hash: '6e70a91165f58e2e50b90ce2fb7f5b015cf1329c2c1b4e8657c717bf6d6ecd5d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'estudiantes/index.html': {size: 108556, hash: '3c3461f88a28769647b57e24ccf0d66ccec15678df024e93a12e0c43cc04efee', text: () => import('./assets-chunks/estudiantes_index_html.mjs').then(m => m.default)},
    'mensualidades/index.html': {size: 126464, hash: '0e5b9f06b2cb173275cb71b86ef085f338c58d20d1a5ff703988f326a901c9ff', text: () => import('./assets-chunks/mensualidades_index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 86211, hash: '03ee04bbd2cb2bfccbec8e4bdec46c96d6f077ce4cca2303f0a0f1d6c48fd016', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'styles-7U52DBPW.css': {size: 22619, hash: 'HaQ2ZmmA6Ls', text: () => import('./assets-chunks/styles-7U52DBPW_css.mjs').then(m => m.default)}
  },
};
