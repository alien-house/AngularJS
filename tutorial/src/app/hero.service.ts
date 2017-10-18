import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/* At the moment, the AppComponent defines mock heroes for display. However, defining heroes is not the component's job, and you can't easily share the list of heroes with other components and views. In this page, you'll move the hero data acquisition business to a single service that provides the data and share that service with all components that need the data.*/
@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
