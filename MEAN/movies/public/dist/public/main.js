(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/add-review/add-review.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-review/add-review.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZXZpZXcvYWRkLXJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-review/add-review.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-review/add-review.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"comment\" class=\"container col-8 bg-light rounded mt-4 pb-3 border border-primary\">\n  <h2>Add a review for {{movie.title}}</h2>\n\n  <div class=\"container col-10 mt-5\">\n    <p *ngFor=\"let error of addErrors\" class=\"text-danger mb-0\">{{ error }}</p>\n\n    <form (click) = \"clearError()\">\n\n        <div class=\"form-group text-dark\">\n          <label for=\"price\" class=\"font-weight-bold\"> Your Name </label>\n          <input type=\"text\" name=\"username\" [(ngModel)]=\"comment.name\" class=\"form-control\">\n        </div>\n        <div>\n          <label for=\"stars\" class=\"font-weight-bold\"> Stars </label>\n          <select name=\"stars\" [(ngModel)]=\"comment.rating\" class=\"form-control\">\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n          </select>\n        </div>\n        <div class=\"form-group rounded\">\n            <label for=\"review\" class=\"font-weight-bold\"> Your review </label>\n            <textarea name=\"review\" [(ngModel)] = \"comment.review\" class=\"form-control\" rows=\"2\" placeholder=\"Type your comment here\"></textarea>\n        </div>\n\n        <a [routerLink]=\"['/movies']\" class=\"btn btn-lg btn-warning\">Cancel</a>\n        <button (click)=\"addCommentToMovie()\" class=\"btn btn-lg btn-primary offset-5\">Submit</button>\n    </form>\n  </div>\n\n</div>\n  \n  \n"

/***/ }),

/***/ "./src/app/add-review/add-review.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-review/add-review.component.ts ***!
  \****************************************************/
/*! exports provided: AddReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewComponent", function() { return AddReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddReviewComponent = /** @class */ (function () {
    function AddReviewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.addErrors = [];
    }
    AddReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
            _this.getAMovieFromDB(_this.id);
        });
    };
    AddReviewComponent.prototype.getAMovieFromDB = function (id) {
        var _this = this;
        var tempObservable = this._httpService.getOneMovie(id);
        tempObservable.subscribe(function (data) {
            console.log(data);
            _this.movie = data["movie"];
            _this.comment = {
                name: "",
                rating: 0,
                review: ""
            };
        });
    };
    AddReviewComponent.prototype.clearError = function () {
        this.addErrors = [];
    };
    AddReviewComponent.prototype.addCommentToMovie = function () {
        var _this = this;
        console.log(this.comment);
        var tempObservable = this._httpService.addComment(this.id, this.comment);
        tempObservable.subscribe(function (data) {
            console.log(data);
            if (data["status"] == true) {
                _this._router.navigate(['/movies']);
            }
            else {
                if (data["status"] == false) {
                    for (var x in data["error"].errors) {
                        _this.addErrors.push(data["error"].errors[x].message);
                    }
                }
            }
        });
    };
    AddReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-review',
            template: __webpack_require__(/*! ./add-review.component.html */ "./src/app/add-review/add-review.component.html"),
            styles: [__webpack_require__(/*! ./add-review.component.css */ "./src/app/add-review/add-review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddReviewComponent);
    return AddReviewComponent;
}());



/***/ }),

/***/ "./src/app/all-movies/all-movies.component.css":
/*!*****************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1tb3ZpZXMvYWxsLW1vdmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/all-movies/all-movies.component.html":
/*!******************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-8 bg-light rounded mt-4 pb-3\">\n  <h2 class=\"d-inline-block\">Movie List</h2>\n  <a (click)=\"initAddNew()\" class=\"btn btn-success offset-7 d-inline-block align-bottom\">Add a new movie</a>\n\n  <div *ngIf=\"allMovies\" class=\"container col-10 mt-5\">\n    <table class=\"table table-striped text-center table-bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Movie title</th>\n          <th scope=\"col\">Average Rating</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let movie of allMovies\">\n          <td>{{ movie.title }}</td>\n          <td>{{ movie.average_rating }}</td>\n          <td> <a [routerLink]=\"['/movies', movie._id]\" class=\"btn btn-primary mr-3\">Read reviews</a> <a [routerLink]=\"['/movies', movie._id, 'review']\" class=\"btn btn-warning\">Write review</a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <app-new-movie *ngIf=\"movie && status == true\" [movie]=\"movie\" (aTaskEmitter)=\"eventParent()\"></app-new-movie>\n\n</div>"

/***/ }),

