
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from "src/service/auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService,
        private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
        ): boolean| UrlTree | Observable<boolean | UrlTree> | Promise<boolean| UrlTree> {

        if(this.authService.isAuth) return true;
        
        return this.authService.user.pipe(  
           // take(1),
            map(user => {
            const isAuth = !!user;
            this.authService.isAuth = isAuth;
            if(isAuth) return true;

            return this.router.createUrlTree(['/auth']);
        })
        );
    }
    
}