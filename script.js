const scrape = require('website-scraper');

const months = [
  { 
    nameWiki: 'stycznia',
    nameKS: 'stycznia',
    days: 31,
  },
  {
    nameWiki: 'lutego',
    nameKS: 'lutego',
    days: 29,
  },
  {
    nameWiki: 'marca',
    nameKS: 'marca',
    days: 31,
  },
  {
    nameWiki: 'kwietnia',
    nameKS: 'kwietnia',
    days: 30,
  },
  {
    nameWiki: 'maja',
    nameKS: 'maja',
    days: 31,
  },
  {
    nameWiki: 'czerwca',
    nameKS: 'czerwca',
    days: 30,
  },
  {
    nameWiki: 'lipca',
    nameKS: 'lipca',
    days: 31,
  },
  {
    nameWiki: 'sierpnia',
    nameKS: 'sierpnia',
    days: 31,
  },
  {
    nameWiki: 'września',
    nameKS: 'wrzesnia',
    days: 30,
  },
  {
    nameWiki: 'października',
    nameKS: 'pazdziernika',
    days: 31,
  },
  {
    nameWiki: 'listopada',
    nameKS: 'listopada',
    days: 30,
  },
  {
    nameWiki: 'grudnia',
    nameKS: 'grudnia',
    days: 31,
  }
];

const dayArray = (monthKey) => {
  let theArr = [];
  months.forEach(month => {
    for (let day = 1; day <= month.days; day++) {
      theArr.push(`${day}_${month[monthKey]}`);
    }
  });
  return theArr;
}

const wikipediaOptions = () => {
  const url = 'https://pl.wikipedia.org/wiki'
  const wikiPaths = dayArray('nameWiki');
  const wikiUrls = wikiPaths.map(wikiPath => `${url}/${encodeURIComponent(wikiPath)}`);
  return {
    urls: wikiUrls,
    directory: './data/wikipedia',
    filenameGenerator: 'bySiteStructure'
  }
}

const KSOptions = () => {
  const url = 'https://kalendarzswiat.pl'
  const wikiPaths = dayArray('nameKS');
  const wikiUrls = wikiPaths.map(wikiPath => `${url}/${encodeURIComponent(wikiPath)}`);
  return {
    urls: wikiUrls,
    directory: './data/kalendarzswiat',
    filenameGenerator: 'bySiteStructure'
  }
}

const startScraping = async (options) => {
  await scrape(options);
}

// startScraping(wikipediaOptions());
startScraping(KSOptions());