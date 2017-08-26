import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {GenericComponent}from './generic/generic.component';
import {ElementsComponent}from './elements/elements.component';
import {FooterComponent}from './footer/footer.component';
import {NavComponent}from './nav/nav.component';
import {HeaderComponent}from './header/header.component';
import {IntroComponent}from './intro/intro.component';
import {CopyrightComponent}from './copyright/copyright.component';

const menu_navbar = [
    {
        path:'',
        data:{
            hide_menu:false,
            name:"Home"
        },
        component:HomeComponent
    },
    {
        path:'generic',
        data:{
            hide_menu:false,
            name:"Generic"
        },
        component:GenericComponent
    }
    ,
    {
        path:'elements',
        data:{
            hide_menu:false,
            name:"Elements"
        },
        component:ElementsComponent
    },
    {
        path:'footer',
        data:{
            hide_menu:true,
            name:"Footer"
        },
        component:FooterComponent
    },
    {
        path:'nav',
        data:{
            hide_menu:true,
            name:"Nav"
        },
        component:NavComponent
    },
    {
        path:'header',
        data:{
            hide_menu:true,
            name:"Header"
        },
        component:HeaderComponent
    },
    {
        path:'intro',
        data:{
            hide_menu:true,
            name:"Intro"
        },
        component:IntroComponent
    },
    {
        path:'copyright',
        data:{
            hide_menu:true,
            name:"Copyright"
        },
        component:CopyrightComponent
    }
]

const routes : Routes = menu_navbar;
export const routing = RouterModule.forRoot(routes);
export const Menu_Navbar= menu_navbar;