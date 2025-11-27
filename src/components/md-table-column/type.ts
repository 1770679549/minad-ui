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