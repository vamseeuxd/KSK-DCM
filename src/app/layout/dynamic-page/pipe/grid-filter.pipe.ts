import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridFilter'
})
export class GridFilterPipe implements PipeTransform {

  transform(_array, filterObject): any[] {
      return _array.filter(item => {
          let isAllTrue: boolean[];
          isAllTrue = [];
          Object.keys(filterObject).forEach(column => {
              isAllTrue.push(item[column].indexOf(filterObject[column]) !== -1);
          });
          return isAllTrue.indexOf(false) === -1;
      });
  }

}
