const snackList = [
  {
    name: "alfort original",
    description:
      "A delightful combination of crispy biscuit and smooth milk chocolate. Each biscuit is imprinted with a nautical-themed design and delivers a perfect balance of crunch and creaminess. A popular choice in Japan, these treats offer a satisfying sweetness that pairs well with tea or coffee. The chocolate is rich yet not overly sweet, making it a great snack for any occasion.",
    link: "https://www.ebay.com/itm/126915476181",
  },
  {
    name: "baby star",
    description:
      "A classic Japanese snack made from fried and seasoned ramen noodles. These crunchy strands are packed with savory, umami-rich flavors, making them an addictively delicious treat. Baby Star is a childhood favorite for many in Japan, often enjoyed straight from the bag or sprinkled on salads for extra crunch. With its bold seasoning and satisfying texture, it’s a great alternative to potato chips.",
    link: "https://www.ebay.com/itm/126863912172",
  },
  {
    name: "bisco apple cream",
    description:
      "These bite-sized biscuits are filled with a delicious apple-flavored cream, offering a mild sweetness with a hint of tartness. The biscuits are light and slightly crispy, complementing the smooth and fruity cream filling. Known for being a nostalgic childhood snack in Japan, Bisco is enriched with lactic acid bacteria, making it a tasty yet gentle treat for digestion. Perfect for snacking on the go or alongside a warm drink.",
    link: "https://www.ebay.com/itm/126860704362",
  },
  {
    name: "bisco original cream",
    description:
      "A well-loved Japanese biscuit with a creamy vanilla filling. These small, lightly sweetened biscuits are soft yet crispy, making them easy to enjoy for all ages. The cream is mildly sweet and has a smooth, milky taste that pairs well with tea or milk. Bisco biscuits are also enriched with probiotics, making them a popular choice for a light yet satisfying snack.",
    link: "https://www.ebay.com/itm/126532817983",
  },
  {
    name: "black black",
    description:
      "A powerful and refreshing minty gum infused with caffeine and ginseng extract for an energy boost. Popular among students and office workers in Japan, Black Black gum delivers an intense cooling sensation with a sharp minty kick. It’s known for keeping you alert and refreshed, making it an ideal choice when you need a quick wake-up in the middle of a busy day.",
    link: "https://www.ebay.com/itm/126862101922",
  },
  {
    name: "botan candy",
    description:
      "A traditional Japanese rice candy with a soft, chewy texture and a mild citrus sweetness. Each piece is wrapped in an edible rice paper that melts in your mouth, adding to the unique experience. Botan Candy has been a nostalgic favorite for decades and often comes with a small toy or sticker inside the package, making it a fun treat for both kids and adults.",
    link: "https://www.ebay.com/itm/126860826739",
  },
  {
    name: "cafe latory peach and strawberry",
    description:
      "An instant café latte mix infused with the delightful flavors of peach and strawberry. This creamy, slightly fruity coffee blend offers a unique and refreshing take on traditional lattes. Just mix with hot water for a smooth and aromatic drink that combines the richness of coffee with the sweetness of juicy fruit. A great choice for coffee lovers looking for something different.",
    link: "https://www.ebay.com/itm/126513554883",
  },
  {
    name: "caramel corn",
    description:
      "A light and airy corn puff snack coated with a rich caramel glaze. Unlike traditional popcorn, these puffs have a delicate, melt-in-your-mouth texture with a perfect balance of sweetness. Caramel Corn is a longtime favorite in Japan and is often enjoyed with tea or milk. Some varieties even include peanuts for an extra layer of flavor and crunch.",
    link: "https://www.ebay.com/itm/126862543252",
  },
  {
    name: "choco monaka",
    description:
      "A crispy wafer filled with creamy chocolate, offering a perfect blend of crunch and smoothness. The wafer layers provide a light, crisp bite, while the rich chocolate filling adds a satisfying depth of flavor. Often enjoyed as a casual snack or dessert, this treat is a favorite among chocolate lovers in Japan. It's like an ice cream bar, but without the melting mess!",
    link: "https://www.ebay.com/itm/126860733383",
  },
  {
    name: "cratz pepper bacon",
    description:
      "A crunchy, beer-friendly snack that combines bold peppery seasoning with a smoky bacon flavor. Cratz is made from roasted wheat crisps, giving it an addictive crunch that pairs perfectly with alcoholic beverages. These bite-sized pieces are seasoned to perfection, making them a popular pub-style snack in Japan. A great alternative to chips for those who enjoy savory, umami-rich flavors.",
    link: "https://www.ebay.com/itm/126860773640",
  },
  {
    name: "crisp choco",
    description:
      "A unique, shareable chocolate treat made from crispy cornflakes bound together with smooth milk chocolate. This disk-shaped snack is designed for easy breaking into smaller pieces, making it perfect for sharing. It delivers a satisfying crunch with every bite, and the chocolate coating is just the right amount of sweet without being overpowering. A must-try for fans of crispy chocolate treats!",
    link: "https://www.ebay.com/itm/126532803463",
  },
  {
    name: "dars original chocolate",
    description:
      "A smooth and creamy Japanese chocolate brand known for its rich, velvety texture. Each box contains individually segmented pieces that are easy to enjoy one at a time. Dars chocolate is made with high-quality cocoa and offers a balanced sweetness that’s not overwhelming. A favorite among chocolate lovers in Japan, it's perfect for snacking or melting into desserts.",
    link: "https://www.ebay.com/itm/126920028451",
  },
  {
    name: "dars strawberry",
    description:
      "A delicious strawberry-flavored chocolate with a smooth and creamy texture. This sweet treat blends the tartness of strawberries with rich milk chocolate, creating a satisfying fruity-chocolate experience. Like all Dars chocolates, it comes in perfectly portioned bite-sized pieces, making it easy to enjoy without the mess.",
    link: "https://www.ebay.com/itm/126920028451",
  },
  {
    name: "hi chew premium aloe yogurt",
    description:
      "A soft, chewy candy with a creamy yogurt flavor and a subtle hint of aloe. The texture is extra smooth, making it an enjoyable treat for those who like unique, slightly tangy candies. Hi Chew is well-known for its long-lasting chew and natural fruit flavors, and this version offers a refreshing twist with its blend of yogurt and aloe.",
    link: "https://www.ebay.com/itm/126903690782",
  },
  {
    name: "hi chew peach",
    description:
      "A juicy, chewy candy bursting with authentic peach flavor. Hi Chew is famous for its soft texture and real fruit taste, and this peach variety is no exception. Each piece is packed with a refreshing, natural sweetness that mimics the taste of ripe peaches. A popular choice for candy lovers who enjoy fruit-flavored treats.",
    link: "https://www.ebay.com/itm/126920958434",
  },
  {
    name: "pretz chicken herb",
    description:
      "Thin, crispy biscuit sticks seasoned with a savory blend of chicken and herbs. These Japanese-style breadsticks are packed with umami flavor, making them a perfect snack for those who enjoy savory treats. The combination of roasted herbs and mild chicken seasoning creates a unique and satisfying taste.",
    link: "https://www.ebay.com/itm/126534488060",
  },
  {
    name: "puchao fruit",
    description:
      "A chewy candy with small gummy bits embedded inside for a multi-textured experience. Each piece is packed with a fruity explosion of flavors, making it both fun and delicious to eat. Puchao is known for its combination of softness and chewiness, offering a more interesting bite than traditional gummy candies.",
    link: "https://www.ebay.com/itm/126921795972",
  },
  {
    name: "takenoko no sato original chocolate",
    description:
      "A beloved Japanese snack featuring crunchy biscuit pieces shaped like tiny bamboo shoots, coated in a rich layer of milk chocolate. The combination of the light, crispy biscuit and smooth chocolate makes for a delightful texture and flavor balance. A long-time favorite in Japan, Takenoko no Sato is often compared to its counterpart, Kinoko no Yama, but with a slightly more biscuit-heavy bite.",
    link: "https://www.ebay.com/itm/126862442802",
  },
  {
    name: "toppo original chocolate",
    description:
      "A reverse-style biscuit stick snack where the creamy chocolate filling is inside a crunchy pretzel-like shell. Unlike Pocky, which has chocolate on the outside, Toppo keeps the chocolate inside for a mess-free snacking experience. The biscuit exterior adds a light crispiness, while the rich chocolate center melts in your mouth, creating a perfect harmony of textures and flavors.",
    link: "https://www.ebay.com/itm/126862532765",
  },
  {
    name: "tsubu gummy fruits mix",
    description:
      "A juicy and flavorful gummy candy that comes in an assortment of fruit flavors, offering a burst of fruity goodness with every bite. These gummies have a slightly firm yet chewy texture, making them enjoyable to eat while delivering a satisfying mouthfeel. The mix typically includes flavors like grape, apple, and citrus, making it a refreshing and fun treat for candy lovers.",
    link: "https://www.ebay.com/itm/126921981375",
  },
];

export default snackList;
