import { NzPlacementType } from 'ng-zorro-antd/dropdown';

export interface MenuItem {
  name: string;
  path: string;
  children: MenuItem[];
}

export const MENUITEMS: MenuItem[] = [
  {
    name: 'Trang chủ',
    path: '/',
    children: [
      {
        name: 'Công trình đã thi công',
        path: '/construction',
        children: []
      },
      {
        name: 'Cam kết giá cả, chất lượng',
        path: '/commitment',
        children: []
      }
    ]
  },
  {
    name: 'Giới thiệu',
    path: '/introduce',
    children: [
      {
        name: 'Thư ngỏ',
        path: 'introduce/open-letter',
        children: []
      },
      {
        name: 'Hồ sơ năng lực',
        path: 'introduce/capacity-profile',
        children: []
      }
    ]
  },
  {
    name: 'Xưởng sản xuất',
    path: '/factory',
    children: []
  },
  {
    name: 'Công trình tiêu biểu',
    path: '/typical-projects',
    children: []
  },
  {
    name: 'Combo nội thất',
    path: '/combo-interior',
    children: []
  },
  {
    name: 'Liên hệ',
    path: '/contact',
    children: []
  }
]
