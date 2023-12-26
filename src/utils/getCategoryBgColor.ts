import { CategoryName } from '../types/product';

export const getCategoryBgColor = (category: CategoryName): string => {
  switch (category) {
    case CategoryName.Regular:
      return '#a855f7';
    case CategoryName.Newest:
      return '#1e40af';
    case CategoryName.Discount:
      return '#a3e635';
    default:
      return '#000';
  }
};
