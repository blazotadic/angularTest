import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'custom' })
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    // Kategorija1#Kategorija2
    console.log('INPUT: ', value);
    const separator = args[0]; // #

    const categories = value.split(separator); // ['Kategorija1', 'Kategorija2']
    return categories;
  }
}
