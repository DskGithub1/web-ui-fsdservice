import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonConstants } from 'src/app/shared/constants/comman-constants';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  public requirementForm!: FormGroup;
  public minEligibleAmount = 10000;
  public maxEligibleAmount = 1000000;
  public minEligibleTenure = 12;
  public maxEligibleTenure = 72;
  public applicationKey: any;
  public cardListDisplyData: any[] = [];
  // public cardListDisplyData: any[] = [
  //   {
  //     "id": 1,
  //     "applicationKey": 123456789,
  //     "bankName": "Rupeek",
  //     "interestRate": 5.25,
  //     "eligibleAmount": 50000,
  //     "termMonths": 36,
  //     "bgColor": '#fcece8',
  //     "imageURL": 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAByCAMAAACLFKgDAAAAV1BMVEVHcEznSBi5ORMBAAADAQACAAABAAAGAQADAAAAAAAAAADlRhfeRBbfQhOtNRDhRRakMhDoSBj////0pIzveFXqVir50sb84tv+8/DykXT2uKXsakP4xrecqaaJAAAAEXRSTlMAgKAYOxEwAwohKeXOHWCce6LlrjcAAAO9SURBVHja7duJkuIgEABQHXNoPMMNyf9/5zZXyOUYrV2haumaqdUYzQs0DW4Nu13CUV9v+2/H7fqUc92f2xhx3q+arvc2XtyXpOuljRmXaz31lOc2bpynovrSxo7LcSzat/FjPxLV5wRA5zKAbm0KcQtNdE8CdC/rOpmUNml98E2URApBEnlQfWzTiFOZHMg2UTKg5pBBGZRBGZRBGZRBGZRBGZRBGZRBiYOojlRAFHNkgiuSAIgqNApGYoM6jqYh44IIWoQKrwp3qCffAnViCRq1kVhT/ksQ1f3FyRDSXp0EENZnET469kZgxN4E4fndWxGfgoD0WRO9DaKuS5RuHV2FOqImneZBLXv20X8XJOepw9xDPgdx1IPWVk79r/6lEuOhIwnG0hfWDmPcjUCUkG4biE1AbHRgBuo0l7k8YnAQfm13czKqHb0mUfshvPMgSFSxETTxCKIbAk3SWpjelEroNpuC4CoK9/ZUogsqkVxfH9KAS0IYEtSCVjwvQHyYwyhagFA4Zwqyb4OrcX0fyqWkbBVi1J6lDEif0W3MIYpmIrIEccaE+8QZiPq3QLFwOaeg08ILQoO0h7ZvgsxbKIak7hcgbGrDCsiPH46w8qUMIwHjZChpHUZ81fMSZN4kTRuvgCi3V58l9TAw1Hhs4NFjAHKxOvJfJ7UWKaSGj+vGo0zawvS0hXrEsQ84d3hMocvIakndMOxBpIeDf0onw94MGbi0dO2K3RH7TMpQ2nWBoJPCKNdEWwqjFoVBNa1D9jZdq2ALcgMLboJSX9qVtCXUfLZydQiviF5NHV40zP3zqUPprAI+k7JHwrYQ9BPRS01prgl1CGoPnAVNpOuQ0mxbGNVyjfV0cp0sFkGk0JPJ1VVGk7Yuqe25QoZJ2tTWlri7wsPU0S9Evy8/RiI8W34MkxUxs5PsGay6JRzUKKJY7+evTjKm3BMKp9kXCLZZBwn+2QKNK39vr4JtOemzJaz4bQkbAbRc5G+60j8Ezb8GdW1s0EdfFP1i7T/5Kp3/9yODMiiDMiiDMiiDMiiDMiiDMiiDMugZKJE/gU8NdAmgNLZR/ARQGhtNHgF0SGIrTuU3CeyO5SOFBqr8NopdXZ4S2M5VNGHny/FQRd/wVlSnAIImKiJvCSyK5hT2c9XH8lT9xBzxRRFS2nXaqbrFaqTLrRh3mO00LSqK2+Pn2/EAjfOMNykaUVMVcaJq5h4jKoHUVN+PBjjl3GNEQDqcvh8H4Cw9jnQsj+V3A664zrGkSPHrFvf6uz+75OMPyyHQ+xaFjRwAAAAASUVORK5CYII='
  //   },
  //   {
  //     "id": 2,
  //     "applicationKey": 3454354345,
  //     "bankName": "Bajaj",
  //     "interestRate": 5.25,
  //     "eligibleAmount": 100000,
  //     "termMonths": 36,
  //     "bgColor": '#eef3ff',
  //     "imageURL": 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAABpCAMAAAAnd8DKAAAATlBMVEVHcEwAcbv///8Jdr0Acb0AcLsAcLsAcLsAcLsAcbv7/f49k8ucx+QjhMTz+PsUfMAwjMdQndB8ttzJ4fCJvd9nqtapz+jX6fTl8fi41+yxA1OgAAAACnRSTlMA////GoHa9FS0SaaNHgAABGpJREFUaN7tm+tuozAQhYudtImN7/jC+7/onrGBkO7+KF1tw0oeVU2wDf4YnxkPUnh7a3a53d8/hp+1j/f77fK2t8v1pxk2luuO5PYqikpyWzGuw2vtunhjeLXdzoHRlub+eo7hjlAZzmCXMyxLVcj9FBz3t49TcHychmM4h3WOztE5Okfn6Bydo3N0js7ROTpH5+gc/5aDv5yDq5hyKWWepNk3m9X4ruUJl6/HNOqPHQc47JQFE4xMJ/e4nBtXm6LdWia1OxUNkj4ljfrUEY9x8BgaQ7PyuJxnTGgywfRMIIpGCr+70Ykxms4EOnXcdwg2HuLgsewxME9QD44kySJaHYZ6zQr+7G8cXrBSmHZ/weE0EzsjktlsHKOxlUMUzGELcDBB4J84ZGY6Uof6NofKmMwvNo1z1hDJxDeOsTmrRD7wEf4ZbGgu2HEYDJqNBcxjyQ5y8IRJ5O7Y+sJYdivHPJEAAyveDFGzbK3EpNk+cURaEmWBmeU3OaR+5gAJriCaQ8gfigJSwiFOYVW8DwFyEqPZcZBIRxcCPCs2qR7kmETl4Lh+NdfQ2kJXfTgYZhMRtxtcpvAhKkvtLmLuSCI1YYkrp1oH2Kavc/CZNQ5MUmUaG4eojvdCjKnJV8++CB05mZmFmJ1ehJ2lptNqx4RDm5eOIr/OYcODY04wV9dlUaJLaRqpNY3eRhws4WDRQsdkk9x3YLRzrWN0B/I6Am7jUPVm1VSoyTd3rbZ839xIX9eeTx186/gmR5OencWD48f2ObvjkAqGFD1v62JUM3hJGWyGim6SvuLGpZN8N4R6VeuqV6kf/MscaqePmq5agq1ZvMYLWZYWkTxIJpIBJrYR7mhjLJ7X9AMLg6UEIHSyfBSkcuTHYL4eL0lsHBk2k48oLlu8YC5qtAsHJdrKgUnyHHTiOE9TuCc6C2M1cr4rlDmQ9PyB/BEfHA4biV380XYYjzRKjXzlQHqvHFKwSUnUAvBHkNZaRRyTlIkJpWakE6R6oQ5wmPJJp4OCPnRc8vqS4DcO5CniwKQ6TBAIOEoaqQZBE5IIUpodsCs7BEA6VI+RQxw3a9yqWozMauHQAZkgrhw6FDif9OG1qEmc9NHSHzhCmrXIVfxzFMIeqwuhkIxNA1qD0W5LWftRB8HGjcN73codI31C3pTkjwlmiYMSfrBVdDqw+WB9qubnMgi+j3zl0AnVgHtwmFQ5jI9WYQ3iqo/KkUBZ97kacfFonWzTM0hZMX7Th/a1ABx51DqHLLQFh25xRvrAllCVxZGVsjpcr5tJ7KvCx/b0Bw6qyRC3I63PLn/kplOko0JyRx058W88N9gxF+yaWpcQd8lHSduOuJSq/aPG+t9F146qWeo19bBmW+fUt56juHIecovy3z9L/Q/Pc/05u3N0js7ROTpH5+gcnaNzdI7O0TlOzHGW3+O+n4Lj/TS/176eguN2mt/zn+X9hrfL6yPm43Ki919O8z7Qad6PgkZeJ9b785trt+tL3p+7rs74BYGQew1ZgiMDAAAAAElFTkSuQmCC'
  //   },
  //   {
  //     "id": 3,
  //     "applicationKey": 345435,
  //     "bankName": "Indian Bank",
  //     "interestRate": 5.25,
  //     "eligibleAmount": 30000,
  //     "termMonths": 36,
  //     "bgColor": '#e7e7e7',
  //     "imageURL": 'data:image/png;base64,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'
  //   },
  //   {
  //     "id": 4,
  //     "applicationKey": 123456789,
  //     "bankName": "Muthoot",
  //     "interestRate": 5.25,
  //     "eligibleAmount": 20000,
  //     "termMonths": 36,
  //     "bgColor": '#fae8e8',
  //     "imageURL": 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAABpCAMAAAAnd8DKAAAAUVBMVEVHcEzXGSDXGiH+/v7XGCDXGSDXGSDXGSDaFR7XGSD99/fYIyrnen7rkZTkaW7toKPhWF3aLjX77OzeSE7yvb/phYj54eHcOT/31tfwrbD0yMnjpBNxAAAACnRSTlMAu///Y4RG6RqySuSl7QAABLRJREFUaN7tm9ty6ygQRXNEEsfcEXf+/0NnN9g5csZ5iDO2NVV0pSwJCVg0DWxS0svLsI/X4+GwPNYOh+Prx8vWPt6WZ9nbhuT9sDzPDu9njLflufY2MF6XZ9tr75Tl+UZdc9wBxxFDZdmDfewgOkaE/NkFx5+Xwy44Di/LPmxyTI7JMTkmx+SYHJNjckyOyfFfcwjnrVQwqb0Tz+EQXoW0cnYyvqamrHg0R5blE2FjJWbxQA5nVvaNrTU/ikNIdIEyIX3xCE/BKNVW5R7CISpjakRI3biFhxEdkbEgHsAhAjtx4Dyrk0+48afKI4VJvjsHeeOTA6ZTjwr5mUAcP/fIjzk033KgOo++4Xa55NiA3odDpG01wg6yiIM99YXsDyRxXw7N/t3csG4HyPAHs/flUJccvdVS/T0/+4PV+3KYCw4fJIaJ9xjCMugLf4QH+sPKaLNbfMaCZ2PU4nH+uIiPMgashSc0Rs0IkxOHvvN4GTNoPHOwAh+hDxq75FjFA+cPcPC4uITpQ37xh7n7fNq2HCaL3Po8nvWWo7h7cyyubThSVGNeN7FsONL91xdIoMA38bGVHmeO9nMJcpMOUlhdydIXDkuJitcbJNltesyblcO+ajFKW6u9pcRb9amv6Yo+5ek2it/odefNpVTmyVh3a2m/2r+IbHVUBqaitPk3G5g97ueEaY0EnQghxItdm1hkCN/7/LSVczV0y/j7DYejcejGmrrh0CW5JXyvsHJLfpyMcCmYWX/F4akcP4qzWkVUHJWXiXFlEzMxBFLDDse+Q8kKbhOLDRDrXSZbxqWWUtsohVIatzU9Xhvli8qaUHUf9KHSKl2DcVc5NOOk5xQO3BVWxJIZH+taXOkerk76HOuH7Ctv69P8WNYUS865LMoaPDs/bxjNM/qcYEWkfEUYukzuGodhmKi1W3Eo+K1EtlrsE4yynK1RcmbgsyKRJHHSZEPBKLCp3jEgWlfeHGcKMiXJSN0blMeFlNRf6HCJkoqqRsJ3caNitxyJ0YOVhdDrwzMVUaFJS8BVnuIHd7GKZKA1agyq1HhyhIcY4UFZvaEqHKmhrA1a5ysVgHy69L0NmslLus4B11nouZXnwjT6WpDoqfBSW8ZPXhlumf4kvIAT9JsF58iPzNFaSwIA4qD1BItu5KObQxdz5Jsh61KB5SscEfmRBRlW7iNLKAjNhZdMVxpU7oqr2KXw2LQYjIxKVZ4Ech5h0rDL0ZRA0RXQsw1NsPQ4t0MxUgkCdi1OKxrf92YepRvqP7TFYfSE2IGogiE5VugfjgCAUxTIiuzuDYTewwR3uaOEgpiXGHCIL3JvARDiRJkKf7So6rXx0tuQSPAbREVXVQjOPpi5ovEMhrrEHvXNLT3eOWJ5PYviMjQ6Ykb2mEK1hoppaER3L4IiLn173IaqC9fmDyGlWzD8M340rkyVVpISNyZaKeFCiXYLa+r495M+nVDCEECyx6tDET0jCvRCY6xtErDDoHyIeYli/fy/5eSYHJNjckyOyTE5JsfkmByT43/HcdjN+8nHXXAcd/P++l7e59/Fi/THl3184PCxo+9fdvM90G6+j0KMPG8WOV5+ufb+9pTv597OzvgHtYOrY1RegQQAAAAASUVORK5CYII='
  //   }
  // ];

  constructor(
    private fb: FormBuilder,
    private listingService: ListingService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.buildForm();
      this.getListingData();
  }

  public buildForm() {
    this.requirementForm = this.fb.group({
      loanAmount: ['', [Validators.required, Validators.min(this.minEligibleAmount), Validators.max(this.maxEligibleAmount)]],
      loanTenure: ['', [Validators.required, Validators.min(this.minEligibleTenure), Validators.max(this.maxEligibleTenure)]],
    });
  }

  getListingData() {
    this.applicationKey = sessionStorage.getItem('applicationKey');
    this.listingService.listingGet(this.applicationKey).subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.cardListDisplyData = res;
      }
    });
  }

  public proceedNext(){
    this.router.navigate([CommonConstants.Routes.ThankYou]);
  }

}
