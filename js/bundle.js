<<<<<<< HEAD
/*! For license information please see bundle.js.LICENSE.txt */
!function(){var n={67:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,"* {\r\n   box-sizing: border-box;\r\n   margin: 0;\r\n   padding: 0;\r\n   font-family: Roboto, sans-serif;\r\n}\r\na {\r\n   text-decoration: none;\r\n   color: black;\r\n}\r\nul li {\r\n   list-style: none;\r\n}\r\na:active {\r\n   color: black;\r\n}\r\n\r\n.container {\r\n   max-width: 1200px;\r\n   margin: 0 auto;\r\n}\r\n.divider {\r\n   width: 330px;\r\n   height: 1px;\r\n   margin: 0 auto;\r\n   background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.title {\r\n   font-size: 36px;\r\n   font-weight: 400;\r\n}\r\n","",{version:3,sources:["webpack://./css/base/default.css"],names:[],mappings:"AAAA;GACG,sBAAsB;GACtB,SAAS;GACT,UAAU;GACV,+BAA+B;AAClC;AACA;GACG,qBAAqB;GACrB,YAAY;AACf;AACA;GACG,gBAAgB;AACnB;AACA;GACG,YAAY;AACf;;AAEA;GACG,iBAAiB;GACjB,cAAc;AACjB;AACA;GACG,YAAY;GACZ,WAAW;GACX,cAAc;GACd,oCAAoC;AACvC;AACA;GACG,eAAe;GACf,gBAAgB;AACnB",sourcesContent:["* {\r\n   box-sizing: border-box;\r\n   margin: 0;\r\n   padding: 0;\r\n   font-family: Roboto, sans-serif;\r\n}\r\na {\r\n   text-decoration: none;\r\n   color: black;\r\n}\r\nul li {\r\n   list-style: none;\r\n}\r\na:active {\r\n   color: black;\r\n}\r\n\r\n.container {\r\n   max-width: 1200px;\r\n   margin: 0 auto;\r\n}\r\n.divider {\r\n   width: 330px;\r\n   height: 1px;\r\n   margin: 0 auto;\r\n   background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.title {\r\n   font-size: 36px;\r\n   font-weight: 400;\r\n}\r\n"],sourceRoot:""}]),r.Z=i},221:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".btn {\r\n   width: 220px;\r\n   height: 65px;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   background-color: #fff;\r\n   font-size: 18px;\r\n   font-weight: 700;\r\n   border: 1px solid rgba(0, 0, 0, 0.2);\r\n   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\r\n   cursor: pointer;\r\n   transition: 0.3s all;\r\n   outline: 0;\r\n}\r\n.btn_white {\r\n   background-color: #fff;\r\n}\r\n.btn_dark {\r\n   background-color: #303030;\r\n   color: #fff;\r\n   border: none;\r\n}\r\n.btn_min {\r\n   height: 50px;\r\n}\r\n.btn:hover {\r\n   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);\r\n}\r\n","",{version:3,sources:["webpack://./css/components/buttons.css"],names:[],mappings:"AAAA;GACG,YAAY;GACZ,YAAY;GACZ,aAAa;GACb,uBAAuB;GACvB,mBAAmB;GACnB,sBAAsB;GACtB,eAAe;GACf,gBAAgB;GAChB,oCAAoC;GACpC,yCAAyC;GACzC,eAAe;GACf,oBAAoB;GACpB,UAAU;AACb;AACA;GACG,sBAAsB;AACzB;AACA;GACG,yBAAyB;GACzB,WAAW;GACX,YAAY;AACf;AACA;GACG,YAAY;AACf;AACA;GACG,yCAAyC;AAC5C",sourcesContent:[".btn {\r\n   width: 220px;\r\n   height: 65px;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   background-color: #fff;\r\n   font-size: 18px;\r\n   font-weight: 700;\r\n   border: 1px solid rgba(0, 0, 0, 0.2);\r\n   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\r\n   cursor: pointer;\r\n   transition: 0.3s all;\r\n   outline: 0;\r\n}\r\n.btn_white {\r\n   background-color: #fff;\r\n}\r\n.btn_dark {\r\n   background-color: #303030;\r\n   color: #fff;\r\n   border: none;\r\n}\r\n.btn_min {\r\n   height: 50px;\r\n}\r\n.btn:hover {\r\n   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);\r\n}\r\n"],sourceRoot:""}]),r.Z=i},464:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o),a=t(667),s=t.n(a),c=new URL(t(754),t.b),p=i()(A()),l=s()(c);p.push([n.id,'.calculating {\r\n   padding: 50px 0;\r\n}\r\n.calculating .title {\r\n   text-align: center;\r\n}\r\n.calculating__field {\r\n   width: 100%;\r\n   margin-top: 50px;\r\n   background: rgba(146, 242, 255, 0.15);\r\n   padding: 30px 0 40px 0;\r\n}\r\n.calculating__subtitle {\r\n   text-align: center;\r\n   font-size: 18px;\r\n   font-weight: 700;\r\n   margin-top: 30px;\r\n}\r\n.calculating__subtitle:first-child {\r\n   margin-top: 0;\r\n}\r\n.calculating #gender:after {\r\n   content: "";\r\n   position: absolute;\r\n   top: 50%;\r\n   transform: translateY(-50%);\r\n   display: block;\r\n   width: 16px;\r\n   height: 16px;\r\n   background: url('+l+") center center/cover no-repeat;\r\n}\r\n.calculating__choose {\r\n   position: relative;\r\n   display: flex;\r\n   margin-top: 30px;\r\n   justify-content: center;\r\n}\r\n.calculating__choose-item {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   width: 170px;\r\n   height: 50px;\r\n   padding: 0 10px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\r\n   border: none;\r\n   text-align: center;\r\n   font-size: 14px;\r\n   cursor: pointer;\r\n   outline: 0;\r\n   transition: 0.3s all;\r\n}\r\n.calculating__choose-item_active {\r\n   color: #fff;\r\n   background-color: #54ed39;\r\n}\r\n.calculating__choose_medium {\r\n   width: 743px;\r\n   justify-content: space-between;\r\n   margin: 30px auto 0 auto;\r\n}\r\n.calculating__choose_big {\r\n   width: 930px;\r\n   justify-content: space-between;\r\n   margin: 30px auto 0 auto;\r\n}\r\n.calculating__choose_big .calculating__choose-item {\r\n   width: 200px;\r\n}\r\n.calculating__divider {\r\n   width: 490px;\r\n   height: 1px;\r\n   margin: 40px auto;\r\n   background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.calculating__total {\r\n   width: 490px;\r\n   margin: 0 auto;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n.calculating__result {\r\n   font-size: 18px;\r\n   font-weight: 700;\r\n}\r\n.calculating__result span {\r\n   font-size: 42px;\r\n}\r\n","",{version:3,sources:["webpack://./css/components/calc.css"],names:[],mappings:"AAAA;GACG,eAAe;AAClB;AACA;GACG,kBAAkB;AACrB;AACA;GACG,WAAW;GACX,gBAAgB;GAChB,qCAAqC;GACrC,sBAAsB;AACzB;AACA;GACG,kBAAkB;GAClB,eAAe;GACf,gBAAgB;GAChB,gBAAgB;AACnB;AACA;GACG,aAAa;AAChB;AACA;GACG,WAAW;GACX,kBAAkB;GAClB,QAAQ;GACR,2BAA2B;GAC3B,cAAc;GACd,WAAW;GACX,YAAY;GACZ,iFAAkE;AACrE;AACA;GACG,kBAAkB;GAClB,aAAa;GACb,gBAAgB;GAChB,uBAAuB;AAC1B;AACA;GACG,aAAa;GACb,mBAAmB;GACnB,uBAAuB;GACvB,YAAY;GACZ,YAAY;GACZ,eAAe;GACf,gBAAgB;GAChB,yCAAyC;GACzC,YAAY;GACZ,kBAAkB;GAClB,eAAe;GACf,eAAe;GACf,UAAU;GACV,oBAAoB;AACvB;AACA;GACG,WAAW;GACX,yBAAyB;AAC5B;AACA;GACG,YAAY;GACZ,8BAA8B;GAC9B,wBAAwB;AAC3B;AACA;GACG,YAAY;GACZ,8BAA8B;GAC9B,wBAAwB;AAC3B;AACA;GACG,YAAY;AACf;AACA;GACG,YAAY;GACZ,WAAW;GACX,iBAAiB;GACjB,oCAAoC;AACvC;AACA;GACG,YAAY;GACZ,cAAc;GACd,aAAa;GACb,8BAA8B;GAC9B,mBAAmB;AACtB;AACA;GACG,eAAe;GACf,gBAAgB;AACnB;AACA;GACG,eAAe;AAClB",sourcesContent:['.calculating {\r\n   padding: 50px 0;\r\n}\r\n.calculating .title {\r\n   text-align: center;\r\n}\r\n.calculating__field {\r\n   width: 100%;\r\n   margin-top: 50px;\r\n   background: rgba(146, 242, 255, 0.15);\r\n   padding: 30px 0 40px 0;\r\n}\r\n.calculating__subtitle {\r\n   text-align: center;\r\n   font-size: 18px;\r\n   font-weight: 700;\r\n   margin-top: 30px;\r\n}\r\n.calculating__subtitle:first-child {\r\n   margin-top: 0;\r\n}\r\n.calculating #gender:after {\r\n   content: "";\r\n   position: absolute;\r\n   top: 50%;\r\n   transform: translateY(-50%);\r\n   display: block;\r\n   width: 16px;\r\n   height: 16px;\r\n   background: url("/icons/switch.svg") center center/cover no-repeat;\r\n}\r\n.calculating__choose {\r\n   position: relative;\r\n   display: flex;\r\n   margin-top: 30px;\r\n   justify-content: center;\r\n}\r\n.calculating__choose-item {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   width: 170px;\r\n   height: 50px;\r\n   padding: 0 10px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\r\n   border: none;\r\n   text-align: center;\r\n   font-size: 14px;\r\n   cursor: pointer;\r\n   outline: 0;\r\n   transition: 0.3s all;\r\n}\r\n.calculating__choose-item_active {\r\n   color: #fff;\r\n   background-color: #54ed39;\r\n}\r\n.calculating__choose_medium {\r\n   width: 743px;\r\n   justify-content: space-between;\r\n   margin: 30px auto 0 auto;\r\n}\r\n.calculating__choose_big {\r\n   width: 930px;\r\n   justify-content: space-between;\r\n   margin: 30px auto 0 auto;\r\n}\r\n.calculating__choose_big .calculating__choose-item {\r\n   width: 200px;\r\n}\r\n.calculating__divider {\r\n   width: 490px;\r\n   height: 1px;\r\n   margin: 40px auto;\r\n   background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.calculating__total {\r\n   width: 490px;\r\n   margin: 0 auto;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n.calculating__result {\r\n   font-size: 18px;\r\n   font-weight: 700;\r\n}\r\n.calculating__result span {\r\n   font-size: 42px;\r\n}\r\n'],sourceRoot:""}]),r.Z=p},230:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".menu {\r\n   padding: 40px 0 50px 0;\r\n}\r\n.menu .container {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: flex-start;\r\n}\r\n.menu .title {\r\n   text-align: center;\r\n}\r\n.menu__field {\r\n   margin-top: 50px;\r\n   padding: 50px 0;\r\n   width: 100%;\r\n   background: rgba(249, 254, 126, 0.25);\r\n}\r\n.menu__item {\r\n   width: 320px;\r\n   min-height: 450px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\r\n   font-size: 16px;\r\n   font-weight: 300;\r\n}\r\n.menu__item img {\r\n   width: 100%;\r\n   height: 200px;\r\n   object-fit: cover;\r\n}\r\n.menu__item-subtitle {\r\n   font-weight: 700;\r\n   font-size: 18px;\r\n   padding: 0 20px;\r\n   margin-top: 20px;\r\n}\r\n.menu__item-descr {\r\n   margin-top: 20px;\r\n   padding: 0 20px;\r\n}\r\n.menu__item-divider {\r\n   width: 100%;\r\n   height: 1px;\r\n   background-color: rgba(0, 0, 0, 0.25);\r\n   margin-top: 40px;\r\n}\r\n.menu__item-price {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n   padding: 10px 20px;\r\n}\r\n.menu__item-price span {\r\n   font-size: 24px;\r\n   font-weight: 700;\r\n}\r\n","",{version:3,sources:["webpack://./css/components/cards.css"],names:[],mappings:"AAAA;GACG,sBAAsB;AACzB;AACA;GACG,aAAa;GACb,8BAA8B;GAC9B,uBAAuB;AAC1B;AACA;GACG,kBAAkB;AACrB;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,WAAW;GACX,qCAAqC;AACxC;AACA;GACG,YAAY;GACZ,iBAAiB;GACjB,gBAAgB;GAChB,0CAA0C;GAC1C,eAAe;GACf,gBAAgB;AACnB;AACA;GACG,WAAW;GACX,aAAa;GACb,iBAAiB;AACpB;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,eAAe;GACf,gBAAgB;AACnB;AACA;GACG,gBAAgB;GAChB,eAAe;AAClB;AACA;GACG,WAAW;GACX,WAAW;GACX,qCAAqC;GACrC,gBAAgB;AACnB;AACA;GACG,aAAa;GACb,8BAA8B;GAC9B,mBAAmB;GACnB,kBAAkB;AACrB;AACA;GACG,eAAe;GACf,gBAAgB;AACnB",sourcesContent:[".menu {\r\n   padding: 40px 0 50px 0;\r\n}\r\n.menu .container {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: flex-start;\r\n}\r\n.menu .title {\r\n   text-align: center;\r\n}\r\n.menu__field {\r\n   margin-top: 50px;\r\n   padding: 50px 0;\r\n   width: 100%;\r\n   background: rgba(249, 254, 126, 0.25);\r\n}\r\n.menu__item {\r\n   width: 320px;\r\n   min-height: 450px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\r\n   font-size: 16px;\r\n   font-weight: 300;\r\n}\r\n.menu__item img {\r\n   width: 100%;\r\n   height: 200px;\r\n   object-fit: cover;\r\n}\r\n.menu__item-subtitle {\r\n   font-weight: 700;\r\n   font-size: 18px;\r\n   padding: 0 20px;\r\n   margin-top: 20px;\r\n}\r\n.menu__item-descr {\r\n   margin-top: 20px;\r\n   padding: 0 20px;\r\n}\r\n.menu__item-divider {\r\n   width: 100%;\r\n   height: 1px;\r\n   background-color: rgba(0, 0, 0, 0.25);\r\n   margin-top: 40px;\r\n}\r\n.menu__item-price {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n   padding: 10px 20px;\r\n}\r\n.menu__item-price span {\r\n   font-size: 24px;\r\n   font-weight: 700;\r\n}\r\n"],sourceRoot:""}]),r.Z=i},819:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".modal {\r\n   position: fixed;\r\n   top: 0;\r\n   left: 0;\r\n   z-index: 1050;\r\n   display: none;\r\n   width: 100%;\r\n   height: 100%;\r\n   overflow: hidden;\r\n   background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.modal__dialog {\r\n   max-width: 500px;\r\n   margin: 40px auto;\r\n}\r\n.modal__content {\r\n   position: relative;\r\n   width: 100%;\r\n   padding: 40px;\r\n   background-color: #fff;\r\n   border: 1px solid rgba(0, 0, 0, 0.2);\r\n   border-radius: 4px;\r\n   max-height: 80vh;\r\n   overflow-y: auto;\r\n}\r\n.modal__close {\r\n   position: absolute;\r\n   top: 8px;\r\n   right: 14px;\r\n   font-size: 30px;\r\n   color: #000;\r\n   opacity: 0.5;\r\n   font-weight: 700;\r\n   border: none;\r\n   background-color: transparent;\r\n   cursor: pointer;\r\n}\r\n.modal__title {\r\n   text-align: center;\r\n   font-size: 22px;\r\n   text-transform: uppercase;\r\n}\r\n.modal__input {\r\n   display: block;\r\n   margin: 20px auto 20px auto;\r\n   width: 280px;\r\n   height: 50px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\r\n   border: none;\r\n   font-size: 18px;\r\n   text-align: center;\r\n   padding: 0 20px;\r\n   outline: 0;\r\n}\r\n.modal .btn {\r\n   display: block;\r\n   width: 280px;\r\n   margin: 0 auto;\r\n}\r\n.show {\r\n   display: block;\r\n}\r\n.hide {\r\n   display: none;\r\n}\r\n.fade {\r\n   animation-name: fade;\r\n   animation-duration: 1.5s;\r\n}\r\n@keyframes fade {\r\n   from {\r\n      opacity: 0.1;\r\n   }\r\n   to {\r\n      opacity: 1;\r\n   }\r\n}\r\n","",{version:3,sources:["webpack://./css/components/modal.css"],names:[],mappings:"AAAA;GACG,eAAe;GACf,MAAM;GACN,OAAO;GACP,aAAa;GACb,aAAa;GACb,WAAW;GACX,YAAY;GACZ,gBAAgB;GAChB,oCAAoC;AACvC;AACA;GACG,gBAAgB;GAChB,iBAAiB;AACpB;AACA;GACG,kBAAkB;GAClB,WAAW;GACX,aAAa;GACb,sBAAsB;GACtB,oCAAoC;GACpC,kBAAkB;GAClB,gBAAgB;GAChB,gBAAgB;AACnB;AACA;GACG,kBAAkB;GAClB,QAAQ;GACR,WAAW;GACX,eAAe;GACf,WAAW;GACX,YAAY;GACZ,gBAAgB;GAChB,YAAY;GACZ,6BAA6B;GAC7B,eAAe;AAClB;AACA;GACG,kBAAkB;GAClB,eAAe;GACf,yBAAyB;AAC5B;AACA;GACG,cAAc;GACd,2BAA2B;GAC3B,YAAY;GACZ,YAAY;GACZ,gBAAgB;GAChB,yCAAyC;GACzC,YAAY;GACZ,eAAe;GACf,kBAAkB;GAClB,eAAe;GACf,UAAU;AACb;AACA;GACG,cAAc;GACd,YAAY;GACZ,cAAc;AACjB;AACA;GACG,cAAc;AACjB;AACA;GACG,aAAa;AAChB;AACA;GACG,oBAAoB;GACpB,wBAAwB;AAC3B;AACA;GACG;MACG,YAAY;GACf;GACA;MACG,UAAU;GACb;AACH",sourcesContent:[".modal {\r\n   position: fixed;\r\n   top: 0;\r\n   left: 0;\r\n   z-index: 1050;\r\n   display: none;\r\n   width: 100%;\r\n   height: 100%;\r\n   overflow: hidden;\r\n   background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.modal__dialog {\r\n   max-width: 500px;\r\n   margin: 40px auto;\r\n}\r\n.modal__content {\r\n   position: relative;\r\n   width: 100%;\r\n   padding: 40px;\r\n   background-color: #fff;\r\n   border: 1px solid rgba(0, 0, 0, 0.2);\r\n   border-radius: 4px;\r\n   max-height: 80vh;\r\n   overflow-y: auto;\r\n}\r\n.modal__close {\r\n   position: absolute;\r\n   top: 8px;\r\n   right: 14px;\r\n   font-size: 30px;\r\n   color: #000;\r\n   opacity: 0.5;\r\n   font-weight: 700;\r\n   border: none;\r\n   background-color: transparent;\r\n   cursor: pointer;\r\n}\r\n.modal__title {\r\n   text-align: center;\r\n   font-size: 22px;\r\n   text-transform: uppercase;\r\n}\r\n.modal__input {\r\n   display: block;\r\n   margin: 20px auto 20px auto;\r\n   width: 280px;\r\n   height: 50px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\r\n   border: none;\r\n   font-size: 18px;\r\n   text-align: center;\r\n   padding: 0 20px;\r\n   outline: 0;\r\n}\r\n.modal .btn {\r\n   display: block;\r\n   width: 280px;\r\n   margin: 0 auto;\r\n}\r\n.show {\r\n   display: block;\r\n}\r\n.hide {\r\n   display: none;\r\n}\r\n.fade {\r\n   animation-name: fade;\r\n   animation-duration: 1.5s;\r\n}\r\n@keyframes fade {\r\n   from {\r\n      opacity: 0.1;\r\n   }\r\n   to {\r\n      opacity: 1;\r\n   }\r\n}\r\n"],sourceRoot:""}]),r.Z=i},677:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".order {\r\n   padding-bottom: 80px;\r\n}\r\n.order .title {\r\n   text-align: center;\r\n}\r\n.order__form {\r\n   margin-top: 70px;\r\n   padding: 0 100px;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n.order__form img {\r\n   transform: scale(1.5);\r\n}\r\n.order__input {\r\n   width: 280px;\r\n   height: 50px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\r\n   border: none;\r\n   font-size: 18px;\r\n   text-align: center;\r\n   padding: 0 20px;\r\n   outline: 0;\r\n}\r\n","",{version:3,sources:["webpack://./css/components/order.css"],names:[],mappings:"AAAA;GACG,oBAAoB;AACvB;AACA;GACG,kBAAkB;AACrB;AACA;GACG,gBAAgB;GAChB,gBAAgB;GAChB,aAAa;GACb,8BAA8B;GAC9B,mBAAmB;AACtB;AACA;GACG,qBAAqB;AACxB;AACA;GACG,YAAY;GACZ,YAAY;GACZ,gBAAgB;GAChB,yCAAyC;GACzC,YAAY;GACZ,eAAe;GACf,kBAAkB;GAClB,eAAe;GACf,UAAU;AACb",sourcesContent:[".order {\r\n   padding-bottom: 80px;\r\n}\r\n.order .title {\r\n   text-align: center;\r\n}\r\n.order__form {\r\n   margin-top: 70px;\r\n   padding: 0 100px;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n.order__form img {\r\n   transform: scale(1.5);\r\n}\r\n.order__input {\r\n   width: 280px;\r\n   height: 50px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\r\n   border: none;\r\n   font-size: 18px;\r\n   text-align: center;\r\n   padding: 0 20px;\r\n   outline: 0;\r\n}\r\n"],sourceRoot:""}]),r.Z=i},227:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".offer {\r\n   padding: 70px 0 100px 0;\r\n   position: relative;\r\n}\r\n.offer .container {\r\n   display: flex;\r\n   justify-content: space-between;\r\n}\r\n.offer .bgc_y {\r\n   position: absolute;\r\n   width: 1109px;\r\n   height: 780px;\r\n   background: rgba(243, 255, 222, 0.45);\r\n   z-index: -1;\r\n   top: 50px;\r\n}\r\n.offer__text {\r\n   width: 580px;\r\n}\r\n.offer__descr {\r\n   font-size: 18px;\r\n   margin-top: 30px;\r\n   font-weight: 300;\r\n   line-height: 24px;\r\n}\r\n.offer__action {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: flex-end;\r\n}\r\n.offer__advantages {\r\n   width: 330px;\r\n   margin-top: 50px;\r\n}\r\n.offer__advantages h2 {\r\n   font-weight: 700;\r\n   font-size: 20px;\r\n   margin-top: 20px;\r\n}\r\n.offer__advantages h2:first-child {\r\n   margin-top: 70px;\r\n}\r\n.offer__advantages-text {\r\n   margin-top: 20px;\r\n   font-size: 18px;\r\n   font-weight: 300;\r\n   line-height: 21px;\r\n}\r\n.offer__slider {\r\n   width: 650px;\r\n   margin-top: 50px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: flex-end;\r\n}\r\n.offer__slider-counter {\r\n   display: flex;\r\n   width: 180px;\r\n   align-items: center;\r\n   font-size: 24px;\r\n   color: rgba(0, 0, 0, 0.5);\r\n}\r\n.offer__slider-wrapper {\r\n   width: 100%;\r\n   margin-top: 15px;\r\n   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);\r\n}\r\n.offer__slider-prev {\r\n   margin-right: 10px;\r\n   cursor: pointer;\r\n}\r\n.offer__slider-next {\r\n   margin-left: 10px;\r\n   cursor: pointer;\r\n}\r\n.offer__slider #current {\r\n   font-size: 48px;\r\n   font-weight: 700;\r\n   color: #000;\r\n}\r\n.offer__slide {\r\n   width: 100%;\r\n   height: 390px;\r\n}\r\n.offer__slide img {\r\n   width: 100%;\r\n   height: 100%;\r\n   object-fit: cover;\r\n}\r\n","",{version:3,sources:["webpack://./css/components/slider.css"],names:[],mappings:"AAAA;GACG,uBAAuB;GACvB,kBAAkB;AACrB;AACA;GACG,aAAa;GACb,8BAA8B;AACjC;AACA;GACG,kBAAkB;GAClB,aAAa;GACb,aAAa;GACb,qCAAqC;GACrC,WAAW;GACX,SAAS;AACZ;AACA;GACG,YAAY;AACf;AACA;GACG,eAAe;GACf,gBAAgB;GAChB,gBAAgB;GAChB,iBAAiB;AACpB;AACA;GACG,aAAa;GACb,mBAAmB;GACnB,yBAAyB;AAC5B;AACA;GACG,YAAY;GACZ,gBAAgB;AACnB;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,gBAAgB;AACnB;AACA;GACG,gBAAgB;AACnB;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,gBAAgB;GAChB,iBAAiB;AACpB;AACA;GACG,YAAY;GACZ,gBAAgB;GAChB,aAAa;GACb,sBAAsB;GACtB,qBAAqB;AACxB;AACA;GACG,aAAa;GACb,YAAY;GACZ,mBAAmB;GACnB,eAAe;GACf,yBAAyB;AAC5B;AACA;GACG,WAAW;GACX,gBAAgB;GAChB,0CAA0C;AAC7C;AACA;GACG,kBAAkB;GAClB,eAAe;AAClB;AACA;GACG,iBAAiB;GACjB,eAAe;AAClB;AACA;GACG,eAAe;GACf,gBAAgB;GAChB,WAAW;AACd;AACA;GACG,WAAW;GACX,aAAa;AAChB;AACA;GACG,WAAW;GACX,YAAY;GACZ,iBAAiB;AACpB",sourcesContent:[".offer {\r\n   padding: 70px 0 100px 0;\r\n   position: relative;\r\n}\r\n.offer .container {\r\n   display: flex;\r\n   justify-content: space-between;\r\n}\r\n.offer .bgc_y {\r\n   position: absolute;\r\n   width: 1109px;\r\n   height: 780px;\r\n   background: rgba(243, 255, 222, 0.45);\r\n   z-index: -1;\r\n   top: 50px;\r\n}\r\n.offer__text {\r\n   width: 580px;\r\n}\r\n.offer__descr {\r\n   font-size: 18px;\r\n   margin-top: 30px;\r\n   font-weight: 300;\r\n   line-height: 24px;\r\n}\r\n.offer__action {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: flex-end;\r\n}\r\n.offer__advantages {\r\n   width: 330px;\r\n   margin-top: 50px;\r\n}\r\n.offer__advantages h2 {\r\n   font-weight: 700;\r\n   font-size: 20px;\r\n   margin-top: 20px;\r\n}\r\n.offer__advantages h2:first-child {\r\n   margin-top: 70px;\r\n}\r\n.offer__advantages-text {\r\n   margin-top: 20px;\r\n   font-size: 18px;\r\n   font-weight: 300;\r\n   line-height: 21px;\r\n}\r\n.offer__slider {\r\n   width: 650px;\r\n   margin-top: 50px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: flex-end;\r\n}\r\n.offer__slider-counter {\r\n   display: flex;\r\n   width: 180px;\r\n   align-items: center;\r\n   font-size: 24px;\r\n   color: rgba(0, 0, 0, 0.5);\r\n}\r\n.offer__slider-wrapper {\r\n   width: 100%;\r\n   margin-top: 15px;\r\n   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);\r\n}\r\n.offer__slider-prev {\r\n   margin-right: 10px;\r\n   cursor: pointer;\r\n}\r\n.offer__slider-next {\r\n   margin-left: 10px;\r\n   cursor: pointer;\r\n}\r\n.offer__slider #current {\r\n   font-size: 48px;\r\n   font-weight: 700;\r\n   color: #000;\r\n}\r\n.offer__slide {\r\n   width: 100%;\r\n   height: 390px;\r\n}\r\n.offer__slide img {\r\n   width: 100%;\r\n   height: 100%;\r\n   object-fit: cover;\r\n}\r\n"],sourceRoot:""}]),r.Z=i},827:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".preview {\r\n   padding: 28px 0 100px 0;\r\n   position: relative;\r\n}\r\n.preview__life {\r\n   font-weight: 700;\r\n   font-size: 20px;\r\n   margin-left: 35px;\r\n   margin-top: 35px;\r\n}\r\n.bgc_blue {\r\n   position: absolute;\r\n   right: 0;\r\n   top: -155px;\r\n   width: 50vw;\r\n   height: 900px;\r\n   background: rgba(146, 242, 255, 0.15);\r\n   z-index: -1;\r\n}\r\n.tabcontainer {\r\n   display: flex;\r\n   width: 1130px;\r\n   margin: 0 auto;\r\n   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);\r\n}\r\n.tabcontent {\r\n   width: 850px;\r\n   position: relative;\r\n}\r\n.tabcontent img {\r\n   width: 100%;\r\n   height: 100%;\r\n   object-fit: cover;\r\n}\r\n.tabcontent__descr {\r\n   position: absolute;\r\n   top: 300px;\r\n   right: -177px;\r\n   width: 550px;\r\n   height: 359px;\r\n   background: rgba(251, 254, 93, 0.8);\r\n   padding: 50px;\r\n   font-size: 24px;\r\n   font-weight: 300;\r\n   line-height: 36px;\r\n   color: rgba(0, 0, 0, 0.7);\r\n}\r\n.tabheader {\r\n   width: 280px;\r\n   padding: 35px 30px;\r\n   background-color: #fff;\r\n}\r\n.tabheader h3 {\r\n   font-weight: 700;\r\n   font-size: 16px;\r\n}\r\n.tabheader__items {\r\n   margin-top: 35px;\r\n   padding-left: 26px;\r\n   border-left: 1px solid #000;\r\n}\r\n.tabheader__item {\r\n   font-weight: 700;\r\n   font-size: 18px;\r\n   font-weight: 300;\r\n   margin-top: 10px;\r\n   color: rgba(0, 0, 0, 0.6);\r\n   cursor: pointer;\r\n   transition: 0.3s all;\r\n}\r\n.tabheader__item_active {\r\n   color: #000;\r\n   font-size: 22px;\r\n   font-weight: 700;\r\n}\r\n","",{version:3,sources:["webpack://./css/components/tabs.css"],names:[],mappings:"AAAA;GACG,uBAAuB;GACvB,kBAAkB;AACrB;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,iBAAiB;GACjB,gBAAgB;AACnB;AACA;GACG,kBAAkB;GAClB,QAAQ;GACR,WAAW;GACX,WAAW;GACX,aAAa;GACb,qCAAqC;GACrC,WAAW;AACd;AACA;GACG,aAAa;GACb,aAAa;GACb,cAAc;GACd,0CAA0C;AAC7C;AACA;GACG,YAAY;GACZ,kBAAkB;AACrB;AACA;GACG,WAAW;GACX,YAAY;GACZ,iBAAiB;AACpB;AACA;GACG,kBAAkB;GAClB,UAAU;GACV,aAAa;GACb,YAAY;GACZ,aAAa;GACb,mCAAmC;GACnC,aAAa;GACb,eAAe;GACf,gBAAgB;GAChB,iBAAiB;GACjB,yBAAyB;AAC5B;AACA;GACG,YAAY;GACZ,kBAAkB;GAClB,sBAAsB;AACzB;AACA;GACG,gBAAgB;GAChB,eAAe;AAClB;AACA;GACG,gBAAgB;GAChB,kBAAkB;GAClB,2BAA2B;AAC9B;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,gBAAgB;GAChB,gBAAgB;GAChB,yBAAyB;GACzB,eAAe;GACf,oBAAoB;AACvB;AACA;GACG,WAAW;GACX,eAAe;GACf,gBAAgB;AACnB",sourcesContent:[".preview {\r\n   padding: 28px 0 100px 0;\r\n   position: relative;\r\n}\r\n.preview__life {\r\n   font-weight: 700;\r\n   font-size: 20px;\r\n   margin-left: 35px;\r\n   margin-top: 35px;\r\n}\r\n.bgc_blue {\r\n   position: absolute;\r\n   right: 0;\r\n   top: -155px;\r\n   width: 50vw;\r\n   height: 900px;\r\n   background: rgba(146, 242, 255, 0.15);\r\n   z-index: -1;\r\n}\r\n.tabcontainer {\r\n   display: flex;\r\n   width: 1130px;\r\n   margin: 0 auto;\r\n   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);\r\n}\r\n.tabcontent {\r\n   width: 850px;\r\n   position: relative;\r\n}\r\n.tabcontent img {\r\n   width: 100%;\r\n   height: 100%;\r\n   object-fit: cover;\r\n}\r\n.tabcontent__descr {\r\n   position: absolute;\r\n   top: 300px;\r\n   right: -177px;\r\n   width: 550px;\r\n   height: 359px;\r\n   background: rgba(251, 254, 93, 0.8);\r\n   padding: 50px;\r\n   font-size: 24px;\r\n   font-weight: 300;\r\n   line-height: 36px;\r\n   color: rgba(0, 0, 0, 0.7);\r\n}\r\n.tabheader {\r\n   width: 280px;\r\n   padding: 35px 30px;\r\n   background-color: #fff;\r\n}\r\n.tabheader h3 {\r\n   font-weight: 700;\r\n   font-size: 16px;\r\n}\r\n.tabheader__items {\r\n   margin-top: 35px;\r\n   padding-left: 26px;\r\n   border-left: 1px solid #000;\r\n}\r\n.tabheader__item {\r\n   font-weight: 700;\r\n   font-size: 18px;\r\n   font-weight: 300;\r\n   margin-top: 10px;\r\n   color: rgba(0, 0, 0, 0.6);\r\n   cursor: pointer;\r\n   transition: 0.3s all;\r\n}\r\n.tabheader__item_active {\r\n   color: #000;\r\n   font-size: 22px;\r\n   font-weight: 700;\r\n}\r\n"],sourceRoot:""}]),r.Z=i},993:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".promotion {\r\n   padding: 70px 0 240px 0;\r\n   position: relative;\r\n}\r\n.promotion .container {\r\n   display: flex;\r\n}\r\n.promotion .bgc_y {\r\n   position: absolute;\r\n   width: 50%;\r\n   height: 499px;\r\n   background: rgba(243, 255, 222, 0.35);\r\n   z-index: -1;\r\n   top: -50px;\r\n   left: 0;\r\n}\r\n.promotion__text {\r\n   width: 50%;\r\n}\r\n.promotion__descr {\r\n   margin-top: 40px;\r\n   font-size: 20px;\r\n   line-height: 24px;\r\n   font-weight: 300;\r\n}\r\n.promotion__descr span {\r\n   font-weight: 700;\r\n   font-size: 26px;\r\n}\r\n.promotion__timer {\r\n   width: 50%;\r\n}\r\n.promotion__timer .title {\r\n   text-align: right;\r\n}\r\n.promotion__timer .timer {\r\n   margin-top: 60px;\r\n   padding-left: 95px;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n.promotion__timer .timer__block {\r\n   width: 102px;\r\n   height: 120px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\r\n   font-size: 16px;\r\n   font-weight: 300;\r\n   text-align: center;\r\n}\r\n.promotion__timer .timer__block span {\r\n   display: block;\r\n   margin-top: 20px;\r\n   margin-bottom: 5px;\r\n   font-size: 56px;\r\n   font-weight: 700;\r\n}\r\n","",{version:3,sources:["webpack://./css/components/timer.css"],names:[],mappings:"AAAA;GACG,uBAAuB;GACvB,kBAAkB;AACrB;AACA;GACG,aAAa;AAChB;AACA;GACG,kBAAkB;GAClB,UAAU;GACV,aAAa;GACb,qCAAqC;GACrC,WAAW;GACX,UAAU;GACV,OAAO;AACV;AACA;GACG,UAAU;AACb;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,iBAAiB;GACjB,gBAAgB;AACnB;AACA;GACG,gBAAgB;GAChB,eAAe;AAClB;AACA;GACG,UAAU;AACb;AACA;GACG,iBAAiB;AACpB;AACA;GACG,gBAAgB;GAChB,kBAAkB;GAClB,aAAa;GACb,8BAA8B;GAC9B,mBAAmB;AACtB;AACA;GACG,YAAY;GACZ,aAAa;GACb,gBAAgB;GAChB,0CAA0C;GAC1C,eAAe;GACf,gBAAgB;GAChB,kBAAkB;AACrB;AACA;GACG,cAAc;GACd,gBAAgB;GAChB,kBAAkB;GAClB,eAAe;GACf,gBAAgB;AACnB",sourcesContent:[".promotion {\r\n   padding: 70px 0 240px 0;\r\n   position: relative;\r\n}\r\n.promotion .container {\r\n   display: flex;\r\n}\r\n.promotion .bgc_y {\r\n   position: absolute;\r\n   width: 50%;\r\n   height: 499px;\r\n   background: rgba(243, 255, 222, 0.35);\r\n   z-index: -1;\r\n   top: -50px;\r\n   left: 0;\r\n}\r\n.promotion__text {\r\n   width: 50%;\r\n}\r\n.promotion__descr {\r\n   margin-top: 40px;\r\n   font-size: 20px;\r\n   line-height: 24px;\r\n   font-weight: 300;\r\n}\r\n.promotion__descr span {\r\n   font-weight: 700;\r\n   font-size: 26px;\r\n}\r\n.promotion__timer {\r\n   width: 50%;\r\n}\r\n.promotion__timer .title {\r\n   text-align: right;\r\n}\r\n.promotion__timer .timer {\r\n   margin-top: 60px;\r\n   padding-left: 95px;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n.promotion__timer .timer__block {\r\n   width: 102px;\r\n   height: 120px;\r\n   background: #fff;\r\n   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\r\n   font-size: 16px;\r\n   font-weight: 300;\r\n   text-align: center;\r\n}\r\n.promotion__timer .timer__block span {\r\n   display: block;\r\n   margin-top: 20px;\r\n   margin-bottom: 5px;\r\n   font-size: 56px;\r\n   font-weight: 700;\r\n}\r\n"],sourceRoot:""}]),r.Z=i},628:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,'.footer {\r\n   min-height: 180px;\r\n   background-color: #18171c;\r\n   padding: 65px 150px 50px 150px;\r\n   color: #fff;\r\n}\r\n.container-up {\r\n   display: flex;\r\n   column-gap: 70px;\r\n}\r\n.social {\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   max-width: 300px;\r\n   row-gap: 30px;\r\n}\r\n.subtitle {\r\n   font-size: 25px;\r\n   letter-spacing: 1px;\r\n}\r\n.subscribe {\r\n   line-height: 1.5;\r\n   color: #b1b3b1;\r\n}\r\n.icon-bottom {\r\n   display: flex;\r\n}\r\n.icon-bottom li a {\r\n   width: 40px;\r\n   height: 40px;\r\n   background-color: #fff;\r\n   text-align: center;\r\n   line-height: 35px;\r\n   font-size: 20px;\r\n   margin: 0 35px 0 0;\r\n   display: block;\r\n   border-radius: 50%;\r\n   position: relative;\r\n   overflow: hidden;\r\n   border: 3px solid #fff;\r\n   z-index: 1;\r\n}\r\n\r\n.icon-bottom li a .icon {\r\n   color: #262626;\r\n   transition: 0.5s;\r\n   z-index: 3;\r\n}\r\n\r\n.icon-bottom li a:hover .icon {\r\n   color: #fff;\r\n   transform: rotateY(360deg);\r\n}\r\n\r\n.icon-bottom li a:before {\r\n   content: "";\r\n   position: absolute;\r\n   top: 100%;\r\n   left: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   background: #f00;\r\n   transition: 0.5s;\r\n   z-index: 2;\r\n}\r\n\r\n.icon-bottom li a:hover:before {\r\n   top: 0;\r\n}\r\n\r\n.icon-bottom li:nth-child(1) a:before {\r\n   background: #3b5999;\r\n   z-index: -1;\r\n}\r\n\r\n.icon-bottom li:nth-child(2) a:before {\r\n   background: #55acee;\r\n   z-index: -1;\r\n}\r\n\r\n.icon-bottom li:nth-child(3) a:before {\r\n   background: #0077b5;\r\n   z-index: -1;\r\n}\r\n\r\n.icon-bottom li:nth-child(4) a:before {\r\n   background: #dd4b39;\r\n   z-index: -1;\r\n}\r\n\r\n.subtitel-bottom {\r\n   white-space: nowrap;\r\n   font-size: 17px;\r\n   font-weight: 500;\r\n   letter-spacing: 1px;\r\n   margin-bottom: 35px;\r\n   margin-top: 10px;\r\n}\r\n.content a {\r\n   margin-bottom: 10px;\r\n}\r\n.classic-link {\r\n   white-space: nowrap;\r\n   color: #b1b3b1;\r\n   display: flex;\r\n   row-gap: 1ch;\r\n}\r\n.classic-link:hover {\r\n   color: #fff;\r\n}\r\n.parent-input {\r\n   background-color: #646664;\r\n   padding: 10px 90px 10px 10px;\r\n   border-radius: 5px 0 0 5px;\r\n   position: relative;\r\n}\r\n.parent-input::placeholder {\r\n   color: #cbc9d1;\r\n}\r\n.dauther-input {\r\n   position: absolute;\r\n   cursor: pointer;\r\n   background-color: #646664;\r\n   border-radius: 0 5px 5px 0;\r\n}\r\n.dauther-input img {\r\n   margin-top: 4px;\r\n   padding-right: 4px;\r\n}\r\n.dauther-input img:activ {\r\n   transform: translate(0em, 0.1em);\r\n}\r\n.small-text {\r\n   margin-top: 10px;\r\n   font-size: 11px;\r\n   white-space: nowrap;\r\n}\r\n.smallc-text {\r\n   font-size: 15px;\r\n   padding: 20px 0 0 600px;\r\n}\r\n.footer-down {\r\n   display: block;\r\n   width: 100%;\r\n   height: 60px;\r\n   background-color: #605c70;\r\n}\r\n',"",{version:3,sources:["webpack://./css/layout/footer/footer.css"],names:[],mappings:"AAAA;GACG,iBAAiB;GACjB,yBAAyB;GACzB,8BAA8B;GAC9B,WAAW;AACd;AACA;GACG,aAAa;GACb,gBAAgB;AACnB;AACA;GACG,aAAa;GACb,eAAe;GACf,gBAAgB;GAChB,aAAa;AAChB;AACA;GACG,eAAe;GACf,mBAAmB;AACtB;AACA;GACG,gBAAgB;GAChB,cAAc;AACjB;AACA;GACG,aAAa;AAChB;AACA;GACG,WAAW;GACX,YAAY;GACZ,sBAAsB;GACtB,kBAAkB;GAClB,iBAAiB;GACjB,eAAe;GACf,kBAAkB;GAClB,cAAc;GACd,kBAAkB;GAClB,kBAAkB;GAClB,gBAAgB;GAChB,sBAAsB;GACtB,UAAU;AACb;;AAEA;GACG,cAAc;GACd,gBAAgB;GAChB,UAAU;AACb;;AAEA;GACG,WAAW;GACX,0BAA0B;AAC7B;;AAEA;GACG,WAAW;GACX,kBAAkB;GAClB,SAAS;GACT,OAAO;GACP,WAAW;GACX,YAAY;GACZ,gBAAgB;GAChB,gBAAgB;GAChB,UAAU;AACb;;AAEA;GACG,MAAM;AACT;;AAEA;GACG,mBAAmB;GACnB,WAAW;AACd;;AAEA;GACG,mBAAmB;GACnB,WAAW;AACd;;AAEA;GACG,mBAAmB;GACnB,WAAW;AACd;;AAEA;GACG,mBAAmB;GACnB,WAAW;AACd;;AAEA;GACG,mBAAmB;GACnB,eAAe;GACf,gBAAgB;GAChB,mBAAmB;GACnB,mBAAmB;GACnB,gBAAgB;AACnB;AACA;GACG,mBAAmB;AACtB;AACA;GACG,mBAAmB;GACnB,cAAc;GACd,aAAa;GACb,YAAY;AACf;AACA;GACG,WAAW;AACd;AACA;GACG,yBAAyB;GACzB,4BAA4B;GAC5B,0BAA0B;GAC1B,kBAAkB;AACrB;AACA;GACG,cAAc;AACjB;AACA;GACG,kBAAkB;GAClB,eAAe;GACf,yBAAyB;GACzB,0BAA0B;AAC7B;AACA;GACG,eAAe;GACf,kBAAkB;AACrB;AACA;GACG,gCAAgC;AACnC;AACA;GACG,gBAAgB;GAChB,eAAe;GACf,mBAAmB;AACtB;AACA;GACG,eAAe;GACf,uBAAuB;AAC1B;AACA;GACG,cAAc;GACd,WAAW;GACX,YAAY;GACZ,yBAAyB;AAC5B",sourcesContent:['.footer {\r\n   min-height: 180px;\r\n   background-color: #18171c;\r\n   padding: 65px 150px 50px 150px;\r\n   color: #fff;\r\n}\r\n.container-up {\r\n   display: flex;\r\n   column-gap: 70px;\r\n}\r\n.social {\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   max-width: 300px;\r\n   row-gap: 30px;\r\n}\r\n.subtitle {\r\n   font-size: 25px;\r\n   letter-spacing: 1px;\r\n}\r\n.subscribe {\r\n   line-height: 1.5;\r\n   color: #b1b3b1;\r\n}\r\n.icon-bottom {\r\n   display: flex;\r\n}\r\n.icon-bottom li a {\r\n   width: 40px;\r\n   height: 40px;\r\n   background-color: #fff;\r\n   text-align: center;\r\n   line-height: 35px;\r\n   font-size: 20px;\r\n   margin: 0 35px 0 0;\r\n   display: block;\r\n   border-radius: 50%;\r\n   position: relative;\r\n   overflow: hidden;\r\n   border: 3px solid #fff;\r\n   z-index: 1;\r\n}\r\n\r\n.icon-bottom li a .icon {\r\n   color: #262626;\r\n   transition: 0.5s;\r\n   z-index: 3;\r\n}\r\n\r\n.icon-bottom li a:hover .icon {\r\n   color: #fff;\r\n   transform: rotateY(360deg);\r\n}\r\n\r\n.icon-bottom li a:before {\r\n   content: "";\r\n   position: absolute;\r\n   top: 100%;\r\n   left: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   background: #f00;\r\n   transition: 0.5s;\r\n   z-index: 2;\r\n}\r\n\r\n.icon-bottom li a:hover:before {\r\n   top: 0;\r\n}\r\n\r\n.icon-bottom li:nth-child(1) a:before {\r\n   background: #3b5999;\r\n   z-index: -1;\r\n}\r\n\r\n.icon-bottom li:nth-child(2) a:before {\r\n   background: #55acee;\r\n   z-index: -1;\r\n}\r\n\r\n.icon-bottom li:nth-child(3) a:before {\r\n   background: #0077b5;\r\n   z-index: -1;\r\n}\r\n\r\n.icon-bottom li:nth-child(4) a:before {\r\n   background: #dd4b39;\r\n   z-index: -1;\r\n}\r\n\r\n.subtitel-bottom {\r\n   white-space: nowrap;\r\n   font-size: 17px;\r\n   font-weight: 500;\r\n   letter-spacing: 1px;\r\n   margin-bottom: 35px;\r\n   margin-top: 10px;\r\n}\r\n.content a {\r\n   margin-bottom: 10px;\r\n}\r\n.classic-link {\r\n   white-space: nowrap;\r\n   color: #b1b3b1;\r\n   display: flex;\r\n   row-gap: 1ch;\r\n}\r\n.classic-link:hover {\r\n   color: #fff;\r\n}\r\n.parent-input {\r\n   background-color: #646664;\r\n   padding: 10px 90px 10px 10px;\r\n   border-radius: 5px 0 0 5px;\r\n   position: relative;\r\n}\r\n.parent-input::placeholder {\r\n   color: #cbc9d1;\r\n}\r\n.dauther-input {\r\n   position: absolute;\r\n   cursor: pointer;\r\n   background-color: #646664;\r\n   border-radius: 0 5px 5px 0;\r\n}\r\n.dauther-input img {\r\n   margin-top: 4px;\r\n   padding-right: 4px;\r\n}\r\n.dauther-input img:activ {\r\n   transform: translate(0em, 0.1em);\r\n}\r\n.small-text {\r\n   margin-top: 10px;\r\n   font-size: 11px;\r\n   white-space: nowrap;\r\n}\r\n.smallc-text {\r\n   font-size: 15px;\r\n   padding: 20px 0 0 600px;\r\n}\r\n.footer-down {\r\n   display: block;\r\n   width: 100%;\r\n   height: 60px;\r\n   background-color: #605c70;\r\n}\r\n'],sourceRoot:""}]),r.Z=i},616:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".header {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n   height: 150px;\r\n   padding: 0 100px;\r\n}\r\n.header__left-block {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   min-width: 650px;\r\n}\r\n","",{version:3,sources:["webpack://./css/layout/header/header.css"],names:[],mappings:"AAAA;GACG,aAAa;GACb,8BAA8B;GAC9B,mBAAmB;GACnB,aAAa;GACb,gBAAgB;AACnB;AACA;GACG,aAAa;GACb,8BAA8B;GAC9B,gBAAgB;AACnB",sourcesContent:[".header {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n   height: 150px;\r\n   padding: 0 100px;\r\n}\r\n.header__left-block {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   min-width: 650px;\r\n}\r\n"],sourceRoot:""}]),r.Z=i},776:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,'.header__logo {\r\n   font-family: "sonos-logoregular";\r\n   font-size: 27px;\r\n   letter-spacing: 0.02em;\r\n   text-transform: uppercase;\r\n   user-select: none;\r\n}\r\n.right-word {\r\n   display: inline-block;\r\n   text-align: right;\r\n}\r\n.color-move {\r\n   margin-right: 10px;\r\n   background: rgb(78, 201, 203);\r\n   background: linear-gradient(\r\n      -90deg,\r\n      rgb(107, 238, 240) 0%,\r\n      rgba(135, 230, 131, 1) 56%,\r\n      rgba(85, 185, 67, 1) 100%\r\n   );\r\n   color: transparent;\r\n   -webkit-background-clip: text;\r\n   -webkit-animation: animate-logo;\r\n   -webkit-animation-delay: 0;\r\n   -webkit-animation-duration: 7s;\r\n   -webkit-animation-timing-function: linear;\r\n   -webkit-animation-iteration-count: infinite;\r\n   -webkit-animation-fill-mode: forwards;\r\n}\r\n@-webkit-keyframes animate-logo {\r\n   0% {\r\n      background-position: 0 50px;\r\n   }\r\n   100% {\r\n      background-position: 50px 0;\r\n   }\r\n}\r\n/* Cuboid Positioning */\r\n.cuboid,\r\n.cuboid-face {\r\n   display: inline-block;\r\n   background: rgb(0, 0, 0);\r\n   background: linear-gradient(\r\n      -90deg,\r\n      rgba(121, 253, 255, 1) 0%,\r\n      rgba(135, 230, 131, 1) 56%,\r\n      rgba(85, 185, 67, 1) 100%\r\n   );\r\n}\r\n\r\n.cuboid {\r\n   font-size: 2.5rem;\r\n   position: relative;\r\n   height: 0.5em;\r\n   width: 1em;\r\n   vertical-align: middle;\r\n   transform-style: preserve-3d;\r\n   transform: rotateX(-40deg) rotateY(-45deg);\r\n   animation: rotateCuboid 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face {\r\n   position: absolute;\r\n   top: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   border: 0.08em solid #eee;\r\n}\r\n\r\n.cuboid-face-top,\r\n.cuboid-face-bottom {\r\n   height: 1em;\r\n}\r\n\r\n.cuboid-face-front {\r\n   transform: translateZ(0.5em);\r\n   animation: faceFront 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face-back {\r\n   transform: rotateY(180deg) translateZ(0.5em);\r\n   animation: faceBack 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face-left {\r\n   transform: rotateY(-90deg) translateZ(0.5em);\r\n   animation: faceLeft 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face-right {\r\n   transform: rotateY(90deg) translateZ(0.5em);\r\n   animation: faceRight 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face-top {\r\n   transform: rotateX(90deg) translateZ(0.5em);\r\n}\r\n\r\n.cuboid-face-bottom {\r\n   transform: rotateX(-90deg);\r\n}\r\n\r\n/* Animations */\r\n\r\n@keyframes faceFront {\r\n   50% {\r\n      transform: translateZ(0.7em);\r\n   }\r\n}\r\n\r\n@keyframes faceBack {\r\n   50% {\r\n      transform: rotateY(180deg) translateZ(0.7em);\r\n   }\r\n}\r\n\r\n@keyframes faceLeft {\r\n   50% {\r\n      transform: rotateY(-90deg) translateZ(0.7em);\r\n   }\r\n}\r\n\r\n@keyframes faceRight {\r\n   50% {\r\n      transform: rotateY(90deg) translateZ(0.7em);\r\n   }\r\n}\r\n\r\n@keyframes rotateCuboid {\r\n   100% {\r\n      transform: rotateX(-40deg) rotateY(-405deg);\r\n   }\r\n}\r\n',"",{version:3,sources:["webpack://./css/layout/header/logo.css"],names:[],mappings:"AAAA;GACG,gCAAgC;GAChC,eAAe;GACf,sBAAsB;GACtB,yBAAyB;GACzB,iBAAiB;AACpB;AACA;GACG,qBAAqB;GACrB,iBAAiB;AACpB;AACA;GACG,kBAAkB;GAClB,6BAA6B;GAC7B;;;;;IAKC;GACD,kBAAkB;GAClB,6BAA6B;GAC7B,+BAA+B;GAC/B,0BAA0B;GAC1B,8BAA8B;GAC9B,yCAAyC;GACzC,2CAA2C;GAC3C,qCAAqC;AACxC;AACA;GACG;MACG,2BAA2B;GAC9B;GACA;MACG,2BAA2B;GAC9B;AACH;AACA,uBAAuB;AACvB;;GAEG,qBAAqB;GACrB,wBAAwB;GACxB;;;;;IAKC;AACJ;;AAEA;GACG,iBAAiB;GACjB,kBAAkB;GAClB,aAAa;GACb,UAAU;GACV,sBAAsB;GACtB,4BAA4B;GAC5B,0CAA0C;GAC1C,+CAA+C;AAClD;;AAEA;GACG,kBAAkB;GAClB,MAAM;GACN,WAAW;GACX,YAAY;GACZ,yBAAyB;AAC5B;;AAEA;;GAEG,WAAW;AACd;;AAEA;GACG,4BAA4B;GAC5B,4CAA4C;AAC/C;;AAEA;GACG,4CAA4C;GAC5C,2CAA2C;AAC9C;;AAEA;GACG,4CAA4C;GAC5C,2CAA2C;AAC9C;;AAEA;GACG,2CAA2C;GAC3C,4CAA4C;AAC/C;;AAEA;GACG,2CAA2C;AAC9C;;AAEA;GACG,0BAA0B;AAC7B;;AAEA,eAAe;;AAEf;GACG;MACG,4BAA4B;GAC/B;AACH;;AAEA;GACG;MACG,4CAA4C;GAC/C;AACH;;AAEA;GACG;MACG,4CAA4C;GAC/C;AACH;;AAEA;GACG;MACG,2CAA2C;GAC9C;AACH;;AAEA;GACG;MACG,2CAA2C;GAC9C;AACH",sourcesContent:['.header__logo {\r\n   font-family: "sonos-logoregular";\r\n   font-size: 27px;\r\n   letter-spacing: 0.02em;\r\n   text-transform: uppercase;\r\n   user-select: none;\r\n}\r\n.right-word {\r\n   display: inline-block;\r\n   text-align: right;\r\n}\r\n.color-move {\r\n   margin-right: 10px;\r\n   background: rgb(78, 201, 203);\r\n   background: linear-gradient(\r\n      -90deg,\r\n      rgb(107, 238, 240) 0%,\r\n      rgba(135, 230, 131, 1) 56%,\r\n      rgba(85, 185, 67, 1) 100%\r\n   );\r\n   color: transparent;\r\n   -webkit-background-clip: text;\r\n   -webkit-animation: animate-logo;\r\n   -webkit-animation-delay: 0;\r\n   -webkit-animation-duration: 7s;\r\n   -webkit-animation-timing-function: linear;\r\n   -webkit-animation-iteration-count: infinite;\r\n   -webkit-animation-fill-mode: forwards;\r\n}\r\n@-webkit-keyframes animate-logo {\r\n   0% {\r\n      background-position: 0 50px;\r\n   }\r\n   100% {\r\n      background-position: 50px 0;\r\n   }\r\n}\r\n/* Cuboid Positioning */\r\n.cuboid,\r\n.cuboid-face {\r\n   display: inline-block;\r\n   background: rgb(0, 0, 0);\r\n   background: linear-gradient(\r\n      -90deg,\r\n      rgba(121, 253, 255, 1) 0%,\r\n      rgba(135, 230, 131, 1) 56%,\r\n      rgba(85, 185, 67, 1) 100%\r\n   );\r\n}\r\n\r\n.cuboid {\r\n   font-size: 2.5rem;\r\n   position: relative;\r\n   height: 0.5em;\r\n   width: 1em;\r\n   vertical-align: middle;\r\n   transform-style: preserve-3d;\r\n   transform: rotateX(-40deg) rotateY(-45deg);\r\n   animation: rotateCuboid 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face {\r\n   position: absolute;\r\n   top: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   border: 0.08em solid #eee;\r\n}\r\n\r\n.cuboid-face-top,\r\n.cuboid-face-bottom {\r\n   height: 1em;\r\n}\r\n\r\n.cuboid-face-front {\r\n   transform: translateZ(0.5em);\r\n   animation: faceFront 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face-back {\r\n   transform: rotateY(180deg) translateZ(0.5em);\r\n   animation: faceBack 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face-left {\r\n   transform: rotateY(-90deg) translateZ(0.5em);\r\n   animation: faceLeft 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face-right {\r\n   transform: rotateY(90deg) translateZ(0.5em);\r\n   animation: faceRight 3s ease-in-out infinite;\r\n}\r\n\r\n.cuboid-face-top {\r\n   transform: rotateX(90deg) translateZ(0.5em);\r\n}\r\n\r\n.cuboid-face-bottom {\r\n   transform: rotateX(-90deg);\r\n}\r\n\r\n/* Animations */\r\n\r\n@keyframes faceFront {\r\n   50% {\r\n      transform: translateZ(0.7em);\r\n   }\r\n}\r\n\r\n@keyframes faceBack {\r\n   50% {\r\n      transform: rotateY(180deg) translateZ(0.7em);\r\n   }\r\n}\r\n\r\n@keyframes faceLeft {\r\n   50% {\r\n      transform: rotateY(-90deg) translateZ(0.7em);\r\n   }\r\n}\r\n\r\n@keyframes faceRight {\r\n   50% {\r\n      transform: rotateY(90deg) translateZ(0.7em);\r\n   }\r\n}\r\n\r\n@keyframes rotateCuboid {\r\n   100% {\r\n      transform: rotateX(-40deg) rotateY(-405deg);\r\n   }\r\n}\r\n'],sourceRoot:""}]),r.Z=i},320:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,'.header__links {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: space-between;\r\n   min-width: 300px;\r\n   margin-right: 20px;\r\n}\r\n.header__link {\r\n   position: relative;\r\n   width: 130px;\r\n   height: 52px;\r\n   background: white;\r\n   border-radius: 75px;\r\n   font-family: "sonos-logoregular";\r\n   font-size: 20px;\r\n   font-weight: lighter;\r\n   letter-spacing: 2px;\r\n   text-align: center;\r\n}\r\n.header__link:hover {\r\n   box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n.header__link:active {\r\n   background: #ffe9e9;\r\n   transform: translate(0em, 0.1em);\r\n}\r\n.header__link:hover::before,\r\n.header__link:hover::after {\r\n   display: block;\r\n   content: "";\r\n   position: absolute;\r\n   width: 130px;\r\n   height: 52px;\r\n   background: linear-gradient(\r\n      -90deg,\r\n      rgba(121, 253, 255, 1) 0%,\r\n      rgba(135, 230, 131, 1) 56%,\r\n      rgba(85, 185, 67, 1) 100%\r\n   );\r\n   border-radius: 75px;\r\n   z-index: -1;\r\n   animation: 3s clockwise infinite;\r\n}\r\n.header__link:hover:after {\r\n   background: linear-gradient(\r\n      -90deg,\r\n      rgba(121, 253, 255, 1) 0%,\r\n      rgba(135, 230, 131, 1) 56%,\r\n      rgba(85, 185, 67, 1) 100%\r\n   );\r\n   animation: 3s counterclockwise infinite;\r\n}\r\n\r\n@keyframes clockwise {\r\n   0% {\r\n      top: -5px;\r\n      left: 0;\r\n   }\r\n   12% {\r\n      top: -2px;\r\n      left: 2px;\r\n   }\r\n   25% {\r\n      top: 0;\r\n      left: 5px;\r\n   }\r\n   37% {\r\n      top: 2px;\r\n      left: 2px;\r\n   }\r\n   50% {\r\n      top: 5px;\r\n      left: 0;\r\n   }\r\n   62% {\r\n      top: 2px;\r\n      left: -2px;\r\n   }\r\n   75% {\r\n      top: 0;\r\n      left: -5px;\r\n   }\r\n   87% {\r\n      top: -2px;\r\n      left: -2px;\r\n   }\r\n   100% {\r\n      top: -5px;\r\n      left: 0;\r\n   }\r\n}\r\n\r\n@keyframes counterclockwise {\r\n   0% {\r\n      top: -5px;\r\n      right: 0;\r\n   }\r\n   12% {\r\n      top: -2px;\r\n      right: 2px;\r\n   }\r\n   25% {\r\n      top: 0;\r\n      right: 5px;\r\n   }\r\n   37% {\r\n      top: 2px;\r\n      right: 2px;\r\n   }\r\n   50% {\r\n      top: 5px;\r\n      right: 0;\r\n   }\r\n   62% {\r\n      top: 2px;\r\n      right: -2px;\r\n   }\r\n   75% {\r\n      top: 0;\r\n      right: -5px;\r\n   }\r\n   87% {\r\n      top: -2px;\r\n      right: -2px;\r\n   }\r\n   100% {\r\n      top: -5px;\r\n      right: 0;\r\n   }\r\n}\r\n',"",{version:3,sources:["webpack://./css/layout/header/navigation.css"],names:[],mappings:"AAAA;GACG,aAAa;GACb,mBAAmB;GACnB,8BAA8B;GAC9B,gBAAgB;GAChB,kBAAkB;AACrB;AACA;GACG,kBAAkB;GAClB,YAAY;GACZ,YAAY;GACZ,iBAAiB;GACjB,mBAAmB;GACnB,gCAAgC;GAChC,eAAe;GACf,oBAAoB;GACpB,mBAAmB;GACnB,kBAAkB;AACrB;AACA;GACG,6CAA6C;AAChD;AACA;GACG,mBAAmB;GACnB,gCAAgC;AACnC;AACA;;GAEG,cAAc;GACd,WAAW;GACX,kBAAkB;GAClB,YAAY;GACZ,YAAY;GACZ;;;;;IAKC;GACD,mBAAmB;GACnB,WAAW;GACX,gCAAgC;AACnC;AACA;GACG;;;;;IAKC;GACD,uCAAuC;AAC1C;;AAEA;GACG;MACG,SAAS;MACT,OAAO;GACV;GACA;MACG,SAAS;MACT,SAAS;GACZ;GACA;MACG,MAAM;MACN,SAAS;GACZ;GACA;MACG,QAAQ;MACR,SAAS;GACZ;GACA;MACG,QAAQ;MACR,OAAO;GACV;GACA;MACG,QAAQ;MACR,UAAU;GACb;GACA;MACG,MAAM;MACN,UAAU;GACb;GACA;MACG,SAAS;MACT,UAAU;GACb;GACA;MACG,SAAS;MACT,OAAO;GACV;AACH;;AAEA;GACG;MACG,SAAS;MACT,QAAQ;GACX;GACA;MACG,SAAS;MACT,UAAU;GACb;GACA;MACG,MAAM;MACN,UAAU;GACb;GACA;MACG,QAAQ;MACR,UAAU;GACb;GACA;MACG,QAAQ;MACR,QAAQ;GACX;GACA;MACG,QAAQ;MACR,WAAW;GACd;GACA;MACG,MAAM;MACN,WAAW;GACd;GACA;MACG,SAAS;MACT,WAAW;GACd;GACA;MACG,SAAS;MACT,QAAQ;GACX;AACH",sourcesContent:['.header__links {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: space-between;\r\n   min-width: 300px;\r\n   margin-right: 20px;\r\n}\r\n.header__link {\r\n   position: relative;\r\n   width: 130px;\r\n   height: 52px;\r\n   background: white;\r\n   border-radius: 75px;\r\n   font-family: "sonos-logoregular";\r\n   font-size: 20px;\r\n   font-weight: lighter;\r\n   letter-spacing: 2px;\r\n   text-align: center;\r\n}\r\n.header__link:hover {\r\n   box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n.header__link:active {\r\n   background: #ffe9e9;\r\n   transform: translate(0em, 0.1em);\r\n}\r\n.header__link:hover::before,\r\n.header__link:hover::after {\r\n   display: block;\r\n   content: "";\r\n   position: absolute;\r\n   width: 130px;\r\n   height: 52px;\r\n   background: linear-gradient(\r\n      -90deg,\r\n      rgba(121, 253, 255, 1) 0%,\r\n      rgba(135, 230, 131, 1) 56%,\r\n      rgba(85, 185, 67, 1) 100%\r\n   );\r\n   border-radius: 75px;\r\n   z-index: -1;\r\n   animation: 3s clockwise infinite;\r\n}\r\n.header__link:hover:after {\r\n   background: linear-gradient(\r\n      -90deg,\r\n      rgba(121, 253, 255, 1) 0%,\r\n      rgba(135, 230, 131, 1) 56%,\r\n      rgba(85, 185, 67, 1) 100%\r\n   );\r\n   animation: 3s counterclockwise infinite;\r\n}\r\n\r\n@keyframes clockwise {\r\n   0% {\r\n      top: -5px;\r\n      left: 0;\r\n   }\r\n   12% {\r\n      top: -2px;\r\n      left: 2px;\r\n   }\r\n   25% {\r\n      top: 0;\r\n      left: 5px;\r\n   }\r\n   37% {\r\n      top: 2px;\r\n      left: 2px;\r\n   }\r\n   50% {\r\n      top: 5px;\r\n      left: 0;\r\n   }\r\n   62% {\r\n      top: 2px;\r\n      left: -2px;\r\n   }\r\n   75% {\r\n      top: 0;\r\n      left: -5px;\r\n   }\r\n   87% {\r\n      top: -2px;\r\n      left: -2px;\r\n   }\r\n   100% {\r\n      top: -5px;\r\n      left: 0;\r\n   }\r\n}\r\n\r\n@keyframes counterclockwise {\r\n   0% {\r\n      top: -5px;\r\n      right: 0;\r\n   }\r\n   12% {\r\n      top: -2px;\r\n      right: 2px;\r\n   }\r\n   25% {\r\n      top: 0;\r\n      right: 5px;\r\n   }\r\n   37% {\r\n      top: 2px;\r\n      right: 2px;\r\n   }\r\n   50% {\r\n      top: 5px;\r\n      right: 0;\r\n   }\r\n   62% {\r\n      top: 2px;\r\n      right: -2px;\r\n   }\r\n   75% {\r\n      top: 0;\r\n      right: -5px;\r\n   }\r\n   87% {\r\n      top: -2px;\r\n      right: -2px;\r\n   }\r\n   100% {\r\n      top: -5px;\r\n      right: 0;\r\n   }\r\n}\r\n'],sourceRoot:""}]),r.Z=i},295:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([n.id,".sidepanel {\r\n   position: fixed;\r\n   left: 60px;\r\n   top: 240px;\r\n   height: 400px;\r\n   width: 25px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n.sidepanel__text {\r\n   width: 120px;\r\n   height: 120px;\r\n   font-size: 14px;\r\n}\r\n.sidepanel__text span {\r\n   display: flex;\r\n   transform: rotate(-90deg) translateX(-50px);\r\n}\r\n.sidepanel__divider {\r\n   width: 1px;\r\n   height: 165px;\r\n   background-color: #000;\r\n}\r\n.sidepanel__icon {\r\n   width: 24px;\r\n   height: 24px;\r\n}\r\n.sidepanel__icon img {\r\n   width: 100%;\r\n}\r\n","",{version:3,sources:["webpack://./css/layout/sidepanel/sidepanel.css"],names:[],mappings:"AAAA;GACG,eAAe;GACf,UAAU;GACV,UAAU;GACV,aAAa;GACb,WAAW;GACX,aAAa;GACb,sBAAsB;GACtB,8BAA8B;GAC9B,mBAAmB;AACtB;AACA;GACG,YAAY;GACZ,aAAa;GACb,eAAe;AAClB;AACA;GACG,aAAa;GACb,2CAA2C;AAC9C;AACA;GACG,UAAU;GACV,aAAa;GACb,sBAAsB;AACzB;AACA;GACG,WAAW;GACX,YAAY;AACf;AACA;GACG,WAAW;AACd",sourcesContent:[".sidepanel {\r\n   position: fixed;\r\n   left: 60px;\r\n   top: 240px;\r\n   height: 400px;\r\n   width: 25px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n.sidepanel__text {\r\n   width: 120px;\r\n   height: 120px;\r\n   font-size: 14px;\r\n}\r\n.sidepanel__text span {\r\n   display: flex;\r\n   transform: rotate(-90deg) translateX(-50px);\r\n}\r\n.sidepanel__divider {\r\n   width: 1px;\r\n   height: 165px;\r\n   background-color: #000;\r\n}\r\n.sidepanel__icon {\r\n   width: 24px;\r\n   height: 24px;\r\n}\r\n.sidepanel__icon img {\r\n   width: 100%;\r\n}\r\n"],sourceRoot:""}]),r.Z=i},170:function(n,r,t){"use strict";var e=t(537),A=t.n(e),o=t(645),i=t.n(o),a=t(67),s=t(616),c=t(776),p=t(320),l=t(295),d=t(221),C=t(827),f=t(819),g=t(227),u=t(464),h=t(230),m=t(677),G=t(993),x=t(628),B=i()(A());B.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext);"]),B.i(a.Z),B.i(s.Z),B.i(c.Z),B.i(p.Z),B.i(l.Z),B.i(d.Z),B.i(C.Z),B.i(f.Z),B.i(g.Z),B.i(u.Z),B.i(h.Z),B.i(m.Z),B.i(G.Z),B.i(x.Z),B.push([n.id,"/*Header*/\r\n\r\n/*Sidepanel*/\r\n\r\n/*Components*/\r\n\r\n/*Footer*/\r\n","",{version:3,sources:["webpack://./css/styles.css"],names:[],mappings:"AAEA,SAAS;;AAMT,YAAY;;AAGZ,aAAa;;AAUb,SAAS",sourcesContent:['@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext);\r\n\r\n/*Header*/\r\n@import "./base/default.css";\r\n@import "./layout/header/header.css";\r\n@import "./layout/header/logo.css";\r\n@import "./layout/header/navigation.css";\r\n\r\n/*Sidepanel*/\r\n@import "./layout/sidepanel/sidepanel.css";\r\n\r\n/*Components*/\r\n@import "./components/buttons.css";\r\n@import "./components/tabs.css";\r\n@import "./components/modal.css";\r\n@import "./components/slider.css";\r\n@import "./components/calc.css";\r\n@import "./components/cards.css";\r\n@import "./components/order.css";\r\n@import "./components/timer.css";\r\n\r\n/*Footer*/\r\n@import "./layout/footer/footer.css";\r\n'],sourceRoot:""}]),r.Z=B},645:function(n){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,A,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);e&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),A&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=A):p[4]="".concat(A)),r.push(p))}},r}},667:function(n){"use strict";n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:function(n){"use strict";n.exports=function(n){var r=n[1],t=n[3];if(!t)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),o="/*# ".concat(A," */");return[r].concat([o]).join("\n")}return[r].join("\n")}},702:function(n,r,t){n.exports=function(){"use strict";function n(n){return"function"==typeof n}var r=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},e=0,A=void 0,o=void 0,i=function(n,r){C[e]=n,C[e+1]=r,2===(e+=2)&&(o?o(f):G())};var a="undefined"!=typeof window?window:void 0,s=a||{},c=s.MutationObserver||s.WebKitMutationObserver,p="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),l="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var n=setTimeout;return function(){return n(f,1)}}var C=new Array(1e3);function f(){for(var n=0;n<e;n+=2)(0,C[n])(C[n+1]),C[n]=void 0,C[n+1]=void 0;e=0}var g,u,h,m,G=void 0;function x(n,r){var t=this,e=new this.constructor(_);void 0===e[b]&&L(e);var A=t._state;if(A){var o=arguments[A-1];i((function(){return M(A,e,o,t._result)}))}else Z(t,e,n,r);return e}function B(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var r=new this(_);return Y(r,n),r}G=p?function(){return process.nextTick(f)}:c?(u=0,h=new c(f),m=document.createTextNode(""),h.observe(m,{characterData:!0}),function(){m.data=u=++u%2}):l?((g=new MessageChannel).port1.onmessage=f,function(){return g.port2.postMessage(0)}):void 0===a?function(){try{var n=Function("return this")().require("vertx");return void 0!==(A=n.runOnLoop||n.runOnContext)?function(){A(f)}:d()}catch(n){return d()}}():d();var b=Math.random().toString(36).substring(2);function _(){}var w=void 0,y=1,v=2;function k(r,t,e){t.constructor===r.constructor&&e===x&&t.constructor.resolve===B?function(n,r){r._state===y?S(n,r._result):r._state===v?W(n,r._result):Z(r,void 0,(function(r){return Y(n,r)}),(function(r){return W(n,r)}))}(r,t):void 0===e?S(r,t):n(e)?function(n,r,t){i((function(n){var e=!1,A=function(n,r,t,e){try{n.call(r,t,e)}catch(n){return n}}(t,r,(function(t){e||(e=!0,r!==t?Y(n,t):S(n,t))}),(function(r){e||(e=!0,W(n,r))}),n._label);!e&&A&&(e=!0,W(n,A))}),n)}(r,t,e):S(r,t)}function Y(n,r){if(n===r)W(n,new TypeError("You cannot resolve a promise with itself"));else if(A=typeof(e=r),null===e||"object"!==A&&"function"!==A)S(n,r);else{var t=void 0;try{t=r.then}catch(r){return void W(n,r)}k(n,r,t)}var e,A}function z(n){n._onerror&&n._onerror(n._result),E(n)}function S(n,r){n._state===w&&(n._result=r,n._state=y,0!==n._subscribers.length&&i(E,n))}function W(n,r){n._state===w&&(n._state=v,n._result=r,i(z,n))}function Z(n,r,t,e){var A=n._subscribers,o=A.length;n._onerror=null,A[o]=r,A[o+y]=t,A[o+v]=e,0===o&&n._state&&i(E,n)}function E(n){var r=n._subscribers,t=n._state;if(0!==r.length){for(var e=void 0,A=void 0,o=n._result,i=0;i<r.length;i+=3)e=r[i],A=r[i+t],e?M(t,e,A,o):A(o);n._subscribers.length=0}}function M(r,t,e,A){var o=n(e),i=void 0,a=void 0,s=!0;if(o){try{i=e(A)}catch(n){s=!1,a=n}if(t===i)return void W(t,new TypeError("A promises callback cannot return that same promise."))}else i=A;t._state!==w||(o&&s?Y(t,i):!1===s?W(t,a):r===y?S(t,i):r===v&&W(t,i))}var j=0;function L(n){n[b]=j++,n._state=void 0,n._result=void 0,n._subscribers=[]}var U=function(){function n(n,t){this._instanceConstructor=n,this.promise=new n(_),this.promise[b]||L(this.promise),r(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&S(this.promise,this._result))):W(this.promise,new Error("Array Methods must be provided an Array"))}return n.prototype._enumerate=function(n){for(var r=0;this._state===w&&r<n.length;r++)this._eachEntry(n[r],r)},n.prototype._eachEntry=function(n,r){var t=this._instanceConstructor,e=t.resolve;if(e===B){var A=void 0,o=void 0,i=!1;try{A=n.then}catch(n){i=!0,o=n}if(A===x&&n._state!==w)this._settledAt(n._state,r,n._result);else if("function"!=typeof A)this._remaining--,this._result[r]=n;else if(t===q){var a=new t(_);i?W(a,o):k(a,n,A),this._willSettleAt(a,r)}else this._willSettleAt(new t((function(r){return r(n)})),r)}else this._willSettleAt(e(n),r)},n.prototype._settledAt=function(n,r,t){var e=this.promise;e._state===w&&(this._remaining--,n===v?W(e,t):this._result[r]=t),0===this._remaining&&S(e,this._result)},n.prototype._willSettleAt=function(n,r){var t=this;Z(n,void 0,(function(n){return t._settledAt(y,r,n)}),(function(n){return t._settledAt(v,r,n)}))},n}();var q=function(){function r(n){this[b]=j++,this._result=this._state=void 0,this._subscribers=[],_!==n&&("function"!=typeof n&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof r?function(n,r){try{r((function(r){Y(n,r)}),(function(r){W(n,r)}))}catch(r){W(n,r)}}(this,n):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return r.prototype.catch=function(n){return this.then(null,n)},r.prototype.finally=function(r){var t=this,e=t.constructor;return n(r)?t.then((function(n){return e.resolve(r()).then((function(){return n}))}),(function(n){return e.resolve(r()).then((function(){throw n}))})):t.then(r,r)},r}();return q.prototype.then=x,q.all=function(n){return new U(this,n).promise},q.race=function(n){var t=this;return r(n)?new t((function(r,e){for(var A=n.length,o=0;o<A;o++)t.resolve(n[o]).then(r,e)})):new t((function(n,r){return r(new TypeError("You must pass an array to race."))}))},q.resolve=B,q.reject=function(n){var r=new this(_);return W(r,n),r},q._setScheduler=function(n){o=n},q._setAsap=function(n){i=n},q._asap=i,q.polyfill=function(){var n=void 0;if(void 0!==t.g)n=t.g;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=n.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(n){}if("[object Promise]"===e&&!r.cast)return}n.Promise=q},q.Promise=q,q}()},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(n,r){r=r||window;for(var t=0;t<this.length;t++)n.call(r,this[t],t,this)})},379:function(n){"use strict";var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var o={},i=[],a=0;a<n.length;a++){var s=n[a],c=e.base?s[0]+e.base:s[0],p=o[c]||0,l="".concat(c," ").concat(p);o[c]=p+1;var d=t(l),C={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(C);else{var f=A(C,e);e.byIndex=a,r.splice(a,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function A(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,A){var o=e(n=n||[],A=A||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var a=t(o[i]);r[a].references--}for(var s=e(n,A),c=0;c<o.length;c++){var p=t(o[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}o=s}}},569:function(n){"use strict";var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:function(n){"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:function(n,r,t){"use strict";n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:function(n){"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var A=void 0!==t.layer;A&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,A&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:function(n){"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},754:function(n,r,t){"use strict";n.exports=t.p+"11bc466dd815695d241d.svg"}},r={};function t(e){var A=r[e];if(void 0!==A)return A.exports;var o=r[e]={id:e,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.exports}t.m=n,t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,{a:r}),r},t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},function(){var n;t.g.importScripts&&(n=t.g.location+"");var r=t.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");if(e.length)for(var A=e.length-1;A>-1&&!n;)n=e[A--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n}(),t.b=document.baseURI||self.location.href,t.nc=void 0,function(){"use strict";var n=t(379),r=t.n(n),e=t(795),A=t.n(e),o=t(569),i=t.n(o),a=t(565),s=t.n(a),c=t(216),p=t.n(c),l=t(589),d=t.n(l),C=t(170),f={};f.styleTagTransform=d(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=p(),r()(C.Z,f),C.Z&&C.Z.locals&&C.Z.locals,t(746);function g(n){const r=document.querySelector(n);r.classList.add("hide"),r.classList.remove("show"),document.body.style.overflow=""}function u(n,r){const t=document.querySelector(n);t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",r&&clearInterval(r)}t(702).polyfill(),window.addEventListener("DOMContentLoaded",(function(){const n=setTimeout((()=>u(".modal",n)),2e4);(function(n,r,t,e){let A=document.querySelectorAll(n),o=document.querySelectorAll(r),i=document.querySelector(t);function a(){o.forEach((n=>{n.classList.add("hide"),n.classList.remove("show","fade")})),A.forEach((n=>{n.classList.remove(e)}))}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;o[n].classList.add("show","fade"),o[n].classList.remove("hide"),A[n].classList.add(e)}a(),s(),i.addEventListener("click",(function(r){const t=r.target;t&&t.classList.contains(n.slice(1))&&A.forEach(((n,r)=>{t==n&&(a(),s(r))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,r,t){const e=document.querySelectorAll(n),A=document.querySelector(r);e.forEach((n=>{n.addEventListener("click",(()=>u(r,t)))})),A.addEventListener("click",(n=>{n.target!==A&&""!=n.target.getAttribute("data-close")||g(r)})),document.addEventListener("keydown",(n=>{"Escape"===n.code&&A.classList.contains("show")&&g(r)})),window.addEventListener("scroll",(function n(){window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight+1&&(u(r,t),window.removeEventListener("scroll",n))}))}("[data-modal]",".modal",n),function(n,r){function t(n){return n>=0&&n<10?"0"+n:n}!function(n,r){const e=document.querySelector(n),A=e.querySelector("#days"),o=e.querySelector("#hours"),i=e.querySelector("#minutes"),a=e.querySelector("#seconds"),s=setInterval(c,1e3);function c(){const n=function(n){const r=Date.parse(n)-Date.parse(new Date),t=Math.floor(r/864e5),e=Math.floor(r/1e3%60),A=Math.floor(r/1e3/60%60);return{total:r,days:t,hours:Math.floor(r/36e5%24),minutes:A,seconds:e}}(r);A.innerHTML=t(n.days),o.innerHTML=t(n.hours),i.innerHTML=t(n.minutes),a.innerHTML=t(n.seconds),n.total<=0&&clearInterval(s)}c()}(n,r)}(".timer","2023-10-30"),function(){class n{constructor(n,r,t,e,A,o){this.src=n,this.alt=r,this.title=t,this.descr=e,this.price=A;for(var i=arguments.length,a=new Array(i>6?i-6:0),s=6;s<i;s++)a[s-6]=arguments[s];this.classes=a,this.parent=document.querySelector(o)}render(){const n=document.createElement("div");0===this.classes.length?(this.classes="menu__item",n.classList.add(this.classes)):this.classes.forEach((r=>n.classList.add(r))),n.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Price:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> $/day</div>\n                </div>\n            `,this.parent.append(n)}}(async function(n){let r=await fetch(n);if(!r.ok)throw new Error(`Could not fetch ${n}, status: ${r.status}`);return await r.json()})("http://localhost:3000/menu").then((r=>{r.forEach((r=>{let{img:t,altimg:e,title:A,descr:o,price:i}=r;new n(t,e,A,o,i,".menu .container").render()}))}))}(),function(){const n=document.querySelector(".calculating__result span");let r,t,e,A,o;function i(){n.textContent=r&&t&&e&&A&&o?"female"===r?Math.round((447.6+9.2*e+3.1*t-4.3*A)*o):Math.round((88.36+13.4*e+4.8*t-5.7*A)*o):"____"}function a(n,r){document.querySelectorAll(n).forEach((n=>{n.classList.remove(r),n.getAttribute("id")===localStorage.getItem("sex")&&n.classList.add(r),n.getAttribute("data-ratio")===localStorage.getItem("ratio")&&n.classList.add(r)}))}function s(n,t){const e=document.querySelectorAll(n);e.forEach((n=>{n.addEventListener("click",(n=>{n.target.getAttribute("data-ratio")?(o=+n.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+n.target.getAttribute("data-ratio"))):(r=n.target.getAttribute("id"),localStorage.setItem("sex",n.target.getAttribute("id"))),e.forEach((n=>{n.classList.remove(t)})),n.target.classList.add(t),i()}))}))}function c(n){const r=document.querySelector(n);r.addEventListener("input",(()=>{switch(r.value.match(/\D/g)?r.style.boxShadow="5px 0px 25px 0px rgba(255, 0, 0, 0.5)":r.style.boxShadow="none",r.getAttribute("id")){case"height":t=+r.value;break;case"weight":e=+r.value;break;case"age":A=+r.value}i()}))}localStorage.getItem("sex")?r=localStorage.getItem("sex"):(r="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?o=localStorage.getItem("ratio"):(o=1.375,localStorage.setItem("ratio",1.375)),i(),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),c("#height"),c("#weight"),c("#age")}(),function(n,r){function t(n){const t=document.querySelector(".modal__dialog");t.classList.add("hide"),u(".modal",r);const e=document.createElement("div");e.classList.add("modal__dialog"),e.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(e),setTimeout((()=>{e.remove(),t.classList.add("show"),t.classList.remove("hide"),g(".modal")}),4e3)}document.querySelectorAll(n).forEach((n=>{var r;(r=n).addEventListener("submit",(n=>{n.preventDefault();let e=document.createElement("img");e.src="img/form/spinner.svg",e.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",r.insertAdjacentElement("afterend",e);const A=new FormData(r);(async(n,r)=>{let t=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:r});return await t.json()})(0,JSON.stringify(Object.fromEntries(A.entries()))).then((n=>{console.log(n),t("Thanks! We will contact you soon"),e.remove()})).catch((()=>{t("Something went wrong...")})).finally((()=>{r.reset()}))}))}))}("form",n),function(n){let{container:r,slide:t,nextArrow:e,prevArrow:A,totalCounter:o,currentCounter:i,wrapper:a,field:s}=n,c=0,p=1;const l=document.querySelectorAll(t),d=document.querySelector(r),C=document.querySelector(A),f=document.querySelector(e),g=document.querySelector(o),u=document.querySelector(i),h=document.querySelector(a),m=window.getComputedStyle(h).width,G=document.querySelector(s);l.length<10?(g.textContent=`0${l.length}`,u.textContent=`0${p}`):(g.textContent=l.length,u.textContent=p),G.style.width=100*l.length+"%",G.style.display="flex",G.style.transition="0.5s all",h.style.overflow="hidden",l.forEach((n=>{n.style.width=m})),d.style.position="relative";const x=document.createElement("ol"),B=[];x.classList.add("carousel-indicators"),x.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",d.append(x);for(let n=0;n<l.length;n++){const r=document.createElement("li");r.setAttribute("data-slide-to",n+1),r.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0==n&&(r.style.opacity=1),x.append(r),B.push(r)}function b(n){return+n.replace(/\D/g,"")}f.addEventListener("click",(()=>{c==b(m)*(l.length-1)?c=0:c+=b(m),G.style.transform=`translateX(-${c}px)`,p==l.length?p=1:p++,l.length<10?u.textContent=`0${p}`:u.textContent=p,B.forEach((n=>n.style.opacity=".5")),B[p-1].style.opacity=1})),C.addEventListener("click",(()=>{0==c?c=b(m)*(l.length-1):c-=b(m),G.style.transform=`translateX(-${c}px)`,1==p?p=l.length:p--,l.length<10?u.textContent=`0${p}`:u.textContent=p,B.forEach((n=>n.style.opacity=".5")),B[p-1].style.opacity=1})),B.forEach((n=>{n.addEventListener("click",(n=>{const r=n.target.getAttribute("data-slide-to");p=r,c=b(m)*(r-1),G.style.transform=`translateX(-${c}px)`,l.length<10?u.textContent=`0${p}`:u.textContent=p,B.forEach((n=>n.style.opacity=".5")),B[p-1].style.opacity=1}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}()}();
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
    const result = document.querySelector('.calculating__result span');
    
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); 
        }

        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function forms(formsSelector, modalTimerId) {
    const forms = document.querySelectorAll(formsSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
        }, 4000);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}) {
    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector(field);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent =  `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent =  slideIndex;
    }
    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `; 
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width); 
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent =  `0${slideIndex}`;
            } else {
                current.textContent =  slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        });
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	let tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
        const target = event.target;
		if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");









window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])('.modal', modalTimerId), 50000);

    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2020-06-11');
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId);
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}




/***/ })

/******/ });
>>>>>>> 350eb14 (Add files via upload)
//# sourceMappingURL=bundle.js.map