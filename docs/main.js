(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"todoary","version":"1.3.1","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^7.2.11","@angular/cdk":"^7.3.6","@angular/common":"^7.2.11","@angular/compiler":"^7.2.11","@angular/core":"^7.2.11","@angular/forms":"^7.2.11","@angular/http":"^7.2.11","@angular/material":"^7.3.6","@angular/platform-browser":"^7.2.11","@angular/platform-browser-dynamic":"^7.2.11","@angular/router":"^7.2.11","core-js":"^2.6.5","pouchdb":"^6.3.4","rxjs":"^6.4.0","rxjs-compat":"^6.0.0-rc.0","typescript":"^3.2.4","zone.js":"^0.8.29"},"devDependencies":{"@angular-devkit/build-angular":"^0.13.6","@angular/cli":"^7.3.6","@angular/compiler-cli":"^7.2.11","@angular/language-service":"^7.2.11","@types/jasmine":"^3.3.12","@types/jasminewd2":"~2.0.6","@types/node":"^10.12.30","codelyzer":"~4.5.0","jasmine-core":"~3.3.0","jasmine-spec-reporter":"~4.2.1","karma":"^4.0.1","karma-chrome-launcher":"~2.2.0","karma-cli":"~2.0.0","karma-coverage-istanbul-reporter":"^2.0.5","karma-jasmine":"~2.0.1","karma-jasmine-html-reporter":"^1.4.0","protractor":"~5.4.2","ts-node":"^8.0.3","tslint":"~5.12.1"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <ta-diary></ta-diary>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ta-diary {\n  display: block;\n  min-width: 600px;\n  max-width: 1040px;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YS1kaWFyeSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ta';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tododiary_diary_diary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tododiary/diary/diary.component */ "./src/app/tododiary/diary/diary.component.ts");
/* harmony import */ var _entry_diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry/diary-entry/diary-entry.component */ "./src/app/entry/diary-entry/diary-entry.component.ts");
/* harmony import */ var _ta_custom_material_ta_custom_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ta-custom-material/ta-custom-material.module */ "./src/app/ta-custom-material/ta-custom-material.module.ts");
/* harmony import */ var _entry_create_entry_create_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entry/create-entry/create-entry.component */ "./src/app/entry/create-entry/create-entry.component.ts");
/* harmony import */ var _todo_todos_todo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todos/todo.service */ "./src/app/todo/todos/todo.service.ts");
/* harmony import */ var _todo_todos_todo_entry_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todos/todo-entry.service */ "./src/app/todo/todos/todo-entry.service.ts");
/* harmony import */ var _entry_entry_headline_entry_headline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entry/entry-headline/entry-headline.component */ "./src/app/entry/entry-headline/entry-headline.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _importexport_export_button_export_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./importexport/export-button/export-button.component */ "./src/app/importexport/export-button/export-button.component.ts");
/* harmony import */ var _tododiary_entries_entry_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tododiary/entries/entry.service */ "./src/app/tododiary/entries/entry.service.ts");
/* harmony import */ var _tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tododiary/database/database.service */ "./src/app/tododiary/database/database.service.ts");
/* harmony import */ var _todo_todo_entry_editable_todo_entry_editable_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo/todo-entry-editable/todo-entry-editable.component */ "./src/app/todo/todo-entry-editable/todo-entry-editable.component.ts");
/* harmony import */ var _todo_todo_entry_readmode_todo_entry_readmode_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./todo/todo-entry-readmode/todo-entry-readmode.component */ "./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logger */ "./src/app/logger.ts");
/* harmony import */ var _todo_create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todo/create-todo/create-todo.component */ "./src/app/todo/create-todo/create-todo.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _entry_delete_diary_entry_dialog_delete_diary_entry_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component */ "./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _categories_category_header_category_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./categories/category-header/category-header.component */ "./src/app/categories/category-header/category-header.component.ts");
/* harmony import */ var _categories_category_category_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./categories/category/category.service */ "./src/app/categories/category/category.service.ts");
/* harmony import */ var _categories_manage_categories_dialog_manage_categories_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./categories/manage-categories-dialog/manage-categories-dialog.component */ "./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.ts");
/* harmony import */ var _categories_manage_categories_button_manage_categories_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./categories/manage-categories-button/manage-categories-button.component */ "./src/app/categories/manage-categories-button/manage-categories-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_26__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























Object(_angular_common__WEBPACK_IMPORTED_MODULE_25__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_26___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _tododiary_diary_diary_component__WEBPACK_IMPORTED_MODULE_3__["DiaryComponent"],
                _entry_diary_entry_diary_entry_component__WEBPACK_IMPORTED_MODULE_4__["DiaryEntryComponent"],
                _entry_create_entry_create_entry_component__WEBPACK_IMPORTED_MODULE_6__["CreateEntryComponent"],
                _entry_entry_headline_entry_headline_component__WEBPACK_IMPORTED_MODULE_9__["EntryHeadlineComponent"],
                _importexport_export_button_export_button_component__WEBPACK_IMPORTED_MODULE_11__["ExportButtonComponent"],
                _todo_todo_entry_editable_todo_entry_editable_component__WEBPACK_IMPORTED_MODULE_14__["TodoEntryEditableComponent"],
                _todo_todo_entry_readmode_todo_entry_readmode_component__WEBPACK_IMPORTED_MODULE_15__["TodoEntryReadmodeComponent"],
                _todo_create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_17__["CreateTodoComponent"],
                _entry_delete_diary_entry_dialog_delete_diary_entry_dialog_component__WEBPACK_IMPORTED_MODULE_19__["DeleteDiaryEntryDialogComponent"],
                _categories_category_header_category_header_component__WEBPACK_IMPORTED_MODULE_21__["CategoryHeaderComponent"],
                _categories_manage_categories_dialog_manage_categories_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ManageCategoriesDialogComponent"],
                _categories_manage_categories_button_manage_categories_button_component__WEBPACK_IMPORTED_MODULE_24__["ManageCategoriesButtonComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_25__["CommonModule"],
                _ta_custom_material_ta_custom_material_module__WEBPACK_IMPORTED_MODULE_5__["TaCustomMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            ],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'de' }, _todo_todos_todo_service__WEBPACK_IMPORTED_MODULE_7__["TodoService"], _todo_todos_todo_entry_service__WEBPACK_IMPORTED_MODULE_8__["TodoEntryService"], _tododiary_entries_entry_service__WEBPACK_IMPORTED_MODULE_12__["DiaryEntryService"], _tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_13__["DatabaseService"],
                _logger__WEBPACK_IMPORTED_MODULE_16__["Logger"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], _categories_category_category_service__WEBPACK_IMPORTED_MODULE_22__["CategoryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_entry_delete_diary_entry_dialog_delete_diary_entry_dialog_component__WEBPACK_IMPORTED_MODULE_19__["DeleteDiaryEntryDialogComponent"], _categories_manage_categories_dialog_manage_categories_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ManageCategoriesDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/category-header/category-header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/categories/category-header/category-header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngClass]=\"{'is-collapsed': category.collapsed}\">\r\n  <span class=\"name\">{{category.name}}</span>\r\n  <span class=\"border\">\r\n    <span class=\"todo_count\">({{category.todos.length}})</span>\r\n    <span (click)=\"switchVisibility()\" class=\"button\">\r\n      <mat-icon>keyboard_arrow_up</mat-icon>\r\n    </span>\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/categories/category-header/category-header.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/categories/category-header/category-header.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space {\n  flex: 1; }\n\n.explanation {\n  margin-bottom: 1em;\n  font-size: 11pt;\n  color: #cacaca; }\n\n.header {\n  font: 14pt \"Alegreya\", serif;\n  color: #99b7e2;\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  padding-top: 0.2em; }\n\n.header .name {\n    grid-column: 1; }\n\n.header .border {\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: -webkit-max-content 1fr -webkit-max-content;\n    grid-template-columns: max-content 1fr max-content;\n    margin-left: -10px;\n    margin-right: 10px;\n    border-bottom: 1px solid rgba(153, 183, 226, 0.5); }\n\n.header .todo_count {\n    grid-column: 1;\n    margin-left: 20px;\n    visibility: hidden; }\n\n.header .button {\n    grid-column: 2;\n    cursor: pointer;\n    align-self: center;\n    justify-self: end; }\n\n.header .button mat-icon {\n      -webkit-animation: flipDown 0.2s;\n              animation: flipDown 0.2s; }\n\n.header.is-collapsed .button mat-icon {\n    -webkit-animation: flipUp forwards 0.2s;\n            animation: flipUp forwards 0.2s; }\n\n.header.is-collapsed .todo_count {\n    visibility: visible;\n    -webkit-animation: bounceIn 0.2s;\n            animation: bounceIn 0.2s; }\n\n@-webkit-keyframes flipUp {\n  0% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg); }\n  100% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg); } }\n\n@keyframes flipUp {\n  0% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg); }\n  100% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg); } }\n\n@-webkit-keyframes flipDown {\n  0% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg); }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg); } }\n\n@keyframes flipDown {\n  0% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg); }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yeS1oZWFkZXIvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGRpYWxvZ3Muc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yeS1oZWFkZXIvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3J5LWhlYWRlci9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhcHBcXGNhdGVnb3JpZXNcXGNhdGVnb3J5LWhlYWRlclxcY2F0ZWdvcnktaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsT0FBTyxFQUFBOztBQUdUO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQ0RrQixFQUFBOztBQ0xwQjtFQUNFLDRCREZxQztFQ0dyQyxjREVzQjtFQ0R0QixhQUFhO0VBQ2IsOENBQXNDO0VBQXRDLHNDQUFzQztFQUN0QyxrQkFBa0IsRUFBQTs7QUFMcEI7SUFRSSxjQUFjLEVBQUE7O0FBUmxCO0lBWUksY0FBYztJQUNkLGFBQWE7SUFDYixrRUFBa0Q7SUFBbEQsa0RBQWtEO0lBQ2xELGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUREYm9CLEVBQUE7O0FDSnhCO0lBcUJJLGNBQWM7SUFDZCxpQkFBaUI7SUFFakIsa0JBQWtCLEVBQUE7O0FBeEJ0QjtJQTRCSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTs7QUEvQnJCO01Ba0NNLGdDQUF3QjtjQUF4Qix3QkFBd0IsRUFBQTs7QUFsQzlCO0lBeUNRLHVDQUErQjtZQUEvQiwrQkFBK0IsRUFBQTs7QUF6Q3ZDO0lBOENNLG1CQUFtQjtJQUNuQixnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7O0FBSzlCO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEsRUFBQTs7QUFMOUI7RUFDRTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSxFQUFBOztBQUk5QjtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQUE7O0FBTDVCO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcnktaGVhZGVyL2NhdGVnb3J5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uc3BhY2Uge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5leHBsYW5hdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMTFwdDtcclxuICBjb2xvcjogJGNvbG9yX2luZm87XHJcbn1cclxuIiwiJGJvcmRlcl9yYWRpdXM6IDAuOGVtO1xyXG5cclxuJGZvbnRfZmFjZV9oaWdobGlnaHQ6ICdBbGVncmV5YScsIHNlcmlmO1xyXG5cclxuJGZvbnRfc2l6ZV9oZWFkaW5nOiAyNHB4O1xyXG5cclxuJGNvbG9yX2hlYWRsaW5lczogIzlkOWQ5ZDtcclxuJGNvbG9yX3N1YnRpdGxlOiAjOTliN2UyO1xyXG4kY29sb3JfaW5mbzogI2NhY2FjYTtcclxuJGNvbG9yX2ljb25zOiAjNWI3NWE3O1xyXG5cclxuJGNvbG9yX2luZGljYXRvcl9uZXc6ICRjb2xvcl9zdWJ0aXRsZTtcclxuJGNvbG9yX2luZGljYXRvcl9tb3ZlZDogJGNvbG9yX2hlYWRsaW5lcztcclxuXHJcbiRjb2xvcl9iYWNrZ3JvdW5kOiAjZGNlMmVjO1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZGlhbG9ncyc7XHJcblxyXG4uaGVhZGVyIHtcclxuICBmb250OiAxNHB0ICRmb250X2ZhY2VfaGlnaGxpZ2h0O1xyXG4gIGNvbG9yOiAkY29sb3Jfc3VidGl0bGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcclxuICBwYWRkaW5nLXRvcDogMC4yZW07XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlciB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvcl9zdWJ0aXRsZSwgMC41KTtcclxuICB9XHJcblxyXG4gIC50b2RvX2NvdW50IHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgYW5pbWF0aW9uOiBmbGlwRG93biAwLjJzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5pcy1jb2xsYXBzZWQge1xyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBhbmltYXRpb246IGZsaXBVcCBmb3J3YXJkcyAwLjJzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZG9fY291bnQge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBhbmltYXRpb246IGJvdW5jZUluIDAuMnM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsaXBVcCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpXHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZylcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxpcERvd24ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpXHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpXHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/categories/category-header/category-header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/categories/category-header/category-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryHeaderComponent", function() { return CategoryHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category/category */ "./src/app/categories/category/category.ts");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category/category.service */ "./src/app/categories/category/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryHeaderComponent = /** @class */ (function () {
    function CategoryHeaderComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryHeaderComponent.prototype.ngOnInit = function () {
    };
    CategoryHeaderComponent.prototype.switchVisibility = function () {
        this.categoryService.changeCategoryCollapsedState(this.category, !this.category.collapsed);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _category_category__WEBPACK_IMPORTED_MODULE_1__["Category"])
    ], CategoryHeaderComponent.prototype, "category", void 0);
    CategoryHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-category-header',
            template: __webpack_require__(/*! ./category-header.component.html */ "./src/app/categories/category-header/category-header.component.html"),
            styles: [__webpack_require__(/*! ./category-header.component.scss */ "./src/app/categories/category-header/category-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryHeaderComponent);
    return CategoryHeaderComponent;
}());



/***/ }),

