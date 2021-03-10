import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    ngOnInit(){
        this.dropdownList = [
                              {"id":1,"itemName":"Algeria" },
                              {"id":2,"itemName":"American Samoa"},
                              {"id":3,"itemName":"Andorra"},
                              {"id":4,"itemName":"Angola"},
                              {"id":5,"itemName":"Anguilla"},
                              {"id":6,"itemName":"Antartica"},
                              {"id":7,"itemName":"France"},
                              {"id":8,"itemName":"Russia"},
                              {"id":9,"itemName":"Italy"},
                              {"id":10,"itemName":"Sweden"}
                            ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class",
                                  showCheckbox: true
                                };            
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }
}