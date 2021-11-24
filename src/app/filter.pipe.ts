import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false  // just needs to be used when the data change. The pure pipe works when input change, but the inpure
  // pipe change on every change detection / source data change.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    // The pipe receives the value and needs to return a value of the same TYPE, modified or not. You can use the
    // arguments passed to construct the output logic.
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
