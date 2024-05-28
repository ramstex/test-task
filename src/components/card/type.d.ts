declare namespace CardComponent {
  export interface ICard {
    id: number,
    uid: string,
    title: string,
    pretitle: string,
    description: string,
    image: string,
    tags: string[],
    label: string,
  }
}
