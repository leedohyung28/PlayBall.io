'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bf4d8d57812af2cd2aa89363d183caf9",
"assets/AssetManifest.bin.json": "60c8f91696d2e96ab5108abc23d15b7e",
"assets/AssetManifest.json": "f6610e46f385243551214c7c1da03b52",
"assets/assets/arena/doosan.jpg": "b018ad25652c02468385a8267d9447af",
"assets/assets/arena/hanwha.jpg": "14cf5df835ae1ccabbf1f37bcfe376af",
"assets/assets/arena/kia.jpg": "69217f8832125adda826d02d7847027f",
"assets/assets/arena/kiwoom.jpg": "12512215d62aa5b233cb670a4a96ea70",
"assets/assets/arena/kt.jpg": "7814041b50ec82d08c0032cac91c9610",
"assets/assets/arena/lg.jpg": "624cabf9a70a542b067d016e404340a2",
"assets/assets/arena/lotte.jpg": "556b3e60011a428285f92164530a5947",
"assets/assets/arena/nc.jpg": "72ee870b6a22af485d9ddf19aa8a3690",
"assets/assets/arena/samsung.jpg": "a0729997bf8a12eb6e58f6bd7372d3f6",
"assets/assets/arena/ssg.jpg": "00533d11894f46296a57e04c300b0c44",
"assets/assets/fonts/UndergroundNF.ttf": "1c1bef15c332ce50b88c358bc62d9372",
"assets/assets/historyPic/1980.jpg": "c878f7b4f22eea82208c6f440176f647",
"assets/assets/historyPic/1990.jpg": "cbf37806ec49a6ce44a8a0460985bb49",
"assets/assets/historyPic/2000.jpg": "68af98a4cc0f1d62f234df0c2b4036be",
"assets/assets/historyPic/2010.jpg": "61dfa921d0ae14c0f54db93d4739baed",
"assets/assets/historyPic/2020.jpg": "459af5a6cc11789c7163b7bbade8f3b2",
"assets/assets/KSBG/1982.jpg": "943e15579803f308adee648b73b9c1fc",
"assets/assets/KSBG/1983.jpg": "4013998c9dcd442deae57be5f9d7ba2f",
"assets/assets/KSBG/1984.jpg": "d4f5a810bb9726b2b9e7b3b5b1fcbac5",
"assets/assets/KSBG/1985.jpg": "20ea37d1f44568f20eb201a011070e19",
"assets/assets/KSBG/1986.jpg": "c6b6703e7b7234c05fa8a9fd3c7e7408",
"assets/assets/KSBG/1987.jpg": "6365d65f1cb377edbe29fc13a8b9c0e9",
"assets/assets/KSBG/1988.jpg": "1026aacee8a4b6053111e69f84ccb4dd",
"assets/assets/KSBG/1989.jpg": "a024047707cc87bf734f1e08cbe7432e",
"assets/assets/KSBG/1990.jpg": "0461c49c12d5011d981313861485acb0",
"assets/assets/KSBG/1991.jpg": "c80184b356804a3a2927a279527ed895",
"assets/assets/KSBG/1992.jpg": "e82975b965ee129c745216d6840f2e7e",
"assets/assets/KSBG/1993.jpg": "ac6d0e4c7ad775bd73a67ac1f339ef3d",
"assets/assets/KSBG/1994.jpg": "9978d95585ae885b2b85bb5d1f1f0859",
"assets/assets/KSBG/1995.jpg": "2db87cc93bb43b66bb014e592a2e15f0",
"assets/assets/KSBG/1996.jpg": "b16842e3bf5e94467132b3187bc1e599",
"assets/assets/KSBG/1997.jpg": "8bee0df17b7c00562352514692bfca22",
"assets/assets/KSBG/1998.jpg": "780cdee1ed773f05ab2d13197e3c7bd7",
"assets/assets/KSBG/1999.jpg": "1a7cff6b1d7019698babe4e0ab410965",
"assets/assets/KSBG/2000.jpg": "fbd2a7390f29c650ad818e710de7fbee",
"assets/assets/KSBG/2001.jpg": "c70a312b3ee92373451ebfe17b0dc96a",
"assets/assets/KSBG/2002.jpg": "f23f0c26239ba57924c1b034d4867c9b",
"assets/assets/KSBG/2003.jpg": "ce93a349eec15e18e2404f87aa51e43e",
"assets/assets/KSBG/2004.jpg": "e78cfd30fc409a897645498570465498",
"assets/assets/KSBG/2005.jpg": "13888e3c44f33dfaf4d3f27713e2bd42",
"assets/assets/KSBG/2006.jpg": "2db380d810ef4188d0bc9280ead40edd",
"assets/assets/KSBG/2007.jpg": "a8c0aa95f614f99b86d214390788b317",
"assets/assets/KSBG/2008.jpg": "c5bd13db86844b97b2ec0237e2c921dd",
"assets/assets/KSBG/2009.jpg": "a3dfcff10fab3b39a20846b36468ed0a",
"assets/assets/KSBG/2010.jpg": "43be485af261cd29f4deef25e32198a6",
"assets/assets/KSBG/2011.jpg": "9924befff644354a44d9d422b6f5ec2d",
"assets/assets/KSBG/2012.jpg": "7c744aa83faf453b8c88ea3ed7a1e997",
"assets/assets/KSBG/2013.jpg": "d5f46ee1da73c42b93ddf09f306a949f",
"assets/assets/KSBG/2014.jpg": "8a1df6d7f2bb02d2c69e5dd62e692e18",
"assets/assets/KSBG/2015.jpg": "886be0106b0d798b2d287c8cd4063a69",
"assets/assets/KSBG/2016.jpg": "67d6006774d343889ba5e3dbc5e4c89c",
"assets/assets/KSBG/2017.jpg": "89fb473d078289c9ced07ee30c769669",
"assets/assets/KSBG/2018.jpg": "d77cc81b8096a3adf516eb2fb68f9082",
"assets/assets/KSBG/2019.jpg": "0576836270bcaf4e985c39a0ce106b9b",
"assets/assets/KSBG/2020.jpg": "cc9a7423cc48ea4971e593573c8ffa29",
"assets/assets/KSBG/2021.jpg": "3b5a3b78882100f348bf2a562053a1c2",
"assets/assets/KSBG/2022.jpg": "f4d723cc45449d6172054d477c672a43",
"assets/assets/KSBG/2023.jpg": "43880ce53d1c2e9bc105b1c83b009858",
"assets/assets/KSLogo/1982.jpg": "67ce51c88c342c28c55a2901342fb16b",
"assets/assets/KSLogo/1983.jpg": "95367d09b9514682217401919fd4ab9a",
"assets/assets/KSLogo/1984.jpg": "18193271fc9a404fdc84ed91c93c28c5",
"assets/assets/KSLogo/1985.jpg": "f33069a07eb2ebfaf360c0e9089d6b5c",
"assets/assets/KSLogo/1986.jpg": "cbc1a6d5a105b98e4dc9dfc7137e94cb",
"assets/assets/KSLogo/1987.jpg": "202374da72c45e7b27aaae33768c8c40",
"assets/assets/KSLogo/1988.jpg": "643701f35befa4b1682f7e92cbe05056",
"assets/assets/KSLogo/1989.jpg": "d24ccdc2d41abab7f361c270eea60740",
"assets/assets/KSLogo/1990.jpg": "8fde8a4af4d3deb19410942cdf50f831",
"assets/assets/KSLogo/1991.jpg": "cdf1f2158219bbe68ddb261614148a27",
"assets/assets/KSLogo/1992.jpg": "8681b3e212ab67c7105016a5a778f0ba",
"assets/assets/KSLogo/1993.jpg": "7a8954b2346972c9e351c9b1892620c3",
"assets/assets/KSLogo/1994.jpg": "78c820802ef0bb8f210855339ef53e86",
"assets/assets/KSLogo/1995.jpg": "6f6210e95128e4ce5f7b3f5d4b554ae7",
"assets/assets/KSLogo/1996.jpg": "c4bd4529a124d014e374f369587c6180",
"assets/assets/KSLogo/1997.jpg": "23aa83b6cfeeb9df4c19808ac593ea73",
"assets/assets/KSLogo/1998.jpg": "d3954c9baa80e1c145b0aaa8abd6e5ca",
"assets/assets/KSLogo/1999.jpg": "23e1d9a18e23045c8d3a663e08012b72",
"assets/assets/KSLogo/2000.jpg": "678d9eda0d8011eef092ed633ead966f",
"assets/assets/KSLogo/2001.jpg": "4d7c90ff9524b71c80d31e4449ded257",
"assets/assets/KSLogo/2002.jpg": "55d3fb48999be5d524141bd31d46efbd",
"assets/assets/KSLogo/2003.jpg": "245f8ca5d6cb60fba6eda04f3670014b",
"assets/assets/KSLogo/2004.jpg": "738833c2dc498e0fc0246d2085a7402c",
"assets/assets/KSLogo/2005.jpg": "b27be789588b5aff1a0f59a2ee617d3d",
"assets/assets/KSLogo/2006.jpg": "683dc32917bbb1dfe7454fa4d5d16deb",
"assets/assets/KSLogo/2007.jpg": "feb8b046d59325f865e6fd38b03ac854",
"assets/assets/KSLogo/2008.jpg": "84993cbea314f3f9ae847bde726f8143",
"assets/assets/KSLogo/2009.jpg": "a9e5a27718746c3d1116527a2295bb23",
"assets/assets/KSLogo/2010.jpg": "16ae411ec13d645fca57e221073db422",
"assets/assets/KSLogo/2011.jpg": "44c3c2f45675040a7675ddd5fca7c07f",
"assets/assets/KSLogo/2012.jpg": "fcfd66877eb2473bafdd0c10f6c93acd",
"assets/assets/KSLogo/2013.jpg": "ccccb76a9e9b6d4ca6e8e0366381b600",
"assets/assets/KSLogo/2014.jpg": "81750f193f628cab6d462ac878e3b66a",
"assets/assets/KSLogo/2015.jpg": "cc1a6fc46c38f6ab64210c3fee6141cd",
"assets/assets/KSLogo/2016.jpg": "acf206539ede149a1f93bc0695a263bc",
"assets/assets/KSLogo/2017.jpg": "a19246908ded2a3fe8225c58c5c19b79",
"assets/assets/KSLogo/2018.jpg": "e3817c8ac252fcba230779d689f9f309",
"assets/assets/KSLogo/2019.jpg": "936de9fd314a871a19de9bd6dea1176b",
"assets/assets/KSLogo/2020.jpg": "2bd1fd41d0b21872f574dece39b3f2c5",
"assets/assets/KSLogo/2021.jpg": "d53636a8dfe57f9ee3c543f243c3dd53",
"assets/assets/KSLogo/2022.jpg": "8f1246537cce68d996c95db6b19f9a55",
"assets/assets/KSLogo/2023.jpg": "f36a2d4e307551a3e2b23d030d87a39a",
"assets/assets/KSmvp/1982.jpg": "94dd690b81f8d7db05fd15eaf86c151f",
"assets/assets/KSmvp/1983.jpg": "1d2ee5af7f7068e3e4c56c174c621725",
"assets/assets/KSmvp/1984.jpg": "8ecf3b59cc5f4826a5c7b0d4cdf825e3",
"assets/assets/KSmvp/1985.jpg": "f33069a07eb2ebfaf360c0e9089d6b5c",
"assets/assets/KSmvp/1986.jpg": "b36bf4d1b05488a1846b8f3bbbfdeab2",
"assets/assets/KSmvp/1987.jpg": "23e60b0d191999c028c053aca03671d3",
"assets/assets/KSmvp/1988.jpg": "6a696a1f793a39e52e6d86f2600440fa",
"assets/assets/KSmvp/1989.jpg": "ae6a7d25cd27c4bea7913b981a28b0c5",
"assets/assets/KSmvp/1990.jpg": "f2558ae004ff6cd445599e4701fb5adf",
"assets/assets/KSmvp/1991.jpg": "359ffbcd25dff57472b6a33997b1f170",
"assets/assets/KSmvp/1992.jpg": "e56c357202677348ccaabd9b0d577ae2",
"assets/assets/KSmvp/1993.jpg": "11ad61146a60a5077c4bfa2b55a30182",
"assets/assets/KSmvp/1994.jpg": "f926d5b0aa7483831c9b3af9502d5834",
"assets/assets/KSmvp/1995.jpg": "3d8515e57e5b2e66e953f97896fdf6ee",
"assets/assets/KSmvp/1996.jpg": "81898fb2448dab87ae0db876f0934ff0",
"assets/assets/KSmvp/1997.jpg": "87f6a4071daa90c72fa851c40b4f3b8c",
"assets/assets/KSmvp/1998.jpg": "b22e27f003f3530093fa2b18d121383a",
"assets/assets/KSmvp/1999.jpg": "2c85e6de57c3946bf07beea05c528a86",
"assets/assets/KSmvp/2000.jpg": "a2a4e6d655fd890310631e2df0aa6da5",
"assets/assets/KSmvp/2001.jpg": "26bf2c9a7725d461ac1f47a1008953a5",
"assets/assets/KSmvp/2002.jpg": "72eca9db5149660bca86111a6ac5be69",
"assets/assets/KSmvp/2003.jpg": "b22e27f003f3530093fa2b18d121383a",
"assets/assets/KSmvp/2004.jpg": "aae46fd8501bda79727c9153544668c1",
"assets/assets/KSmvp/2005.jpg": "59eaacb1038d8b56a443ce858bc97ffc",
"assets/assets/KSmvp/2006.jpg": "6b4aa85b756403ad4928e877f9e2bdee",
"assets/assets/KSmvp/2007.jpg": "433283f7155f478429b0eb41e561a12a",
"assets/assets/KSmvp/2008.jpg": "277c0524d6a731308a32a8b2a4ecfa52",
"assets/assets/KSmvp/2009.jpg": "48a14474b4783c2e3ba38aaaaa38ff4d",
"assets/assets/KSmvp/2010.jpg": "d45db87b30badcdfea53839b226e7094",
"assets/assets/KSmvp/2011.jpg": "29ae8ec9e8d173e0e9f588932b9f646e",
"assets/assets/KSmvp/2012.jpg": "753038856944a8c975621eeb02664e27",
"assets/assets/KSmvp/2013.jpg": "a01c6087349544102026fbff1b940c72",
"assets/assets/KSmvp/2014.jpg": "99a4f23e25d45ed71ff7ca75f2d953e4",
"assets/assets/KSmvp/2015.jpg": "db5f2491ae9e737df2c2a189b5affe53",
"assets/assets/KSmvp/2016.jpg": "6c21443113fa442b634f84d792b5b497",
"assets/assets/KSmvp/2017.jpg": "e3784f6ae6f2ad7b4f82b643a30ad096",
"assets/assets/KSmvp/2018.jpg": "96cba83fa746ffa7e4605281bae444f7",
"assets/assets/KSmvp/2019.jpg": "aa449bab50c694773b6893ca8d3d07bf",
"assets/assets/KSmvp/2020.jpg": "7a9c37a15eec0c6a555b9ee29d8b216a",
"assets/assets/KSmvp/2021.jpg": "2b5a2e5b104cccee095180d03ebdd352",
"assets/assets/KSmvp/2022.jpg": "3ace08f80a7f805e3532a6ffc510af90",
"assets/assets/KSmvp/2023.jpg": "6f566fc378765d36fea8e6f1ed8a682f",
"assets/assets/logo/kbo.png": "c36e88ba61707e4dbcdda3e8e720b2b5",
"assets/assets/logo/mlb.png": "8061f663499df0f90841fea9ea7ffd71",
"assets/assets/logo/npb.png": "07af5e3d0713701f16160eb514b23099",
"assets/assets/mainBackground.jpg": "dc63e6e42628961cb46c8552eeaf93e2",
"assets/assets/mainBackground2.jpg": "8183a63a111fc57bd045dce92f3f0c81",
"assets/assets/mlbBackground.jpg": "918c872a2715c5c8cb68aaf29371539b",
"assets/assets/npbBackground.jpg": "080a48ea0d2b9ca027ecc79dab167379",
"assets/assets/teamBackground.jpg": "eb5cc0424e6a9fb483ff97b2f4383665",
"assets/assets/teamHoverLogo/doosan.svg": "6706fc5a083e726d031c4bd560d0038c",
"assets/assets/teamHoverLogo/hanwha.svg": "6b55317f31b26eb433131c53ed2ecf3a",
"assets/assets/teamHoverLogo/kia.svg": "aa4d3efef3bd099a7b9a210bdfc471bf",
"assets/assets/teamHoverLogo/kiwoom.svg": "636ac6a2f0db3d7d594423d79b148d59",
"assets/assets/teamHoverLogo/kt.svg": "3006af096ce3c909e039c688cb417ffc",
"assets/assets/teamHoverLogo/lg.svg": "e2038a5d1de52e3c61b3e68fd4675093",
"assets/assets/teamHoverLogo/lotte.svg": "88e049c59ee221ccf4d9536861d04b7d",
"assets/assets/teamHoverLogo/nc.svg": "a37842756d6f1def294cf80154243181",
"assets/assets/teamHoverLogo/samsung.svg": "e08f941042b200409a05b288dd68122a",
"assets/assets/teamHoverLogo/ssg.svg": "ce59f8ff33abdfd4986732ef55c1ccd4",
"assets/assets/teamLogo/doosan.svg": "5fc4ebc03087c52339ea00c15bfa6a68",
"assets/assets/teamLogo/hanwha.svg": "3233aec6b6f4e195a0bee87c2f5546c1",
"assets/assets/teamLogo/kia.svg": "1808698d7b42ed68c69cbe38cf066ee2",
"assets/assets/teamLogo/kiwoom.svg": "581b1a152ee2d5b867c6ddddb8574013",
"assets/assets/teamLogo/kt.svg": "0c3ab28cd4ae73b4932c7c4ca5390398",
"assets/assets/teamLogo/lg.svg": "62a3a55c250925ba019367549d698572",
"assets/assets/teamLogo/lotte.svg": "851b81d4185e03c293e3ce04e8479d42",
"assets/assets/teamLogo/nc.svg": "b762e5cf444a6ff677341d9eba4bbf37",
"assets/assets/teamLogo/samsung.svg": "df7e1eaf1bca87aa30b5e36a5e29af06",
"assets/assets/teamLogo/ssg.svg": "f1e3c8377eb895b48c8fcf5a70a90c46",
"assets/assets/teamSlogan/doosan.jpg": "b86ddc9d732a477f69c72f0dff351ac4",
"assets/assets/teamSlogan/hanwha.jpg": "bfc08c8a0aad07302a6cbd8584a84cb3",
"assets/assets/teamSlogan/kia.jpg": "f478941e5f00f6ca43784704509434b2",
"assets/assets/teamSlogan/kiwoom.jpg": "b1e6187ba13f0e51ee15865bc712460d",
"assets/assets/teamSlogan/kt.jpg": "be0b0c85ded29dff44a9763f68767986",
"assets/assets/teamSlogan/lg.jpg": "275e06edfcc116d2837ab0b41fa05b75",
"assets/assets/teamSlogan/lotte.jpg": "28ca9f02049aaaa1d190d53d0ca8aaec",
"assets/assets/teamSlogan/nc.jpg": "2ef14af9cda94233dcec31b9c481651b",
"assets/assets/teamSlogan/samsung.jpg": "9b83b3d447d0a34d1ba7c22a817bae42",
"assets/assets/teamSlogan/ssg.jpg": "bd3038c7609c21769301761f891f7139",
"assets/FontManifest.json": "b0ec5c5f7b1a383d1b8890557100a8bf",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "697e783106319c72d5003fb28ce3c347",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "85111d52a6a0392133a0b9597633740e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "49fa69252eb01afee5e055d4c74a3c13",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "081b4e0d4e07f35074b53d423d450e3a",
"/": "081b4e0d4e07f35074b53d423d450e3a",
"main.dart.js": "a7314d8774835609c79e96628819f919",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
