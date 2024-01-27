import { Component } from "@angular/core";
import { windowTime } from "rxjs";


@Component({
    templateUrl: "./app.component.html",
    selector: "my-app-root"
})
export class AppComponent {
    x: number = 5;

    title: string = "Hello My - App from title";

    getTime() {
        const Time = new Date();
        const h = Time.getHours();
        if (h >= 6 && h <= 12)
            return "בוקר טוב";
        if (h > 12 && h <= 6)
            return "צהריים טובים";
        return "לילה טוב!"

    }



    constructor() {

    }

}