webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__battle_battle_component__ = __webpack_require__("../../../../../src/app/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rankings_rankings_component__ = __webpack_require__("../../../../../src/app/rankings/rankings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/battle' },
    { path: 'battle', component: __WEBPACK_IMPORTED_MODULE_2__battle_battle_component__["a" /* BattleComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_3__results_results_component__["a" /* ResultsComponent */] },
    { path: 'rankings', component: __WEBPACK_IMPORTED_MODULE_4__rankings_rankings_component__["a" /* RankingsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>GitHub Battle</h1>\n<h3>\n  <a [routerLink]=\"['battle']\">Battle</a> | \n  <a [routerLink]=\"['rankings']\">Rankings</a>\n</h3>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__battle_battle_component__ = __webpack_require__("../../../../../src/app/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rankings_rankings_component__ = __webpack_require__("../../../../../src/app/rankings/rankings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__battle_battle_component__["a" /* BattleComponent */],
            __WEBPACK_IMPORTED_MODULE_8__rankings_rankings_component__["a" /* RankingsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__results_results_component__["a" /* ResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__users_service__["a" /* UsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".battle {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.player {\n    border: 1px solid black;\n    padding: 20px;\n    width: 300px;\n    margin-right: 20px;\n}\n\nimg {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"battle\">\n\n  <div class=\"player\">\n    <div *ngIf=\"!player1.isUser\">\n      <h1>Player 1</h1>\n      <form (submit)=\"findUser(player1.username, 1)\">\n        <p>\n          GitHub Username: \n          <input\n            type=\"text\"\n            name=\"username\"\n            required\n            [(ngModel)]=\"player1.username\"\n            #username=\"ngModel\">\n        </p>\n        <p style=\"color:red;\" *ngIf=\"player1.isUser===false\">\n          GitHub username does not exist. Try again.\n        </p>\n        <input type=\"submit\" value=\"Add User\" [disabled]=\"!username.valid\">\n      </form>\n    </div> <!-- end Form div -->\n    <div *ngIf=\"player1.isUser\">\n      <img src=\"{{player1.imgURL}}\" alt=\"github avatar\">\n      <p>{{ player1.username }}</p>\n    </div> <!-- end GitHub Info div -->\n  </div> <!-- end Player div -->\n\n  <div class=\"player\">\n    <div *ngIf=\"!player2.isUser\">\n      <h1>Player 2</h1>\n      <form (submit)=\"findUser(player2.username, 2)\">\n        <p>\n          GitHub Username: \n          <input\n            type=\"text\"\n            name=\"username\"\n            required\n            [(ngModel)]=\"player2.username\"\n            #username=\"ngModel\">\n        </p>\n        <p style=\"color:red;\" *ngIf=\"player2.isUser===false\">\n          GitHub username does not exist. Try again.\n        </p>\n        <input type=\"submit\" value=\"Add User\" [disabled]=\"!username.valid\">\n      </form>\n    </div> <!-- end Form div -->\n    <div *ngIf=\"player2.isUser\">\n      <img src=\"{{player2.imgURL}}\" alt=\"github avatar\">\n      <p>{{ player2.username }}</p>\n    </div> <!-- end GitHub Info div -->\n  </div> <!-- end Player div -->\n</div>\n\n<p>\n  <button\n    *ngIf=\"player1.isUser && player2.isUser\"\n    (click)=\"battle()\">\n    BATTLE!\n  </button>\n</p>"

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BattleComponent = (function () {
    function BattleComponent(_usersService, _router) {
        this._usersService = _usersService;
        this._router = _router;
        this.player1 = {
            isUser: null,
            username: '',
            imgURL: '',
            user: null
        };
        this.player2 = {
            isUser: null,
            username: '',
            imgURL: '',
            user: null
        };
    }
    BattleComponent.prototype.findUser = function (username, playerNum) {
        var _this = this;
        this._usersService.findUser(username, function (user) {
            if (playerNum == 1) {
                _this.player1.isUser = true;
                _this.player1.imgURL = user.avatar_url;
                _this.player1.user = user;
            }
            else {
                _this.player2.isUser = true;
                _this.player2.imgURL = user.avatar_url;
                _this.player2.user = user;
            }
        }, function () {
            if (playerNum == 1) {
                _this.player1.isUser = false;
            }
            else {
                _this.player2.isUser = false;
            }
        });
    };
    BattleComponent.prototype.battle = function () {
        var _this = this;
        this._usersService.battle(this.player1, this.player2, function () {
            _this._router.navigateByUrl('/results');
        });
    };
    BattleComponent.prototype.ngOnInit = function () {
    };
    return BattleComponent;
}());
BattleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-battle',
        template: __webpack_require__("../../../../../src/app/battle/battle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/battle/battle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], BattleComponent);

var _a, _b;
//# sourceMappingURL=battle.component.js.map

/***/ }),

/***/ "../../../../../src/app/rankings/rankings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rankings/rankings.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Rankings</h3>\n\n<div class=\"user\" *ngFor=\"let user of users, let i = index\">\n  {{i + 1}}. {{ user.username }} (Score: {{ user.score }})\n</div>"

/***/ }),

