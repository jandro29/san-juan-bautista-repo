
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28573, hash: '71c021bd7e069eba9d9b6526590186542d9255e1cc505130243adfac39736ed7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17161, hash: '77f80da005c7c9175c0126912a7c40569b2c58833af6d4b81255a61e43b10a24', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 33810, hash: 'badff83930420f82ae8d56de7df545b1b69075bf78e9bfe49e073717320a1d4a', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 87764, hash: '8911785916229f3ae5ca14233fff54a9c62e521f311de2f2474d399752bb33b1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5YCQL7LF.css': {size: 20263, hash: 'Ol7ROH0dcPE', text: () => import('./assets-chunks/styles-5YCQL7LF_css.mjs').then(m => m.default)}
  },
};
