import { lazy } from 'react';
import NotFounded from '@/components/NotFound';
import Layout from '@/layout';
import { RouteObject } from 'react-router-dom';

const Discovery = lazy(() => import('@/views/discovery/'));
const Mine = lazy(() => import('@/views/mine/'));
const Focus = lazy(() => import('@/views/focus'));

export type RouteItem = Omit<RouteObject, 'children'> & {
  meta?: Record<string, any>;
  children?: RouteItem[];
};
function Redirect({ to }: { to: string }) {
  window.open(to, '_blank');
  window.history.back();
  return <></>;
}
export const routes: RouteItem[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/discovery',
        element: <Discovery />,
        meta: {
          title: '发现音乐'
        },
        children: [
          {
            path: '/discovery/recommend',
            element: <Discovery />,
            meta: {
              title: '推荐'
            }
          },
          {
            path: '/discovery/rank',
            element: <Discovery />,
            meta: {
              title: '排行榜'
            }
          },
          {
            path: '/discovery/songs',
            element: <Discovery />,
            meta: {
              title: '歌单'
            }
          },
          {
            path: '/discovery/station',
            element: <Discovery />,
            meta: {
              title: '主播电台'
            }
          },
          {
            path: '/discovery/singer',
            element: <Discovery />,
            meta: {
              title: '歌手'
            }
          }
        ]
      },
      {
        path: '/mine',
        element: <Mine />,
        meta: {
          title: '我的音乐'
        }
      },
      {
        path: '/focus',
        element: <Focus />,
        meta: {
          title: '关注'
        }
      },
      {
        path: '/mall',
        element: <Redirect to="https://www.baidu.com" />,
        meta: {
          title: '商城'
        }
      },
      {
        path: '/singer',
        element: <Redirect to="https://www.baidu.com" />,
        meta: {
          title: '音乐人'
        }
      },
      {
        path: '/download',
        element: <Focus />,
        meta: {
          title: '下载客户端'
        }
      }
    ]
  },
  {
    path: '*',
    element: <NotFounded />
  }
];

export default routes;
