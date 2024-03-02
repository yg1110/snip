'use client';

import React from 'react';
import type { Dayjs } from 'dayjs';
import type { CalendarProps } from 'antd';
import { Calendar } from 'antd';

const CalendarView = () => {
  const monthCellRender = (value: Dayjs) => {
    return null;
  };

  const dateCellRender = (value: Dayjs) => {
    return null;
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
};

export default CalendarView;