/***/ "./src/app/all-movies/all-movies.component.ts":
/*!****************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.ts ***!
  \****************************************************/
/*! exports provided: AllMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMoviesComponent", function() { return AllMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AllMoviesComponent = /** @class */ (function () {
    function AllMoviesComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.status = false;
    }
    AllMoviesComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    AllMoviesComponent.prototype.getMovies = function () {
        var _this = this;
        var tempObservable = this._httpService.getMovies();
        tempObservable.subscribe(function (data) {
            console.log(data);
            _this.allMovies = data["movies"];
        });
    };
    AllMoviesComponent.prototype.initAddNew = function () {
        this.status = true;
        this.movie = {
            title: "",
            comment: {
                name: "",
                rating: 0,
                review: ""
            }
        };
    };
    AllMoviesComponent.prototype.eventParent = function () {
        this.getMovies();
        this.movie = {};
        this.movie.comment = {};
        this.status = false;
    };
    AllMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-movies',
            template: __webpack_require__(/*! ./all-movies.component.html */ "./src/app/all-movies/all-movies.component.html"),
            styles: [__webpack_require__(/*! ./all-movies.component.css */ "./src/app/all-movies/all-movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AllMoviesComponent);
    return AllMoviesComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-movies/all-movies.component */ "./src/app/all-movies/all-movies.component.ts");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-review/add-review.component */ "./src/app/add-review/add-review.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");








var routes = [
    { path: 'movies', component: _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_3__["AllMoviesComponent"], children: [
            { path: 'new', component: _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_4__["NewMovieComponent"] }
        ]
    },
    { path: 'movies/:id', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_7__["ReviewsComponent"] },
    { path: 'movies/:id/review', component: _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_5__["AddReviewComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/movies' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-secondary p-4\">\n  <h1 class=\"display-4 text-light\">Eagle Eye Square</h1>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-movies/all-movies.component */ "./src/app/all-movies/all-movies.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-review/add-review.component */ "./src/app/add-review/add-review.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_5__["AllMoviesComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__["ReviewsComponent"],
                _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_7__["NewMovieComponent"],
                _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__["AddReviewComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getMovies = function () {
        return this._http.get('/mymovies');
    };
    HttpService.prototype.addMovie = function (movie) {
        return this._http.post('/mymovie', movie);
    };
    HttpService.prototype.getOneMovie = function (id) {
        return this._http.get("/mymovie/" + id);
    };
    HttpService.prototype.updateMovie = function (id, comment) {
        return this._http.put("/edit/" + id, comment);
    };
    HttpService.prototype.takeOutMovie = function (id) {
        return this._http.delete("/" + id);
    };
    HttpService.prototype.addComment = function (id, comment) {
        return this._http.put("/mymovies/edit/" + id, comment);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new-movie/new-movie.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1tb3ZpZS9uZXctbW92aWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-8 bg-light rounded mt-4 pb-3 border border-primary\">\n  <h2>Submit a movie and your review</h2>\n\n  <div class=\"container col-10 mt-5\">\n    <p *ngFor=\"let error of addErrors\" class=\"text-danger mb-0\">{{ error }}</p>\n\n    <form (click) = \"clearError()\">\n        \n        <div *ngIf=\"title.errors && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!title.errors.required\">\n              Movie title is required!\n            </div>\n            <div [hidden]=\"!title.errors.minlength\">\n              Title must be at least 3 characters long.\n            </div>\n        </div>\n        <div *ngIf=\"Uname.errors && (Uname.dirty || Uname.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!Uname.errors.required\">\n              Provide a name!\n            </div>\n            <div [hidden]=\"!Uname.errors.minlength\">\n              Name must be at least 3 characters long.\n            </div>\n        </div>\n        <div *ngIf=\"comment.errors && (comment.dirty || comment.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!comment.errors.required\">\n              Comment is required!\n            </div>\n            <div [hidden]=\"!comment.errors.minlength\">\n              Comment must be at least 3 characters long.\n            </div>\n        </div>\n\n        <div class=\"form-group text-dark\">\n          <label for=\"title\" class=\"font-weight-bold\">Movie Title </label>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"movie.title\" required minlength=\"3\" #title=\"ngModel\" class=\"form-control\">\n        </div>\n\n        <div class=\"form-group text-dark\">\n          <label for=\"price\" class=\"font-weight-bold\"> Your Name </label>\n          <input type=\"text\" name=\"Username\" [(ngModel)]=\"movie.comment.name\" required minlength=\"3\" #Uname=\"ngModel\" class=\"form-control\">\n        </div>\n\n        <div>\n          <label for=\"stars\" class=\"font-weight-bold\"> Stars </label>\n          <select name=\"stars\" [(ngModel)]=\"movie.comment.rating\" class=\"form-control\">\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n          </select>\n        </div>\n\n        <div class=\"form-group rounded\">\n            <label for=\"review\" class=\"font-weight-bold\"> Your review </label>\n            <textarea name=\"review\" [(ngModel)] = \"movie.comment.review\" required minlength=\"3\" #comment=\"ngModel\" class=\"form-control\" rows=\"2\" placeholder=\"Type your comment here\"></textarea>\n        </div>\n\n        <a (click)=\"returnToMovie()\" class=\"btn btn-lg btn-warning\">Cancel</a>\n        <button (click)=\"addMovieToDB()\" class=\"btn btn-lg btn-primary offset-5\">Submit</button>\n    </form>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.ts ***!
  \**************************************************/
/*! exports provided: NewMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMovieComponent", function() { return NewMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewMovieComponent = /** @class */ (function () {
    function NewMovieComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.aTaskEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addErrors = [];
    }
    NewMovieComponent.prototype.ngOnInit = function () {
    };
    NewMovieComponent.prototype.addMovieToDB = function () {
        var _this = this;
        var tempObservable = this._httpService.addMovie(this.movie);
        tempObservable.subscribe(function (data) {
            console.log(data);
            if (data["status"] == true) {
                var x = _this._httpService.getMovies();
                x.subscribe(function (data) {
                    console.log("yes");
                });
                _this.aTaskEmitter.emit();
            }
            else {
                if (data["status"] == false) {
                    for (var x in data["error"].errors) {
                        _this.addErrors.push(data["error"].errors[x].message);
                    }
                }
            }
        });
    };
    NewMovieComponent.prototype.clearError = function () {
        this.addErrors = [];
    };
    NewMovieComponent.prototype.returnToMovie = function () {
        this.aTaskEmitter.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewMovieComponent.prototype, "aTaskEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewMovieComponent.prototype, "movie", void 0);
    NewMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-movie',
            template: __webpack_require__(/*! ./new-movie.component.html */ "./src/app/new-movie/new-movie.component.html"),
            styles: [__webpack_require__(/*! ./new-movie.component.css */ "./src/app/new-movie/new-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewMovieComponent);
    return NewMovieComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/reviews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"container col-8 bg-light rounded mt-4 pb-3\">\n  <h2 class=\"d-inline-block\">Reviews for {{ movie.title }}</h2>\n  <a (click)=\"takeOutMovie()\" class=\"btn btn-warning offset-5 d-inline-block align-bottom\">Delete Movie</a>\n\n  <div class=\"container col-10 mt-5\">\n    <table class=\"table table-striped text-center table-bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Reviewer</th>\n          <th scope=\"col\">Stars</th>\n          <th scope=\"col\">Reviews</th>\n          <th scope=\"col\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let comm of movie.comment\">\n          <td>{{ comm.name }}</td>\n          <td>{{ comm.rating }}</td>\n          <td>{{ comm.review }}</td>\n          <td> <a (click)=\"deleteComment(comm._id)\" class=\"btn btn-warning mr-3\">Delete</a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ReviewsComponent = /** @class */ (function () {
    // addErrors = [];
    function ReviewsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
            _this.getAMovieFromDB(_this.id);
        });
    };
    ReviewsComponent.prototype.getAMovieFromDB = function (id) {
        var _this = this;
        var tempObservable = this._httpService.getOneMovie(id);
        tempObservable.subscribe(function (data) {
            console.log(data);
            _this.movie = data["movie"];
        });
    };
    ReviewsComponent.prototype.deleteComment = function (commid) {
        var _this = this;
        var comment = { id: commid };
        var tempObservable = this._httpService.updateMovie(this.id, comment);
        tempObservable.subscribe(function (data) {
            if (data["status"] == true) {
                _this.movie = {};
                _this.getAMovieFromDB(_this.id);
            }
        });
    };
    ReviewsComponent.prototype.takeOutMovie = function () {
        var _this = this;
        var tempObservable = this._httpService.takeOutMovie(this.id);
        tempObservable.subscribe(function (data) {
            console.log(data);
            if (data["status"] == true) {
                _this._router.navigate(['/movies']);
            }
        });
    };
    ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/reviews/reviews.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ReviewsComponent);
    return ReviewsComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\olaku\OneDrive\Documents\movies\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map