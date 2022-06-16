import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

interface transferencia {
  valor: number,
  destino: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
}
