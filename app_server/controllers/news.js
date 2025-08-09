// app_server/controllers/news.js
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', '..', 'data', 'news.json');

module.exports.news = (req, res) => {
  const page = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const { title, sidebar = {}, mainArticle = {} } = page;
  const articleImage = mainArticle.image && mainArticle.image.startsWith('/')
    ? mainArticle.image
    : (mainArticle.image ? '/' + mainArticle.image : '');

  res.render('news', {
    title: title || 'News',
    latestNews: sidebar.latestNews || [],
    vacationTips: sidebar.vacationTips || [],
    article: {
      title:   mainArticle.title   || '',
      date:    mainArticle.date    || '',
      author:  mainArticle.author  || '',
      image:   articleImage,
      content: mainArticle.content || []
    }
  });
};
