'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "50f1d3a9ccc0cd18c5dd6edd217f4808",
"index.html": "e11b84944c071fa6c10498a2c0f0ac55",
"/": "e11b84944c071fa6c10498a2c0f0ac55",
"main.dart.js": "2fb089be8c3a5be158ef1098356fe367",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "34ee18cf8c398af6731bd84c52be8c31",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a24e76d2c5ab1b50ec0218c7b7c80874",
".git/ORIG_HEAD": "d2d985288a19b76aa145a5106c9995c4",
".git/config": "447a3b02f68f18b2975b4ae81e05423e",
".git/objects/61/262b204d24f5ca3b49aa40fd6b1dd6fa16e764": "bf8175f08e2acd3077f056fb81c1066d",
".git/objects/57/982cf44115bc7e897d246536be4b9370e81918": "5f9b76bb311016e40946abc18fe71a5d",
".git/objects/3b/b034ec58fce0724905826765c643d1757cadec": "74f0678fd68074d86721a0b2510f1c1a",
".git/objects/3b/8b6549208ad4455f16bc17ea513be98e4c562a": "f7d0f53331d7fd19d93c9455e7cb08bd",
".git/objects/3b/88cad970cb745c4dd39af8018ac7578e340fed": "de24a418cf1d6febe6b211721c39a614",
".git/objects/6f/8508e808717c58579f5b3fe878f91dd2d9c417": "226323c93f9348f6a568eb0575090876",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/32/e3bd9a37c066a720204bd9ac41459396517861": "8ad7f2cf4f138601a2ad49b6319f8479",
".git/objects/32/7be4f70b4de0c0df2b7205138f112fc13f0146": "fa68d36f1a486d4bafdcef418daec1bf",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/576d565cf7d4b4c8c11290ba44d2bc19e1bc52": "800bb59a2e31f15c9b99f84395cdc895",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/381b35ab52c182baa9a127d10fc96edc843026": "d860a9324c8d337be77553d1d785c098",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/9e8064d8bd84e55340457e5bd492ee1224a9ac": "0d1ecf723415cd7edd0dfd8988e6fd86",
".git/objects/0e/97be80631e4d6d0f1da47e818b385236fface1": "7e8351a168fcf4848513161ee2b0afcb",
".git/objects/60/45f3f32861f0ec756dde4ece663e1a33d11828": "d579e3059a51cffe35a3e360ca0702ce",
".git/objects/60/71e539591bcbc30d17e4e28c4662962596e8ee": "58da62577f5991911ac0c6952ccb7330",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/8ea094fc2044e971a6622c3252f773dabf8c38": "b06264c67161cfe2e145d96092300721",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/da/4b1741e4142391617b4bfc0a70cb0df63e32eb": "16423b745d11428f6b67867a1f51c8b8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/7cc3c599ec44c161205457384e6b0aebd38a51": "63d692015696a805cc40cbc5c85d772f",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/9ad6eb3d21978db362cc8f4c95947aecadfa1f": "1df292ed5ccab8273f6f25732233bded",
".git/objects/f3/01136568e6aef104ef902d071ddb1a7944b15d": "55d1a1378eb12de60725d3086ce16564",
".git/objects/f3/1f310b9bcffcc2f6eb508d32dfd666b6c2889b": "951c6de7354903ae519f7f8370438ad2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/8d89424ffc5132af6e4c5c6fd5b72bc0585aef": "c86d7d5605782b9abab565a99d4edee4",
".git/objects/4e/b42a210b4a26ce0173dfaee6d63ae6ad794c81": "a780f786983d2ce94c70eedb9ce5c62c",
".git/objects/4e/b3e473150d0fbebb9673d1e2b2522e770bb4f0": "b088d4c53f7e3b6f288453c15bb103ef",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/7d/ca0be4cc47c57db9897e9a6553a39f533312bf": "051ccf639eb0da1d3f7b50bfedc5a88c",
".git/objects/89/5b972a353036a713ae467a23c7e5f52d7e5946": "6cbd9a79af6018de266c781e43803f87",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/f854e187c7524b1f34dc01a62530806407f8e8": "2894b03090da481e8de3af854ddd6653",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/efe93b294b5e7c42e232b47491343b3b4699dc": "a8738215fac66d8c574bb85884b8bdca",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/81/bfc5e0fb4bdaed18723fd9bc2a203e34cc96b1": "faf5cd3eb5ac3c86090e2ecacaf3f0cf",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/5605e6612126040d243e6bec39103ee1572e8a": "1e0ca62ef70cea8e550dba6ec09d867a",
".git/objects/00/328f3e6c116666c443b8cfd6e8b9416e99499e": "7f440ae785db33029b7fb25e0393ae00",
".git/objects/5c/efd1943a15aa7fe220b59f799ffab92b339a6e": "172b8de40f87fd497234bb92e0d134a7",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/b969a95c740227d4615844f3f9df271b55c03c": "54cf2377a8d78aafa7e2d1f7a98c7ad1",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/1ab6383b8a906d87ca3c42871a66a948a9d5f6": "e612cec14267df1ee4a49559eda4c0e5",
".git/objects/97/c37422b87a4c5adf3fd34644add2ee5216a7dd": "37e90f8d7dc432fad1b5ef93bbe03ffd",
".git/objects/64/ff8c343c004bc7ad941e129c834041cfd38ced": "c733be6e68f7c7e890c9e9469317ee3f",
".git/objects/d3/e19bfb1f455bcaf1f861f961b4112a85195551": "1edb545590b55e373f9d6215bccac905",
".git/objects/d3/566cb984775ab04d94cc6aeaaf0ebde9369a9b": "083389d270485283f3a81e41f3dcae30",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/93273ba7983ac81e9f2d37fe875322a80169b7": "e3aba1fbfdd14909c3fb522f92669ac5",
".git/objects/a7/54bb485e0381157edd715077f3cea18d46b772": "e90560d7e2492946d8418ed39d36c6bf",
".git/objects/aa/198c5249818424cc2a558a4c10adf29168953e": "3304fa3bc5a7d2c8e7c00bb445296d10",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7a1097cbb8d3c52b51511a67cf1181af199ddb": "f52e4b7f33e4d811e887d634236b31da",
".git/objects/de/5ff7d36b001117e4ff3f98f1b7c8edb7109a8d": "5da361b5399f48394031ba38643259f9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7b7a85dc4de8f9ab36daef2ef6db3c77b33bd4": "f6a3db0e688f3b764224b2f94bdce08d",
".git/objects/b9/82c23dbd66d6203249179e3e5e75dd3cb0d394": "c3466fe8c8b9d6cef9068b35c959faac",
".git/objects/c3/1d18f014fd8b6b2cb215b036b9609d6c053896": "e50c592eaad8a0c306c6d999795ec8e2",
".git/objects/cc/1b57977b94f9f8776a4b8246549e7c08709398": "270d96651074e8afd106ebe886579907",
".git/objects/f9/194e80c32c9758b20e0dc37055524350c5d071": "ed0c3cbfca94b1dc81d66aa64723bd4c",
".git/objects/e8/661d45fea621bf88dcf31c68c746392e0c4535": "0b922b01d5889c3011fc7f51d9750ef5",
".git/objects/c5/17f5a8da368dc02b442e23de6528a8f9caf037": "63034119507f8189bc93841481dd8552",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ce/ecb13f58c7ea888e664e199716fea256fac103": "46b0aa526f598982e7b949778310eb86",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/94745b7a6aeadcb62c3d5a5061fb42b6a6809d": "ec559a872bde2e04bb391ea6b5affd8e",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/77/008ed8cf5f6a552f0cfde2997eabe96006ec2a": "a53c48cb79e85dfd8a969032900a060e",
".git/objects/48/5048d0800a764be65d04105bb8631480c7a656": "6a347e1dff2a0d932a0f32d3d3964539",
".git/objects/70/4ebbf05f6277f22d2185ae27e605626907af73": "54a87661c47263b7851638e386d3f89a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/15/563d67f8fe729d910010b128d1d1c9cb94c851": "e29f6fbb210de4b81c3ace05064acce3",
".git/objects/15/c0162a8f6dcfb556c6a789447835b36f46abca": "0994f6ff3a848c21692708a2e4ee7349",
".git/objects/8c/4675a5abd2b52950a4479d60c337a5c726e67d": "55c9306a4b1bfec981eeb827ed9a4c2d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/41733c8dc5493dfa122867bbc5619ae27c111f": "2e1616aa51b70d8b48b26306bc397161",
".git/objects/78/f5c1d610907683ebd97422ef7779c95d7f70cb": "9e9862e071ec5dcfa9b82f2ae0bfc235",
".git/objects/13/73ead769d5631d801f03995613e18cc3b9d2bc": "bd7ebd7ebea97424c2c0c1723c121905",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4647fb21be2845aeae2fe4fa20cd70d4",
".git/logs/refs/heads/main": "b7a87f7470fe4b63a311e86e943e9b9e",
".git/logs/refs/remotes/origin/main": "90e7190e23eacf39c9265eeec6f947f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d2d985288a19b76aa145a5106c9995c4",
".git/refs/remotes/origin/main": "1d5859dfa4ebd4bd9ec7bbc9703728f1",
".git/index": "1855862156e6038d4e18d2db87f26cb6",
".git/COMMIT_EDITMSG": "a0d5ec8190d38f2be445ad2f56529580",
".git/FETCH_HEAD": "fa2c88ee2eab96b70252f3f704e2f104",
"assets/AssetManifest.json": "df0e45fdb40a9c2687f0d3a8f4c078a7",
"assets/NOTICES": "252f57caac6cf364334ccf79139e0f0d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "9726491b8552e9d86e891d94101aea64",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/2.png": "a12551af3c9e29008d240b5fa7b4b42b",
"assets/assets/images/3.png": "eb8c551f058077e6f2432786861c64b0",
"assets/assets/images/1.png": "9226d3efe61a9f15292ef6b20da55351",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
