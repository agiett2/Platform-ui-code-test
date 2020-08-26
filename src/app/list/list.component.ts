import { Component, OnInit } from '@angular/core';
import { ProviderInterface } from '../model/provider.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders: Array<ProviderInterface> = [];
  public unselectedProviders: Array<ProviderInterface> = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedProviders = this.getSavedSelectedProviders();
    this.unselectedProviders = this.getSavedUnselectedProviders();
  }

  public selectProvider(provider: ProviderInterface): void {
    if (this.selectedProviders.includes(provider)) {
      return;
    }
    this.selectedProviders.unshift(provider);
    this.unselectedProviders.splice(this.unselectedProviders.indexOf(provider), 1);
    localStorage.setItem('selectedProviders', JSON.stringify({ selelectedProviders: this.selectedProviders }));
    localStorage.setItem('unselectedProviders', JSON.stringify({ unselectedProviders: this.unselectedProviders }));
  }

  public removeProvider(provider: ProviderInterface): void {
    if (!this.selectedProviders.includes(provider)) {
      return;
    }
    this.selectedProviders.splice(this.selectedProviders.indexOf(provider), 1);
    this.unselectedProviders.unshift(provider);
    localStorage.setItem('selectedProviders', JSON.stringify({ selelectedProviders: this.selectedProviders }));
    localStorage.setItem('unselectedProviders', JSON.stringify({ unselectedProviders: this.unselectedProviders }));
  }

  private getSavedSelectedProviders(): Array<ProviderInterface> {
    return JSON.parse(localStorage.getItem('selectedProviders')).selelectedProviders ?
      JSON.parse(localStorage.getItem('selectedProviders')).selelectedProviders : this.selectedProviders;
  }

  private getSavedUnselectedProviders(): Array<ProviderInterface> {
    return JSON.parse(localStorage.getItem('unselectedProviders')).unselectedProviders ?
      JSON.parse(localStorage.getItem('unselectedProviders')).unselectedProviders : this.unselectedProviders;
  }
}

