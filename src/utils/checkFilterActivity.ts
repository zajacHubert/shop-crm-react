import { Filter, FilterType } from '../types/filter';
import { GetRecordsByPageParams } from '../types/request';

export const checkFilterActivity = (
  filter: Filter,
  getRecordsByPageParams: GetRecordsByPageParams
): boolean => {
  switch (filter.type) {
    case FilterType.Category:
      return (
        'category' in getRecordsByPageParams &&
        filter.name === getRecordsByPageParams.category
      );
    case FilterType.Filter:
      return (
        filter.sortParam === getRecordsByPageParams.sortParam &&
        filter.sortDirection === getRecordsByPageParams.sortDirection
      );
  }
};
