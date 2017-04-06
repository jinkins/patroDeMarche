import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateStatus'
})
export class TranslateStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let status:number = value / 1;

    if(status == 0) {
      return "Récupération des données"
    }

    if( status == 200 ){
      return 'Sauvegardé';
    }

    else if(status == 401){
      return 'Utilisateur non connecté';
    }

    else if(status == 403){
      return 'Accès non autorisé';
    }

    else{
      return 'Erreur';
    }
  }

}
