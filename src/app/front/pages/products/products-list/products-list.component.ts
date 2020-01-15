import { ProductFilterComponent } from './../product-filter/product-filter.component';
import { PagerService } from './../../../../services/pager/pager.service';
import { product } from 'src/app/entities/product';
import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';
import { PromotionServiceService } from 'src/app/services/promotion/promotion-service.service';
import { SortPipe } from 'src/app/front/pipes/sort.pipe';
import { UiService } from 'src/app/services/products/ui.service';
import { Subject, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {switchMap, takeUntil, catchError} from 'rxjs/operators';
import { category } from 'src/app/entities/category';
import { StatPack } from 'src/app/entities/StatPack';
import { StatPackService } from 'src/app/services/statpack/stat-pack.service';

@Component({
  selector: 'app-products-list-front',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  promotionlist :any[];
  //productList: product[];
	productList: product[];
	loading = false;

  mainFilter: any

  currentSorting: string

  @ViewChild('filtersComponent')
  filtersComponent: ProductFilterComponent;
  category: string;
  originalData: any = []
  selectedCategory = '';
  productsPaged: product[];
  pager: any = {};
products: product[];
  filteredProducts: product[];
  productCategory: string;
  searchText;
  categories: category[];
  unsubscribe$ = new Subject();
  page = 1;
  p: number = 1;
  collection: any[] = [];
  produit: product;
 
  @Input() public displayMode: string;
  currentPagingPage: number;
  constructor(private productService : ApiService,private sortPipe: SortPipe,    private route: ActivatedRoute,  public uiService: UiService,  private pagerService: PagerService,private promotionService : PromotionServiceService) { }

  ngOnInit() {


     this.uiService.currentPagingPage$
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((page) => {
       this.currentPagingPage = page;
     });
     this.populateProduct();



  }
 
populateCategories() {
  this.productService.getCategories().subscribe(
    (Data) => {
      this.categories = Data ;
      console.log("cat"+Data);
    }
   )
}

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.productList.length, page, 8);
    this.productsPaged = this.productList.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
    this.uiService.currentPagingPage$.next(page);
  }

  onSort(sortBy: string) {
    this.sortPipe.transform(
      this.productList,
      sortBy.replace(':reverse', ''),
      sortBy.endsWith(':reverse')
    );
    this.uiService.sorting$.next(sortBy);
    this.setPage(1);
  }

  onDisplayModeChange(mode: string, e: Event) {
    this.uiService.displayMode$.next(mode);
    e.preventDefault();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
popoulateProducts(){
  this.productService.getProducts().subscribe(
    (Data) => {
      this.productList = Data ;
      console.log("products"+Data);
        this.applyFilter();
      return this.route.queryParamMap;

    })

}

private applyFilter() {
  this.filteredProducts = (this.category) ?
  this.productList.filter(p => p.category.category_name === this.category) :
  this.productList;
}
private populateProduct() {
  this.productService.getProducts().pipe(
  switchMap(productList => {
    this.productList = productList;
    return this.route.queryParamMap;
  }),

  )
  .subscribe(params => {
    this.category = params.get('category');
    this.applyFilter();
  });
}

test() {

}
setnbViews(){
  this.productService.setnbviews(this.produit)
  .subscribe( data => {
   console.log("added")
  });
}


  //If the number of products increased after the filter has been applied then sort again
  //If the number of products remained equal, there's a high chance that the items have been reordered.


  TopViewedProducts(){
    this.productService.getTopViewedProducts().subscribe(
      (Data) => {
        this.productList = Data ;

        for(let prod of this.productList){
          prod.producthavepromotion = false;
        }
        this.promotionService.getListAssignedPromotion().subscribe(data => {
             console.log(data)
             this.promotionlist = data;
             for(let promotion of this.promotionlist){
                for(let product of this.productList){
                  if(promotion.product.id === product.id){

                    product.productnewvalue = promotion.productnewvalue;
                    product.producthavepromotion =true;
                    console.log(product)
                  }

                }
             }
             console.log(this.productList)

        })
      }
     )


      }

  }


