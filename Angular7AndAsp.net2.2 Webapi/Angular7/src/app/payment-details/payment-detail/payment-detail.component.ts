import { Component, OnInit } from '@angular/core';
import { PaymentDitailService } from 'src/app/shared/payment-ditail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles:[]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDitailService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  
resetForm(form?:NgForm){
  if(form!=null)
form.resetForm();
this.service.formData={
  PMId:0,
    CardOwnerName: '',
    CardNumber: '',
    ExpirationDate: '',
    CVV:''
}
}

onSubmit(form:NgForm){
  if(this.service.formData.PMId==0)
this.insertRecord(form);
else 
this.updateRecord(form);
}

insertRecord(form:NgForm){
  this.service.postPaymentDetail().subscribe(
    res=>{
      this.resetForm(form);
      this.toastr.success('Submitted Successfuly','Payment Detail Register');
      this.service.refreshList();
    },
    err=>{
      console.log(err)}
  )
}
updateRecord(form:NgForm){
  this.service.pustPaymentDetail().subscribe(
    res=>{
      this.resetForm(form);
      this.toastr.info('Submitted Successfuly','Payment Detail Register');
      this.service.refreshList();
    },
    err=>{
      console.log(err)}
  )
}
}
