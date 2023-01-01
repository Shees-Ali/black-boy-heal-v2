import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

    // Add this method to validade the canLoad
  canLoad(route: Route): Promise<boolean> {
    return this.canActivate();
  }

  canActivate(): Promise<boolean> {
    return new Promise( resolve => {
      const token = localStorage.getItem('token');
      if (!token) {
        this.router.navigate(['pages/splash']);
        resolve(false);
      } else {
        resolve(true);
      }
    })

  }

}
