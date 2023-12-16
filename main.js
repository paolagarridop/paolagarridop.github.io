let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ea0063;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ea0063;">La felicidad no es mi destino, es la actitud con la que viajo por la vida.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
