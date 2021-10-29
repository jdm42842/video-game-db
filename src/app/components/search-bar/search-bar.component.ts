import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
=======
>>>>>>> 5df23eff489521302792f4984b49410d984fc9ad

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router: Router) { }
=======
  constructor() { }
>>>>>>> 5df23eff489521302792f4984b49410d984fc9ad

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }

=======
>>>>>>> 5df23eff489521302792f4984b49410d984fc9ad
}
