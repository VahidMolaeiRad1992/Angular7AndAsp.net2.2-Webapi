import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model.ts';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDitailService {

  formData:PaymentDetail
  readonly rootURL='http://localhost:54209/api';
  list:PaymentDetail[];

  constructor(public http:HttpClient) { }

  postPaymentDetail(){
    return this.http.post(this.rootURL + '/Paymentdetail',this.formData);
  }
  pustPaymentDetail(){
    return this.http.put(this.rootURL + '/Paymentdetail/' + this.formData.PMId,this.formData);
  }
  deletePaymentDetail(id){
    return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
  } 

  refreshList(){
    this.http.get(this.rootURL + '/Paymentdetail')
    .toPromise()
    .then(res=>this.list=res as PaymentDetail[]);
  }
  
}
