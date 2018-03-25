"use strict";
var router_1 = require("@angular/router");
var profile_component_1 = require("./components/profile/profile.component");
var search_component_1 = require("./components/search/search.component");
var appRoutes = [
    {
        path: '',
        component: search_component_1.SearchComponent
    },
    {
        path: 'user-profile/:login',
        component: profile_component_1.ProfileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map