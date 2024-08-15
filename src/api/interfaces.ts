/**
 * https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/9131d407b67a243103cb2388d6ad21f20c982488/recipes-2023-10-09.json
 * https://transform.tools/json-to-typescript
 */

export interface RecipesResponse {
  recipes: Recipe[];
}

export interface Recipe {
  id: string;
  title: string;
  servings: number;
  ingredients: Ingredients;
  steps: Steps;
  nature: Nature;
  feature: Feature;
  season: Season;
  note?: string;
  time?: number;
  extra?: Extra;
}

export type Nature = 'meat' | 'bird' | 'vegetable' | 'fish' | 'dairy' | 'dessert' | 'all';
export interface NatureObj {
  name: Nature;
  title: string;
  icon: string;
  color: string;
}

export type Feature = 'all' | 'fast' | 'oven' | 'pot' | 'stewingdish' | 'grill' | 'toaster' | 'afghan_cauldron';
export interface FeatureObj {
  name: Feature;
  title: string;
  icon: string;
}

export type Season = 'autumn' | 'all';
export interface SeasonObj {
  name: Season;
  title: string;
  icon: string;
  color: string;
}

export interface Ingredients {
  Фета?: string;
  Помидоры?: string;
  Огурцы?: string;
  'Перец сладкий'?: string;
  'Базилик свежий'?: string;
  'Оливки без косточек'?: string;
  Лимон?: string;
  'Масло оливковое'?: string;
  'Перец черный молотый'?: string;
  'Орегано сушеный'?: string;
  'Шея свиная'?: string;
  Картофель?: string;
  Чеснок?: string;
  'Пакет для запекания'?: string;
  Специи?: string;
  'Макароны Barilla'?: string;
  'Фарш говяжий'?: string;
  'Лук репчатый'?: string;
  Тыква?: string;
  Брынза?: string;
  'Листовой салат || салат китайский'?: string;
  'Семена тыквенные сырые очищенные'?: string;
  'Масло кунжутное'?: string;
  'Стебли сельдерея'?: string;
  Яблоки?: string;
  'Куриная грудка'?: string;
  Йогурт?: string;
  'Смесь перцев'?: string;
  'Шампиньоны свежие'?: string;
  Морковь?: string;
  Молоко?: string;
  'Куриная голень'?: string;
  'Фольга алюминиевая'?: string;
  'Паприка сладкая'?: string;
  'Приправа карри'?: string;
  'Хмели-сунели'?: string;
  'Говядина охлажденная || Шея говяжья без кости'?: string;
  'Лапша свежая широкая || Лапша лагманная'?: string;
  'Перец болгарский'?: string;
  'Филе куриное охлажденное'?: string;
  'Плавленый сыр для супа'?: string;
  'Горбуша натуральная'?: string;
  'Яйцо куриное'?: string;
  Рис?: string;
  Майонез?: string;
  'Шампуры-шпажки'?: string;
  'Приправа для мяса'?: string;
  'Горох колотый'?: string;
  'Грудинка копченая'?: string;
  'Бульон Maggi кубики с говядиной на косточке'?: string;
  'Сыр твердый'?: string;
  Творог?: string;
  'Сахар-песок'?: string;
  Манка?: string;
  Ваниль?: string;
  Изюм?: string;
  Курага?: string;
  'Смесь овощная'?: string;
  Мука?: string;
  'Голень куриная'?: string;
  Вермишель?: string;
  Свекла?: string;
  'Квашеная капуста'?: string;
  'Огурцы маринованные || огурцы соленые'?: string;
  'Грудка куриная охлажденная'?: string;
  'Шея свиная || лопатка свиная'?: string;
  'Рис пропаренный'?: string;
  'Лавровый лист'?: string;
  Гречка?: string;
  Шампиньоны?: string;
  'Приправа Vegeta'?: string;
  Булгур?: string;
  Петрушка?: string;
  'Оливковое масло'?: string;
  'Печень куриная'?: string;
  Сметана?: string;
  'Сливочное масло'?: string;
  'Мускатный орех'?: string;
  'Томатная паста'?: string;
  Вода?: string;
  Кинза?: string;
  Уксус?: string;
  'Соль поваренная пищевая'?: string;
  'Рассольный сыр'?: string;
  Кефир?: string;
  'Лаваш армянский'?: string;
  Руккола?: string;
  'Томаты черри'?: string;
  'Грецкие орехи'?: string;
  'Бальзамический уксус'?: string;
  'Растительное масло'?: string;
  'Ананасы кусочки в сиропе'?: string;
  'Вырезка свиная'?: string;
  'Фасоль стручковая'?: string;
  'Шея свиная без кости || корейка свиная охлажденная || лопатка свиная охлажденная'?: string;
  'Паприка копченая'?: string;
  'Сельдь Исландка атлантическая филе кусочки'?: string;
  Укроп?: string;
  'Какао-порошок'?: string;
  'Печенье юбилейное'?: string;
  Орехи?: string;
  'Крабовые палочки'?: string;
  'Кукуруза сладкая'?: string;
  'Рис длиннозерный'?: string;
  'Минтай свежемороженый филе'?: string;
  'Приправа для рыбы'?: string;
  'Капуста белокочанная'?: string;
  'Овощная смесь'?: string;
  'Корейка свиная без кости'?: string;
  Сардельки?: string;
  'Крупа гречневая'?: string;
  'Окорок свиной без кости || Грудинка говяжья без кости'?: string;
  Чевапчичи?: string;
  'Чечевица зеленая'?: string;
  Горчица?: string;
  'Окорочок цыпленка-бройлера с кожей'?: string;
  'Редька зеленая'?: string;
  'Подсолнечное масло'?: string;
  'Уксус яблочный'?: string;
  'Грецкие орехи очищенные'?: string;
  'Кориандр целый'?: string;
  'Мука пшеничная'?: string;
  Редис?: string;
  'Масло ароматное'?: string;
  'Зеленый лук'?: string;
  'Гречневая лапша'?: string;
  Хрен?: string;
  Квас?: string;
  'Ребрышки свиные'?: string;
  'Соевый соус'?: string;
  'Сладкий салатный лук'?: string;
  'Хлеб без корок'?: string;
  'Соус табаско'?: string;
  'Сок лимона'?: string;
  'Окорок свиной охлажденный || шея свиная'?: string;
  'Говядина охлажденная'?: string;
  Сосиски?: string;
  'Паприка красная'?: string;
  'Хлеб Тостовый в нарезке'?: string;
  Ветчина?: string;
  'Фасоль красная'?: string;
  'Рис бурый'?: string;
  'Хлеб пшеничный'?: string;
  'Салат листовой'?: string;
  'Соус цезарь'?: string;
  Бананы?: string;
  Апельсины?: string;
  Киви?: string;
  'Геркулес монастырский'?: string;
  'Масло сливочное'?: string;
  Сахар?: string;
  'Говяжий стейк'?: string;
  'Грудка куриная филе'?: string;
  'Филе грудки индейки'?: string;
  'Говядина тушеная'?: string;
  'Сгущенное молоко Рогачевъ'?: string;
  'Скумбрия 5 Морей || Горбуша 5 Морей'?: string;
  'Мясо для бульона говяжье'?: string;
  'Перловая крупа'?: string;
  'Солёные огурцы'?: string;
  'Мята перечная'?: string;
  'Филе куриного бедра охлажденное'?: string;
  'Голяшка говяжья без кости'?: string;
  'Томатная паста Aro ГОСТ 65 г'?: string;
  'Хмели-сунели || Maggi Букет приправ'?: string;
  'Финики сушеные с косточкой'?: string;
  'Ванильный сахар || Корица'?: string;
  Банан?: string;
  Яблоко?: string;
  'Хлопья нежные овсяные'?: string;
  'Грудка индейки || грудка куриная на кости'?: string;
  'Паприка молотая'?: string;
  'Прованские травы'?: string;
  Разрыхлитель?: string;
  'Лосось стейк'?: string;
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
}

export interface Steps {
  '1': string;
  '2'?: string;
  '3'?: string;
  '4'?: string;
  '5'?: string;
  '6'?: string;
  '7'?: string;
  '8'?: string;
  '9'?: string;
  '10'?: string;
  '11'?: string;
}

export interface Extra {
  'Лаваш армянский || лаваш рижский'?: string;
  Огурцы?: string;
  Помидоры?: string;
  Кетчуп?: string;
  'Помидоры черри'?: string;
  'Салат листовой в горшочке || Салат айсберг'?: string;
  'Сулугуни || брынза'?: string;
}