/***/ "./src/app/categories/category/category.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/category/category.service.ts ***!
  \*********************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/app/categories/category/category.ts");
/* harmony import */ var _tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tododiary/database/database.service */ "./src/app/tododiary/database/database.service.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logger */ "./src/app/logger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(databaseService, logger) {
        this.databaseService = databaseService;
        this.logger = logger;
    }
    CategoryService.prototype.createNewCategory = function (name) {
        if (name) {
            var category = new _category__WEBPACK_IMPORTED_MODULE_1__["Category"](name);
            return this.databaseService.createNewCategory(category);
        }
        else {
            this.logger.warn("createNewCategory was called without name. do nothing.");
        }
    };
    CategoryService.prototype.changeCategoryCollapsedState = function (category, newState) {
        var _this = this;
        category.collapsed = newState;
        if (!category) {
            this.logger.warn("changeCategoryCollapsedState got called without category. do nothing.");
            return;
        }
        return this.databaseService.getCategoriesWithTodos().then(function (categories) {
            var categoryToUpdate = categories.find(function (cat) { return cat.name === category.name; });
            if (!categoryToUpdate) {
                _this.logger.error('changeCategoryCollapsedState: Could not find category to update. Abort. ' + category);
                return;
            }
            categoryToUpdate.collapsed = newState;
            return _this.databaseService.updateCategoriesWithTodos(categories);
        });
    };
    CategoryService.prototype.getCategories = function () {
        return this.databaseService.getCategoriesWithTodos();
    };
    CategoryService.prototype.setCategories = function (newCategories) {
        var _this = this;
        var isDefaultIncluded = newCategories.find(function (cat) { return cat.default; });
        if (!isDefaultIncluded) {
            return this.databaseService.getCategoriesWithTodos().then(function (categoriesFromDb) {
                newCategories.unshift(categoriesFromDb.find(function (cat) { return cat.default; }));
                return _this.databaseService.updateCategoriesWithTodos(newCategories);
            });
        }
        else {
            return this.databaseService.updateCategoriesWithTodos(newCategories);
        }
    };
    CategoryService.prototype.deleteCategoriesAndPreserveTodos = function (categoriesToDelete) {
        var _this = this;
        if (!categoriesToDelete) {
            this.logger.warn("deleteCategoryAndPreserveTodos got called without category. do nothing.");
            return;
        }
        return this.databaseService.getCategoriesWithTodos().then(function (categoriesFromDb) {
            var defaultCategory = categoriesFromDb.find(function (cat) { return cat.default; });
            categoriesToDelete.forEach(function (category) {
                var categoryToDelete = categoriesFromDb.find(function (cat) { return cat.name === category.name; });
                if (!categoryToDelete) {
                    _this.logger.error('deleteCategoryAndPreserveTodos: Could not find category to update. Abort. ' + category);
                    return;
                }
                _this.logger.info("Adding todos (" + categoryToDelete.todos.length + ") of deleted category\n         '" + categoryToDelete.name + "' to default category ...");
                defaultCategory.todos = defaultCategory.todos.concat(categoryToDelete.todos);
                categoriesFromDb.splice(categoriesFromDb.indexOf(categoryToDelete), 1);
            });
            return _this.databaseService.updateCategoriesWithTodos(categoriesFromDb);
        });
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/categories/category/category.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/category/category.ts ***!
  \*************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(name) {
        this.name = name;
        this.todos = [];
        this.collapsed = false;
        this.default = false;
        this.created = Date.now();
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/categories/manage-categories-button/manage-categories-button.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/categories/manage-categories-button/manage-categories-button.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon (click)=\"manageCategories()\" matTooltip=\"Manage Categories\">folder</mat-icon>\r\n"

/***/ }),

/***/ "./src/app/categories/manage-categories-button/manage-categories-button.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/categories/manage-categories-button/manage-categories-button.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvbWFuYWdlLWNhdGVnb3JpZXMtYnV0dG9uL21hbmFnZS1jYXRlZ29yaWVzLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/categories/manage-categories-button/manage-categories-button.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/categories/manage-categories-button/manage-categories-button.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManageCategoriesButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCategoriesButtonComponent", function() { return ManageCategoriesButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category/category.service */ "./src/app/categories/category/category.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _manage_categories_dialog_manage_categories_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manage-categories-dialog/manage-categories-dialog.component */ "./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageCategoriesButtonComponent = /** @class */ (function () {
    function ManageCategoriesButtonComponent(dialog, categoryService) {
        this.dialog = dialog;
        this.categoryService = categoryService;
    }
    ManageCategoriesButtonComponent.prototype.ngOnInit = function () {
    };
    ManageCategoriesButtonComponent.prototype.manageCategories = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_manage_categories_dialog_manage_categories_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ManageCategoriesDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (categories) {
            if (!categories) {
                return;
            }
            _this.categoryService.setCategories(categories).then(function () {
                var categoriesForDeletion = categories.filter(function (cat) { return cat.markedAsDeleted; });
                if (categoriesForDeletion.length > 0) {
                    _this.categoryService.deleteCategoriesAndPreserveTodos(categoriesForDeletion);
                }
            });
        });
    };
    ManageCategoriesButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-manage-categories-button',
            template: __webpack_require__(/*! ./manage-categories-button.component.html */ "./src/app/categories/manage-categories-button/manage-categories-button.component.html"),
            styles: [__webpack_require__(/*! ./manage-categories-button.component.scss */ "./src/app/categories/manage-categories-button/manage-categories-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _category_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], ManageCategoriesButtonComponent);
    return ManageCategoriesButtonComponent;
}());



/***/ }),

/***/ "./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Manage Categories</h2>\r\n<form>\r\n  <mat-dialog-content>\r\n\r\n    <div class=\"explanation\">\r\n      Manage your categories by creating, deleting and resorting them.\r\n      Todos of deleted categories will be added to the root.\r\n    </div>\r\n    <div *ngIf=\"!categories || categories.length === 0\">You have no categories yet. Create some and let them help you to organize your todos.\r\n    </div>\r\n    <div class=\"category-list\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n      <div class=\"category dragable\" *ngFor=\"let cat of categories\" cdkDrag [ngClass]=\"{'deleted': cat.markedAsDeleted}\">\r\n        <span class=\"name\">{{cat.name}}</span>\r\n        <div class=\"deleted_indicator indicator\" (click)=\"markAsDeleted(cat)\">\r\n          <mat-icon class=\"icon-button delete\">delete</mat-icon>\r\n          <mat-icon class=\"icon-button undo_delete\">replay</mat-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"category-create\">\r\n      <mat-form-field flex>\r\n        <input matInput name=\"text\" placeholder=\"New Category\" [(ngModel)]=\"newCategoryName\">\r\n      </mat-form-field>\r\n      <button mat-button [disabled]=\"!newCategoryName\" (click)=\"createNewCategory()\">\r\n        <mat-icon class=\"icon-button create\">add</mat-icon>\r\n      </button>\r\n    </div>\r\n  </mat-dialog-content>\r\n\r\n  <mat-dialog-actions>\r\n    <span class=\"space\"></span>\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"categories\" type=\"submit\">Ok</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space {\n  flex: 1; }\n\n.explanation {\n  margin-bottom: 1em;\n  font-size: 11pt;\n  color: #cacaca; }\n\n.space {\n  flex: 1; }\n\n.explanation {\n  margin-bottom: 1em;\n  font-size: 11pt;\n  color: #cacaca; }\n\n.dragable:hover {\n  cursor: move; }\n\n.cdk-drag-placeholder {\n  background: #eef2f7;\n  color: #9d9d9d;\n  display: block; }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.drag-preview {\n  display: block;\n  background: white;\n  padding: 3px; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.mat-dialog-content {\n  width: 350px; }\n\n.category, .category-create {\n  display: grid;\n  grid-template-columns: 1fr -webkit-min-content;\n  grid-template-columns: 1fr min-content;\n  margin-top: 0.5em;\n  padding: 5px; }\n\n.category .name {\n  grid-column: 1; }\n\n.category .indicator {\n  grid-column: 2;\n  visibility: hidden;\n  align-self: center;\n  cursor: pointer;\n  height: 24px; }\n\n.category .deleted_indicator .undo_delete {\n  display: none; }\n\n.category:hover {\n  background-color: #dce2ec; }\n\n.category:hover .indicator {\n    visibility: visible; }\n\n.deleted .name {\n  text-decoration: line-through;\n  color: #9d9d9d; }\n\n.deleted .deleted_indicator .delete {\n  display: none; }\n\n.deleted .deleted_indicator .undo_delete {\n  display: inherit;\n  -webkit-animation: rotateIn 0.15s linear;\n          animation: rotateIn 0.15s linear; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9tYW5hZ2UtY2F0ZWdvcmllcy1kaWFsb2cvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGRpYWxvZ3Muc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9tYW5hZ2UtY2F0ZWdvcmllcy1kaWFsb2cvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWVzL21hbmFnZS1jYXRlZ29yaWVzLWRpYWxvZy9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhc3NldHNcXHN0eWxlc1xcZHJhZ2FuZGRyb3Auc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9tYW5hZ2UtY2F0ZWdvcmllcy1kaWFsb2cvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXBwXFxjYXRlZ29yaWVzXFxtYW5hZ2UtY2F0ZWdvcmllcy1kaWFsb2dcXG1hbmFnZS1jYXRlZ29yaWVzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLE9BQU8sRUFBQTs7QUFHVDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0NEa0IsRUFBQTs7QUROcEI7RUFDRSxPQUFPLEVBQUE7O0FBR1Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNDRGtCLEVBQUE7O0FDTnBCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBOztBQ2xCeEQ7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsOENBQXNDO0VBQXRDLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdkO0VBRUksY0FBYyxFQUFBOztBQUZsQjtFQU1JLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFFZixZQUFZLEVBQUE7O0FBWGhCO0VBZUksYUFBYSxFQUFBOztBQWZqQjtFQW1CSSx5QkZyQnNCLEVBQUE7O0FFRTFCO0lBc0JNLG1CQUFtQixFQUFBOztBQUt6QjtFQUdJLDZCQUE2QjtFQUM3QixjQUFjLEVBQUE7O0FBSmxCO0VBUUksYUFBYSxFQUFBOztBQVJqQjtFQVlJLGdCQUFnQjtFQUNoQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL21hbmFnZS1jYXRlZ29yaWVzLWRpYWxvZy9tYW5hZ2UtY2F0ZWdvcmllcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLnNwYWNlIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZXhwbGFuYXRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBmb250LXNpemU6IDExcHQ7XHJcbiAgY29sb3I6ICRjb2xvcl9pbmZvO1xyXG59XHJcbiIsIiRib3JkZXJfcmFkaXVzOiAwLjhlbTtcclxuXHJcbiRmb250X2ZhY2VfaGlnaGxpZ2h0OiAnQWxlZ3JleWEnLCBzZXJpZjtcclxuXHJcbiRmb250X3NpemVfaGVhZGluZzogMjRweDtcclxuXHJcbiRjb2xvcl9oZWFkbGluZXM6ICM5ZDlkOWQ7XHJcbiRjb2xvcl9zdWJ0aXRsZTogIzk5YjdlMjtcclxuJGNvbG9yX2luZm86ICNjYWNhY2E7XHJcbiRjb2xvcl9pY29uczogIzViNzVhNztcclxuXHJcbiRjb2xvcl9pbmRpY2F0b3JfbmV3OiAkY29sb3Jfc3VidGl0bGU7XHJcbiRjb2xvcl9pbmRpY2F0b3JfbW92ZWQ6ICRjb2xvcl9oZWFkbGluZXM7XHJcblxyXG4kY29sb3JfYmFja2dyb3VuZDogI2RjZTJlYztcclxuIiwiLy8gRHJhZyBhbmQgRHJvcCBTdHlsZXNcclxuXHJcbi5kcmFnYWJsZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlZWYyZjc7XHJcbiAgY29sb3I6ICM5ZDlkOWQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmRyYWctcHJldmlldyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9kaWFsb2dzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2RpYWxvZ3MnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2RyYWdhbmRkcm9wJztcclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLmNhdGVnb3J5LCAuY2F0ZWdvcnktY3JlYXRlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xyXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICAubmFtZSB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICB9XHJcblxyXG4gIC5pbmRpY2F0b3Ige1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZWRfaW5kaWNhdG9yIC51bmRvX2RlbGV0ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYmFja2dyb3VuZDtcclxuXHJcbiAgICAuaW5kaWNhdG9yIHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZWxldGVkIHtcclxuXHJcbiAgLm5hbWUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBjb2xvcjogIzlkOWQ5ZDtcclxuICB9XHJcblxyXG4gIC5kZWxldGVkX2luZGljYXRvciAuZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGVsZXRlZF9pbmRpY2F0b3IgLnVuZG9fZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZUluIDAuMTVzIGxpbmVhcjtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManageCategoriesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCategoriesDialogComponent", function() { return ManageCategoriesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category/category.service */ "./src/app/categories/category/category.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _category_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category/category */ "./src/app/categories/category/category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageCategoriesDialogComponent = /** @class */ (function () {
    function ManageCategoriesDialogComponent(dialogRef, categoryService) {
        this.dialogRef = dialogRef;
        this.categoryService = categoryService;
        this.newCategoryName = '';
    }
    ManageCategoriesDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().then(function (categories) {
            _this.categories = categories.filter(function (cat) { return !cat.default; });
        });
    };
    ManageCategoriesDialogComponent.prototype.createNewCategory = function () {
        var category = new _category_category__WEBPACK_IMPORTED_MODULE_4__["Category"](this.newCategoryName);
        this.categories.push(category);
        this.newCategoryName = '';
    };
    ManageCategoriesDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ManageCategoriesDialogComponent.prototype.markAsDeleted = function (category) {
        category.markedAsDeleted = !category.markedAsDeleted;
    };
    ManageCategoriesDialogComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.categories, event.previousIndex, event.currentIndex);
    };
    ManageCategoriesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-manage-categories-dialog',
            template: __webpack_require__(/*! ./manage-categories-dialog.component.html */ "./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.html"),
            styles: [__webpack_require__(/*! ./manage-categories-dialog.component.scss */ "./src/app/categories/manage-categories-dialog/manage-categories-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], ManageCategoriesDialogComponent);
    return ManageCategoriesDialogComponent;
}());



