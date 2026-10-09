import { Injectable } from '@angular/core';

export interface Article {
  id: number;
  title: string;
  author: string;
  previewText: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private readonly articles: Article[] = [
    {
      id: 1,
      title: 'Как дизайн-системы ускоряют масштабирование веб-приложений',
      author: 'Алексей П.',
      previewText: 'Одни и те же кнопка, карточка и поле собираются в экран, а не рисуются заново.',
      imageUrl: 'assets/article-1.svg'
    },
    {
      id: 2,
      title: 'Зачем карточке отдельный компонент',
      author: 'Марина К.',
      previewText: 'Заголовок, автор и обложка приходят снаружи. Разметка карточки не знает, откуда взялся список.',
      imageUrl: 'assets/article-2.svg'
    },
    {
      id: 3,
      title: 'Сервис вместо зашитых данных',
      author: 'Илья С.',
      previewText: 'Четыре статьи лежат в ArticlesService. Список только запрашивает их в ngOnInit.',
      imageUrl: 'assets/article-3.svg'
    },
    {
      id: 4,
      title: 'Обложка как файл, а не как цвет',
      author: 'Ольга В.',
      previewText: 'imageUrl указывает на SVG в src/assets. Карточка показывает его через привязку src.',
      imageUrl: 'assets/article-4.svg'
    }
  ];

  getData(): Article[] {
    return this.articles;
  }
}
