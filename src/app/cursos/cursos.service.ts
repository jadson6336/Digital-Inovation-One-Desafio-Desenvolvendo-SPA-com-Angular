import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return [ {nome:'Java',imagem:'https://thgbarros.files.wordpress.com/2012/09/java1.jpg',descricao:'Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling'},
             {nome:'PHP',imagem:'https://blog.kakaocdn.net/dn/dmra8Y/btqOqS8iXuv/M8pKKotN7u3sV4TrNEhPjK/img.png',descricao:'PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes...'},
             {nome:'Angular',imagem:'https://www.talkinghightech.com/wp-content/uploads/2016/08/angular2-1.png',descricao:'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google'},
             {nome:'Android Studio',imagem:'https://img2.gratispng.com/20180517/zbw/kisspng-android-studio-computer-icons-android-software-dev-mobile-app-5afd573e491929.8091692315265523822994.jpg',descricao:'Android Studio é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android...'},
             {nome:'MySQL',imagem:'https://pbs.twimg.com/profile_images/1012243829477392387/m3cEA33V_400x400.jpg',descricao:'Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web...'},
             {nome:'Java',imagem:'https://thgbarros.files.wordpress.com/2012/09/java1.jpg',descricao:'Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling'}];
  }
}