/***/ }),

/***/ "./src/app/entry/create-entry/create-entry.component.html":
/*!****************************************************************!*\
  !*** ./src/app/entry/create-entry/create-entry.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"createEntryContainer\">\r\n  <form name=\"createEntryForm\">\r\n    <div class=\"createEntry\">\r\n      <div class=\"header\">\r\n        Create a new Entry\r\n        <mat-icon (click)=\"cancel()\" class=\"cancel-button\">clear</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"content\" cdkDropListGroup>\r\n        <ta-entry-headline [title]='\"ToDos\"'></ta-entry-headline>\r\n        <div class=\"todos\" *ngFor=\"let category of todos\">\r\n          <ta-category-header [category]=\"category\" *ngIf=\"!category.default\"></ta-category-header>\r\n          <div class=\"category-content\" [ngClass]=\"{'collapsed': category.collapsed}\">\r\n            <div class=\"entries\" cdkDropList [cdkDropListData]=\"category.todos\"\r\n                 (cdkDropListDropped)=\"drop($event)\">\r\n              <div *ngIf=\"category.todos.length === 0\" class=\"hint\">\r\n                This category is empty.\r\n              </div>\r\n              <div class=\"dragable\" cdkDrag [cdkDragData]=\"todo\" *ngFor=\"let todo of category.todos\">\r\n                <ta-todo-entry-editable [todo]=\"todo\"></ta-todo-entry-editable>\r\n                <span *cdkDragPreview class=\"drag-preview\">{{todo.text}}</span>\r\n              </div>\r\n            </div>\r\n            <ta-create-todo (onSubmit)=\"addNewTodo($event)\" [category]=\"category\"></ta-create-todo>\r\n          </div>\r\n        </div>\r\n\r\n        <ta-entry-headline [title]='\"Notes\"'></ta-entry-headline>\r\n        <mat-form-field class=\"full-width notes\">\r\n        <textarea matInput name=\"notes\" [(ngModel)]=\"newEntry.notes\" #notes matTextareaAutosize matAutosizeMinRows=\"2\"\r\n                  matAutosizeMaxRows=\"7\"></textarea>\r\n          <mat-hint align=\"end\">{{notes.value.length}}</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <button class=\"submit-button\" color=\"primary\" (click)=\"submit()\" aria-label=\"Submit\" mat-mini-fab>\r\n      <mat-icon>save</mat-icon>\r\n    </button>\r\n  </form>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/entry/create-entry/create-entry.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/entry/create-entry/create-entry.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dragable:hover {\n  cursor: move; }\n\n.cdk-drag-placeholder {\n  background: #eef2f7;\n  color: #9d9d9d;\n  display: block; }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.drag-preview {\n  display: block;\n  background: white;\n  padding: 3px; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.full-width {\n  width: 100%; }\n\n.cancel-button {\n  cursor: pointer; }\n\n.createEntryContainer form {\n  display: grid;\n  grid-template-columns: 1fr 70px;\n  margin-bottom: 2em; }\n\n.submit-button {\n  grid-column: 2;\n  justify-self: center;\n  align-self: end;\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 20px;\n  background-color: #5b75a7; }\n\n.createEntry {\n  background-color: white;\n  grid-column: 1;\n  padding: 1em;\n  border-radius: 0.8em;\n  display: grid;\n  grid-template-rows: 50px 1fr; }\n\n.createEntry .header {\n    grid-row: 1;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    font: 24px \"Alegreya\", serif;\n    color: #9d9d9d; }\n\n.createEntry .header .cancel-button {\n      grid-column: 2;\n      justify-self: end;\n      align-self: start; }\n\n.createEntry .content {\n    grid-row: 2; }\n\n.createEntry .category-content {\n    margin: 1em;\n    margin-bottom: 0; }\n\n.collapsed {\n  display: none; }\n\n.entries.cdk-drop-list-dragging .dragable-todo:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnkvY3JlYXRlLWVudHJ5L0Q6XFxwcm9qZWt0ZVxcdG9kb2FyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxkcmFnYW5kZHJvcC5zY3NzIiwic3JjL2FwcC9lbnRyeS9jcmVhdGUtZW50cnkvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXBwXFxlbnRyeVxcY3JlYXRlLWVudHJ5XFxjcmVhdGUtZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VudHJ5L2NyZWF0ZS1lbnRyeS9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQsMEdBQXNELEVBQUE7O0FDcEJ4RDtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQ2RtQixFQUFBOztBRGlCckI7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUVkLFlBQVk7RUFDWixvQkMvQm1CO0VEaUNuQixhQUFhO0VBQ2IsNEJBQTRCLEVBQUE7O0FBUjlCO0lBV0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJDdENtQztJRHVDbkMsY0NuQ3FCLEVBQUE7O0FEb0J6QjtNQWtCTSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGlCQUFpQixFQUFBOztBQXBCdkI7SUF5QkksV0FBVyxFQUFBOztBQXpCZjtJQTZCSSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsYUFBYSxFQUFBOztBQUlmO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VudHJ5L2NyZWF0ZS1lbnRyeS9jcmVhdGUtZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEcmFnIGFuZCBEcm9wIFN0eWxlc1xyXG5cclxuLmRyYWdhYmxlOmhvdmVyIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgYmFja2dyb3VuZDogI2VlZjJmNztcclxuICBjb2xvcjogIzlkOWQ5ZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZHJhZy1wcmV2aWV3IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZHJhZ2FuZGRyb3AnO1xyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3JlYXRlRW50cnlDb250YWluZXIgZm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGVuZDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfaWNvbnM7XHJcbn1cclxuXHJcbi5jcmVhdGVFbnRyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcblxyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyX3JhZGl1cztcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcclxuICAgIGZvbnQ6ICRmb250X3NpemVfaGVhZGluZyAkZm9udF9mYWNlX2hpZ2hsaWdodDtcclxuICAgIGNvbG9yOiAkY29sb3JfaGVhZGxpbmVzO1xyXG5cclxuICAgIC5jYW5jZWwtYnV0dG9uIHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbGxhcHNlZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLy8gRHJhZyBhbmQgRHJvcCBTdHlsZXNcclxuLmVudHJpZXMuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZHJhZ2FibGUtdG9kbzpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiIsIiRib3JkZXJfcmFkaXVzOiAwLjhlbTtcclxuXHJcbiRmb250X2ZhY2VfaGlnaGxpZ2h0OiAnQWxlZ3JleWEnLCBzZXJpZjtcclxuXHJcbiRmb250X3NpemVfaGVhZGluZzogMjRweDtcclxuXHJcbiRjb2xvcl9oZWFkbGluZXM6ICM5ZDlkOWQ7XHJcbiRjb2xvcl9zdWJ0aXRsZTogIzk5YjdlMjtcclxuJGNvbG9yX2luZm86ICNjYWNhY2E7XHJcbiRjb2xvcl9pY29uczogIzViNzVhNztcclxuXHJcbiRjb2xvcl9pbmRpY2F0b3JfbmV3OiAkY29sb3Jfc3VidGl0bGU7XHJcbiRjb2xvcl9pbmRpY2F0b3JfbW92ZWQ6ICRjb2xvcl9oZWFkbGluZXM7XHJcblxyXG4kY29sb3JfYmFja2dyb3VuZDogI2RjZTJlYztcclxuIl19 */"

/***/ }),

