import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderType } from 'src/app/core/app.types';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  show = false;
  subscription!: Subscription;
  constructor(private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this._loaderService.loaderState
      .subscribe((state: LoaderType) => {
        this.show = state.show;
      })
  }

}
