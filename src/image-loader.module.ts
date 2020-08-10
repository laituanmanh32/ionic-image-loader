import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { File }                          from '@ionic-native/file/ngx';
import { ImgLoaderComponent }            from './components/img-loader';
import { ImageLoader }                   from './providers/image-loader';
import { ImageLoaderConfig }             from './providers/image-loader-config';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ImgLoaderComponent],
  imports: [IonicModule, CommonModule, HttpClientModule],
  exports: [ImgLoaderComponent],
})
export class IonicImageLoader {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicImageLoader,
      providers: [ImageLoaderConfig, ImageLoader, File],
    };
  }
}