/***/ "./src/app/entry/create-entry/create-entry.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/entry/create-entry/create-entry.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEntryComponent", function() { return CreateEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tododiary_entries_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tododiary/entries/entry */ "./src/app/tododiary/entries/entry.ts");
/* harmony import */ var _ta_custom_material_ta_custom_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ta-custom-material/ta-custom-material.module */ "./src/app/ta-custom-material/ta-custom-material.module.ts");
/* harmony import */ var _todo_todos_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../todo/todos/todo.service */ "./src/app/todo/todos/todo.service.ts");
/* harmony import */ var _todo_todos_todo_entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../todo/todos/todo-entry */ "./src/app/todo/todos/todo-entry.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logger */ "./src/app/logger.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var CreateEntryComponent = /** @class */ (function () {
    function CreateEntryComponent(todoService, logger, snackBar) {
        this.todoService = todoService;
        this.logger = logger;
        this.snackBar = snackBar;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newEntry = new _tododiary_entries_entry__WEBPACK_IMPORTED_MODULE_1__["Entry"]();
        this.todos = [];
    }
    CreateEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getOpenTodos().then(function (openTodos) {
            _this.todos = Object.assign(_this.todos, openTodos);
        });
    };
    CreateEntryComponent.prototype.submit = function () {
        var _this = this;
        this.updateOpenTodosAndRetrieveEntryTodos().then(function (_a) {
            var todosForEntry = _a.todosForEntry, showDismissedTodosHint = _a.showDismissedTodosHint;
            _this.newEntry.todos = todosForEntry;
            if (showDismissedTodosHint) {
                _this.snackBar.open('Todos that are created and deleted in one step are dismissed.', null, {
                    duration: 3500
                });
            }
            _this.onSubmit.emit(_this.newEntry);
        });
    };
    CreateEntryComponent.prototype.addNewTodo = function (event) {
        if (event) {
            var category = this.todos.find(function (cat) { return cat.name === event.category.name; });
            if (!category) {
                this.logger.error("could not find category given by event: " + event);
                return;
            }
            event.todo.isNew = true;
            category.todos.push(event.todo);
        }
        else {
            this.logger.debug('addNewTodo got called without todo. adding nothing.');
        }
    };
    CreateEntryComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        event.item.data.isMoved = true;
    };
    CreateEntryComponent.prototype.cancel = function () {
        this.onCancel.emit(null);
    };
    CreateEntryComponent.prototype.updateOpenTodosAndRetrieveEntryTodos = function () {
        return __awaiter(this, void 0, void 0, function () {
            function _sanitizeTodo(todo) {
                delete todo.isMoved;
                delete todo.isNew;
            }
            function _wasTodoDismissed(todo) {
                return todo.isNew && todo.status === _todo_todos_todo_entry__WEBPACK_IMPORTED_MODULE_4__["todoStatus"].DELETED;
            }
            function _addTodoToEntryIfNecessary(todo, category, entryTodos) {
                var copiedTodo = Object.assign({}, todo);
                // do not add newly created and instantly deleted todos to the entry or the openTodo list. Just discard them.
                if (todo.isNew && todo.status === _todo_todos_todo_entry__WEBPACK_IMPORTED_MODULE_4__["todoStatus"].DELETED) {
                    return false;
                }
                if (todo.status === _todo_todos_todo_entry__WEBPACK_IMPORTED_MODULE_4__["todoStatus"].OPEN && !(todo.isNew || todo.isMoved)) {
                    return false;
                }
                if (!category.default) {
                    copiedTodo.category = category.name;
                }
                entryTodos.push(copiedTodo);
                return true;
            }
            var serverTodoCategories, todosForEntry, showDismissedTodosHint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoService.getOpenTodos()];
                    case 1:
                        serverTodoCategories = _a.sent();
                        todosForEntry = [];
                        showDismissedTodosHint = false;
                        this.todos.forEach(function (category, indexCat) {
                            var newTodosForCategory = [];
                            category.todos.forEach(function (todo) {
                                _addTodoToEntryIfNecessary(todo, category, todosForEntry);
                                if (!showDismissedTodosHint) {
                                    showDismissedTodosHint = _wasTodoDismissed(todo);
                                }
                                _sanitizeTodo(todo);
                                if (todo.status === _todo_todos_todo_entry__WEBPACK_IMPORTED_MODULE_4__["todoStatus"].OPEN) {
                                    newTodosForCategory.push(todo);
                                }
                            });
                            console.log(newTodosForCategory);
                            serverTodoCategories[indexCat].todos = newTodosForCategory;
                        });
                        return [4 /*yield*/, this.todoService.updateOpenTodos(serverTodoCategories)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { todosForEntry: todosForEntry, showDismissedTodosHint: showDismissedTodosHint }];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateEntryComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateEntryComponent.prototype, "onCancel", void 0);
    CreateEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-create-entry',
            template: __webpack_require__(/*! ./create-entry.component.html */ "./src/app/entry/create-entry/create-entry.component.html"),
            providers: [_ta_custom_material_ta_custom_material_module__WEBPACK_IMPORTED_MODULE_2__["TaCustomMaterialModule"]],
            styles: [__webpack_require__(/*! ./create-entry.component.scss */ "./src/app/entry/create-entry/create-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [_todo_todos_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"], _logger__WEBPACK_IMPORTED_MODULE_5__["Logger"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], CreateEntryComponent);
    return CreateEntryComponent;
}());



/***/ }),

/***/ "./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Entry</h2>\r\n\r\n<mat-dialog-content>\r\n  Do you want to delete the entry from <span class=\"timestamp\">{{data.meta.timestamp | date:'short'}}</span>? This\r\n  cannot be undone.\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <span class=\"space\"></span>\r\n  <button mat-button mat-dialog-close>No</button>\r\n  <button mat-button [mat-dialog-close]=\"true\">Yes</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space {\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnkvZGVsZXRlLWRpYXJ5LWVudHJ5LWRpYWxvZy9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhcHBcXGVudHJ5XFxkZWxldGUtZGlhcnktZW50cnktZGlhbG9nXFxkZWxldGUtZGlhcnktZW50cnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cnkvZGVsZXRlLWRpYXJ5LWVudHJ5LWRpYWxvZy9kZWxldGUtZGlhcnktZW50cnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlIHtcclxuICBmbGV4OiAxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DeleteDiaryEntryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDiaryEntryDialogComponent", function() { return DeleteDiaryEntryDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tododiary_entries_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tododiary/entries/entry */ "./src/app/tododiary/entries/entry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DeleteDiaryEntryDialogComponent = /** @class */ (function () {
    function DeleteDiaryEntryDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteDiaryEntryDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteDiaryEntryDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-delete-diary-entry-dialog',
            template: __webpack_require__(/*! ./delete-diary-entry-dialog.component.html */ "./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-diary-entry-dialog.component.scss */ "./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _tododiary_entries_entry__WEBPACK_IMPORTED_MODULE_2__["Entry"]])
    ], DeleteDiaryEntryDialogComponent);
    return DeleteDiaryEntryDialogComponent;
}());



/***/ }),

/***/ "./src/app/entry/diary-entry/diary-entry.component.html":
/*!**************************************************************!*\
  !*** ./src/app/entry/diary-entry/diary-entry.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"diary-entry-container\">\r\n  <div class=\"diary-entry\">\r\n    <div class=\"container\">\r\n      <ta-entry-headline [title]='\"ToDos\"' *ngIf=\"areTodosAvailable()\"></ta-entry-headline>\r\n      <div class=\"diary-entry-content todos\" *ngIf=\"areTodosAvailable()\">\r\n        <ta-todo-entry-readmode *ngFor=\"let todo of entry.todos\" [todo]=\"todo\"></ta-todo-entry-readmode>\r\n      </div>\r\n\r\n      <ta-entry-headline [title]='\"Notes\"' *ngIf=\"isNoteAvailable()\"></ta-entry-headline>\r\n      <div class=\"diary-entry-content notes\" *ngIf=\"isNoteAvailable()\">\r\n        {{entry.notes}}\r\n      </div>\r\n\r\n      <div *ngIf=\"!isNoteAvailable() && !areTodosAvailable()\" class=\"hint\">\r\n        This entry is empty and contains neither notes nor todos. It is save to delete it.\r\n      </div>\r\n    </div>\r\n    <span class=\"timestamp\">{{entry.meta.timestamp | date:'short'}}</span>\r\n  </div>\r\n  <div class=\"buttons diary-entry-buttons\">\r\n    <mat-icon class=\"icon-button\" (click)=\"deleteEntry()\">delete</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/entry/diary-entry/diary-entry.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/entry/diary-entry/diary-entry.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space {\n  flex: 1; }\n\n.explanation {\n  margin-bottom: 1em;\n  font-size: 11pt;\n  color: #cacaca; }\n\n.diary-entry-container {\n  display: grid;\n  grid-template-columns: 1fr 70px; }\n\n.diary-entry-container:hover .diary-entry-buttons {\n    -webkit-animation: shiftIn 0.2s forwards 0.5s;\n            animation: shiftIn 0.2s forwards 0.5s; }\n\n.diary-entry {\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 1em;\n  margin-bottom: 2em;\n  border-radius: 0.8em;\n  grid-column: 1;\n  display: grid;\n  grid-template-rows: 1fr 2em; }\n\n.diary-entry .timestamp {\n    grid-row: 2;\n    justify-self: end;\n    align-self: end;\n    color: #cacaca;\n    font-family: \"Alegreya\", serif; }\n\n.diary-entry .container {\n  grid-row: 1; }\n\n.diary-entry-content {\n  padding: 1em; }\n\n.diary-entry-buttons {\n  grid-column: 2;\n  padding-left: 1em;\n  color: #5b75a7;\n  visibility: hidden; }\n\n.notes {\n  white-space: pre-line; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnkvZGlhcnktZW50cnkvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGRpYWxvZ3Muc2NzcyIsInNyYy9hcHAvZW50cnkvZGlhcnktZW50cnkvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9lbnRyeS9kaWFyeS1lbnRyeS9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhcHBcXGVudHJ5XFxkaWFyeS1lbnRyeVxcZGlhcnktZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxPQUFPLEVBQUE7O0FBR1Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNDRGtCLEVBQUE7O0FDTHBCO0VBQ0UsYUFBYTtFQUNiLCtCQUErQixFQUFBOztBQUZqQztJQU1NLDZDQUFxQztZQUFyQyxxQ0FBcUMsRUFBQTs7QUFLM0M7RUFDRSwwQ0FBMEM7RUFFMUMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkRuQm1CO0VDcUJuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLDJCQUEyQixFQUFBOztBQVQ3QjtJQVlJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUVmLGNEdEJnQjtJQ3VCaEIsOEJEN0JtQyxFQUFBOztBQ2lDdkM7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBRWpCLGNEdENtQjtFQ3dDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS9kaWFyeS1lbnRyeS9kaWFyeS1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uc3BhY2Uge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5leHBsYW5hdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMTFwdDtcclxuICBjb2xvcjogJGNvbG9yX2luZm87XHJcbn1cclxuIiwiJGJvcmRlcl9yYWRpdXM6IDAuOGVtO1xyXG5cclxuJGZvbnRfZmFjZV9oaWdobGlnaHQ6ICdBbGVncmV5YScsIHNlcmlmO1xyXG5cclxuJGZvbnRfc2l6ZV9oZWFkaW5nOiAyNHB4O1xyXG5cclxuJGNvbG9yX2hlYWRsaW5lczogIzlkOWQ5ZDtcclxuJGNvbG9yX3N1YnRpdGxlOiAjOTliN2UyO1xyXG4kY29sb3JfaW5mbzogI2NhY2FjYTtcclxuJGNvbG9yX2ljb25zOiAjNWI3NWE3O1xyXG5cclxuJGNvbG9yX2luZGljYXRvcl9uZXc6ICRjb2xvcl9zdWJ0aXRsZTtcclxuJGNvbG9yX2luZGljYXRvcl9tb3ZlZDogJGNvbG9yX2hlYWRsaW5lcztcclxuXHJcbiRjb2xvcl9iYWNrZ3JvdW5kOiAjZGNlMmVjO1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZGlhbG9ncyc7XHJcblxyXG4uZGlhcnktZW50cnktY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDcwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLmRpYXJ5LWVudHJ5LWJ1dHRvbnMge1xyXG4gICAgICBhbmltYXRpb246IHNoaWZ0SW4gMC4ycyBmb3J3YXJkcyAwLjVzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRpYXJ5LWVudHJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcblxyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlcl9yYWRpdXM7XHJcblxyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmVtO1xyXG5cclxuICAudGltZXN0YW1wIHtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcblxyXG4gICAgY29sb3I6ICRjb2xvcl9pbmZvO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250X2ZhY2VfaGlnaGxpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLmRpYXJ5LWVudHJ5IC5jb250YWluZXIge1xyXG4gIGdyaWQtcm93OiAxO1xyXG59XHJcblxyXG4uZGlhcnktZW50cnktY29udGVudCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4uZGlhcnktZW50cnktYnV0dG9ucyB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcblxyXG4gIGNvbG9yOiAkY29sb3JfaWNvbnM7XHJcblxyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm5vdGVzIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/entry/diary-entry/diary-entry.component.ts":
/*!************************************************************!*\
  !*** ./src/app/entry/diary-entry/diary-entry.component.ts ***!
  \************************************************************/
/*! exports provided: DiaryEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryEntryComponent", function() { return DiaryEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tododiary_entries_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tododiary/entries/entry */ "./src/app/tododiary/entries/entry.ts");
/* harmony import */ var _ta_custom_material_ta_custom_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ta-custom-material/ta-custom-material.module */ "./src/app/ta-custom-material/ta-custom-material.module.ts");
/* harmony import */ var _delete_diary_entry_dialog_delete_diary_entry_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete-diary-entry-dialog/delete-diary-entry-dialog.component */ "./src/app/entry/delete-diary-entry-dialog/delete-diary-entry-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tododiary_entries_entry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tododiary/entries/entry.service */ "./src/app/tododiary/entries/entry.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiaryEntryComponent = /** @class */ (function () {
    function DiaryEntryComponent(dialog, diaryEntryService) {
        this.dialog = dialog;
        this.diaryEntryService = diaryEntryService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DiaryEntryComponent.prototype.ngOnInit = function () {
    };
    DiaryEntryComponent.prototype.isNoteAvailable = function () {
        return !!this.entry.notes;
    };
    DiaryEntryComponent.prototype.areTodosAvailable = function () {
        return this.entry.todos && this.entry.todos.length > 0;
    };
    DiaryEntryComponent.prototype.deleteEntry = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_diary_entry_dialog_delete_diary_entry_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DeleteDiaryEntryDialogComponent"], {
            data: this.entry
        });
        dialogRef.afterClosed().subscribe(function (shouldDelete) {
            console.log('The dialog was closed, result was: ' + shouldDelete);
            if (shouldDelete) {
                _this.diaryEntryService.deleteEntry(_this.entry).then(function () { return _this.onDelete.emit(); });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tododiary_entries_entry__WEBPACK_IMPORTED_MODULE_1__["Entry"])
    ], DiaryEntryComponent.prototype, "entry", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DiaryEntryComponent.prototype, "onDelete", void 0);
    DiaryEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-diary-entry',
            template: __webpack_require__(/*! ./diary-entry.component.html */ "./src/app/entry/diary-entry/diary-entry.component.html"),
            providers: [_ta_custom_material_ta_custom_material_module__WEBPACK_IMPORTED_MODULE_2__["TaCustomMaterialModule"]],
            styles: [__webpack_require__(/*! ./diary-entry.component.scss */ "./src/app/entry/diary-entry/diary-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _tododiary_entries_entry_service__WEBPACK_IMPORTED_MODULE_5__["DiaryEntryService"]])
    ], DiaryEntryComponent);
    return DiaryEntryComponent;
}());



