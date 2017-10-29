(function () {
    var module = angular.module("ContactApp");
    module.service("ContactDataService",function () {
        this.contacts = [
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "wade",
                    "last": "dunn"
                },
                "location": {
                    "street": "45 avondale ave",
                    "city": "maitland",
                    "state": "victoria",
                    "postcode": 3006
                },
                "email": "wade.dunn@example.com",
                "login": {
                    "username": "smalldog645",
                    "password": "warren",
                    "salt": "Y7RgNoQ2",
                    "md5": "e29f549d73a30839ffca606cc456201f",
                    "sha1": "aba4ce92045cd13e31223e9742d9d4956a060623",
                    "sha256": "0845e1d583f33718f78fef7269e4f35664f67f89e3035e90afcc820a1f9dbd32"
                },
                "dob": "1950-02-12 06:54:37",
                "registered": "2004-04-24 16:30:01",
                "phone": "01-0397-3621",
                "cell": "0498-789-841",
                "id": {
                    "name": "TFN",
                    "value": "705340797"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/90.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
                },
                "nat": "AU"
            },
            {
                "gender": "male",
                "name": {
                    "title": "monsieur",
                    "first": "ezio",
                    "last": "vincent"
                },
                "location": {
                    "street": "2489 place de l'europe",
                    "city": "carrouge vd",
                    "state": "fribourg",
                    "postcode": 9064
                },
                "email": "ezio.vincent@example.com",
                "login": {
                    "username": "bigrabbit574",
                    "password": "5050",
                    "salt": "XzSqEF4X",
                    "md5": "1c0c79b7a7cbbb37d182f2669420c105",
                    "sha1": "2c6bf7348ce4f367387a2a6d576f1bd6ffa63eef",
                    "sha256": "1eaf96eaa169470e743e04ccf6fc70df54cf27776829f7213bc29d5c059e2125"
                },
                "dob": "1957-09-17 13:42:21",
                "registered": "2015-07-04 11:39:11",
                "phone": "(048)-192-3837",
                "cell": "(851)-720-2273",
                "id": {
                    "name": "AVS",
                    "value": "756.FEFS.VTYD.34"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/49.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
                },
                "nat": "CH"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "aapo",
                    "last": "annala"
                },
                "location": {
                    "street": "7187 aleksanterinkatu",
                    "city": "vieremä",
                    "state": "lapland",
                    "postcode": 37553
                },
                "email": "aapo.annala@example.com",
                "login": {
                    "username": "bigbird142",
                    "password": "coltrane",
                    "salt": "7icEnPL7",
                    "md5": "8a252182244c119c6328195c97683240",
                    "sha1": "a12b9852114c0d6c0bf6b7a11cbb244780237a03",
                    "sha256": "902a148301eac86f534b9824d352e6c3beaeafe7564fa776e2caaaff2ee2e39a"
                },
                "dob": "1982-10-20 21:49:37",
                "registered": "2011-01-03 13:06:11",
                "phone": "07-042-152",
                "cell": "042-372-53-75",
                "id": {
                    "name": "HETU",
                    "value": "1282-945A"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/84.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
                },
                "nat": "US"
            },
            {
                "gender": "male",
                "name": {
                    "title": "monsieur",
                    "first": "ezio",
                    "last": "vincent"
                },
                "location": {
                    "street": "2489 place de l'europe",
                    "city": "carrouge vd",
                    "state": "fribourg",
                    "postcode": 9064
                },
                "email": "ezio.vincent@example.com",
                "login": {
                    "username": "bigrabbit574",
                    "password": "5050",
                    "salt": "XzSqEF4X",
                    "md5": "1c0c79b7a7cbbb37d182f2669420c105",
                    "sha1": "2c6bf7348ce4f367387a2a6d576f1bd6ffa63eef",
                    "sha256": "1eaf96eaa169470e743e04ccf6fc70df54cf27776829f7213bc29d5c059e2125"
                },
                "dob": "1957-09-17 13:42:21",
                "registered": "2015-07-04 11:39:11",
                "phone": "(048)-192-3837",
                "cell": "(851)-720-2273",
                "id": {
                    "name": "AVS",
                    "value": "756.FEFS.VTYD.34"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/49.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
                },
                "nat": "CH"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "richardus",
                    "last": "turksma"
                },
                "location": {
                    "street": "1654 stadsbuitengracht",
                    "city": "goeree-overflakkee",
                    "state": "noord-brabant",
                    "postcode": 75305
                },
                "email": "richardus.turksma@example.com",
                "login": {
                    "username": "orangekoala744",
                    "password": "flounder",
                    "salt": "2TmWMTM6",
                    "md5": "064e35ea381e94fe7a3104c8f1150947",
                    "sha1": "da0a08db82ebeb5374a1b3986a58e6a5640eb1c8",
                    "sha256": "8909fbc1b0d43426babcbed503119aad7703322db5d2460041847f29d4337966"
                },
                "dob": "1945-02-03 02:53:42",
                "registered": "2003-01-05 02:42:08",
                "phone": "(228)-314-0775",
                "cell": "(277)-785-3765",
                "id": {
                    "name": "BSN",
                    "value": "60642743"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/70.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/70.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/70.jpg"
                },
                "nat": "NL"
            },
            {  
                "gender":"female",
                "name":{  
                   "title":"miss",
                   "first":"nuria",
                   "last":"diaz"
                },
                "location":{  
                   "street":"5328 avenida de burgos",
                   "city":"elche",
                   "state":"la rioja",
                   "postcode":66530
                },
                "email":"nuria.diaz@example.com",
                "login":{  
                   "username":"smallduck900",
                   "password":"allegro",
                   "salt":"0Jip62eW",
                   "md5":"0bd494bef9ad418416949c6881fc93c8",
                   "sha1":"f25d2e55d0c69a53dfa7ec294b32a231f497984e",
                   "sha256":"c9d3fa1b88fa6c8f294ab18b927d0f582be7a088977c235768fcfbf18c63d5f7"
                },
                "dob":"1993-10-19 08:46:27",
                "registered":"2012-08-09 22:28:07",
                "phone":"942-317-266",
                "cell":"693-270-571",
                "id":{  
                   "name":"DNI",
                   "value":"09751269-I"
                },
                "picture":{  
                   "large":"https://randomuser.me/api/portraits/women/46.jpg",
                   "medium":"https://randomuser.me/api/portraits/med/women/46.jpg",
                   "thumbnail":"https://randomuser.me/api/portraits/thumb/women/46.jpg"
                },
                "nat":"ES"
             }
        ];
    });
})();