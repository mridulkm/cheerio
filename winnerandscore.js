const request=require("request");
const cheerio=require ("cheerio");
const fs=require ("fs");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard", requestCallbackfunc);

function requestCallbackfunc(err, res, html){
  let $ = cheerio.load(html) ;
  console.log ($($("a>p.name ")[1]).text());
  console.log ($($(".event span.score")[1]).text());
}