/***/ }),

/***/ "./src/app/entry/entry-headline/entry-headline.component.html":
/*!********************************************************************!*\
  !*** ./src/app/entry/entry-headline/entry-headline.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entry-header\">{{title}}<span class=\"border\"></span></div>\r\n"

/***/ }),

/***/ "./src/app/entry/entry-headline/entry-headline.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/entry/entry-headline/entry-headline.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entry-header {\n  font: 24px \"Alegreya\", serif;\n  color: #9d9d9d; }\n  .entry-header .border {\n    display: flex;\n    margin-left: 50px;\n    margin-right: 10px;\n    border-bottom: 1px solid rgba(157, 157, 157, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnkvZW50cnktaGVhZGxpbmUvRDpcXHByb2pla3RlXFx0b2RvYXJ5L3NyY1xcYXBwXFxlbnRyeVxcZW50cnktaGVhZGxpbmVcXGVudHJ5LWhlYWRsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnRyeS9lbnRyeS1oZWFkbGluZS9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw0QkNEcUM7RURFckMsY0NFdUIsRUFBQTtFREp6QjtJQUtJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlEQ0pxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cnkvZW50cnktaGVhZGxpbmUvZW50cnktaGVhZGxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4uZW50cnktaGVhZGVyIHtcclxuICBmb250OiAkZm9udF9zaXplX2hlYWRpbmcgJGZvbnRfZmFjZV9oaWdobGlnaHQ7XHJcbiAgY29sb3I6ICRjb2xvcl9oZWFkbGluZXM7XHJcblxyXG4gIC5ib3JkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yX2hlYWRsaW5lcywgMC41KTtcclxuICB9XHJcbn1cclxuIiwiJGJvcmRlcl9yYWRpdXM6IDAuOGVtO1xyXG5cclxuJGZvbnRfZmFjZV9oaWdobGlnaHQ6ICdBbGVncmV5YScsIHNlcmlmO1xyXG5cclxuJGZvbnRfc2l6ZV9oZWFkaW5nOiAyNHB4O1xyXG5cclxuJGNvbG9yX2hlYWRsaW5lczogIzlkOWQ5ZDtcclxuJGNvbG9yX3N1YnRpdGxlOiAjOTliN2UyO1xyXG4kY29sb3JfaW5mbzogI2NhY2FjYTtcclxuJGNvbG9yX2ljb25zOiAjNWI3NWE3O1xyXG5cclxuJGNvbG9yX2luZGljYXRvcl9uZXc6ICRjb2xvcl9zdWJ0aXRsZTtcclxuJGNvbG9yX2luZGljYXRvcl9tb3ZlZDogJGNvbG9yX2hlYWRsaW5lcztcclxuXHJcbiRjb2xvcl9iYWNrZ3JvdW5kOiAjZGNlMmVjO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/entry/entry-headline/entry-headline.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/entry/entry-headline/entry-headline.component.ts ***!
  \******************************************************************/
/*! exports provided: EntryHeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryHeadlineComponent", function() { return EntryHeadlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntryHeadlineComponent = /** @class */ (function () {
    function EntryHeadlineComponent() {
    }
    EntryHeadlineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EntryHeadlineComponent.prototype, "title", void 0);
    EntryHeadlineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-entry-headline',
            template: __webpack_require__(/*! ./entry-headline.component.html */ "./src/app/entry/entry-headline/entry-headline.component.html"),
            styles: [__webpack_require__(/*! ./entry-headline.component.scss */ "./src/app/entry/entry-headline/entry-headline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EntryHeadlineComponent);
    return EntryHeadlineComponent;
}());



/***/ }),

/***/ "./src/app/importexport/export-button/export-button.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/importexport/export-button/export-button.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon matTooltip=\"Export\" (click)=\"exportData()\">file_download</mat-icon>\r\n"

/***/ }),

/***/ "./src/app/importexport/export-button/export-button.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/importexport/export-button/export-button.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydGV4cG9ydC9leHBvcnQtYnV0dG9uL2V4cG9ydC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/importexport/export-button/export-button.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/importexport/export-button/export-button.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExportButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportButtonComponent", function() { return ExportButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tododiary/database/database.service */ "./src/app/tododiary/database/database.service.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./src/app/logger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExportButtonComponent = /** @class */ (function () {
    function ExportButtonComponent(dbService, renderer, logger) {
        this.dbService = dbService;
        this.renderer = renderer;
        this.logger = logger;
    }
    ExportButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * Code Base from https://gist.github.com/derekshi/2d4969c59627ab5aca65b37eaeab72fc
     */
    ExportButtonComponent.prototype.exportData = function () {
        var _this = this;
        this.dbService.getDataForExport().then(function (data) {
            _this.logger.debug('got export data successfully, writing file');
            var exportString = JSON.stringify(data);
            var timestamp = new Date().toISOString();
            var filename = "todoary_export_" + timestamp + ".json";
            var blob = new Blob([exportString], { type: 'application/json' });
            var url = window.URL.createObjectURL(blob);
            var anchor = _this.renderer.createElement('a');
            _this.renderer.setAttribute(anchor, 'href', url);
            _this.renderer.setAttribute(anchor, 'download', filename);
            _this.renderer.appendChild(window.document.body, anchor);
            anchor.click();
            _this.renderer.removeChild(window.document.body, anchor);
            anchor.remove();
        }).catch(function (err) {
            _this.logger.error('Could not export data. error:' + err);
        });
    };
    ExportButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-export-button',
            template: __webpack_require__(/*! ./export-button.component.html */ "./src/app/importexport/export-button/export-button.component.html"),
            providers: [_tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]],
            styles: [__webpack_require__(/*! ./export-button.component.scss */ "./src/app/importexport/export-button/export-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]])
    ], ExportButtonComponent);
    return ExportButtonComponent;
}());



/***/ }),

/***/ "./src/app/logger.ts":
/*!***************************!*\
  !*** ./src/app/logger.ts ***!
  \***************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
var Logger = /** @class */ (function () {
    function Logger() {
        this.debugMode = false;
    }
    Logger.prototype.debug = function (msg) {
        if (this.debugMode) {
            console.log("[debug] " + msg);
        }
    };
    Logger.prototype.info = function (msg) {
        console.log("[info] " + msg);
    };
    Logger.prototype.warn = function (msg) {
        console.log("[WARN] " + msg);
    };
    Logger.prototype.error = function (msg) {
        console.log("[[[ERROR]]] " + msg);
    };
    Logger.prototype.enableDebug = function () {
        this.debugMode = true;
    };
    Logger.prototype.disableDebug = function () {
        this.debugMode = false;
    };
    return Logger;
}());



/***/ }),

