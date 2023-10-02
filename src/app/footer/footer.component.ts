import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();
  @Input() totalPages: number = 4;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('init')
    this.onPageChange  }

  onPageChange(page: number) {
    console.log(page)
    this.pageChange.emit(page);
  }

  nextPage() {
    this.currentPage++;
    this.pageChange.emit(this.currentPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
