import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadContent } from './store/content.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  content$: Observable<any[]>;
  error$: Observable<any>;
  contentData: any[] = [];
  pagedItems: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 1;

  constructor(private store: Store<{ content: any }>) {
    this.content$ = this.store.select((state) => state.content.data);
    this.error$ = this.store.select((state) => state.content.error);
  }

  ngOnInit() {
    this.store.dispatch(loadContent({ contentType: 'blogPage' }));

    this.content$.subscribe((data) => {
      if (data?.length) {
        this.contentData = data.map((item) => ({
          title: item.fields.title,
          body: this.extractText(item.fields.body.content),
          imageUrl: item.fields.image.fields.file.url,
        }));
        this.updatePagedItems();
      }
    });
  }

  extractText(content: any[]): string {
    return content
      .map((node) =>
        node.content.map((textNode: any) => textNode.value).join('')
      )
      .join('\n');
  }

  updatePagedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.pagedItems = this.contentData.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagedItems();
  }
}
