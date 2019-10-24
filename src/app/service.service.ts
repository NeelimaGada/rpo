import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements HttpInterceptor {
  constructor(private ht: HttpClient) { }






token;





  add(a) {
    const body = new HttpParams()
      .set('username', a.username)
      .set('password', a.password);
    return this.ht.post("http://192.168.1.137:8087/rpo/rest/user/authenticate", body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/form-data')
      }
    )
  }
  token1
  add1(a) {
    this.token1 = localStorage.getItem('token')
    return this.ht.post("http://192.168.1.137:8087/rpo/rest/BillingModel/", a,
      {
        headers: {
          'X-Access-Token': this.token1,
          'Content-Type': 'application/json'
        }
      }
    )
  }

  post(a) {
    this.token1 = localStorage.getItem('token')
    return this.ht.post("http://192.168.1.137:8087/rpo/rest/BillingModel/"+a.id,a,
      {
        headers: {
          'X-Access-Token': this.token1,
          'Content-Type': 'application/json'
        }
      }
    )
  }




 del(a) {
     this.token1 = localStorage.getItem('token')
    return this.ht.delete("http://192.168.1.137:8087/rpo/rest/BillingModel/"+a,
    {
      headers: {
        'X-Access-Token': this.token1,
        'Content-Type': 'application/json'
      }
    })
  }
  getItem() {
    return localStorage.getItem('token')
  }
  get(e) {
    return this.ht.get("http://192.168.1.137:8087/rpo/rest/BillingModel", {
      headers: {
        'X-Access-Token': e,
        'Content-Type': 'application/json'
      }
    });
  }
  intercept(req, next) {
    let token = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${this.getItem()}`
      }
    })
    return next.handle(token);
  }


  noticeget(e) {
    return this.ht.get("http://192.168.1.137:8087/rpo/rest/noticePeriod", {
    headers: {
    'X-Access-Token': e,
    'Content-Type': 'application/json'
    }
    }
    );
    
    }
    
    noticeadd(a) {
    this.token = localStorage.getItem('token');
    return this.ht.post("http://192.168.1.137:8087/rpo/rest/noticePeriod", a,
    {
    // headers: new HttpHeaders()
    // .set('Content-Type', "application/json;charset=UTF-8")
    // .set('X-Access-Token', this.token)
    headers: {
    'X-Access-Token': this.token,
    'Content-Type': 'application/json;charset=UTF-8'
    }
    }
    )
    
    }
   
   
   
   
   
    
    noticeedit(a) {
    this.token = localStorage.getItem('token');
    return this.ht.post("http://192.168.1.137:8087/rpo/rest/noticePeriod/"+a.id, a,
    {
    // headers: new HttpHeaders()
    // .set('Content-Type', "application/json;charset=UTF-8")
    // .set('X-Access-Token', this.token)
    headers: {
    'X-Access-Token': this.token,
    'Content-Type': 'application/json;charset=UTF-8'
    }
    }
    )
    
    }
}
