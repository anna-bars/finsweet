import { CanActivateFn, Router } from '@angular/router';
import {inject} from "@angular/core";

export const accountGuard: CanActivateFn = (route, state) => {
  const  token = localStorage.getItem('token');
  const  router = inject(Router);
  if(token){
    router.navigate(['admin/account']);
    return false
  }
  
  return true
};
 