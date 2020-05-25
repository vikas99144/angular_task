import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
   images = []
   index = 0;
   @ViewChild('FileSelectInputDialog') FileSelectInputDialog: ElementRef;
  constructor() { }
  ngOnInit() {
    for(let i= 1;i <=6;i++){
      this.images.push({'url':''})
    }
  }
   OpenAddFilesDialog(i) {
      this.index = i;
      const e: HTMLElement = this.FileSelectInputDialog.nativeElement;
      e.click();
  }


  fileUpload(event) {
    let files = event.target.files;
    if (files) {
      for (let file of files) {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.images[this.index] = {'url':e.target.result};
          }
          reader.readAsDataURL(file);
        }  
      }
    }

    removeImage(index){
      if(index  == 1){
        this.images[4] = {'url':''};
      }
      this.images.unshift(this.images.pop());  
    }

    remove(index){
      this.images[index] = {'url':''};
    }

}
