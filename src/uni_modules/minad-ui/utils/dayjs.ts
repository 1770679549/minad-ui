// 简化版day.js工具，仅包含FormItem组件需要的日期验证功能

/**
 * 日期对象包装器
 */
export class Dayjs {
  private date: Date;
  private isValidDate: boolean;

  constructor(date: Date | string, format?: string) {
    if (date instanceof Date) {
      this.date = date;
    } else {
      // 如果有格式，尝试解析
      this.date = parseDateString(date, format);
    }
    this.isValidDate = !isNaN(this.date.getTime());
  }

  /**
   * 检查日期是否有效
   */
  isValid(): boolean {
    return this.isValidDate;
  }

  /**
   * 获取日期对象
   */
  toDate(): Date {
    return this.date;
  }

  /**
   * 比较日期是否在另一个日期之前
   */
  isBefore(other: Dayjs | Date | string, unit: string = 'day'): boolean {
    const otherDate = other instanceof Dayjs ? other.toDate() : parseDateString(other);
    if (!this.isValidDate || isNaN(otherDate.getTime())) return false;

    const thisDate = this.date;
    const compareDate = otherDate;

    switch (unit) {
      case 'year':
        return thisDate.getFullYear() < compareDate.getFullYear();
      case 'month':
        if (thisDate.getFullYear() !== compareDate.getFullYear()) {
          return thisDate.getFullYear() < compareDate.getFullYear();
        }
        return thisDate.getMonth() < compareDate.getMonth();
      case 'day':
        if (thisDate.getFullYear() !== compareDate.getFullYear()) {
          return thisDate.getFullYear() < compareDate.getFullYear();
        }
        if (thisDate.getMonth() !== compareDate.getMonth()) {
          return thisDate.getMonth() < compareDate.getMonth();
        }
        return thisDate.getDate() < compareDate.getDate();
      case 'hour':
        if (thisDate.toDateString() !== compareDate.toDateString()) {
          return this.isBefore(other, 'day');
        }
        return thisDate.getHours() < compareDate.getHours();
      case 'minute':
        if (thisDate.toDateString() !== compareDate.toDateString() || thisDate.getHours() !== compareDate.getHours()) {
          return this.isBefore(other, 'hour');
        }
        return thisDate.getMinutes() < compareDate.getMinutes();
      case 'second':
        if (thisDate.toDateString() !== compareDate.toDateString() || thisDate.getHours() !== compareDate.getHours() || thisDate.getMinutes() !== compareDate.getMinutes()) {
          return this.isBefore(other, 'minute');
        }
        return thisDate.getSeconds() < compareDate.getSeconds();
      default:
        return thisDate.getTime() < compareDate.getTime();
    }
  }

  /**
   * 比较日期是否在另一个日期之后
   */
  isAfter(other: Dayjs | Date | string, unit: string = 'day'): boolean {
    const otherDate = other instanceof Dayjs ? other.toDate() : parseDateString(other);
    if (!this.isValidDate || isNaN(otherDate.getTime())) return false;

    const thisDate = this.date;
    const compareDate = otherDate;

    switch (unit) {
      case 'year':
        return thisDate.getFullYear() > compareDate.getFullYear();
      case 'month':
        if (thisDate.getFullYear() !== compareDate.getFullYear()) {
          return thisDate.getFullYear() > compareDate.getFullYear();
        }
        return thisDate.getMonth() > compareDate.getMonth();
      case 'day':
        if (thisDate.getFullYear() !== compareDate.getFullYear()) {
          return thisDate.getFullYear() > compareDate.getFullYear();
        }
        if (thisDate.getMonth() !== compareDate.getMonth()) {
          return thisDate.getMonth() > compareDate.getMonth();
        }
        return thisDate.getDate() > compareDate.getDate();
      case 'hour':
        if (thisDate.toDateString() !== compareDate.toDateString()) {
          return this.isAfter(other, 'day');
        }
        return thisDate.getHours() > compareDate.getHours();
      case 'minute':
        if (thisDate.toDateString() !== compareDate.toDateString() || thisDate.getHours() !== compareDate.getHours()) {
          return this.isAfter(other, 'hour');
        }
        return thisDate.getMinutes() > compareDate.getMinutes();
      case 'second':
        if (thisDate.toDateString() !== compareDate.toDateString() || thisDate.getHours() !== compareDate.getHours() || thisDate.getMinutes() !== compareDate.getMinutes()) {
          return this.isAfter(other, 'minute');
        }
        return thisDate.getSeconds() > compareDate.getSeconds();
      default:
        return thisDate.getTime() > compareDate.getTime();
    }
  }

