import type { VbenFormSchema } from '#/adapter/form';

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'name',
      label: '简称',
    },
    {
      component: 'Select',
      fieldName: 'district',
      label: '行政区',
    },
  ];
}