/***/ "./src/app/ta-custom-material/ta-custom-material.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ta-custom-material/ta-custom-material.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaCustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaCustomMaterialModule", function() { return TaCustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var materialModules = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]];
var TaCustomMaterialModule = /** @class */ (function () {
    function TaCustomMaterialModule() {
    }
    TaCustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: materialModules,
            exports: materialModules,
            declarations: []
        })
    ], TaCustomMaterialModule);
    return TaCustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/todo/create-todo/create-todo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/todo/create-todo/create-todo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width create-todo\">\r\n  <form>\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput name=\"text\" [placeholder]=\"placeholdertext\" [(ngModel)]=\"text\">\r\n    </mat-form-field>\r\n    <button mat-icon-button type=\"submit\" class=\"btn\" disabled=\"{{!text}}\" (click)=\"submit()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo/create-todo/create-todo.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/todo/create-todo/create-todo.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.create-todo form {\n  display: grid;\n  grid-template-columns: 1fr 50px; }\n\n.create-todo form mat-form-field {\n    grid-column: 1; }\n\n.create-todo form .btn {\n    grid-column: 2;\n    align-self: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9jcmVhdGUtdG9kby9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhcHBcXHRvZG9cXGNyZWF0ZS10b2RvXFxjcmVhdGUtdG9kby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYiwrQkFBK0IsRUFBQTs7QUFGakM7SUFLSSxjQUFjLEVBQUE7O0FBTGxCO0lBUUksY0FBYztJQUNkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdG9kby9jcmVhdGUtdG9kby9jcmVhdGUtdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNyZWF0ZS10b2RvIGZvcm0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweDtcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/todo/create-todo/create-todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/todo/create-todo/create-todo.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoComponent", function() { return CreateTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todos/todo-entry */ "./src/app/todo/todos/todo-entry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateTodoComponent = /** @class */ (function () {
    function CreateTodoComponent() {
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CreateTodoComponent.prototype.ngOnInit = function () {
        var placeholders = [
            'I have to ...',
            'I want to ...',
            'Remember to ...',
            'I need to ...',
            'I should ...',
            'Let\'s ...',
            'Consider to ...'
        ];
        this.placeholdertext = placeholders[Math.floor(Math.random() * placeholders.length)];
    };
    CreateTodoComponent.prototype.submit = function () {
        var newTodo = new _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["TodoEntry"](this.text);
        this.onSubmit.emit({ todo: newTodo, category: this.category });
        this.text = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateTodoComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateTodoComponent.prototype, "category", void 0);
    CreateTodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-create-todo',
            template: __webpack_require__(/*! ./create-todo.component.html */ "./src/app/todo/create-todo/create-todo.component.html"),
            styles: [__webpack_require__(/*! ./create-todo.component.scss */ "./src/app/todo/create-todo/create-todo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateTodoComponent);
    return CreateTodoComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-entry-editable/todo-entry-editable.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/todo/todo-entry-editable/todo-entry-editable.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo_entry\">\r\n  <div class=\"open_indicator indicator\" (click)=\"switchDoneAndOpenStatus()\" *ngIf=\"!isDeletedTodo()\">\r\n    <mat-icon class=\"icon-button open\" *ngIf=\"isOpenTodo()\">check_box_outline_blank</mat-icon>\r\n    <mat-icon class=\"icon-button done\" *ngIf=\"isDoneTodo()\">check</mat-icon>\r\n  </div>\r\n  <div class=\"deleted_indicator indicator\" *ngIf=\"isDeletedTodo()\" (click)=\"undoDelete()\">\r\n    <mat-icon class=\"icon-button deleted\">delete</mat-icon>\r\n    <mat-icon class=\"icon-button undo_deleted\">replay</mat-icon>\r\n  </div>\r\n  <span class=\"text\" [ngClass]=\"{'deleted-todo' : isDeletedTodo()}\">{{todo.text}}</span>\r\n  <div class=\"todo_buttons\">\r\n    <mat-icon class=\"icon-button\" [ngClass]=\"{'hidden': isDeletedTodo()}\" (click)=\"setDeleted()\">delete</mat-icon>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo/todo-entry-editable/todo-entry-editable.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/todo/todo-entry-editable/todo-entry-editable.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deleted-todo {\n  text-decoration: line-through;\n  color: #9d9d9d; }\n\n.todo_entry {\n  display: grid;\n  grid-template-columns: 30px 3fr 1fr; }\n\n.todo_entry .indicator {\n    grid-column: 1; }\n\n.todo_entry .text {\n    grid-column: 2;\n    align-self: center; }\n\n.indicator .deleted {\n  color: #b30000; }\n\n.indicator .done {\n  color: #4e9739; }\n\n.space {\n  flex: 1; }\n\n.explanation {\n  margin-bottom: 1em;\n  font-size: 11pt;\n  color: #cacaca; }\n\n.todo_entry .todo_buttons {\n  grid-column: 3;\n  justify-self: end;\n  visibility: hidden; }\n\n.todo_entry:hover {\n  /* background-color: rgba($color_background, 0.3); */\n  /*background: linear-gradient(to right, $color_background 0%,rgba($color_background,0) 50%);*/\n  background: linear-gradient(to right, rgba(91, 117, 167, 0.1) 0%, rgba(91, 117, 167, 0.05) 50%, rgba(220, 226, 236, 0) 100%);\n  border-radius: 3px; }\n\n.todo_entry:hover .todo_buttons {\n    visibility: visible; }\n\n.todo_entry:hover .todo_buttons .icon-button {\n      -webkit-animation: bounceIn 0.07s;\n              animation: bounceIn 0.07s; }\n\n.deleted_indicator {\n  min-height: 16px; }\n\n.deleted_indicator .deleted {\n    -webkit-animation: bounceIn 0.2s;\n            animation: bounceIn 0.2s; }\n\n.deleted_indicator .undo_deleted {\n    display: none; }\n\n.deleted_indicator:hover .deleted {\n    display: none; }\n\n.deleted_indicator:hover .undo_deleted {\n    display: inherit;\n    -webkit-animation: rotateIn 0.15s linear;\n            animation: rotateIn 0.15s linear; }\n\n.open_indicator {\n  min-height: 16px; }\n\n.indicator .done {\n  -webkit-animation: bounceIn 0.2s;\n          animation: bounceIn 0.2s; }\n\n.indicator .open {\n  -webkit-animation: bounceIn 0.2s;\n          animation: bounceIn 0.2s; }\n\n.hidden {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWVudHJ5LWVkaXRhYmxlL0Q6XFxwcm9qZWt0ZVxcdG9kb2FyeS9zcmNcXGFwcFxcdG9kb1xcdG9kb3NcXHRvZG8tZW50cnkuc2NzcyIsInNyYy9hcHAvdG9kby90b2RvLWVudHJ5LWVkaXRhYmxlL0Q6XFxwcm9qZWt0ZVxcdG9kb2FyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxkaWFsb2dzLnNjc3MiLCJzcmMvYXBwL3RvZG8vdG9kby1lbnRyeS1lZGl0YWJsZS9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3RvZG8vdG9kby1lbnRyeS1lZGl0YWJsZS9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhcHBcXHRvZG9cXHRvZG8tZW50cnktZWRpdGFibGVcXHRvZG8tZW50cnktZWRpdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYixtQ0FBbUMsRUFBQTs7QUFGckM7SUFLSSxjQUFjLEVBQUE7O0FBTGxCO0lBU0ksY0FBYztJQUNkLGtCQUFrQixFQUFBOztBQUl0QjtFQUVJLGNBQWMsRUFBQTs7QUFGbEI7RUFNSSxjQUFjLEVBQUE7O0FDdkJsQjtFQUNFLE9BQU8sRUFBQTs7QUFHVDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0NEa0IsRUFBQTs7QUNMcEI7RUFHSSxjQUFjO0VBQ2QsaUJBQWlCO0VBRWpCLGtCQUFrQixFQUFBOztBQU50QjtFQVVJLG9EQUFBO0VBQ0EsNkZBQUE7RUFDQSw0SEFBOEg7RUFDOUgsa0JBQWtCLEVBQUE7O0FBYnRCO0lBZ0JNLG1CQUFtQixFQUFBOztBQWhCekI7TUFrQlEsaUNBQXlCO2NBQXpCLHlCQUF5QixFQUFBOztBQU1qQztFQUNFLGdCQUFnQixFQUFBOztBQURsQjtJQUlJLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTs7QUFKNUI7SUFRSSxhQUFhLEVBQUE7O0FBUmpCO0lBYU0sYUFBYSxFQUFBOztBQWJuQjtJQWlCTSxnQkFBZ0I7SUFDaEIsd0NBQWdDO1lBQWhDLGdDQUFnQyxFQUFBOztBQUt0QztFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUVJLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFGNUI7RUFNSSxnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7O0FBSTVCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8tZW50cnktZWRpdGFibGUvdG9kby1lbnRyeS1lZGl0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGVkLXRvZG8ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIGNvbG9yOiAjOWQ5ZDlkO1xyXG59XHJcblxyXG4udG9kb19lbnRyeSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggM2ZyIDFmcjtcclxuXHJcbiAgLmluZGljYXRvciB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmluZGljYXRvciB7XHJcbiAgLmRlbGV0ZWQge1xyXG4gICAgY29sb3I6ICNiMzAwMDA7XHJcbiAgfVxyXG5cclxuICAuZG9uZSB7XHJcbiAgICBjb2xvcjogIzRlOTczOTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5zcGFjZSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmV4cGxhbmF0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgZm9udC1zaXplOiAxMXB0O1xyXG4gIGNvbG9yOiAkY29sb3JfaW5mbztcclxufVxyXG4iLCIkYm9yZGVyX3JhZGl1czogMC44ZW07XHJcblxyXG4kZm9udF9mYWNlX2hpZ2hsaWdodDogJ0FsZWdyZXlhJywgc2VyaWY7XHJcblxyXG4kZm9udF9zaXplX2hlYWRpbmc6IDI0cHg7XHJcblxyXG4kY29sb3JfaGVhZGxpbmVzOiAjOWQ5ZDlkO1xyXG4kY29sb3Jfc3VidGl0bGU6ICM5OWI3ZTI7XHJcbiRjb2xvcl9pbmZvOiAjY2FjYWNhO1xyXG4kY29sb3JfaWNvbnM6ICM1Yjc1YTc7XHJcblxyXG4kY29sb3JfaW5kaWNhdG9yX25ldzogJGNvbG9yX3N1YnRpdGxlO1xyXG4kY29sb3JfaW5kaWNhdG9yX21vdmVkOiAkY29sb3JfaGVhZGxpbmVzO1xyXG5cclxuJGNvbG9yX2JhY2tncm91bmQ6ICNkY2UyZWM7XHJcbiIsIkBpbXBvcnQgJy4uL3RvZG9zL3RvZG8tZW50cnknO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2RpYWxvZ3MnO1xyXG5cclxuLnRvZG9fZW50cnkge1xyXG5cclxuICAudG9kb19idXR0b25zIHtcclxuICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcblxyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcl9iYWNrZ3JvdW5kLCAwLjMpOyAqL1xyXG4gICAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvcl9iYWNrZ3JvdW5kIDAlLHJnYmEoJGNvbG9yX2JhY2tncm91bmQsMCkgNTAlKTsqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKCRjb2xvcl9pY29ucywwLjEpIDAlLHJnYmEoJGNvbG9yX2ljb25zLDAuMDUpIDUwJSwgcmdiYSgkY29sb3JfYmFja2dyb3VuZCwwLjApIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgIC50b2RvX2J1dHRvbnMge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAuaWNvbi1idXR0b24ge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlSW4gMC4wN3M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZWxldGVkX2luZGljYXRvciB7XHJcbiAgbWluLWhlaWdodDogMTZweDtcclxuXHJcbiAgLmRlbGV0ZWQge1xyXG4gICAgYW5pbWF0aW9uOiBib3VuY2VJbiAwLjJzO1xyXG4gIH1cclxuXHJcbiAgLnVuZG9fZGVsZXRlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAuZGVsZXRlZCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVuZG9fZGVsZXRlZCB7XHJcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICAgIGFuaW1hdGlvbjogcm90YXRlSW4gMC4xNXMgbGluZWFyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm9wZW5faW5kaWNhdG9yIHtcclxuICBtaW4taGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uaW5kaWNhdG9yIHtcclxuICAuZG9uZSB7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZUluIDAuMnM7XHJcbiAgfVxyXG5cclxuICAub3BlbiB7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZUluIDAuMnM7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/todo/todo-entry-editable/todo-entry-editable.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/todo/todo-entry-editable/todo-entry-editable.component.ts ***!
  \***************************************************************************/
/*! exports provided: TodoEntryEditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEntryEditableComponent", function() { return TodoEntryEditableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todos/todo-entry */ "./src/app/todo/todos/todo-entry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoEntryEditableComponent = /** @class */ (function () {
    function TodoEntryEditableComponent() {
    }
    TodoEntryEditableComponent.prototype.ngOnInit = function () {
    };
    TodoEntryEditableComponent.prototype.setDone = function () {
        this.todo.status = _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].DONE;
    };
    TodoEntryEditableComponent.prototype.setOpen = function () {
        this.todo.status = _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].OPEN;
    };
    TodoEntryEditableComponent.prototype.setDeleted = function () {
        this.todo.status = _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].DELETED;
    };
    TodoEntryEditableComponent.prototype.undoDelete = function () {
        this.todo.status = _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].OPEN;
    };
    TodoEntryEditableComponent.prototype.isOpenTodo = function () {
        return this.todo.status === _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].OPEN;
    };
    TodoEntryEditableComponent.prototype.isDeletedTodo = function () {
        return this.todo.status === _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].DELETED;
    };
    TodoEntryEditableComponent.prototype.isDoneTodo = function () {
        return this.todo.status === _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].DONE;
    };
    TodoEntryEditableComponent.prototype.switchDoneAndOpenStatus = function () {
        if (this.todo.status === _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].OPEN) {
            this.setDone();
        }
        else {
            this.setOpen();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["TodoEntry"])
    ], TodoEntryEditableComponent.prototype, "todo", void 0);
    TodoEntryEditableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-todo-entry-editable',
            template: __webpack_require__(/*! ./todo-entry-editable.component.html */ "./src/app/todo/todo-entry-editable/todo-entry-editable.component.html"),
            styles: [__webpack_require__(/*! ./todo-entry-editable.component.scss */ "./src/app/todo/todo-entry-editable/todo-entry-editable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoEntryEditableComponent);
    return TodoEntryEditableComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo_entry\">\r\n  <div class=\"indicator\">\r\n    <mat-icon class=\"added\" *ngIf=\"isOpenTodo() && !isMovedTodo()\">add_box</mat-icon>\r\n    <mat-icon class=\"done\" *ngIf=\"isDoneTodo()\">check</mat-icon>\r\n    <mat-icon class=\"deleted\" *ngIf=\"isDeletedTodo()\">delete</mat-icon>\r\n    <mat-icon class=\"moved\" *ngIf=\"isMovedTodo()\">swap_vert</mat-icon>\r\n  </div>\r\n  <span class=\"text\" [ngClass]=\"{'deleted-todo' : isDeletedTodo()}\">{{todo.text}}</span>\r\n  <span *ngIf=\"todo.category\" class=\"category\">{{todo.category}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deleted-todo {\n  text-decoration: line-through;\n  color: #9d9d9d; }\n\n.todo_entry {\n  display: grid;\n  grid-template-columns: 30px 3fr 1fr; }\n\n.todo_entry .indicator {\n    grid-column: 1; }\n\n.todo_entry .text {\n    grid-column: 2;\n    align-self: center; }\n\n.indicator .deleted {\n  color: #b30000; }\n\n.indicator .done {\n  color: #4e9739; }\n\n.added {\n  color: #99b7e2; }\n\n.moved {\n  color: #9d9d9d; }\n\n.category {\n  color: #cacaca;\n  font-size: 10pt;\n  justify-self: end;\n  align-self: center;\n  padding-right: 2em;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWVudHJ5LXJlYWRtb2RlL0Q6XFxwcm9qZWt0ZVxcdG9kb2FyeS9zcmNcXGFwcFxcdG9kb1xcdG9kb3NcXHRvZG8tZW50cnkuc2NzcyIsInNyYy9hcHAvdG9kby90b2RvLWVudHJ5LXJlYWRtb2RlL0Q6XFxwcm9qZWt0ZVxcdG9kb2FyeS9zcmNcXGFwcFxcdG9kb1xcdG9kby1lbnRyeS1yZWFkbW9kZVxcdG9kby1lbnRyeS1yZWFkbW9kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby90b2RvLWVudHJ5LXJlYWRtb2RlL0Q6XFxwcm9qZWt0ZVxcdG9kb2FyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQyxFQUFBOztBQUZyQztJQUtJLGNBQWMsRUFBQTs7QUFMbEI7SUFTSSxjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7O0FBSXRCO0VBRUksY0FBYyxFQUFBOztBQUZsQjtFQU1JLGNBQWMsRUFBQTs7QUN0QmxCO0VBQ0UsY0NHc0IsRUFBQTs7QURBeEI7RUFDRSxjQ0Z1QixFQUFBOztBREt6QjtFQUNFLGNDSmtCO0VES2xCLGVBQWU7RUFFZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1lbnRyeS1yZWFkbW9kZS90b2RvLWVudHJ5LXJlYWRtb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZWQtdG9kbyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgY29sb3I6ICM5ZDlkOWQ7XHJcbn1cclxuXHJcbi50b2RvX2VudHJ5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzZnIgMWZyO1xyXG5cclxuICAuaW5kaWNhdG9yIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5kaWNhdG9yIHtcclxuICAuZGVsZXRlZCB7XHJcbiAgICBjb2xvcjogI2IzMDAwMDtcclxuICB9XHJcblxyXG4gIC5kb25lIHtcclxuICAgIGNvbG9yOiAjNGU5NzM5O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLi90b2Rvcy90b2RvLWVudHJ5JztcclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmFkZGVkIHtcclxuICBjb2xvcjogJGNvbG9yX2luZGljYXRvcl9uZXc7XHJcbn1cclxuXHJcbi5tb3ZlZCB7XHJcbiAgY29sb3I6ICRjb2xvcl9pbmRpY2F0b3JfbW92ZWQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgY29sb3I6ICRjb2xvcl9pbmZvO1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxuXHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4iLCIkYm9yZGVyX3JhZGl1czogMC44ZW07XHJcblxyXG4kZm9udF9mYWNlX2hpZ2hsaWdodDogJ0FsZWdyZXlhJywgc2VyaWY7XHJcblxyXG4kZm9udF9zaXplX2hlYWRpbmc6IDI0cHg7XHJcblxyXG4kY29sb3JfaGVhZGxpbmVzOiAjOWQ5ZDlkO1xyXG4kY29sb3Jfc3VidGl0bGU6ICM5OWI3ZTI7XHJcbiRjb2xvcl9pbmZvOiAjY2FjYWNhO1xyXG4kY29sb3JfaWNvbnM6ICM1Yjc1YTc7XHJcblxyXG4kY29sb3JfaW5kaWNhdG9yX25ldzogJGNvbG9yX3N1YnRpdGxlO1xyXG4kY29sb3JfaW5kaWNhdG9yX21vdmVkOiAkY29sb3JfaGVhZGxpbmVzO1xyXG5cclxuJGNvbG9yX2JhY2tncm91bmQ6ICNkY2UyZWM7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.ts ***!
  \***************************************************************************/
/*! exports provided: TodoEntryReadmodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEntryReadmodeComponent", function() { return TodoEntryReadmodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todos/todo-entry */ "./src/app/todo/todos/todo-entry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path='../../../../node_modules/@angular/core/src/metadata/directives.d.ts'/>


// @ts-ignore
var TodoEntryReadmodeComponent = /** @class */ (function () {
    function TodoEntryReadmodeComponent() {
    }
    TodoEntryReadmodeComponent.prototype.ngOnInit = function () {
    };
    TodoEntryReadmodeComponent.prototype.isOpenTodo = function () {
        return this.todo.status === _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].OPEN;
    };
    TodoEntryReadmodeComponent.prototype.isMovedTodo = function () {
        return !this.todo.isNew && this.todo.isMoved && this.todo.status === _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].OPEN;
    };
    TodoEntryReadmodeComponent.prototype.isDeletedTodo = function () {
        return this.todo.status === _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].DELETED;
    };
    TodoEntryReadmodeComponent.prototype.isDoneTodo = function () {
        return this.todo.status === _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].DONE;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _todos_todo_entry__WEBPACK_IMPORTED_MODULE_1__["TodoEntry"])
    ], TodoEntryReadmodeComponent.prototype, "todo", void 0);
    TodoEntryReadmodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-todo-entry-readmode',
            template: __webpack_require__(/*! ./todo-entry-readmode.component.html */ "./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.html"),
            styles: [__webpack_require__(/*! ./todo-entry-readmode.component.scss */ "./src/app/todo/todo-entry-readmode/todo-entry-readmode.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoEntryReadmodeComponent);
    return TodoEntryReadmodeComponent;
}());



