import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../books/model/book';

@Pipe({
  name: 'authornames',
  standalone: true
})
export class AuthornamesPipe implements PipeTransform {

  transform(value: Author[] | undefined): string {
    if (value === undefined) return '';
    return value.map((author) => `${author.firstName}, ${author.lastName}`).join(' <b>and</b> ');
  }
}
