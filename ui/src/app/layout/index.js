/*
 * Copyright © 2016 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import './home.scss';

import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import FBAngular from 'angular-fullscreen';
import 'angular-breadcrumb';

import thingsboardMenu from '../services/menu.service';
import thingsboardApiDevice from '../api/device.service';
import thingsboardApiLogin from '../api/login.service';
import thingsboardApiUser from '../api/user.service';

import thingsboardNoAnimate from '../components/no-animate.directive';
import thingsboardSideMenu from '../components/side-menu.directive';

import thingsboardTenant from '../tenant';
import thingsboardCustomer from '../customer';
import thingsboardUser from '../user';
import thingsboardHomeLinks from '../home';
import thingsboardAdmin from '../admin';
import thingsboardProfile from '../profile';
import thingsboardDevice from '../device';
import thingsboardWidgetLibrary from '../widget';
import thingsboardDashboard from '../dashboard';
import thingsboardPlugin from '../plugin';
import thingsboardRule from '../rule';

import thingsboardJsonForm from '../jsonform';

import HomeRoutes from './home.routes';
import HomeController from './home.controller';
import BreadcrumbLabel from './breadcrumb-label.filter';
import BreadcrumbIcon from './breadcrumb-icon.filter';

export default angular.module('thingsboard.home', [
    uiRouter,
    ngSanitize,
    FBAngular.name,
    'ncy-angular-breadcrumb',
    thingsboardMenu,
    thingsboardHomeLinks,
    thingsboardTenant,
    thingsboardCustomer,
    thingsboardUser,
    thingsboardAdmin,
    thingsboardProfile,
    thingsboardDevice,
    thingsboardWidgetLibrary,
    thingsboardDashboard,
    thingsboardPlugin,
    thingsboardRule,
    thingsboardJsonForm,
    thingsboardApiDevice,
    thingsboardApiLogin,
    thingsboardApiUser,
    thingsboardNoAnimate,
    thingsboardSideMenu
])
    .config(HomeRoutes)
    .controller('HomeController', HomeController)
    .filter('breadcrumbLabel', BreadcrumbLabel)
    .filter('breadcrumbIcon', BreadcrumbIcon)
    .name;
