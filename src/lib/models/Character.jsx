export class Character {
  constructor(heroName, heroImgUrl) {
    this.heroName = heroName;
    this.heroImgUrl = `/img/chars/${heroImgUrl}`;
  }
}
