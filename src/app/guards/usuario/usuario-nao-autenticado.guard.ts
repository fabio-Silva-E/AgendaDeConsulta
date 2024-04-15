import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioAutenticacaoService } from 'src/app/services/usuario/usuario-autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate {

  constructor(private usuarioAutenticacaoService:UsuarioAutenticacaoService,
    private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usuarioAutenticacaoService.IsAuteticado ? true : this.router.navigate(['sem-acesso']);
  }
  
}
