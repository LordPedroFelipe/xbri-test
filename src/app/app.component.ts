import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'XRI PNEUS';
    subTitle = 'PORTAL DE GARANTIA';

    titlePage = 'Solicitação de garantia';
    subTitlePage = 'Preencha seus dados e conte com a nossa ajuda!';

    anos: number[] = [];

    ngOnInit(): void {
        const anoAtual = new Date().getFullYear();
        for (let ano = anoAtual; ano >= anoAtual - 20; ano--) {
            this.anos.push(ano);
        }
    }
}
