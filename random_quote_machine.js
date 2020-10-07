let quotes = [
  ["People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.", "Tony Robbins"],
  ["Whenever you find yourself on the side of the majority, it is time to pause and reflect.", "Mark Twain"],
  ["If you don't value your time, neither will others. Stop giving away your time and talents. Value what you know & start charging for it.", "Kim Garst"],
  ["Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people, who are crazy enough to think they can change the world, are the ones who do.", "Steve Jobs"],
  ["The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.", "Vince Lombardi"],
  ["The successful warrior is the average man, with laser-like focus.", "Bruce Lee"],
  ["Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.", "Swami Vivekananda"],
  ["I don't measure a man's success by how high he climbs but how high he bounces when he hits bottom.", "George S. Patton"],
  ["Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.", "David Frost"],
  ["Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", "Booker T. Washington"],
  ["The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.", "Vince Lombardi"],
  ["To succeed in life, you need two things: ignorance and confidence.", "Mark Twain"],
  ["Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", "Dale Carnegie"],
  ["Action is the foundational key to all success.", "Pablo Picasso"],
  ["Success is a science; if you have the conditions, you get the result.", "Oscar Wilde"],
  ["Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.", "Orison Swett Marden"],
  ["If you have no critics you'll likely have no success.", "Malcolm X"],
  ["What is success? I think it is a mixture of having a flair for the thing that you are doing; knowing that it is not enough, that you have got to have hard work and a certain sense of purpose.", "Margaret Thatcher"],
  ["Frustration, although quite painful at times, is a very positive and essential part of success.", "Bo Bennett"],
  ["Success or failure depends more upon attitude than upon capacity successful men act as though they have accomplished or are enjoying something. Soon it becomes a reality. Act, look, feel successful, conduct yourself accordingly, and you will be amazed at the positive results.", "William James"],
  ["Success comes from knowing that you did your best to become the best that you are capable of becoming.", "John Wooden"],
  ["Man needs his difficulties because they are necessary to enjoy success.", "A. P. J. Abdul Kalam"],
  ["One secret of success in life is for a man to be ready for his opportunity when it comes.", "Benjamin Disraeli"],
  ["The ladder of success is best climbed by stepping on the rungs of opportunity.", "Ayn Rand"],
  ["Eighty percent of success is showing up.", "Woody Allen"],
  ["Success is simple. Do what's right, the right way, at the right time.", "Arnold H. Glasow"],
  ["He has achieved success who has worked well, laughed often, and loved much.", "Elbert Hubbard"],
  ["Flaming enthusiasm, backed up by horse sense and persistence, is the quality that most frequently makes for success.", "Dale Carnegie"],
  ["Success isn't a result of spontaneous combustion. You must set yourself on fire.", "Arnold H. Glasow"],
  ["Success is falling nine times and getting up ten.", "Jon Bon Jovi"],
  ["Success seems to be largely a matter of hanging on after others have let go.", "William Feather"]
 ];

let currentQuote = '';
let currentAuthor = '';

function getQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  currentQuote = randomQuote[0];
  currentAuthor = randomQuote[1];
  document.getElementById('text').innerHTML = '"' + currentQuote + '"';
  document.getElementById('author').innerHTML = "- " + currentAuthor;
}

$( document ).ready(function() {
    getQuote();
});
