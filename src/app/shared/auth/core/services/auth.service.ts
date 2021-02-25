import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import * as authConstant from '../auth.constant';
import * as authType from '../auth.types';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _apiService: ApiService) { }

  addAccount(payload:authType.GetAccountType){
    return this._apiService.post(authConstant.ADD_ACCOUNT, payload);
  }
  roleDetails(){
    return this._apiService.post(authConstant.ROLE_DETAILS);
  }
  // for sample
  getTodoList(){
    return this._apiService.get(authConstant.TODOS);
  }
}
