type Mapper<T> = (item: T) => number;

interface YoutubeVideo {
  readonly name: string;
  readonly views: number;
}
const mapper: Mapper<YoutubeVideo> = (item) => item.views;

const sum = <T>(array: readonly T[], mapper: Function): number =>
  array.reduce((acc, item) => acc + mapper(item), 0);

class Youtube implements YoutubeVideo {
  name: string = 'Michail';
  views: number = 10;
}
