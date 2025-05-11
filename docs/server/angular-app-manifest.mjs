
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/proyecto-SJB/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyecto-SJB"
  },
  {
    "renderMode": 2,
    "route": "/proyecto-SJB/inicio-control-de-pagos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27439, hash: '4469d498c7386a529c6f431925a675cc230728ded44b7319233a824ffc0779e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: '10569ee31476f1d74767bd8c473dc7f95b0c27290f420124313a56f8d317d7b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 32616, hash: '565c1e9004fd6b718d8882181a3cc9a0daa3f1cb0cec3f2f15a092bacb517427', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 86570, hash: '632b86bc9e0b3a41d571c9351b3b5ab10117df3d2fa36811870c0d983e208355', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YOBTN3TQ.css': {size: 17550, hash: 'U8ys4LR6rvk', text: () => import('./assets-chunks/styles-YOBTN3TQ_css.mjs').then(m => m.default)}
  },
};
