const NewsApi = require("./newsApi");
const NewsAppModel = require("./newsAppModel");
const NewsAppView = require("./newsAppView");

let api = new NewsApi();
let model = new NewsAppModel();

let view = new NewsAppView(model, api);

api.getArticles((articles) => {
  for (const article of articles) {
    model.addArticle(article);
  }
  view.displayArticles();
})
