import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '超市管理系统',
  pwa: false,
  logo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg02.viwik.com%2F20200222%2Fviwik_sl_13300530548100.jpg&refer=http%3A%2F%2Fimg02.viwik.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651287649&t=5ff957ec55cd3efcec8402dad9e30752',
  // iconfontUrl: '',
};

export default Settings;
