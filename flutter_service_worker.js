'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "d30a8da6bd61d4ffa11b3bbec3ea0de9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "699826cd5c75a51097941662cbe86646",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f45f977aeee775fdb4017d407f24747a",
".git/logs/refs/heads/main": "154cfb204ec4baae62b567d5d5d90218",
".git/logs/refs/remotes/origin/main": "01388704a080232c43941988270a57eb",
".git/objects/02/89bd835bfa1edc91bbe4a1cce5735575b439ea": "04228029e1f170114e7094a14b8c6004",
".git/objects/03/0437768c014be6fc1229bdaf73eb1711e07553": "cdb51b3155b9717d6d1d609544a1042d",
".git/objects/03/b5b1a942755e53121c53ac71e4565b0c742a8f": "b9e15a0749341013e3c392b4d7b48170",
".git/objects/05/5240102b4c1b3744970a0ad7801fe317dabb33": "2b0ada474ea8be333c63298b6e8f5063",
".git/objects/05/c15645284c9abf52d15b17558711e6ade63cd4": "a16452f70962a9e0c855b57fa2e6fc3d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/b1cdb0de5e7e048f7c82a270f5cfa8f3e53e5a": "9528f1cede2474c02ad760475b453e1c",
".git/objects/0a/113e6cdcbca152edda841dd8cd461ac4d4f60f": "99eaedb3f081f4694da5f7d9a7470e3d",
".git/objects/0d/8bbe6902a7cdae5e4a91b21fc797201ec7f815": "1e09828547061cba3ffb9561a38c431a",
".git/objects/0d/eaf63cf79f21adb1d8c1f749c4234a15003b41": "09461d9adb26ce07d7555a22fd56709c",
".git/objects/11/3199c85ad3af42fde000c37a4c7e15eaecabb3": "bf3a1fc656cc9c66834157fef75f43e3",
".git/objects/14/bc85cf9ba21cd31447ece5edb2860520fa5da6": "37f140672cf3b2a089d495a6ff123873",
".git/objects/15/896504199f52d40ba4c6ce1ea097e41974934a": "3283ef9aab839be2754c6f28ac89bb3a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/0d58507bfe642a7ca1ad9c667950ac66127ff1": "f995656119b7107edfd7d304947b3594",
".git/objects/18/37663a1f23ed8ed8b6c6fc47d92874add435b0": "85a553c7c9895127ed1e83b9a13a1a73",
".git/objects/19/1c8c4efcdcfe320cddac9ee036fc2481e291e5": "1dbd96e9edc2ed9060063eeb38ae0973",
".git/objects/19/2e88730b332ad855a7f821d911fccc397c34c4": "4b26bc4dfd6314f34d41c466c3d3c9b5",
".git/objects/19/a7726f532ac58f1842b04d5279d0a0d0e3719c": "7c8b22a99fa01e61a36e4afe27c80242",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/63a69ba867e14d256d0ac368f137f64672935d": "f859c3fb7fe5118aa2ffce2ed7060f00",
".git/objects/23/096453dc628578e30c2411a8cb5ea5b2754828": "d15e4d1eee296d66b46fa16e93d6b654",
".git/objects/25/62db979fd46f974fac16d54c6836087539f0e0": "570d3af7e54fde8f776d07e3ab989791",
".git/objects/26/5751ad99fce4ad4f834921045a99e758c10e61": "8bfd76fb795248addb6d5129048d3742",
".git/objects/27/8752c4d5b3d682a230b7dea27ba1434b043d81": "f03245931502518f89cd5bb84ae2e2c3",
".git/objects/28/3370fba82a9198f322591f41b7934ddc86336b": "1ea197aada63feeef12da8f360a7df55",
".git/objects/2a/de62f54acd69e2dd6c6288fab8d112d59e967c": "0027ed59ead3519d0f2fcc3ec2367192",
".git/objects/2b/cdb602fe801fadb59fd212c3ed3dc5e13fc351": "11734b5c73113bfb1a788cf56f9717ba",
".git/objects/2c/1b76f0c18cc39550cdd38a3ff2318046304489": "1b971ce2dc24432543c871c3f0cb4a87",
".git/objects/2c/2c1a42cbac0faafc2fa0dc1187b4f4d2162c2c": "bd9860fd70284994c860dc695c59fa3e",
".git/objects/2f/ccfdfb67d1b27c2ae0c95eeb88b04b0e43af86": "e86fcbf4eddecd5d6382fc2afc8ec621",
".git/objects/2f/fff596bc107c68c8c54551fab6a0fd5396c4f4": "d630fe6460452a0641c065a6337b426b",
".git/objects/30/1f53771b3b82fe46d8dd1315784783e36b1e5a": "f358d76f79354e30d80f14aa7ebfce3b",
".git/objects/30/bb8117775afe781b237dace4239c80c893ee62": "ea79a289ccd261a5729359895710eab2",
".git/objects/32/7e89b3bc329181cde1c34a0e8e91cf167f7563": "5027bebde0803b7e5dfa55d28b6527a1",
".git/objects/33/ad8b5bb505a8df5c9cb60d6219521a4b1c65c8": "ff0f4311fdb17f669c65afc385d1accf",
".git/objects/34/1affbdf58e9aeccee420e44c65a3da533d235c": "4c39e65c32937aaebbb89e2b9247d4d9",
".git/objects/35/c4f7fe352803fac00e31ca99a57f771400021c": "22e8558dbdbc2801105ea35bc27981b9",
".git/objects/38/4f57a753ac343aacdf1aa9405114f2fcba9f1b": "57854ba3b8a19331e4b8b7d2067c7b46",
".git/objects/3a/9611851fa115688f1281fa21127926cf96c647": "c39421e5a7bc22bcbe1ebb3af14f7854",
".git/objects/3a/a78490609c0210d708b946c73a533ee771d039": "f67fef89932e901974ddcc23e3dff71f",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/d906095917421621cc161d7f6fadb5f8806e3b": "742b7dd55c93157d0eb5c644614cf20e",
".git/objects/3d/9fda51a91f2b59d00839bc4c06c137d2083558": "8039a76e04cbabf0c95539907ba03848",
".git/objects/3e/40ec6dc13d73532c2bd3a29f427009c9035eba": "605115f403a1fedf4c8ac65793551723",
".git/objects/44/5fc5ac568824d8a6799a190e5c748f0c73d1bb": "fcb5e4e6227963826a11ca68110f04c9",
".git/objects/44/c8be9a9eb74c870f3e4e270e258d11fa9d4796": "7b3697c67ba6119e1d5b90b99ecbf279",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/a128f6c41650861ebb8428abe8b64527088393": "4fd7403bb687b0d2cd2f06ac22ed86d9",
".git/objects/47/008806f204ee751dc5d0f92a7ae6d16b57d40d": "20643fbb9c2844edf6910c7fab4362fe",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/48/a008905e9dbdcbd748ac34bf46cf343c9377e1": "bdbe2c6ca178c18afb9689c7360ed5ca",
".git/objects/48/ee3c858a63037b5cf57494b4a5f460a44e7514": "0f410ffcf063140ec1dd0f058cfc9ae2",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/3a05452fcc3f7116887456cf87574de8e6e7ba": "5c8fd1c876edf6073b2f18753764d6ad",
".git/objects/4c/e1b224de998bbc908bae33f07dff9d17a6cc42": "1feac6c12c3e4ccaa85e582c1e74923d",
".git/objects/4f/3ab7867a7e64c0d1f0724df8ede76907d40112": "fd7c757a3f2cf8b5eab45877166bd264",
".git/objects/4f/71710b7e57394b0168b1ee5cd8bb8432c7f602": "e9decbf6b87f2c114dba3dcd79563ccf",
".git/objects/4f/7c199c8209514d865bb4fdb6e190ed8413f8e6": "78b3852dc3ae12eed3e7303b0c312e64",
".git/objects/50/e7937f64a42f6cf9fc7b1e112610f77e01d6a6": "bcd85c8ddbe0c44ba3edb5f729d060c5",
".git/objects/53/4e93e557645436b80e53ba4938437d82ad70ca": "ec389381353c220545fc56307ad01130",
".git/objects/53/ab7d0677bb2465fda4cd62dcf6f274efd71b12": "ca138afa03b4ed07a99b5089c1a7b7ef",
".git/objects/54/0ea73df182ce2968a059592ca873a375fde1f4": "b42e7e96a0db439a5b747b31b5eaa60a",
".git/objects/54/3f9eb06019422a46661eda2a7e19c64816f448": "19efb6d4016443e96a98d86ce9b00248",
".git/objects/55/50f7dad08621a61a530efb0255de1680e999a3": "4e3b49bb51ab1079051a97d4193b9997",
".git/objects/57/b2828148e422d24346d2a55d5590c051b649ca": "8a3178783e01cad2a82b2f0f2d3535a6",
".git/objects/57/ce342666549953a3326ea5979ad8cd8c783800": "2dd72668e028d65365fc137921f49deb",
".git/objects/58/d7d910d3ac52cc95bd93fb3584220040185f55": "56c24aa7786b157380f68654186f5612",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/2014a3006c6ba162e7c0ec03fd6434dbc1462f": "7f6d24584f2d06cb43266c9bdac5e946",
".git/objects/5e/2fbdf0f70c1f7e050ab5db667156827f158a29": "57e97957f414cfc0d8702415aa758bfa",
".git/objects/5f/db426d691596c46a114e30996e0468d0901ede": "c11c696e54c5c772584f2d8799e98d35",
".git/objects/62/4535eae14994065400cffaae727e296e8c6df1": "a592cf3b1be47c80adb0d799090a1258",
".git/objects/62/b982a87084d10ab43f829e18366cc7c9347ca5": "a06cd716063cdcc85eb2913e4bd765e4",
".git/objects/63/c43fb78849eb83a1c7c75e670f56a0cb9c4e7c": "f9edb65f0d710aae769c81c1748e9a7b",
".git/objects/64/1c4697b4bf44ecd2ca80729515e3ae4c0e2256": "c4dac241bc8eb0b12642ef6a66df0bc9",
".git/objects/64/33261a41c0392a0f64e26733253bd484cdc2aa": "071a9c53c32c2f4de02c0025cab6d14c",
".git/objects/64/8cab36f86e191b9128cf4054201ec786311069": "8aa0313b7bd0197e5754cacd6ec1cb3c",
".git/objects/66/a1f127616ebedef8814d57bf75f3fe8d7cedae": "9ddbad994ded218a02805b1132b9b98b",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/da6a58e04f785c1e5b44365fe6c068301d08a8": "258e63a2d7faf03d1d78e18e6b5ed882",
".git/objects/6a/8dd08eedbc84509c2cbd646ac5cf82a2d9adae": "d0a7ade0a4845b9229db7cdecff7854c",
".git/objects/6a/f0145f4eac7de8390e0380929ad21a33a9e88b": "9c7461671565907259ec63d4b86853b9",
".git/objects/6a/f05e6c685a067cd8edc6832ac1648b423829f5": "5577fe0bd900f2548ff3186cce8883fb",
".git/objects/6a/f5257992966f3118728b77adb0f5826f0f5ccc": "5f685801f9a7dcca6ff0b22c1908de34",
".git/objects/6b/6420da9435085e3f881a70cca43fb7b6ce32bb": "dd61584168c439eb5cb251d6ca805fea",
".git/objects/6d/6027b6d9f5d2f9fb192360812212dbcd222b9b": "b8a7489561884314f13d7b4d136ad216",
".git/objects/6e/977e460ad0b5eb78e3667adc247476fb52e41f": "5febd91d58162989061be05576a65fdf",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/70/81c9d7e1079d375008066caa5b0cb7c5ea8e2d": "5beceab9928af10587f20a5ec14962c8",
".git/objects/70/c0646c672585743932d04635d733993e73d6c6": "60c8590e18baf5c196a9a869baca71e0",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/2321aa99c2923836cea1d83588b8a8970f14fa": "2adb88ba4dd4e502e85ff6d442387bba",
".git/objects/73/fa373b82f7a2cecefe8d96c868215aceecaf0d": "eb6590517f8304d719dd2894bce250a0",
".git/objects/74/1c9a53622fc58ab59c8a99da6b2a2f7aac3df0": "70e065e3d9d595823c56d90167c5f4a3",
".git/objects/74/959684bb493dd2f253da91c3392351892cf2e2": "ef1a7f61bea9a329b0de2f3b8bc81063",
".git/objects/78/ad6ee8270008aea8d6eed53702e0708efbf5ac": "93f22adcb396e22b712b13a9910293e9",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/7a/6a77dd05f96573eb62c21ef1847f6537f4287a": "1ac4eadfba052ac6a0e21e31665c53e7",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/c8e908047368e03d32902de2830e577b04cef5": "6b3b68f7e08ef54dbfc8c0599b959e10",
".git/objects/7d/6d387965e9d72ef0e54f32668ecffccf19a94c": "fd8c9e4db5eab3640ce1333445b92edd",
".git/objects/7d/bf3c44f1ea12849cb35cf3c6906c04704119cf": "25ffede1690ab89de7b002e651ac6464",
".git/objects/81/0b5028c43df4c1a7737cdad478e623e8f8ed73": "acf51435d4a472bed71ea8179578d514",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/2b58d105b3f235b5204c75f16b1515a6178654": "035b734d4230136668f17a292cf5dd8d",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/52565d05e79a88d089fb241e0d73015e89fddd": "f80b049d8ae31a7eedb545e2652070fe",
".git/objects/90/3dd78bead4754fb6e3f84e8ca262f61908860f": "c77d3348a01d72a33b417b28a1d49263",
".git/objects/90/b7c8b51ae5762de8a0c240786e602d33702f3f": "ef2152dc4ceb9f9c41207b282715e63e",
".git/objects/91/0c873474e94971c154bd5942c22a7c0502563c": "005e50b0dc35cf0e718afecc87e41d01",
".git/objects/92/e355d0d05a61611e99e2817e6724b8c27e8a77": "edddd338a01b7f71921b38627d64127d",
".git/objects/93/1a1c4b7eddd3e2d20c73c54b696a721a9532b4": "22766fbf33f1cf0785f9607d3dd59e3a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/913d7913c88520ed4e472a7aec92d8ca04595c": "ee860e966df219d8801c19fbb57ab0f7",
".git/objects/99/4b509a5baecdc841c66cedfde90c19cc91f15f": "00004287940d769617cbcf09c9b3becf",
".git/objects/9a/5b4ebe52f43bb8de8091facac779ffa6d89bca": "aaf0ad98040dd4784d7b3357798a1fc4",
".git/objects/9a/e5156ef1733c5389c5ad4f6b9f73a028d01a19": "63b250b09e86bc914c05d60e833d7117",
".git/objects/9c/5fbb06d8de0ad3a2ddcb20b6748012fda22ec5": "f88884058cfa8776192df00322ff2176",
".git/objects/9c/853ffe44a9b3c1972507ccafd87a6729f423ea": "889954c3f5406e373e92e4e482594171",
".git/objects/9d/0de0dafd8846b6898861342316428b832b4d50": "9826db631a5adbecd5e4f8a05118f55c",
".git/objects/9d/2621611b247eb1e1b780858cd54a8c495009f2": "3226b1803fed1f30b11029e1bf433ecd",
".git/objects/9f/c2db09d47eb292ea26a1e90041831af13564f1": "bdbf99a1a11976c040bd07fdfea4b08e",
".git/objects/a0/698b04f3c7a844cf6e7c929764f1d1b094e18c": "49c4bb0665a17690304cfccf11ba7092",
".git/objects/a2/206c28e3f0eb54ccd64cbd25059dca8c36483c": "b3d56bd125bfc8534d0dd18badbeecd8",
".git/objects/a3/2897be5adf68ed9567597aa871d1377a99b5b0": "12e8f62d5d522fb50a13b93b670d7c67",
".git/objects/a4/1e9724cc0e63a0e1ba039127e36ba668af775a": "1d9ba9de9c7371c85fd1b39f0dd86ca0",
".git/objects/a5/c7e1b25eae38064ebc585e9f7a7f35d5c29d38": "027822d69aa94c1e965b6f5171354f4d",
".git/objects/a6/97c1a75fc8f4a4f8daa9be586b353704381db3": "7d9444351db4a1870531d919c2ac2bcd",
".git/objects/a8/0e3420f659882f06b3501983da811862f05faf": "c88330d2744c1be29035ca109037a8d6",
".git/objects/a8/7c779d17dee4af6c18258db15a7d8f5167502d": "0d36ed11609d67469ddf406cc814b680",
".git/objects/a8/92117359f190f3b670da0699d9a61952eca298": "979d9e6248b11754ebc441b8e3626c63",
".git/objects/a8/e87151bc6d3052905bf7ad8a5fc655b44ac50a": "f157c09c4c5b433dfdebab83caa95b5d",
".git/objects/a9/cbc7cff11a99f5e0d88f069030b00d22d310a7": "6d6d04a7b234e03e337ce01f310ff36a",
".git/objects/aa/48787a6eaafe5d36b527cae1dc73a23ed7432e": "735ac4a5025952388221554cf9d42fa6",
".git/objects/aa/96167b90469e384a091480666e864a0fd0ba41": "59cd8fc211e424b687e501ab6a606665",
".git/objects/ab/58a6297ca0496345e6df812e660b245b4be4ba": "a07ed141e9bfc8f5c675d32abd33b707",
".git/objects/ac/43c0bbcaae487318e9366424e7fad093a0f4cf": "f788fdfee878507f019130291613e360",
".git/objects/ae/3ef7cd92f74d076d2231fe9861e05ca2954840": "a3a6071f99aac400311ebac1a912af0a",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/f1d5270f79b16135a022a38828d6fc9e16c045": "eb14842f808696de8ff10e892961d7a1",
".git/objects/b1/32cb6bdd64928583dd98d58ede5398697e8171": "be97015aa4cc62d1ef13f5688e23c13b",
".git/objects/b2/ecdbbf6f6ea657610c0dea613781981f238771": "33c851df049467dd33170e5cb09943b3",
".git/objects/b3/17cd20fce4979bcc218b64e49e8140e492de49": "46ad7a5e059a6f9e0db0110d9174220b",
".git/objects/b3/e0c60c798d9e260ee07bd0cddd2fdf5a9472f0": "aed49bfa955b2d6e5ad71f627d13f790",
".git/objects/b4/cda3c53ce84ce87a94c25c21f82885e6d61ca8": "09625b4a0e9ebc7605383e1fe0dafaff",
".git/objects/b4/ede85c67743179b2723e70fc0bea13ad214158": "019f432ad2ad1f8a5161f115125831c0",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/0db1f18254c6af6d0b7c7067a39850d25831f8": "dab3f117ad428f97f7ac06b31bfe228d",
".git/objects/b5/29ff1b0018fb46a8eb99482be4615b9730b401": "73915efc6c3581d7412c853df01cd347",
".git/objects/b5/bcc17f6cd52d215325768f249c385d557b209f": "64ea54984b1d48eaecc63bf444007cbe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a8357876b3c8e3ba91268113103b8aaf99f1b1": "56e29a7e97fb19a30cb7328bf706b19a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9913e9bf51defeaf1583072faa29418c493f5c": "3ead335932c0b3d6aba8813a94fe05c0",
".git/objects/b9/c3943ac627b056762c765b9e65bfd2f6c2341e": "dc75cf7d7854c805d2756e63ecdc0a3e",
".git/objects/ba/4bc8336e9a8bc59ee27140f110e649adbae806": "5ee47e614203b79087631c428dd2eb21",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/78664896a77a525fcb04398a451c5967726793": "1a95d7d9380c818aa0cc42768f4007be",
".git/objects/be/a8bcc6148b6204a5500c4328a44df7a83e4131": "9d9deac05224165af83afda0fd057200",
".git/objects/be/c770691e4f7f7c2e697905f9cc00befc1ae715": "bd5729586775e8e09287c6dd7eac8f0f",
".git/objects/c1/4d57cc781a925b8bd6c8663f93ba5703276ed2": "34159ab9239d8984df37e01288f81207",
".git/objects/c2/acd15a3573d3b6eb731d7624cad43103e2ba6e": "773224200908f5eeecc632ef461a64c0",
".git/objects/c3/0570d59898cb77eb404e22d4e695a5b49d7282": "5dce0f2a90342f7c5814eb89cdca4fd5",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/761f74d199c102f4662574956299db50a35ffd": "35daa327b92da160b8868f0321bf461e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/065aac17fbfb0aacfc5ddbb045a96ddecb28e8": "2ad5a59747dad101283d019fcfb4f37a",
".git/objects/c6/b11fdd8eb07ffa1f79b7a6266d48a81e4fd59a": "dfc31339417b983879673332018f6c95",
".git/objects/c6/ddc596d8ec9abf591cf5daf3146b6295c15576": "6d0c025053226efad2ac7f32fadc65cc",
".git/objects/c7/ae2a76624f96ec75c0af851addb19371fb245b": "ece084430b3b226b56fb69b8aa64fe21",
".git/objects/c7/d16d9491c36acbf0368292536a160308231f35": "8901f07b9b0b30348f040afa5de1e43f",
".git/objects/c8/27bded7416bbe5113ee04a6adf0e5465ac00c1": "f3334ce2be8696af8713c990e423a40e",
".git/objects/c8/7a01fb8e0c7415f77239eb06882787127c6df0": "92dbed0c6b1d222142b3bfbe792f6bb0",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/53f2e40a385be6a177b20dcefc4fa4cdda6204": "e76b3096ca25109b0171f637a52aaf35",
".git/objects/ce/2aa95cf93fd41da5abe086c26435a273c507ed": "27a8e7cfb266a3d843555421f52bcb3a",
".git/objects/ce/9599b47f14b7aeff7baaaf4c1e0441b4852216": "b08f5f80ad3cb0852404335b4953fb10",
".git/objects/ce/ac2c469e2b25bcbc7ce0caef6b68caba0f9226": "8680c5692325e157c6ae4b00ac8f0070",
".git/objects/d0/2a73de662d1d988da7e7c7a72c42b7be57d7cc": "1fb7a3cc684bd02bc96d254113adf403",
".git/objects/d0/77cd0d75b41f2d550a50cfce680d576324439d": "1b9fb81eb8484bddf99c0e8c86e81aff",
".git/objects/d0/b183b937c1e2869e685c4cdc93c40abceadc28": "b9bbc4d6f959bd9839b368af70a63883",
".git/objects/d1/56a355466ea9a7134fd2c5361790f4666f0c7c": "a3b70dc3ede4cd1f226a355ac18f587a",
".git/objects/d2/4a03ae6fb67d09a9163e0ea61e0a8d333e5cc1": "0f5705e845339b4d3fb71f3ad5552813",
".git/objects/d2/bee4e704970c281e8c0cf110a7da7d98243701": "01adf6a2b0c1f791c842ee7c74200fd6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/40cba72c0a5fe5a24fe4c17f538f9564a004a7": "0c24bd7b6af7cea0eeb8c411931429c5",
".git/objects/d4/9e491272cb6fa5966b5666beb91a9fd8f3795d": "aae25d4b72193df47d06da2b3fde2812",
".git/objects/d5/1c941051e2f3c16d0542f19ba71720816b2617": "3e0f1d3306a9a2a85b5ad7800c4615f4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c514531f0c683f197fef61b4d2e4c85884c01b": "9ee91f79acdf695c76ba51cac0136473",
".git/objects/d7/348c200513823cc8f6c72ef4ae531b131bd63b": "ba2654c524d9696500fb1b748ab88332",
".git/objects/d7/4e1f538708117aff26b5660afa6f8bf6e6538b": "c60a6c70fed308608f40e0662c63f818",
".git/objects/d7/b7aca739718d116425e4161c206a99b0af1dff": "62ca48f4eebac437f6689c1f7912e277",
".git/objects/da/1af55ad1c6e4cf3600b4447245e8fcdc667370": "b5366e73d8393f91297b31e4ecfefa75",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/db/0b67d4150cc8f33408d72773460146dda097c3": "30f34c19448ca1ffdcc381fac508379e",
".git/objects/db/be789bbc28a61611f7945ab32aff3fb7fa3b80": "52636255a4e220f12608cc69e561b9f3",
".git/objects/db/dcbe8d935ba85da04b63a734aeab38556d6cba": "766103b71e7408d8d2d2dc1138534dbe",
".git/objects/dd/1799592ab1b6a420351f19fd1a9fcca87461e7": "3c200ecd6427d69c823b357da0dd30d7",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/dd/d1112f1600ac3f6907abb5bce8ee63036b8550": "56f1bafa2d4172c5f9634556b62232d5",
".git/objects/de/3ddac8d2cbd9ef7713e98f804fc836976b1647": "62e41e2336c7553892a96f493397d365",
".git/objects/de/d18d52541b6aa0ae62e4dd7c6d05b581fd94bd": "a3095343203cb885a60216ce7d136891",
".git/objects/df/6c658ef80a10c8a7190934274b6b23b26c1d53": "fa0e13d1ca187d9bfd9eb82c0bc3a006",
".git/objects/e0/55603ba4a055b3fc4e5cb4b7ab2653b0de2ff8": "fb8baa471f34c6559130f84547ce3426",
".git/objects/e0/72a259c13d7c114ac4da66b027ad71282d9f19": "f00cdfeea54f93300df69b9db3827df9",
".git/objects/e2/1d1b9398f20e33ab3401cba9f73266917619d5": "6263bd619bced4909dd6a95d4d636023",
".git/objects/e3/012fab21d29a9a1a68807deb90002422edd4ad": "10385953e8e0fc5ee2e9f1fbc8af3855",
".git/objects/e3/a3aaee52280f222f905df2e50993ebb2addfad": "7199bdc3af0daacf125706f05bb02128",
".git/objects/e7/3862776854f92e57dec9814b7f0a1e66ad5b30": "f3bcb51dcfcb82b58b4087e1174d1d99",
".git/objects/e8/25ed73155174802db7b36d3ab4b73bb8b539e6": "207c4d673cd83c3550ed59cfe4b758c9",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/7c1f4d7a36ce28c752c6974327176e380b450b": "d1ccd62edab1819c2cde1bf7e878156e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b06e94e4cdb44834925179f062f1f6ea16b8e6": "3a2739eb735ea397d4874440b40561d8",
".git/objects/ec/bd413f6afe34956c2500e08a7acf5684f474a8": "887dc31354ff12ee24ddac980e02ccdc",
".git/objects/ec/d1a551bf65f4eb4555eda3e0c34c592544665d": "aec1358f7cbbbe43173b040d7187a43e",
".git/objects/ed/052937497b7f4661502cbe761874a92f987fbe": "75caa65abf8806bf7371532db00adb88",
".git/objects/f1/7eae1c47cbe4981cce90031b969de71e10e773": "336557ff493431c4f0ad7dd7bac631ac",
".git/objects/f1/f01c3597a56cff9c1615b09d6c1983e590748d": "72442f3017866b15b27ea7b86ce7264d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9d05baa63fca4d54619a61932a175b1c81f047": "d5bdafe31f048d81006508e470e19204",
".git/objects/f3/8db6fac1287040fb1d6e90a0fed1957d462c2a": "212354e245301a9edf8fc1d1c428d704",
".git/objects/f3/b8e479346db57c9a2c40cc834185e112f33a17": "7f8189782b8b58f1dc6a5a13ca3b5d36",
".git/objects/f4/6aede79c48e786ef62b74e56bb96422e55a57e": "504fd16019257a2dcd76bef02dbd915a",
".git/objects/f4/7d8df14977f9b2e522f539f79bafd09324c58f": "635d81529e20c6d3449d12d6285acb6b",
".git/objects/f5/939e29863c3413e9e7fa1cefe614322158bb52": "6350a46e58a70e86ddccceaae1061276",
".git/objects/f5/aad3d374ee283993360fb141ba3536c43b9767": "d203adfd1aef1f1a7923dd5d5bff2e62",
".git/objects/f5/e26353d9d259a8d2488192aa9002a8d94d43fa": "dafd32d4b55a8885a4ac6620af66c301",
".git/objects/f6/faa2b05ad2db4b749bb1f5352253c00d957687": "6240751495d23e6a373954f320e90d6b",
".git/objects/f7/6b08d2fb49cd9b4f97f9148cf14e47ae7a8d30": "db4f5fea84aa7803b72582580f706c58",
".git/objects/f7/89e06b2f40dd8270cb18bacc8e5a350329992f": "bf06e495d049c3f303ae040500a29ebc",
".git/objects/f7/d58088fdaf85750b8fa86550bfb89351c432e7": "8cb4e44355e5450c4149b7946ee24082",
".git/objects/f8/21e58e0472d856c632511c0b23e69139cf519e": "ed48d7791b6fed4f0b3b756a7d9d9646",
".git/objects/f8/53ac1d32c70771e96d74d7e9c26e16abdabc18": "34f3a23fbd84cd52431b546bdaf83f48",
".git/objects/f8/6ea0db5947869e1c7a80d0f04d0d245ac53135": "af3811f894f708016a10de6e068c3628",
".git/objects/f8/fc444ba8b40013dc662dc561411dd4e067fc72": "ac2b436ba472e7f25408723d96f35340",
".git/objects/f9/1dc3b866ca97a2febd240ef775590b7b29b169": "220af11b1eadae71716d04239a84254f",
".git/objects/fa/10fc65e545a13918ea966596e926beee5b6b71": "498bad68297faafcfae4cda079b32b82",
".git/objects/fa/71d7ad34c2bb532d22a6816f8bd2341a51c4e1": "d83dd1906af0c3999abdf89097e17188",
".git/objects/fa/d6f25d06a9113357aaa83a261c6d9d3e5eb04d": "03bef490bc123a1532406e5506833d97",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/b34fae166f92be642bd1c0943dbf1afc61a712": "f6b5280c3fff6fe0fe4ced4bd39bb28f",
".git/refs/heads/main": "885909d753020a5591c5635ac6f607d9",
".git/refs/remotes/origin/main": "885909d753020a5591c5635ac6f607d9",
"assets/AssetManifest.bin": "bf4d8d57812af2cd2aa89363d183caf9",
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
"index.html": "9568eddbc9b703b1878a60904df07ea9",
"/": "9568eddbc9b703b1878a60904df07ea9",
"main.dart.js": "4c176c4171e20ab8574917a2cc9c08f1",
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