  /**
   * 比较日期是否与另一个日期相同
   */
  isSame(other: Dayjs | Date | string, unit: string = 'day'): boolean {
    const otherDate = other instanceof Dayjs ? other.toDate() : parseDateString(other);
    if (!this.isValidDate || isNaN(otherDate.getTime())) return false;

    const thisDate = this.date;
    const compareDate = otherDate;

    switch (unit) {
      case 'year':
        return thisDate.getFullYear() === compareDate.getFullYear();
      case 'month':
        return (
          thisDate.getFullYear() === compareDate.getFullYear() &&
          thisDate.getMonth() === compareDate.getMonth()
        );
      case 'day':
        return (
          thisDate.getFullYear() === compareDate.getFullYear() &&
          thisDate.getMonth() === compareDate.getMonth() &&
          thisDate.getDate() === compareDate.getDate()
        );
      case 'hour':
        return (
          thisDate.getFullYear() === compareDate.getFullYear() &&
          thisDate.getMonth() === compareDate.getMonth() &&
          thisDate.getDate() === compareDate.getDate() &&
          thisDate.getHours() === compareDate.getHours()
        );
      case 'minute':
        return (
          thisDate.getFullYear() === compareDate.getFullYear() &&
          thisDate.getMonth() === compareDate.getMonth() &&
          thisDate.getDate() === compareDate.getDate() &&
          thisDate.getHours() === compareDate.getHours() &&
          thisDate.getMinutes() === compareDate.getMinutes()
        );
      case 'second':
        return (
          thisDate.getFullYear() === compareDate.getFullYear() &&
          thisDate.getMonth() === compareDate.getMonth() &&
          thisDate.getDate() === compareDate.getDate() &&
          thisDate.getHours() === compareDate.getHours() &&
          thisDate.getMinutes() === compareDate.getMinutes() &&
          thisDate.getSeconds() === compareDate.getSeconds()
        );
      default:
        return thisDate.getTime() === compareDate.getTime();
    }
  }

  /**
   * 格式化日期
   */
  format(format: string = 'YYYY-MM-DD'): string {
    return formatDate(this.date, format);
  }
}

/**
 * 解析日期字符串为Date对象
 * @param dateString 日期字符串
 * @param format 日期格式
 * @returns Date对象
 */
function parseDateString(dateString: string | Date, format?: string): Date {
  if (dateString instanceof Date) {
    return new Date(dateString.getTime());
  }

  // 如果有格式，尝试严格解析
  if (format && isValidFormat(dateString, format)) {
    return new Date(dateString);
  }

  return new Date(dateString);
}

/**
 * 检查日期字符串是否符合指定格式
 * @param dateString 日期字符串
 * @param format 期望的格式
 * @returns 是否符合格式
 */
function isValidFormat(dateString: string, format: string): boolean {
  if (!dateString || !format) return false;
  
  // 简单的格式验证，支持YYYY-MM-DD, YYYY/MM/DD, YYYY.MM.DD
  const formats: Record<string, RegExp> = {
    'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/,
    'YYYY/MM/DD': /^\d{4}\/\d{2}\/\d{2}$/,
    'YYYY.MM.DD': /^\d{4}\.\d{2}\.\d{2}$/,
    'YYYY-MM-DD HH:mm:ss': /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
    'YYYY/MM/DD HH:mm:ss': /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/,
    'YYYY.MM.DD HH:mm:ss': /^\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}:\d{2}$/
  };
  
  return formats[format]?.test(dateString) || false;
}

/**
 * 格式化日期
 * @param date 日期对象
 * @param format 格式字符串
 * @returns 格式化后的日期字符串
 */
export function formatDate(date: Date, format: string): string {
  if (isNaN(date.getTime())) return '';
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * dayjs函数，创建Dayjs实例
 * @param date 日期字符串或Date对象
 * @param format 日期格式
 * @param strict 是否严格模式
 * @returns Dayjs实例
 */
export default function dayjs(date?: Date | string, format?: string, strict?: boolean): Dayjs {
  // 严格模式下，如果有格式，必须验证格式
  if (strict && format && typeof date === 'string' && !isValidFormat(date, format)) {
    return new Dayjs(new Date(NaN));
  }
  
  return new Dayjs(date || new Date(), format);
}

// 导出工具函数
export {
  parseDateString as parse,
  isValidFormat,
  formatDate as format
};
