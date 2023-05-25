import { ProfessionWrapper } from '../Model/ProfessionWrapped';
import { Profession } from '../Model/profession.model';
import { Client } from '../Model/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-recherche-par-domaine',
  templateUrl: './recherche-par-domaine.component.html',
  styles: [
  ]
})
export class RechercheParDomaineComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  clients!: Client[];
  idPro!: number;
  professions!: Profession[];

  ngOnInit(): void {
    this.clientService.listeProfessions().subscribe(
      professions => {
        this.professions = professions._embedded.professions;
        console.log(professions);
      });
  }
  
  onChange(){
    this.clientService.rechercherParProfession(this.idPro).
    subscribe(prods =>{this.clients=prods});
  }
  supprimerClient(f:Client){

  }

}
