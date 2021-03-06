function generate(){
	var Ran_num = 0;
	var Ran_quote = "";
	var Quote_Author = "";

	var quotes = [
            'There are two types of people in this world.  Those that enter a room and say \'Here I am!\' and those that enter a room and say \'There you are!\'.@Unknown',
            'Because it\'s there.@George Mallory on climbing mountains',
            'Footsteps always follow us, whenever it is snowing.  They always show us where we\'ve been, but never where we\'re going.@Winnie the Pooh\'s A-Z',
            'For I know the plans that I have for you.@The Lord, Jer 29:11',
            'The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.@Royal Robbins',
            'Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.@Unkown',
            'The significant problems we face cannot be solved at the same level of thinking we were at when we created them.@Albert Einstein',
            'We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.@T S Eliot',
            'One man asked another on the death of a mutual friend, \'How much did he leave?\' His friend responded, \'He left it all.\'@Proverb',
            'It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.@Dag Hammarskjold, Sec. Gen. of the UN',
            'Maps are a way of organizing wonder.@Edward Tufte',
            'I have decided to make my life my argument.@Albert Schweitzer',
            'Now it\'s a sqirt mecca for mystery artist, but back then it was just magic.@Jim Snyder on Kayaking',
            'Knowledge keeps about as well as fish.@Alfred North Whitehead',
            'It all began, I said, when I decided that some experts don\'t really know enough to make a pronouncement of doom on a human being.  And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.@Norman Cousins, Anatomy of an Illness',
            'Do not go gentle into that good night.  Rage, rage against the dying of the light.@Dylan Thomas',
            'For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.@John Stone, Gaudeamus Igitur'
        ];

	Ran_num = Math.floor(Math.random()* quotes.length);
	Ran_quote = quotes[Ran_num].split('@');

	document.getElementById("Quote").innerHTML = Ran_quote[0];
	document.getElementById("Author").innerHTML = Ran_quote[1];
}

!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
	fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

function newBtnTwitter(){
	var link = document.createElement('a');
	link.setAttribute('href', 'https://twitter.com/share');
	link.setAttribute('class', 'twitter-share-button');
	link.setAttribute('style', 'margin-top:5px;');
	link.setAttribute("data-text" , "I just achieved a score of on #2048Lagos a game where you find transport methods in lagos and score high." );
	link.setAttribute("data-via" ,"denvycom") ;
	link.setAttribute("data-size" ,"large") ;
	this.lowermessageContainer.appendChild(link) ;
	twttr.widgets.load();  //very important
}

twttr.widgets.createShareButton(
  "https:\/\/dev.twitter.com\/web\/tweet-button",
  document.getElementById("tweet-container"),
  {
    size: "large",
    via: "twitterdev",
    related: "twitterapi,twitter",
    text: "custom share text",
    hashtags: "example,demo"
  }
);