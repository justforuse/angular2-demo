import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { Hero } from './hero';


@Injectable()
export class HeroSearchService {
    private http: Http;
    constructor() { }
    search(term: string) {
        return this.http.get(`app/heroes/?name=${name}`)
            .map((r: Response) => r.json().data as Hero[]);
    }
}