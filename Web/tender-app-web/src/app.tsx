import { matchRoutes } from 'umi';

// @ts-expect-error no types
export function onRouteChange({ clientRoutes, location }) {
  const base = '/webdemo/tender-kit'; // 与 .umirc.ts 中的 base 保持一致
  const pathname = location.pathname.startsWith(base)
    ? location.pathname.slice(base.length)
    : location.pathname;

  const route = matchRoutes(clientRoutes, pathname)?.pop()?.route;

  if (route) {
    // @ts-expect-error no types
    document.title = route.title || '';
  }
}
