# SMA-RSS

SMA-RSS publish SMA(SonyMusicArtists) artists information as Atom feed that transformed from jsonp api.

## Get feed

1. make sure artist number from sma site URL. For exsample, the HIATUS artist page is https://www.sma.co.jp/s/sma/artist/237?ima=0000#/news/0 so artist number is `237`.
2. goto https://sma-rss.appspot.com/atom/<YOUR_FAVORITE_SMA_ARTIST_NUMBER>
3. subscribe that URL on your feed reader.

## Disclaimer

[SMA-RSS](https://sma-rss.appspot.com) running GoogleAppEngine Node.js Standard environment free tier so return error response when rearch to limit.  
Tested on Inoreader. not correctly works on Feedly(why?).