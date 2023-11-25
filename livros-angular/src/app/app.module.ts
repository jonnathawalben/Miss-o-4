import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    LivroListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [LivroListaComponent]
})
export class AppModule { }

