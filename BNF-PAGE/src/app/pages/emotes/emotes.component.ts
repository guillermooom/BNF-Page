import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";
import { GestosComponent } from "../../component/gestos/gestos.component";
import { MenuComponent } from "../../component/menu/menu.component";

@Component({
  selector: 'app-emotes',
  standalone: true,
  imports: [CommonModule, FooterComponent, GestosComponent, MenuComponent],
  templateUrl: './emotes.component.html',
  styleUrl: './emotes.component.css'
})
export class EmotesComponent {

}
