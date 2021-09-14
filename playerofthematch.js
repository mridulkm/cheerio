const request=require("request");
const cheerio=require ("cheerio");
const fs=require ("fs");
//const html=
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard", requestCallbackfunc);

function requestCallbackfunc(err, res, html){
    
    //fs.writeFileSync("temp.html",html);    
    const $ = cheerio.load(html) ;
   // console.log($);
 // console.log( $(".playerofthematch-name").text()) ; // will give both name of players but we need only player of the match
  console.log ($($(".playerofthematch-name")[0]).text())
  console.log ($($(".playerofthematch-name")[1]).get(0).attribs)

}