/***/ }),

/***/ "./src/app/todo/todos/todo-entry.service.ts":
/*!**************************************************!*\
  !*** ./src/app/todo/todos/todo-entry.service.ts ***!
  \**************************************************/
/*! exports provided: TodoEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEntryService", function() { return TodoEntryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-entry */ "./src/app/todo/todos/todo-entry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TodoEntryService = /** @class */ (function () {
    function TodoEntryService() {
    }
    TodoEntryService.prototype.createNewTodo = function (text) {
        var newTodo = new _todo_entry__WEBPACK_IMPORTED_MODULE_1__["TodoEntry"](text);
        return newTodo;
    };
    TodoEntryService.prototype.setDone = function (todo) {
        todo.status = _todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].DONE;
    };
    TodoEntryService.prototype.delete = function (todo) {
        todo.status = _todo_entry__WEBPACK_IMPORTED_MODULE_1__["todoStatus"].DELETED;
    };
    TodoEntryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TodoEntryService);
    return TodoEntryService;
}());



/***/ }),

/***/ "./src/app/todo/todos/todo-entry.ts":
/*!******************************************!*\
  !*** ./src/app/todo/todos/todo-entry.ts ***!
  \******************************************/
/*! exports provided: todoStatus, TodoEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoStatus", function() { return todoStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEntry", function() { return TodoEntry; });
var todoStatus;
(function (todoStatus) {
    todoStatus[todoStatus["OPEN"] = 0] = "OPEN";
    todoStatus[todoStatus["DONE"] = 1] = "DONE";
    todoStatus[todoStatus["DELETED"] = -1] = "DELETED";
})(todoStatus || (todoStatus = {}));
var TodoEntry = /** @class */ (function () {
    function TodoEntry(text) {
        this.status = todoStatus.OPEN;
        this.text = text || '';
    }
    return TodoEntry;
}());



/***/ }),

