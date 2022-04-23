import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent  {
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

 

}
