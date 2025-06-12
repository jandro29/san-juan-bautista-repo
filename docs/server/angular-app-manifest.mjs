
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
    'index.csr.html': {size: 28545, hash: '0cd976f626f1af39ac7426ce0fec2c940720dc017fa8b9a95bbf6ebbd27c7a6b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17282, hash: '2abfa27f348ace64bd43ccf00b6d8bc7a4993e50b6063f0168ec7f8feed99cf9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 35056, hash: 'b750e5781dc862b8047d9497f35d4a5893014cb6d050a39d2a05ffa7b48ee548', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 87725, hash: '65c3aeaef11065215ebd2c68dbc5906a2c33f872e6b911433509eceb10012c6a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 86183, hash: '8a2874d22b5d8479619e013fd9006da02b969b7f067d13f3c1c0181ae7efa051', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'matriculas/index.html': {size: 126444, hash: '8802675fef6c2f0182e1c6664380ef4b6921489cb3b3cc9f66d88c238e6a983b', text: () => import('./assets-chunks/matriculas_index_html.mjs').then(m => m.default)},
    'estudiantes/index.html': {size: 108535, hash: '8004ecc44a437c3aee0c2f9f6c541ec16dab9ee07b30e0193f678e15117f01f0', text: () => import('./assets-chunks/estudiantes_index_html.mjs').then(m => m.default)},
    'mensualidades/index.html': {size: 126459, hash: '3ba70360cadf19ff23a118b0214713f476f5fbc0174b398d660e04a955be8a4b', text: () => import('./assets-chunks/mensualidades_index_html.mjs').then(m => m.default)},
    'styles-YPKNAOOD.css': {size: 22451, hash: 'GkYWuniplVQ', text: () => import('./assets-chunks/styles-YPKNAOOD_css.mjs').then(m => m.default)}
  },
};