/***/ "./src/app/todo/todos/todo.service.ts":
/*!********************************************!*\
  !*** ./src/app/todo/todos/todo.service.ts ***!
  \********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tododiary/database/database.service */ "./src/app/tododiary/database/database.service.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./src/app/logger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = /** @class */ (function () {
    function TodoService(databaseService, logger) {
        this.databaseService = databaseService;
        this.logger = logger;
    }
    TodoService.prototype.getOpenTodos = function () {
        return this.databaseService.getCategoriesWithTodos();
    };
    TodoService.prototype.updateOpenTodos = function (todos) {
        return this.databaseService.updateCategoriesWithTodos(todos);
    };
    TodoService.prototype.addOpenTodosToDefaultCategory = function (openTodos) {
        var _this = this;
        if (!openTodos || !(openTodos instanceof Array)) {
            this.logger.warn("openTodos " + JSON.stringify(openTodos) + " are invalid. Do nothing.");
            return;
        }
        return this.databaseService.getCategoriesWithTodos()
            .then(function (todoCategories) {
            var defaultCategory = todoCategories.find(function (cat) { return cat.default; });
            if (defaultCategory) {
                defaultCategory.todos = defaultCategory.todos.concat(openTodos);
            }
            return todoCategories;
        })
            .then(function (todos) { return _this.updateOpenTodos(todos); });
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_tododiary_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/tododiary/database/database.service.ts":
/*!********************************************************!*\
  !*** ./src/app/tododiary/database/database.service.ts ***!
  \********************************************************/
/*! exports provided: DATABASE_KEYS, DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATABASE_KEYS", function() { return DATABASE_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pouchdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pouchdb */ "./node_modules/pouchdb/lib/index-browser.es.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./src/app/logger.ts");
/* harmony import */ var _categories_category_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../categories/category/category */ "./src/app/categories/category/category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TODOARY_DB_VERSION = '2';
var DATABASE_KEYS = {
    DB_NAME: 'todoary',
    ENTRIES: 'todoary_entries',
    OPEN_TODOS: 'todoary_opentodos',
    CATEGORIES: 'todoary_todocategories',
    METADATA: 'todoary_meta'
};
var DatabaseService = /** @class */ (function () {
    function DatabaseService(logger) {
        this.logger = logger;
    }
    DatabaseService.prototype.getOrCreateDatabase = function () {
        var _this = this;
        var resolveWithDatabase = function (resolve, db) {
            _this._migrateDatabaseIfNecessary(db).then(function () {
                _this.logger.debug('giving database instance ....');
                resolve(db);
            });
        };
        return new Promise(function (resolve) {
            if (!_this.db) {
                _this.logger.info('No database found. Trying to fetch it ...');
                _this.createDatabase().then(function () {
                    resolveWithDatabase(resolve, _this.db);
                });
            }
            else {
                resolveWithDatabase(resolve, _this.db);
            }
        });
    };
    DatabaseService.prototype.updateEntries = function (entries) {
        var _this = this;
        var db;
        this.logger.debug('updating entries...');
        return this.getOrCreateDatabase()
            .then(function (database) { return db = database; })
            .then(function () { return db.get(DATABASE_KEYS.ENTRIES); })
            .then(function (doc) {
            doc.entries = entries;
            return db.put(doc);
        }).then(function () {
            _this.logger.debug('successfully updated entries in database!');
            return _this.getEntries();
        }).catch(function (error) {
            _this.logger.error('could not execute updateEntries: ' + error);
            return error;
        });
    };
    DatabaseService.prototype.getEntries = function () {
        var _this = this;
        var db;
        this.logger.debug('getting entries...');
        return this.getOrCreateDatabase()
            .then(function (database) { return db = database; })
            .then(function () { return db.get(DATABASE_KEYS.ENTRIES); })
            .then(function (doc) { return doc.entries; })
            .catch(function (error) {
            _this.logger.error('could not get entries: ' + error);
            return error;
        });
    };
    DatabaseService.prototype.updateCategoriesWithTodos = function (todos) {
        var _this = this;
        var db;
        this.logger.debug('updating todos...');
        return this.getOrCreateDatabase()
            .then(function (database) { return db = database; })
            .then(function () { return db.get(DATABASE_KEYS.CATEGORIES); })
            .then(function (doc) {
            doc.categories = todos;
            return db.put(doc);
        })
            .then(function () {
            _this.logger.debug('successfully updated open todos in database!');
            return _this.getCategoriesWithTodos();
        })
            .catch(function (error) {
            _this.logger.error('could not execute updateCategoriesWithTodos: ' + error);
            return error;
        });
    };
    DatabaseService.prototype.createNewCategory = function (category) {
        var _this = this;
        var db;
        this.logger.debug("creating new category " + category);
        return this.getOrCreateDatabase()
            .then(function (database) { return db = database; })
            .then(function () { return db.get(DATABASE_KEYS.CATEGORIES); })
            .then(function (doc) {
            doc.categories.push(category);
            return db.put(doc);
        })
            .then(function () {
            _this.logger.debug("successfully created new category " + category.name);
            return _this.getCategoriesWithTodos();
        })
            .catch(function (error) {
            _this.logger.error('could not execute createNewCategory: ' + error);
            return error;
        });
    };
    DatabaseService.prototype.getCategoriesWithTodos = function () {
        var _this = this;
        var db;
        this.logger.debug('getting todos...');
        return this.getOrCreateDatabase()
            .then(function (database) { return db = database; })
            .then(function () { return db.get(DATABASE_KEYS.CATEGORIES); })
            .then(function (doc) { return doc.categories; })
            .catch(function (err) {
            _this.logger.error('could not get open todos: ' + err);
            return err;
        });
    };
    DatabaseService.prototype.getDataForExport = function () {
        var _this = this;
        var data = {
            entries: null,
            categories: null
        };
        return this.getEntries().then(function (entries) {
            data.entries = entries;
            return _this.getCategoriesWithTodos();
        }).then(function (todos) {
            data.categories = todos;
            return data;
        }).catch(function (err) { return err; });
    };
    DatabaseService.prototype._migrateDatabaseIfNecessary = function (db) {
        var _this = this;
        return db.get(DATABASE_KEYS.METADATA).then(function () {
            // v1 did not have any metadata, hence it needs to be migrated by catching the 404 error. there is nothing else to migrate yet.
        }).catch(function (error) {
            // v1 databases have no metadata at all
            if (error.status === 404) {
                return _this._migrateDatabaseStructureV1ToV2(db);
            }
            else {
                _this.logger.error("migration of database failed " + error);
            }
        });
    };
    DatabaseService.prototype._migrateDatabaseStructureV1ToV2 = function (db) {
        this.logger.info('migrating database from v1 to v2 ...');
        return db.get(DATABASE_KEYS.OPEN_TODOS).then(function (todosEntry) {
            var defaultCategory = new _categories_category_category__WEBPACK_IMPORTED_MODULE_3__["Category"]('default');
            defaultCategory.default = true;
            defaultCategory.todos = todosEntry;
            db.bulkDocs([
                {
                    '_id': DATABASE_KEYS.METADATA,
                    'db_version': '2'
                },
                {
                    '_id': DATABASE_KEYS.CATEGORIES,
                    'categories': [defaultCategory]
                }
            ]);
        });
    };
    DatabaseService.prototype.createDatabase = function () {
        this.db = new pouchdb__WEBPACK_IMPORTED_MODULE_1__["default"](DATABASE_KEYS.DB_NAME);
        // initialize database if empty
        return this.initializeDatabase(this.db);
    };
    DatabaseService.prototype.initializeDatabase = function (db) {
        var _this = this;
        return db.info().then(function (info) {
            if (info.doc_count === 0) {
                var defaultCategory = new _categories_category_category__WEBPACK_IMPORTED_MODULE_3__["Category"]('default');
                defaultCategory.default = true;
                return db.bulkDocs([
                    {
                        '_id': DATABASE_KEYS.METADATA,
                        'db_version': TODOARY_DB_VERSION
                    },
                    {
                        '_id': DATABASE_KEYS.ENTRIES,
                        'entries': []
                    },
                    {
                        '_id': DATABASE_KEYS.CATEGORIES,
                        'categories': [defaultCategory]
                    }
                ]);
            }
        }).then(function () {
            _this.logger.debug('successfully initalized, returning database');
            return db;
        });
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/tododiary/diary/diary.component.html":
/*!******************************************************!*\
  !*** ./src/app/tododiary/diary/diary.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"diary-header\">\r\n  <span class=\"title\">Todoary</span>\r\n  <div class=\"toolbar-buttons\">\r\n    <ta-export-button class=\"icon-button\"></ta-export-button>\r\n    <ta-manage-categories-button class=\"icon-button\"></ta-manage-categories-button>\r\n    <span class=\"gap\"></span>\r\n    <mat-icon (click)=\"showCreateEntry()\" matTooltip=\"New Entry\" class=\"icon-button create\">add</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<ta-create-entry *ngIf=\"showCreateNewEntry\" (onSubmit)=\"addEntry($event)\" (onCancel)=\"destroyCreateEntry()\"\r\n                 class=\"create-entry\"></ta-create-entry>\r\n\r\n<div class=\"diary\">\r\n  <div class=\"entries\" *ngFor=\"let entry of entries\">\r\n    <ta-diary-entry [entry]=\"entry\" (onDelete)=\"getEntries()\" class=\"diary-entry\"></ta-diary-entry>\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <a href=\"../../../assets/impressum.html\">Impressum & Datenschutz</a>\r\n  <span class=\"version\">v{{version}}</span>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/tododiary/diary/diary.component.scss":
/*!******************************************************!*\
  !*** ./src/app/tododiary/diary/diary.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space {\n  flex: 1; }\n\n.explanation {\n  margin-bottom: 1em;\n  font-size: 11pt;\n  color: #cacaca; }\n\n.diary-header {\n  margin-bottom: 0.5em;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr minmax(150px, 1fr);\n  margin-right: 70px; }\n\n.diary-header .toolbar-buttons {\n    grid-column: 2;\n    justify-self: end;\n    align-self: center;\n    color: #5b75a7; }\n\n.diary-header .toolbar-buttons .icon-button {\n      margin-left: 1em; }\n\n.diary-header .title {\n    grid-column: 1;\n    color: white;\n    font: 20pt \"Alegreya\", serif; }\n\n.footer {\n  color: #5b75a7;\n  font-size: 10pt; }\n\n.footer a {\n    color: #5b75a7;\n    text-decoration: none;\n    padding-right: 2em; }\n\n.gap {\n  margin-right: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb2RpYXJ5L2RpYXJ5L0Q6XFxwcm9qZWt0ZVxcdG9kb2FyeS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxkaWFsb2dzLnNjc3MiLCJzcmMvYXBwL3RvZG9kaWFyeS9kaWFyeS9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3RvZG9kaWFyeS9kaWFyeS9EOlxccHJvamVrdGVcXHRvZG9hcnkvc3JjXFxhcHBcXHRvZG9kaWFyeVxcZGlhcnlcXGRpYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsT0FBTyxFQUFBOztBQUdUO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQ0RrQixFQUFBOztBQ0xwQjtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBRVosYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxrQkFBa0IsRUFBQTs7QUFOcEI7SUFTSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjRE5pQixFQUFBOztBQ05yQjtNQWVNLGdCQUFnQixFQUFBOztBQWZ0QjtJQW9CSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLDRCRHZCbUMsRUFBQTs7QUMyQnZDO0VBQ0UsY0RyQm1CO0VDc0JuQixlQUFlLEVBQUE7O0FBRmpCO0lBSUksY0R4QmlCO0lDeUJqQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b2RvZGlhcnkvZGlhcnkvZGlhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLnNwYWNlIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZXhwbGFuYXRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBmb250LXNpemU6IDExcHQ7XHJcbiAgY29sb3I6ICRjb2xvcl9pbmZvO1xyXG59XHJcbiIsIiRib3JkZXJfcmFkaXVzOiAwLjhlbTtcclxuXHJcbiRmb250X2ZhY2VfaGlnaGxpZ2h0OiAnQWxlZ3JleWEnLCBzZXJpZjtcclxuXHJcbiRmb250X3NpemVfaGVhZGluZzogMjRweDtcclxuXHJcbiRjb2xvcl9oZWFkbGluZXM6ICM5ZDlkOWQ7XHJcbiRjb2xvcl9zdWJ0aXRsZTogIzk5YjdlMjtcclxuJGNvbG9yX2luZm86ICNjYWNhY2E7XHJcbiRjb2xvcl9pY29uczogIzViNzVhNztcclxuXHJcbiRjb2xvcl9pbmRpY2F0b3JfbmV3OiAkY29sb3Jfc3VidGl0bGU7XHJcbiRjb2xvcl9pbmRpY2F0b3JfbW92ZWQ6ICRjb2xvcl9oZWFkbGluZXM7XHJcblxyXG4kY29sb3JfYmFja2dyb3VuZDogI2RjZTJlYztcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2RpYWxvZ3MnO1xyXG5cclxuLmRpYXJ5LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgcGFkZGluZzogMWVtO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgxNTBweCwgMWZyKTtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcblxyXG4gIC50b29sYmFyLWJ1dHRvbnMge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkY29sb3JfaWNvbnM7XHJcblxyXG4gICAgLmljb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQ6IDIwcHQgJGZvbnRfZmFjZV9oaWdobGlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBjb2xvcjogJGNvbG9yX2ljb25zO1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxuICBhIHtcclxuICAgIGNvbG9yOiAkY29sb3JfaWNvbnM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tododiary/diary/diary.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tododiary/diary/diary.component.ts ***!
  \****************************************************/
/*! exports provided: DiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryComponent", function() { return DiaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entries_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entries/entry.service */ "./src/app/tododiary/entries/entry.service.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./src/app/logger.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _todo_todos_todo_entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../todo/todos/todo-entry */ "./src/app/todo/todos/todo-entry.ts");
/* harmony import */ var _todo_todos_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../todo/todos/todo.service */ "./src/app/todo/todos/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var appVersion = __webpack_require__(/*! ../../../../package.json */ "./package.json").version;
var DiaryComponent = /** @class */ (function () {
    function DiaryComponent(diaryEntryService, http, logger, todoService) {
        this.diaryEntryService = diaryEntryService;
        this.http = http;
        this.logger = logger;
        this.todoService = todoService;
        this.showCreateNewEntry = true;
        this.version = appVersion;
        this.entries = [];
    }
    DiaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logger.debug('init diary...');
        this.getEntries().then(function (entries) {
            if (entries.length === 0) {
                _this.http.get('assets/demoentry.json')
                    .subscribe(function (res) {
                    var demoEntry = res['demoEntry'];
                    if (demoEntry) {
                        var openTodos = demoEntry.todos.filter(function (todo) { return todo.status === _todo_todos_todo_entry__WEBPACK_IMPORTED_MODULE_4__["todoStatus"].OPEN; });
                        _this.todoService.addOpenTodosToDefaultCategory(openTodos);
                        _this.addEntry(demoEntry);
                    }
                });
            }
        }).catch(function (err) {
            _this.logger.error('could not get entries for displaying: ' + err);
        });
    };
    DiaryComponent.prototype.getEntries = function () {
        var _this = this;
        return this.diaryEntryService.getEntries().then(function (entries) {
            _this.logger.debug('setting entries for display...');
            _this.entries = entries;
            return entries;
        });
    };
    DiaryComponent.prototype.addEntry = function (entry) {
        var _this = this;
        this.diaryEntryService.addEntry(entry).then(function (entries) {
            _this.destroyCreateEntry();
            _this.entries = entries;
        });
    };
    DiaryComponent.prototype.destroyCreateEntry = function () {
        this.showCreateNewEntry = false;
    };
    DiaryComponent.prototype.showCreateEntry = function () {
        this.showCreateNewEntry = true;
    };
    DiaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ta-diary',
            template: __webpack_require__(/*! ./diary.component.html */ "./src/app/tododiary/diary/diary.component.html"),
            providers: [_entries_entry_service__WEBPACK_IMPORTED_MODULE_1__["DiaryEntryService"]],
            styles: [__webpack_require__(/*! ./diary.component.scss */ "./src/app/tododiary/diary/diary.component.scss")]
        }),
        __metadata("design:paramtypes", [_entries_entry_service__WEBPACK_IMPORTED_MODULE_1__["DiaryEntryService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"],
            _todo_todos_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"]])
    ], DiaryComponent);
    return DiaryComponent;
}());



/***/ }),

/***/ "./src/app/tododiary/entries/entry.service.ts":
/*!****************************************************!*\
  !*** ./src/app/tododiary/entries/entry.service.ts ***!
  \****************************************************/
/*! exports provided: DiaryEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryEntryService", function() { return DiaryEntryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/database.service */ "./src/app/tododiary/database/database.service.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger */ "./src/app/logger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiaryEntryService = /** @class */ (function () {
    function DiaryEntryService(databaseService, logger) {
        this.databaseService = databaseService;
        this.logger = logger;
    }
    DiaryEntryService.prototype.getEntries = function () {
        return this.databaseService.getEntries();
    };
    DiaryEntryService.prototype.addEntry = function (entry) {
        var _this = this;
        this.logger.debug('adding a new entry...');
        return this.getEntries()
            .then(function (entries) {
            entries.unshift(entry);
            return entries;
        })
            .then(function (entries) { return _this.databaseService.updateEntries(entries); });
    };
    DiaryEntryService.prototype.deleteEntry = function (entry) {
        var _this = this;
        this.logger.debug('removing entry...');
        return this.getEntries()
            .then(function (entries) {
            var index = entries.findIndex(function (element) {
                return _this.isEntryEqual(entry, element);
            });
            if (index !== -1) {
                entries.splice(index, 1);
            }
            else {
                _this.logger.error('could not find given entry. cannot remove.');
            }
            return entries;
        })
            .then(function (entries) { return _this.databaseService.updateEntries(entries); });
    };
    DiaryEntryService.prototype.isEntryEqual = function (element1, element2) {
        if (!(element1 instanceof Object && element2 instanceof Object)) {
            return false;
        }
        if (!isMetaEqual() || !areTodosEqual()) {
            return false;
        }
        return element1.notes === element2.notes;
        function isMetaEqual() {
            if (!element1.meta.length === element2.meta.length) {
                return false;
            }
            var equalMeta = Object.keys(element1.meta).every(function (metaKey) {
                return element2.meta[metaKey] && element1.meta[metaKey] === element2.meta[metaKey];
            });
            return equalMeta;
        }
        function areTodosEqual() {
            if (!element1.todos && !element2.todos) {
                return true;
            }
            if (!element1.todos.length === element2.todos.length) {
                return false;
            }
            var equal = element1.todos.every(function (todo, index) {
                return todo.status === element2.todos[index].status && todo.text === element2.todos[index].text;
            });
            return equal;
        }
    };
    DiaryEntryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]])
    ], DiaryEntryService);
    return DiaryEntryService;
}());



/***/ }),

/***/ "./src/app/tododiary/entries/entry.ts":
/*!********************************************!*\
  !*** ./src/app/tododiary/entries/entry.ts ***!
  \********************************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
var Entry = /** @class */ (function () {
    function Entry(notes, todos) {
        if (notes === void 0) { notes = ''; }
        if (todos === void 0) { todos = []; }
        this.meta = {
            timestamp: Date.now()
        };
        this.todos = todos;
        this.notes = notes;
    }
    return Entry;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projekte\todoary\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map