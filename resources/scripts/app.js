// Typer Animation

const typer = new TypeIt("#typed", {
  speed: 60,
  breakLines: false,
  waitUntilVisible: true,
  loop: true
})
  .type("web developer.")
  .pause(3000)
  .delete()
  .type("creator.")
  .pause(3000)
  .delete()
  .type("always learning.")
  .pause(3000)
  .delete()
  .type("never quitting.")
  .pause(3000)
  .go();

// about page typing animation

const typerAbout = new TypeIt("#typedAbout", {
  speed: 60,
  breakLines: false,
  waitUntilVisible: true
})
  .type("passionate web developer living in longmont, co. lets connect ↓↓↓↓")
  .go();
