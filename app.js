new TypeIt("#replaceStrings", {
  speed: 60,
  breakLines: false,
  waitUntilVisible: true
})
  .type("web developer.")
  .pause(2000)
  .delete()
  .type("creator.")
  .pause(2000)
  .delete()
  .type("always learning.")
  .pause(2000)
  .delete()
  .type("never quitting.")
  .pause(2000)
  .delete()
  .go();
