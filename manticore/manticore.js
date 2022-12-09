// // https://github.com/manticoresoftware/manticoresearch-javascript
// var Manticoresearch = require('manticoresearch');
// var client = new Manticoresearch.ApiClient();
// client.basePath = 'http://127.0.0.1:9308';
// indexApi = new Manticoresearch.IndexApi(client);
// searchApi = new Manticoresearch.SearchApi(client);
// utilsApi = new Manticoresearch.UtilsApi(client);

// res = await utilsApi.sql(
// 	"create table products(title text, price float) morphology='stem_en'",
// );

// // Add documents

// res = await indexApi.insert({
// 	index: 'test',
// 	doc: { title: 'Crossbody Bag with Tassel', price: 19.85 },
// });

// res = await indexApi.insert({
// 	index: 'test',
// 	doc: { title: 'microfiber sheet set', price: 19.99 },
// });

// res = await indexApi.insert({
// 	index: 'test',
// 	doc: { title: 'Pet Hair Remover Glove', price: 7.99 },
// });

// // Search

// // Let's find one of the documents. The query we will use is 'remove hair'. As you can see it finds document with title 'Pet Hair Remover Glove' and highlights 'Hair remover' in it even though the query has "remove", not "remover". This is because when we created the index we turned on using English stemming (morphology "stem_en").

// res = await searchApi.search({
// 	index: 'myindex',
// 	query: { query_string: '@title remove hair' },
// 	highlight: { fields: ['title'] },
// });
