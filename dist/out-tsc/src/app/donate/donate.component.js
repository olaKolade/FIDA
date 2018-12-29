var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { Donor } from '../donor';
var DonateComponent = /** @class */ (function () {
    function DonateComponent() {
        this.page_title = 'DONATE';
        this.donor = new Donor();
    }
    DonateComponent.prototype.ngOnInit = function () {
        this.initConfig();
    };
    DonateComponent.prototype.initConfig = function () {
        this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
            commit: true,
            client: {
                sandbox: 'AcKM7idL-pwIGs1FPEzqxVGzR7Lws2WVezy2FCsyF_VysQWhsdwQ0mmTNriVsKC4WNHkFcln7XdeV9dA'
            },
            button: {
                label: 'paypal',
                layout: 'horizontal',
                fundingicons: true
            },
            onAuthorize: function (data, actions) {
                console.log('Authorize');
                return (undefined);
            },
            onPaymentComplete: function (data, actions) {
                console.log('OnPaymentComplete');
            },
            onCancel: function (data, actions) {
                console.log('OnCancel');
            },
            onError: function (err) {
                console.log('OnError');
            },
            onClick: function () {
                console.log('onClick');
            },
            validate: function (actions) {
                console.log(actions);
            },
            experience: {
                noShipping: false,
                brandName: 'FIDA PayPal'
            },
            transactions: [
                {
                    amount: {
                        total: this.donor.donation,
                        currency: 'USD',
                    },
                    custom: 'Custom value',
                    item_list: {
                        shipping_address: {
                            recipient_name: this.donor.name,
                            line1: this.donor.line1,
                            city: this.donor.city,
                            country_code: this.donor.country_code,
                            postal_code: this.donor.postal_code,
                            phone: this.donor.phone,
                            state: this.donor.state
                        }
                    },
                }
            ],
            note_to_payer: 'Contact us if you have troubles processing payment'
        });
    };
    DonateComponent = __decorate([
        Component({
            selector: 'app-donate',
            templateUrl: './donate.component.html',
            styleUrls: ['./donate.component.css']
        })
    ], DonateComponent);
    return DonateComponent;
}());
export { DonateComponent };
/* public payPalConfig?: PayPalConfig;

    ngOnInit(): void {
      this.initConfig();
    }

    private initConfig(): void {
      this.payPalConfig = new PayPalConfig(
        PayPalIntegrationType.ClientSideREST,
        PayPalEnvironment.Sandbox,
        {
          commit: true,
          client: {
            sandbox:
              'AcKM7idL-pwIGs1FPEzqxVGzR7Lws2WVezy2FCsyF_VysQWhsdwQ0mmTNriVsKC4WNHkFcln7XdeV9dA'
          },
          button: {
            label: 'paypal',
            layout: 'vertical'
          },
          onAuthorize: (data, actions) => {
            console.log('Authorize');
            return (undefined);
          },
          onPaymentComplete: (data, actions) => {
            console.log('OnPaymentComplete');
          },
          onCancel: (data, actions) => {
            console.log('OnCancel');
          },
          onError: err => {
            console.log('OnError');
          },
          onClick: () => {
            console.log('onClick');
          },
          validate: (actions) => {
            console.log(actions);
          },
          experience: {
            noShipping: true,
            brandName: 'Angular PayPal'
          },
          transactions: [
            {
              amount: {
                total: 30.11,
                currency: 'USD',
                details: {
                  subtotal: 30.00,
                  tax: 0.07,
                  shipping: 0.03,
                  handling_fee: 1.00,
                  shipping_discount: -1.00,
                  insurance: 0.01
                }
              },
              custom: 'Custom value',
              item_list: {
                items: [
                  {
                    name: 'hat',
                    description: 'Brown hat.',
                    quantity: 5,
                    price: 3,
                    tax: 0.01,
                    sku: '1',
                    currency: 'USD'
                  },
                  {
                    name: 'handbag',
                    description: 'Black handbag.',
                    quantity: 1,
                    price: 15,
                    tax: 0.02,
                    sku: 'product34',
                    currency: 'USD'
                  }],
                shipping_address: {
                  recipient_name: 'Brian Robinson',
                  line1: '4th Floor',
                  line2: 'Unit #34',
                  city: 'San Jose',
                  country_code: 'US',
                  postal_code: '95131',
                  phone: '011862212345678',
                  state: 'CA'
                },
              },
            }
          ],
          note_to_payer: 'Contact us if you have troubles processing payment'
        }
      );
    }
    */
//# sourceMappingURL=donate.component.js.map