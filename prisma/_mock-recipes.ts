import { url } from "inspector";

export const MOCK_RECIPES = [
  {
    name: "Klasszikus Margherita Pizza",
    description:
      "Vékony tésztás, autentikus olasz pizza friss bazsalikommal és mozzarellával.",
    cuisine: "Olasz",
    recipeCategories: ["Főétel"],
    recipeSteps: [
      {
        name: "Tészta elkészítése",
        description:
          "A langyos vízben elkeverjük az élesztőt, majd a liszttel, sóval és olívaolajjal sima tésztává dagasztjuk.",
        stepOrder: 1,
      },
      {
        name: "Kelesztés",
        description:
          "Letakarva meleg helyen 1–1,5 órát kelesztjük, amíg a duplájára nő.",
        stepOrder: 2,
      },
      {
        name: "Feltét előkészítése",
        description:
          "A paradicsomszószt összekeverjük sóval, borssal, oregánóval, majd a tésztára kenjük, ráhelyezzük a mozzarellát és a bazsalikomleveleket.",
        stepOrder: 3,
      },
      {
        name: "Sütés",
        description:
          "250 °C-ra előmelegített sütőben 8–10 perc alatt ropogósra sütjük.",
        stepOrder: 4,
      },
    ],
    recipeIngredients: [
      { name: "búzaliszt", unit: "g", quantity: 350 },
      { name: "víz", unit: "ml", quantity: 220 },
      { name: "só", unit: "tk", quantity: 1 },
      { name: "szárított élesztő", unit: "g", quantity: 7 },
      { name: "olívaolaj", unit: "ek", quantity: 2 },
      { name: "paradicsomszósz", unit: "g", quantity: 200 },
      { name: "mozzarella", unit: "g", quantity: 200 },
      { name: "friss bazsalikom", unit: "marék", quantity: 1 },
      { name: "oregánó", unit: "tk", quantity: 1 },
    ],
    recipeImages: [
      { url: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
      {
        url: "https://images.pexels.com/photos/20115306/pexels-photo-20115306/free-photo-of-top-view-of-a-pizza-margherita.jpeg",
      },
      {
        url: "https://images.pexels.com/photos/20882533/pexels-photo-20882533.jpeg?cs=srgb&dl=pexels-renestrgar-20882533.jpg&fm=jpg",
      },
    ],
  },
  {
    name: "Spagetti Bolognese",
    description:
      "Hagyományos olasz marhahúsos-paradicsomos tésztaszósz al dente spagettivel.",
    cuisine: "Olasz",
    recipeCategories: ["Főétel", "Tészta"],
    recipeSteps: [
      {
        name: "Alap megpirítása",
        description:
          "Az apróra vágott hagymát, répát és zellert olívaolajon üvegesre pároljuk.",
        stepOrder: 1,
      },
      {
        name: "Hús lepirítása",
        description:
          "Hozzáadjuk a darált marhahúst, nagy lángon morzsásra pirítjuk, majd sózzuk, borsozzuk.",
        stepOrder: 2,
      },
      {
        name: "Szósz főzése",
        description:
          "Hozzáadjuk a fokhagymát, paradicsompürét, vörösbort és paradicsomszószt, majd oregánóval, bazsalikommal ízesítve 30–40 percig lassan főzzük.",
        stepOrder: 3,
      },
      {
        name: "Tészta főzése",
        description:
          "A spagettit bő, sós vízben al dente-re főzzük, majd leszűrjük.",
        stepOrder: 4,
      },
      {
        name: "Tálalás",
        description:
          "A tésztát összeforgatjuk a szósszal, reszelt parmezánnal megszórva tálaljuk.",
        stepOrder: 5,
      },
    ],
    recipeIngredients: [
      { name: "spagetti tészta", unit: "g", quantity: 400 },
      { name: "darált marhahús", unit: "g", quantity: 400 },
      { name: "vöröshagyma", unit: "db", quantity: 1 },
      { name: "sárgarépa", unit: "db", quantity: 1 },
      { name: "zeller szár", unit: "db", quantity: 1 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 3 },
      { name: "paradicsomszósz", unit: "ml", quantity: 400 },
      { name: "paradicsompüré", unit: "ek", quantity: 2 },
      { name: "vörösbor", unit: "ml", quantity: 100 },
      { name: "olívaolaj", unit: "ek", quantity: 2 },
      { name: "só", unit: "tk", quantity: 1 },
      { name: "fekete bors", unit: "tk", quantity: 0.5 },
      { name: "szárított oregánó", unit: "tk", quantity: 1 },
      { name: "szárított bazsalikom", unit: "tk", quantity: 1 },
      { name: "parmezán sajt", unit: "g", quantity: 50 },
    ],
    recipeImages: [
      {
        url: "https://www.cookipedia.co.uk/wiki/images/2/24/Spaghetti_Bolognese_(Nik_and_Edwina)_recipe.jpg",
      },
      {
        url: "https://cdn12.picryl.com/photo/2016/12/31/appetite-bolognaise-calories-food-drink-8341c9-1024.jpg",
      },
    ],
  },
  {
    name: "Csirkepaprikás nokedlivel",
    description:
      "Klasszikus magyar tejszínes-paprikás csirkeragu házi nokedlivel.",
    cuisine: "Magyar",
    recipeCategories: ["Főétel", "Hagyományos"],
    recipeSteps: [
      {
        name: "Hagyma pirítása",
        description:
          "A finomra vágott vöröshagymát olajon vagy zsíron üvegesre pároljuk.",
        stepOrder: 1,
      },
      {
        name: "Paprika és csirke hozzáadása",
        description:
          "Lehúzzuk a lángról, beleszórjuk az őrölt pirospaprikát, majd hozzáadjuk a csirkedarabokat és átforgatjuk.",
        stepOrder: 2,
      },
      {
        name: "Párolás",
        description:
          "Felöntjük kevés vízzel, hozzáadjuk a paprikát és paradicsomot, majd fedő alatt puhára pároljuk a húst.",
        stepOrder: 3,
      },
      {
        name: "Tejfölös habarás",
        description:
          "A tejfölt kevés lével kikeverjük, liszttel sűrítjük, majd a raguhoz adjuk és összeforraljuk.",
        stepOrder: 4,
      },
      {
        name: "Nokedli főzése",
        description:
          "A lisztet, tojást, vizet és sót sima tésztává keverjük, majd lobogó sós vízbe szaggatjuk, kifőzzük és leszűrjük.",
        stepOrder: 5,
      },
    ],
    recipeIngredients: [
      { name: "csirkecomb (felső, alsó)", unit: "g", quantity: 800 },
      { name: "vöröshagyma", unit: "db", quantity: 2 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 2 },
      { name: "pirospaprika (édes)", unit: "ek", quantity: 2 },
      { name: "tv paprika", unit: "db", quantity: 1 },
      { name: "paradicsom", unit: "db", quantity: 1 },
      { name: "tejföl", unit: "ml", quantity: 200 },
      { name: "búzaliszt", unit: "ek", quantity: 2 },
      { name: "víz", unit: "ml", quantity: 200 },
      { name: "só", unit: "tk", quantity: 2 },
      { name: "bors", unit: "tk", quantity: 0.5 },
      { name: "napraforgóolaj", unit: "ek", quantity: 3 },
      { name: "nokedlihez liszt", unit: "g", quantity: 300 },
      { name: "nokedlihez tojás", unit: "db", quantity: 2 },
      { name: "nokedlihez víz", unit: "ml", quantity: 120 },
      { name: "nokedlihez só", unit: "tk", quantity: 0.5 },
    ],
    recipeImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Hungarian_Chicken_Paprikash_Csirke_Paprik%C3%A1s.jpg",
      },
      {
        url: "https://fooddrinkdestinations.com/wp-content/uploads/2019/06/Budapest-Travel-Guide-62.jpg",
      },
    ],
  },
  {
    name: "Magyar gulyásleves",
    description: "Gazdag, tartalmas marhahúsleves zöldségekkel és csipetkével.",
    cuisine: "Magyar",
    recipeCategories: ["Leves", "Egytálétel"],
    recipeSteps: [
      {
        name: "Hagyma és hús pirítása",
        description:
          "A felkockázott hagymát zsíron üvegesre pároljuk, hozzáadjuk a marhahúst és körbepirítjuk.",
        stepOrder: 1,
      },
      {
        name: "Fűszerezés",
        description:
          "Lehúzzuk a lángról, rászórjuk az őrölt pirospaprikát, majd felöntjük vízzel.",
        stepOrder: 2,
      },
      {
        name: "Zöldségek hozzáadása",
        description:
          "Hozzáadjuk a felkockázott répát, zellert, krumplit, fokhagymát, köményt és babérlevelet, majd puhára főzzük.",
        stepOrder: 3,
      },
      {
        name: "Csipetke készítése",
        description:
          "Lisztből, tojásból kemény tésztát gyúrunk, apró darabokra csipkedjük, majd a leveshez adjuk és készre főzzük.",
        stepOrder: 4,
      },
    ],
    recipeIngredients: [
      { name: "marhahús (lábszár)", unit: "g", quantity: 600 },
      { name: "vöröshagyma", unit: "db", quantity: 2 },
      { name: "sárgarépa", unit: "db", quantity: 2 },
      { name: "fehérrépa", unit: "db", quantity: 1 },
      { name: "zeller gyökér", unit: "db", quantity: 0.5 },
      { name: "burgonya", unit: "db", quantity: 3 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 3 },
      { name: "pirospaprika", unit: "ek", quantity: 2 },
      { name: "őrölt kömény", unit: "tk", quantity: 1 },
      { name: "babérlevél", unit: "db", quantity: 2 },
      { name: "só", unit: "tk", quantity: 2 },
      { name: "bors", unit: "tk", quantity: 0.5 },
      { name: "víz", unit: "ml", quantity: 2000 },
      { name: "sertészsír", unit: "ek", quantity: 2 },
      { name: "csipetkéhez liszt", unit: "g", quantity: 100 },
      { name: "csipetkéhez tojás", unit: "db", quantity: 1 },
    ],
    recipeImages: [
      {
        url: "https://cdn.pixabay.com/photo/2019/02/22/23/50/goulash-4014661_1280.jpg",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Hungarian_Guly%C3%A1s.jpg",
      },
    ],
  },
  {
    name: "Rántott csirkemell rizzsel",
    description:
      "Kívül ropogós, belül szaftos rántott csirkemell párolt rizzsel és citrommal.",
    cuisine: "Magyar",
    recipeCategories: ["Főétel"],
    recipeSteps: [
      {
        name: "Hús előkészítése",
        description:
          "A csirkemelleket szeletekre vágjuk, enyhén kiklopfoljuk, sózzuk, borsozzuk.",
        stepOrder: 1,
      },
      {
        name: "Panírozás",
        description:
          "Először lisztbe, majd felvert tojásba, végül zsemlemorzsába forgatjuk a szeleteket.",
        stepOrder: 2,
      },
      {
        name: "Sütés",
        description:
          "Bő, forró olajban aranybarnára sütjük mindkét oldalukat, papírtörlőre szedjük.",
        stepOrder: 3,
      },
      {
        name: "Köret főzése",
        description:
          "A rizst átöblítjük, kétszeres mennyiségű sós vízben puhára főzzük.",
        stepOrder: 4,
      },
    ],
    recipeIngredients: [
      { name: "csirkemell filé", unit: "g", quantity: 600 },
      { name: "búzaliszt", unit: "g", quantity: 100 },
      { name: "tojás", unit: "db", quantity: 3 },
      { name: "zsemlemorzsa", unit: "g", quantity: 150 },
      { name: "só", unit: "tk", quantity: 2 },
      { name: "bors", unit: "tk", quantity: 0.5 },
      { name: "étolaj", unit: "ml", quantity: 500 },
      { name: "rizs", unit: "g", quantity: 250 },
      { name: "víz", unit: "ml", quantity: 500 },
      { name: "citrom", unit: "db", quantity: 1 },
    ],
    recipeImages: [
      {
        url: "https://i2.pickpik.com/photos/1012/503/700/restaurant-cuisine-japanese-food-japan-food-preview.jpg",
      },
    ],
  },
  {
    name: "Cézár saláta grillezett csirkével",
    description:
      "Friss római saláta parmezánnal, krutonokkal és fűszeres, grillezett csirkemellel.",
    cuisine: "Nemzetközi",
    recipeCategories: ["Főétel", "Saláta"],
    recipeSteps: [
      {
        name: "Csirke pácolása",
        description:
          "A csirkemellet olívaolajjal, fokhagymával, sóval és borssal bedörzsöljük, 20 percig pácoljuk.",
        stepOrder: 1,
      },
      {
        name: "Csirke grillezése",
        description:
          "Serpenyőben vagy grillen mindkét oldalát 5–6 perc alatt átsütjük, majd szeletekre vágjuk.",
        stepOrder: 2,
      },
      {
        name: "Öntet készítése",
        description:
          "A majonézt, reszelt parmezánt, citromlevet, worcestershire szószt és zúzott fokhagymát krémesre keverjük.",
        stepOrder: 3,
      },
      {
        name: "Saláta összeállítása",
        description:
          "A római salátát falatnyi darabokra tépjük, összeforgatjuk az öntettel, krutonokkal és a csirkeszeletekkel.",
        stepOrder: 4,
      },
    ],
    recipeIngredients: [
      { name: "csirkemell filé", unit: "g", quantity: 300 },
      { name: "római saláta", unit: "db", quantity: 1 },
      { name: "majonéz", unit: "ek", quantity: 4 },
      { name: "parmezán sajt", unit: "g", quantity: 40 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 2 },
      { name: "citromlé", unit: "ek", quantity: 1 },
      { name: "worcestershire szósz", unit: "tk", quantity: 1 },
      { name: "olívaolaj", unit: "ek", quantity: 2 },
      { name: "pirított kenyérkocka", unit: "g", quantity: 50 },
      { name: "só", unit: "tk", quantity: 1 },
      { name: "bors", unit: "tk", quantity: 0.5 },
    ],
    recipeImages: [
      {
        url: "https://img.ccnull.de/1095000/preview/1099097_a8a1e9965a9afe58d3c070c6420e1315.jpg",
      },
      { url: "https://live.staticflickr.com/6040/6274173160_ed4ca90200_z.jpg" },
    ],
  },
  {
    name: "Lencsefőzelék füstölt kolbásszal",
    description:
      "Tápláló, sűrű lencsefőzelék füstölt kolbásszal és tejfölös habarással.",
    cuisine: "Magyar",
    recipeCategories: ["Főétel", "Egytálétel"],
    recipeSteps: [
      {
        name: "Lencse áztatása",
        description:
          "A lencsét legalább 2 órára, de akár egy éjszakára vízbe áztatjuk.",
        stepOrder: 1,
      },
      {
        name: "Főzés",
        description:
          "A lencsét friss vízben babérlevéllel, fokhagymával és sárgarépával együtt puhára főzzük.",
        stepOrder: 2,
      },
      {
        name: "Rántás készítése",
        description:
          "Olajon lisztet pirítunk, hozzáadjuk a pirospaprikát, majd hideg vízzel felöntve a főzelékhez keverjük.",
        stepOrder: 3,
      },
      {
        name: "Tejföl hozzáadása",
        description:
          "A tejfölt kevés főzeléklével kikeverjük, majd a lencséhez adjuk, és pár percig összeforraljuk.",
        stepOrder: 4,
      },
      {
        name: "Kolbász pirítása",
        description:
          "A felkarikázott füstölt kolbászt serpenyőben megpirítjuk, és tálaláskor a főzelékre szórjuk.",
        stepOrder: 5,
      },
    ],
    recipeIngredients: [
      { name: "lencse (száraz)", unit: "g", quantity: 300 },
      { name: "sárgarépa", unit: "db", quantity: 1 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 2 },
      { name: "babérlevél", unit: "db", quantity: 2 },
      { name: "tejföl", unit: "ml", quantity: 150 },
      { name: "búzaliszt", unit: "ek", quantity: 2 },
      { name: "étolaj", unit: "ek", quantity: 2 },
      { name: "só", unit: "tk", quantity: 1.5 },
      { name: "bors", unit: "tk", quantity: 0.5 },
      { name: "füstölt kolbász", unit: "g", quantity: 150 },
      { name: "víz", unit: "ml", quantity: 1000 },
    ],
    recipeImages: [
      {
        url: "https://fooddrinkdestinations.com/wp-content/uploads/2022/11/Moroccan-Lentil-Stew-24-535x800.jpg",
      },
    ],
  },
  {
    name: "Rakott krumpli",
    description:
      "Tejfölös, kolbászos-réteges burgonyás rakott egytálétel sütőből.",
    cuisine: "Magyar",
    recipeCategories: ["Főétel", "Egytálétel"],
    recipeSteps: [
      {
        name: "Alapanyagok előkészítése",
        description:
          "A krumplit héjában megfőzzük, megpucoljuk és karikákra vágjuk, a tojásokat keményre főzzük és szeleteljük.",
        stepOrder: 1,
      },
      {
        name: "Rétegezés",
        description:
          "A kivajazott tepsibe krumpli, tojás, kolbász és tejföl rétegeket rakunk egymásra, sózzuk, borsozzuk.",
        stepOrder: 2,
      },
      {
        name: "Sütés",
        description:
          "A tetejére tejfölt simítunk, reszelt sajttal megszórjuk, majd 180 °C-on 30–35 percig sütjük.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "burgonya", unit: "g", quantity: 1000 },
      { name: "tojás", unit: "db", quantity: 6 },
      { name: "füstölt kolbász", unit: "g", quantity: 200 },
      { name: "tejföl", unit: "ml", quantity: 400 },
      { name: "reszelt sajt", unit: "g", quantity: 100 },
      { name: "vaj", unit: "ek", quantity: 1 },
      { name: "só", unit: "tk", quantity: 2 },
      { name: "bors", unit: "tk", quantity: 0.5 },
    ],
    recipeImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Rakott_krumpli.jpg",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Rakott_krumpli_2.jpg",
      },
    ],
  },
  {
    name: "Spagetti Carbonara",
    description:
      "Eredeti olasz carbonara tojással, pecorinóval és pancettával, tejszín nélkül.",
    cuisine: "Olasz",
    recipeCategories: ["Főétel", "Tészta"],
    recipeSteps: [
      {
        name: "Tészta főzése",
        description:
          "A spagettit bő, sós vízben al dente-re főzzük, a főzővízből félreteszünk egy keveset.",
        stepOrder: 1,
      },
      {
        name: "Pancetta pirítása",
        description:
          "A felkockázott pancettát serpenyőben ropogósra sütjük, a zsírját benne hagyjuk.",
        stepOrder: 2,
      },
      {
        name: "Szósz keverése",
        description:
          "A tojássárgákat reszelt pecorinóval, borssal és kevés tésztafőző vízzel krémesre keverjük.",
        stepOrder: 3,
      },
      {
        name: "Összeforgatás",
        description:
          "A leszűrt tésztát a forró serpenyőben a pancettával összeforgatjuk, majd levéve a tűzről hozzáadjuk a tojásos keveréket, gyorsan átkeverjük.",
        stepOrder: 4,
      },
    ],
    recipeIngredients: [
      { name: "spagetti tészta", unit: "g", quantity: 400 },
      { name: "pancetta", unit: "g", quantity: 150 },
      { name: "tojássárgája", unit: "db", quantity: 4 },
      { name: "pecorino romano sajt", unit: "g", quantity: 60 },
      { name: "fekete bors", unit: "tk", quantity: 1 },
      { name: "só", unit: "tk", quantity: 1 },
    ],
    recipeImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Spaghetti_alla_carbonara_classica.jpg",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Spaghetti_alla_Carbonara_2.jpg",
      },
    ],
  },
  {
    name: "Zöldséges csicseriborsó curry rizzsel",
    description:
      "Krémes, kókusztejes csicseriborsó curry sok zöldséggel, basmati rizzsel tálalva.",
    cuisine: "Indiai",
    recipeCategories: ["Főétel", "Vegetáriánus", "Vega"],
    recipeSteps: [
      {
        name: "Alap pirítása",
        description:
          "A felaprított hagymát olajon üvegesre pirítjuk, hozzáadjuk a fokhagymát és a gyömbért.",
        stepOrder: 1,
      },
      {
        name: "Fűszerezés",
        description:
          "Rászórjuk a currypor, garam masala és kurkuma fűszereket, röviden megpirítjuk.",
        stepOrder: 2,
      },
      {
        name: "Zöldségek és csicseriborsó",
        description:
          "Hozzáadjuk a felkockázott zöldségeket és a csicseriborsót, felöntjük kókusztejjel és paradicsommal, majd puhára főzzük.",
        stepOrder: 3,
      },
      {
        name: "Rizs főzése",
        description:
          "A basmati rizst átöblítjük, kétszeres mennyiségű sós vízben puhára főzzük.",
        stepOrder: 4,
      },
    ],
    recipeIngredients: [
      { name: "csicseriborsó (konzerv)", unit: "g", quantity: 400 },
      { name: "vöröshagyma", unit: "db", quantity: 1 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 2 },
      { name: "friss gyömbér", unit: "g", quantity: 10 },
      { name: "piros kaliforniai paprika", unit: "db", quantity: 1 },
      { name: "répa", unit: "db", quantity: 1 },
      { name: "cukkini", unit: "db", quantity: 1 },
      { name: "kókusztej", unit: "ml", quantity: 400 },
      { name: "darabolt paradicsom (konzerv)", unit: "g", quantity: 400 },
      { name: "currypor", unit: "ek", quantity: 1 },
      { name: "garam masala", unit: "tk", quantity: 1 },
      { name: "kurkuma", unit: "tk", quantity: 0.5 },
      { name: "só", unit: "tk", quantity: 1 },
      { name: "olaj", unit: "ek", quantity: 2 },
      { name: "basmati rizs", unit: "g", quantity: 250 },
      { name: "víz", unit: "ml", quantity: 500 },
    ],
    recipeImages: [
      {
        url: "https://www.pbfingers.com/wp-content/uploads/2019/05/Easy-Vegetarian-Chickpea-Curry.jpeg",
      },
      {
        url: "https://www.livinglou.com/wp-content/uploads/2014/01/vegetable-chickpea-curry-with-coconut-milk.jpeg",
      },
    ],
  },
  {
    name: "Chili con carne",
    description:
      "Csípős, darált marhahúsos babragu kukoricával és paradicsommal.",
    cuisine: "Mexikói",
    recipeCategories: ["Főétel", "Egytálétel"],
    recipeSteps: [
      {
        name: "Hús pirítása",
        description:
          "A hagymát olajon üvegesre pároljuk, majd hozzáadjuk a darált marhahúst és morzsásra pirítjuk.",
        stepOrder: 1,
      },
      {
        name: "Fűszerezés",
        description:
          "Hozzáadjuk a fokhagymát, csilipaprikát, köményt és füstölt paprikát, röviden pirítjuk.",
        stepOrder: 2,
      },
      {
        name: "Főzés",
        description:
          "Hozzáöntjük a paradicsomot, babot és kukoricát, majd 30–40 percig lassan rotyogtatjuk.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "darált marhahús", unit: "g", quantity: 500 },
      { name: "vöröshagyma", unit: "db", quantity: 1 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 2 },
      { name: "vörösbab (konzerv)", unit: "g", quantity: 400 },
      { name: "kukorica (konzerv)", unit: "g", quantity: 200 },
      { name: "darabolt paradicsom (konzerv)", unit: "g", quantity: 400 },
      { name: "csilipaprika", unit: "db", quantity: 1 },
      { name: "őrölt kömény", unit: "tk", quantity: 1 },
      { name: "füstölt pirospaprika", unit: "tk", quantity: 1 },
      { name: "só", unit: "tk", quantity: 1.5 },
      { name: "bors", unit: "tk", quantity: 0.5 },
      { name: "olaj", unit: "ek", quantity: 2 },
    ],
    recipeImages: [
      {
        url: "https://img.ccnull.de/1005000/preview/1008739_ee14d021d77b862ed3c6af2752902d10.jpg",
      },
      {
        url: "https://live.staticflickr.com/8317/7988797231_637b63c747_b.jpg",
      },
    ],
  },
  {
    name: "Házi palacsinta lekvárral",
    description:
      "Vékony, puha palacsinták gyümölcslekvárral vagy mogyorókrémmel töltve.",
    cuisine: "Magyar",
    recipeCategories: ["Desszert"],
    recipeSteps: [
      {
        name: "Tészta kikeverése",
        description:
          "A lisztet, tojást, tejet, vizet, sót és olajat csomómentesre keverjük, 15 percig pihentetjük.",
        stepOrder: 1,
      },
      {
        name: "Sütés",
        description:
          "Forró, enyhén olajozott serpenyőben vékony palacsintákat sütünk mindkét oldalukon.",
        stepOrder: 2,
      },
      {
        name: "Töltés",
        description:
          "A kész palacsintákat lekvárral vagy mogyorókrémmel megkenjük, feltekerjük.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "búzaliszt", unit: "g", quantity: 250 },
      { name: "tej", unit: "ml", quantity: 300 },
      { name: "víz", unit: "ml", quantity: 200 },
      { name: "tojás", unit: "db", quantity: 2 },
      { name: "étolaj", unit: "ek", quantity: 2 },
      { name: "só", unit: "csipet", quantity: 1 },
      { name: "lekvár", unit: "g", quantity: 200 },
    ],
    recipeImages: [
      {
        url: "https://budapestcookingclass.com/wp-content/uploads/2021/11/Hungaria-pancake-recipe-e1635862521375.jpg",
      },
    ],
  },
  {
    name: "Csokis brownie",
    description:
      "Belül puha, kívül enyhén roppanós, intenzív étcsokis brownie.",
    cuisine: "Amerikai",
    recipeCategories: ["Desszert", "Sütemény"],
    recipeSteps: [
      {
        name: "Csoki és vaj olvasztása",
        description:
          "A vajat és az étcsokoládét vízgőz felett vagy mikróban összeolvasztjuk.",
        stepOrder: 1,
      },
      {
        name: "Tészta összeállítása",
        description:
          "A tojásokat a cukorral habosra keverjük, hozzáadjuk az olvasztott csokit, majd a lisztet és kakaót.",
        stepOrder: 2,
      },
      {
        name: "Sütés",
        description:
          "A masszát sütőpapírral bélelt tepsibe simítjuk, 180 °C-on 20–25 percig sütjük.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "étcsokoládé", unit: "g", quantity: 200 },
      { name: "vaj", unit: "g", quantity: 150 },
      { name: "cukor", unit: "g", quantity: 200 },
      { name: "tojás", unit: "db", quantity: 3 },
      { name: "búzaliszt", unit: "g", quantity: 120 },
      { name: "kakaópor", unit: "ek", quantity: 2 },
      { name: "só", unit: "csipet", quantity: 1 },
    ],
    recipeImages: [
      {
        url: "https://www.recipetineats.com/tachyon/2016/08/Brownies_0.jpg?resize=900%2C1125&zoom=1",
      },
      {
        url: "https://www.recipetineats.com/tachyon/2016/08/Brownies_8.jpg?resize=900%2C1260&zoom=1",
      },
    ],
  },
  {
    name: "Gyümölcsös zabkása",
    description:
      "Krémes zabkása friss gyümölcsökkel és magvakkal, egészséges reggelire.",
    cuisine: "Nemzetközi",
    recipeCategories: ["Reggeli", "Egészséges"],
    recipeSteps: [
      {
        name: "Zabkása főzése",
        description:
          "A zabpelyhet a tejjel vagy növényi itallal és egy csipet sóval sűrűre főzzük.",
        stepOrder: 1,
      },
      {
        name: "Ízesítés",
        description:
          "Mézzel vagy juharsziruppal édesítjük, fahéjjal ízesítjük.",
        stepOrder: 2,
      },
      {
        name: "Tálalás",
        description:
          "Tálba öntjük, friss gyümölcsökkel és magvakkal megszórjuk.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "zabpehely", unit: "g", quantity: 80 },
      { name: "tej vagy növényi ital", unit: "ml", quantity: 250 },
      { name: "méz", unit: "ek", quantity: 1 },
      { name: "fahéj", unit: "tk", quantity: 0.5 },
      { name: "banán", unit: "db", quantity: 1 },
      { name: "bogyós gyümölcs", unit: "g", quantity: 50 },
      { name: "magvak (dió, mandula)", unit: "g", quantity: 15 },
    ],
    recipeImages: [
      {
        url: "https://foolproofliving.com/wp-content/uploads/2023/01/Overnight-Oats-in-Yogurt.jpg",
      },
      {
        url: "https://d2t88cihvgacbj.cloudfront.net/manage/wp-content/uploads/2016/02/Triple-Berry-Oatmeal-Breakfast-Bowl-1.jpg?x94872",
      },
    ],
  },
  {
    name: "Citromos vajon sült lazac",
    description:
      "Serpenyőben sült lazacfilé citromos-vajas mártással és zöld körettel.",
    cuisine: "Nemzetközi",
    recipeCategories: ["Főétel", "Hal"],
    recipeSteps: [
      {
        name: "Lazac fűszerezése",
        description:
          "A lazacfilét sózzuk, borsozzuk, kevés citromlével meglocsoljuk.",
        stepOrder: 1,
      },
      {
        name: "Sütés",
        description:
          "Forró serpenyőben kevés olajon mindkét oldalát 3–4 percig sütjük.",
        stepOrder: 2,
      },
      {
        name: "Mártás készítése",
        description:
          "A serpenyőbe vajat, fokhagymát és citromlevet adunk, röviden összemelegítjük, majd a lazacra kanalazzuk.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "lazacfilé", unit: "g", quantity: 500 },
      { name: "vaj", unit: "g", quantity: 40 },
      { name: "olívaolaj", unit: "ek", quantity: 1 },
      { name: "citrom", unit: "db", quantity: 1 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 2 },
      { name: "só", unit: "tk", quantity: 1 },
      { name: "bors", unit: "tk", quantity: 0.5 },
    ],
    recipeImages: [
      {
        url: "https://mealpractice.b-cdn.net/81437508239495168/pan-seared-salmon-with-lemon-butter-sauce-roasted-asparagus-and-garlic-parmesan-quinoa-MQHMeFj2PM.webp",
      },
      {
        url: "https://natashaskitchen.com/wp-content/uploads/2018/05/Pan-Seared-Salmon-with-Lemon-Butter-Sauce-5-600x900.jpg",
      },
    ],
  },
  {
    name: "Caprese saláta",
    description:
      "Egyszerű, friss paradicsomos-mozzarellás saláta bazsalikommal és olívaolajjal.",
    cuisine: "Olasz",
    recipeCategories: ["Előétel", "Saláta", "Vegetáriánus"],
    recipeSteps: [
      {
        name: "Alapanyagok szeletelése",
        description:
          "A paradicsomot és a mozzarellát vékony szeletekre vágjuk.",
        stepOrder: 1,
      },
      {
        name: "Tálalás",
        description:
          "A tányérra váltakozva paradicsom- és mozzarellaszeleteket teszünk, friss bazsalikomlevelekkel megszórjuk.",
        stepOrder: 2,
      },
      {
        name: "Ízesítés",
        description:
          "Olívaolajjal meglocsoljuk, sózzuk, borsozzuk, ízlés szerint balzsamecettel is locsolhatjuk.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "érett paradicsom", unit: "db", quantity: 3 },
      { name: "mozzarella", unit: "g", quantity: 200 },
      { name: "friss bazsalikom", unit: "marék", quantity: 1 },
      { name: "olívaolaj", unit: "ek", quantity: 2 },
      { name: "só", unit: "tk", quantity: 0.5 },
      { name: "bors", unit: "tk", quantity: 0.25 },
      { name: "balzsamecet", unit: "ek", quantity: 1 },
    ],
    recipeImages: [
      {
        url: "https://www.idratherbeachef.com/wp-content/uploads/2024/03/Caprese_Salad-hero-image-768x1024.jpg",
      },
      { url: "https://live.staticflickr.com/4127/5034908487_4224314b43_b.jpg" },
    ],
  },
  {
    name: "Hummusz friss pitával",
    description:
      "Krémszerű csicseriborsókrém tahinivel, olívaolajjal és citrommal, pitával tálalva.",
    cuisine: "Közel-keleti",
    recipeCategories: ["Előétel", "Vega"],
    recipeSteps: [
      {
        name: "Csicseriborsó előkészítése",
        description:
          "A főtt vagy konzerv csicseriborsót leszűrjük, a levét félretesszük.",
        stepOrder: 1,
      },
      {
        name: "Turmixolás",
        description:
          "A csicseriborsót tahinivel, citromlével, fokhagymával, sóval és olívaolajjal krémesre turmixoljuk, szükség esetén kevés vízzel hígítjuk.",
        stepOrder: 2,
      },
      {
        name: "Tálalás",
        description:
          "Tálba simítjuk, olívaolajjal meglocsoljuk, paprikával megszórjuk, friss pitakenyérrel kínáljuk.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "csicseriborsó (konzerv)", unit: "g", quantity: 400 },
      { name: "tahini", unit: "ek", quantity: 3 },
      { name: "citromlé", unit: "ek", quantity: 2 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 2 },
      { name: "olívaolaj", unit: "ek", quantity: 2 },
      { name: "só", unit: "tk", quantity: 1 },
      { name: "őrölt pirospaprika", unit: "tk", quantity: 0.5 },
      { name: "víz", unit: "ml", quantity: 50 },
      { name: "pita kenyér", unit: "db", quantity: 4 },
    ],
    recipeImages: [
      {
        url: "https://shortgirltallorder.com/wp-content/uploads/2023/02/hummus-bowls-2.jpg",
      },
      {
        url: "https://thefoodiediaries.co/wp-content/uploads/2021/03/img_8477_jpg-1.jpg",
      },
    ],
  },
  {
    name: "Falafel tál salátával",
    description:
      "Ropogósra sült falafelgolyók friss zöldségekkel és joghurtos szósszal.",
    cuisine: "Közel-keleti",
    recipeCategories: ["Főétel", "Vega", "Street food"],
    recipeSteps: [
      {
        name: "Falafel massza készítése",
        description:
          "A beáztatott csicseriborsót hagymával, fokhagymával, petrezselyemmel és fűszerekkel együtt durvára daráljuk.",
        stepOrder: 1,
      },
      {
        name: "Pihentetés",
        description:
          "A masszát legalább 30 percre hűtőbe tesszük, majd kis golyókat formázunk belőle.",
        stepOrder: 2,
      },
      {
        name: "Sütés",
        description:
          "Forró olajban aranybarnára sütjük a falafelgolyókat, papírtörlőn lecsepegtetjük.",
        stepOrder: 3,
      },
      {
        name: "Tál összeállítása",
        description:
          "Zöldsalátát, paradicsomot, uborkát, lilahagymát tálba rendezünk, ráhelyezzük a falafelt, joghurtos szósszal meglocsoljuk.",
        stepOrder: 4,
      },
    ],
    recipeIngredients: [
      { name: "száraz csicseriborsó", unit: "g", quantity: 300 },
      { name: "vöröshagyma", unit: "db", quantity: 1 },
      { name: "fokhagyma gerezd", unit: "db", quantity: 3 },
      { name: "friss petrezselyem", unit: "marék", quantity: 1 },
      { name: "őrölt kömény", unit: "tk", quantity: 1 },
      { name: "koriandermag (őrölt)", unit: "tk", quantity: 1 },
      { name: "só", unit: "tk", quantity: 1.5 },
      { name: "bors", unit: "tk", quantity: 0.5 },
      { name: "sütéshez olaj", unit: "ml", quantity: 500 },
      { name: "salátalevél", unit: "g", quantity: 100 },
      { name: "paradicsom", unit: "db", quantity: 2 },
      { name: "uborka", unit: "db", quantity: 1 },
      { name: "lilahagyma", unit: "db", quantity: 1 },
      { name: "natúr joghurt", unit: "ml", quantity: 150 },
      { name: "citromlé", unit: "ek", quantity: 1 },
    ],
    recipeImages: [
      {
        url: "https://tastythriftytimely.com/wp-content/uploads/2023/06/Falafel-Bowl-1.jpg",
      },
    ],
  },
  {
    name: "Könnyű csokoládémousse",
    description:
      "Habos, könnyű csokoládémousse kevés hozzávalóból, elegáns desszertnek.",
    cuisine: "Francia",
    recipeCategories: ["Desszert"],
    recipeSteps: [
      {
        name: "Csoki olvasztása",
        description:
          "Az étcsokoládét vízgőz felett vagy mikróban óvatosan felolvasztjuk.",
        stepOrder: 1,
      },
      {
        name: "Tejszín felverése",
        description: "A jól behűtött tejszínt lágy habbá verjük.",
        stepOrder: 2,
      },
      {
        name: "Krém összeállítása",
        description:
          "Az olvasztott, langyos csokit több részletben a habhoz forgatjuk, poharakba töltjük és hűtőbe tesszük.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "étcsokoládé", unit: "g", quantity: 200 },
      { name: "habtejszín", unit: "ml", quantity: 300 },
      { name: "cukor (opcionális)", unit: "ek", quantity: 1 },
      { name: "vanília kivonat", unit: "tk", quantity: 0.5 },
    ],
    recipeImages: [
      {
        url: "https://www.thatskinnychickcanbake.com/wp-content/uploads/2022/07/Whipped-Chocolate-Mousse-3-660x825.jpg",
      },
      {
        url: "https://ourbestbites.com/wp-content/uploads/2012/05/Chocolate-Berry-Parfait-7.jpg",
      },
    ],
  },
  {
    name: "Banánkenyér dióval",
    description:
      "Puha, szaftos banánkenyér érett banánból, ropogós diódarabokkal.",
    cuisine: "Amerikai",
    recipeCategories: ["Desszert", "Reggeli"],
    recipeSteps: [
      {
        name: "Banán pépesítése",
        description: "Az érett banánokat villával pépesre törjük.",
        stepOrder: 1,
      },
      {
        name: "Nedves és száraz hozzávalók keverése",
        description:
          "A vajat a cukorral kikeverjük, hozzáadjuk a tojásokat, banánt, majd a liszttel, sütőporral és dióval elkeverjük.",
        stepOrder: 2,
      },
      {
        name: "Sütés",
        description:
          "A masszát kivajazott formába öntjük, 180 °C-on 45–50 percig sütjük, tűpróbával ellenőrizzük.",
        stepOrder: 3,
      },
    ],
    recipeIngredients: [
      { name: "érett banán", unit: "db", quantity: 3 },
      { name: "búzaliszt", unit: "g", quantity: 250 },
      { name: "vaj", unit: "g", quantity: 100 },
      { name: "cukor", unit: "g", quantity: 120 },
      { name: "tojás", unit: "db", quantity: 2 },
      { name: "sütőpor", unit: "tk", quantity: 2 },
      { name: "dió", unit: "g", quantity: 60 },
      { name: "só", unit: "csipet", quantity: 1 },
    ],
    recipeImages: [
      {
        url: "https://www.theseasonedmom.com/wp-content/uploads/2024/04/banana-nut-bread-5-736x1104.jpg",
      },
      {
        url: "https://www.theseasonedmom.com/wp-content/uploads/2024/04/banana-nut-bread-5-736x1104.jpg",
      },
    ],
  },
];
