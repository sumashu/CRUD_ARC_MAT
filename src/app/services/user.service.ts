import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  listUSers()
  {
    return this._http.get(BaseUrl);
  }
  viewsingleUser(id:any)
  {
    return this._http.get(BaseUrl+id);
  }
  deletesingleUSers(id:any)
  {
    return this._http.delete(BaseUrl+id);
  }
  addsingleUser(data:any){

    return this._http.post(BaseUrl,data);
  }
  editSingleUser(id:any,data:any)
  {
    return this._http.put(BaseUrl+id,data);
  }

}
