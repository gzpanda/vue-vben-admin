import type { VbenFormSchema } from '#/adapter/form';
import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'abbreviation',
      label: '简称',
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: [
          { label: '医疗机构', value: '医疗机构' },
          { label: '行政机构', value: '行政机构' },
        ],
      },
      fieldName: 'category',
      label: '机构类别',
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: [
          { label: '公立', value: '公立' },
          { label: '私立', value: '私立' },
          { label: '口腔', value: '口腔' },
        ],
      },
      fieldName: 'nature',
      label: '机构性质',
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: [
          { label: '三甲', value: '三甲' },
          { label: '二级', value: '二级' },
          { label: '社区', value: '社区' },
        ],
      },
      fieldName: 'level',
      label: '医疗机构等级',
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: [
          { label: '天河区', value: '天河区' },
          { label: '海珠区', value: '海珠区' },
          { label: '荔湾区', value: '荔湾区' },
          { label: '越秀区', value: '越秀区' },
          { label: '黄埔区', value: '黄埔区' },
          { label: '番禺区', value: '番禺区' },
          { label: '白云区', value: '白云区' },
          { label: '花都区', value: '花都区' },
          { label: '增城区', value: '增城区' },
          { label: '从化区', value: '从化区' },
          { label: '南沙区', value: '南沙区' },
        ],
      },
      fieldName: 'district',
      label: '行政区',
    },
  ];
}

export function useColumns(
  onActionClick: OnActionClickFn<T>,
  onStatusChange?: (newStatus: any, row: T) => PromiseLike<boolean | undefined>,
): VxeTableGridOptions['columns'] {
  return [
    {
      field: 'name',
      title: '名称',
      width: 200,
    },
    {
      field: 'category',
      title: '类别',
      width: 200,
    },
    {
      field: 'nature',
      title: '性质',
      width: 200,
    },
    {
      field: 'level',
      title: '级别',
      width: 200,
    },
  ];
}
