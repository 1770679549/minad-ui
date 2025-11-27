export interface TableColumn {
  /**
   * 列的唯一标识
   */
  key: string;
  /**
   * 列标题
   */
  title: string;
  /**
   * 列宽度
   */
  width?: string | number;
  /**
   * 是否可排序
   */
  sortable?: boolean;
  /**
   * 自定义列渲染函数
   */
  render?: (row: any, index: number) => any;
  /**
   * 对齐方式，可选值：left、center、right
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 自定义类名
   */
  className?: string;
}

export interface TableProps {
  /**
   * 表格数据
   */
  data?: any[];
  /**
   * 列定义
   */
  columns?: TableColumn[];
  /**
   * 是否显示边框
   */
  border?: boolean;
  /**
   * 是否显示斑马纹
   */
  stripe?: boolean;
  /**
   * 是否显示表头
   */
  showHeader?: boolean;
  /**
   * 是否显示行号
   */
  showIndex?: boolean;
  /**
   * 行号标题
   */
  indexTitle?: string;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, any>;
}

export interface TableColumnProps {
  /**
   * 列的唯一标识
   */
  key: string;
  /**
   * 列标题
   */
  title: string;
  /**
   * 列宽度
   */
  width?: string | number;
  /**
   * 是否可排序
   */
  sortable?: boolean;
  /**
   * 对齐方式，可选值：left、center、right
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 自定义类名
   */
  className?: string;
}

export interface TableProvide {
  registerColumn: (column: TableColumn) => void;
  unregisterColumn: (key: string) => void;
}

export interface TableEmits {
  /**
   * 点击行时触发
   */
  (e: 'row-click', row: any, index: number): void;
  /**
   * 排序时触发
   */
  (e: 'sort', key: string, order: 'asc' | 'desc'): void;
}
