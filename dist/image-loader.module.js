var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { File } from '@ionic-native/file/ngx';
import { ImgLoaderComponent } from './components/img-loader';
import { ImageLoader } from './providers/image-loader';
import { ImageLoaderConfig } from './providers/image-loader-config';
import { IonicModule } from '@ionic/angular';
var IonicImageLoader = /** @class */ (function () {
    function IonicImageLoader() {
    }
    IonicImageLoader_1 = IonicImageLoader;
    IonicImageLoader.forRoot = function () {
        return {
            ngModule: IonicImageLoader_1,
            providers: [ImageLoaderConfig, ImageLoader, File],
        };
    };
    var IonicImageLoader_1;
    IonicImageLoader = IonicImageLoader_1 = __decorate([
        NgModule({
            declarations: [ImgLoaderComponent],
            imports: [IonicModule, CommonModule, HttpClientModule],
            exports: [ImgLoaderComponent],
        })
    ], IonicImageLoader);
    return IonicImageLoader;
}());
export { IonicImageLoader };
//# sourceMappingURL=image-loader.module.js.map