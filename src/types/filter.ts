import { CategoryName } from './product';
import { SortParamOrder, SortParamProduct, SortDirection } from './request';

export enum FilterType {
  Category = 'category',
  Filter = 'filter',
}

export interface FilterParam {
  type: FilterType.Filter;
  sortParam: SortParamProduct | SortParamOrder;
  sortDirection: SortDirection;
}

interface CategoryParam {
  type: FilterType.Category;
  name: CategoryName;
}

export type Filter = FilterParam | CategoryParam;
