import { Component } from '@angular/core';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
})
export class AuthorsComponent {
  authorId!: number;
  author: any;
  errorMessage: string | null = null;

  constructor(private booksService: BooksService) {}

  onSubmit(): void {
    this.booksService.getAuthor(this.authorId).subscribe({
      next: (data) => {
        this.author = data;
        this.errorMessage = null;
      },
      error: () => {
        this.author = null;
        this.errorMessage = 'Author not found';
      }
    });
  }
}
