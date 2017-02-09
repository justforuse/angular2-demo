import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]> {
        /* before http
        return Promise.resolve(HEROES);*/

        // Each Http service method returns an Observable of HTTP Response objects. use toPromise to convert to Promise object.
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id == id));
    }
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);

    }
    create(name: string) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    delete(id: number) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => setTimeout(resolve, 2000)).then(() => this.getHeroes());
    }

    private handleError(error: any) {
        console.error("An error occurred", error);
        return Promise.reject(error.messaeg || error);
    }
}