/***/ "../../../../../src/app/rankings/rankings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RankingsComponent = (function () {
    function RankingsComponent(_usersService) {
        var _this = this;
        this._usersService = _usersService;
        this._usersService.getAllUsers(function (users) {
            _this.users = users;
        });
    }
    RankingsComponent.prototype.ngOnInit = function () {
    };
    return RankingsComponent;
}());
RankingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-rankings',
        template: __webpack_require__("../../../../../src/app/rankings/rankings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rankings/rankings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]) === "function" && _a || Object])
], RankingsComponent);

var _a;
//# sourceMappingURL=rankings.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"{{user1.imgURL}}\" alt=\"github avatar\">\n<div style=\"color:green;\">\n  <h3>1st Place:</h3>\n  <p>{{ user1.username }} (Score: {{ user1.score }})</p>\n</div>\n<div style=\"color:red;\">\n  <h3>2nd Place:</h3>\n  <p>{{ user2.username }} (Score: {{ user2.score }})</p>\n</div>\n<p>\n  <button (click)=\"reset()\">Reset</button>\n</p>"

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = (function () {
    function ResultsComponent(_usersService, _router) {
        this._usersService = _usersService;
        this._router = _router;
        var recentScores = this._usersService.getRecentScores();
        if (recentScores[0].score > recentScores[1].score) {
            this.user1 = recentScores[0];
            this.user2 = recentScores[1];
        }
        else {
            this.user1 = recentScores[1];
            this.user2 = recentScores[0];
        }
    }
    ResultsComponent.prototype.reset = function () {
        this._router.navigateByUrl('/');
    };
    ResultsComponent.prototype.ngOnInit = function () {
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ResultsComponent);

var _a, _b;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
    }
    UsersService.prototype.getAllUsers = function (callback) {
        var _this = this;
        this._http.get('/users').subscribe(function (response) {
            _this.users = response.json();
            callback(_this.users);
        }, function (err) {
            console.log(err);
        });
    };
    UsersService.prototype.findUser = function (username, callback, errCallback) {
        this._http.get('https://api.github.com/users/' + username + '?access_token=90b3e98b010c57bfe92ee0004693eb94fc84aee8').subscribe(function (response) {
            callback(response.json());
        }, function (err) {
            errCallback();
        });
    };
    UsersService.prototype.battle = function (user1, user2, callback) {
        this.user1 = user1;
        var score1 = (user1.user.public_repos + user1.user.followers) * 12;
        this.user1.score = score1;
        this.addUser({ username: user1.username, score: score1 }, function () {
        });
        this.user2 = user2;
        var score2 = (user2.user.public_repos + user2.user.followers) * 12;
        this.user2.score = score2;
        this.addUser({ username: user2.username, score: score2 }, function () {
        });
        callback();
    };
    UsersService.prototype.addUser = function (user, callback) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.post('/users', body, options).subscribe(function (response) {
            callback();
        }, function (err) {
            console.log(err);
        });
    };
    UsersService.prototype.getRecentScores = function () {
        return [this.user1, this.user2];
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map