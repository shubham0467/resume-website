import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (localStorage.getItem('isAdmin') === 'true') {
    return true;
  }
  router.navigate(['/admin-login']);
  return false;
};
