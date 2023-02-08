const pronouns = ["the", "your", "every", "one", "such"];
const adjectives = [
  "great",
  "adventurous",
  "arrogant",
  "charming",
  "creepy",
  "grotesque",
  "hungry"
];
const nouns = ["sitcom", "lotus", "cubes", "planet"];
const domains = [".com", ".us", ".es", ".net", ".shop"];

pronouns.forEach(pronoun =>
  adjectives.forEach(adjective =>
    nouns.forEach(noun =>
      domains.forEach(function(domain) {
        const domainLength = domain.length - 1;
        if (noun.substring(noun.length - domainLength) == domain.substring(1)) {
          const replaceNounDomain = noun.replace(
            noun.substring(noun.length - domainLength),
            domain
          );

          console.log(pronoun + adjective + replaceNounDomain);
        } else {
          console.log(pronoun + adjective + noun + domain);
        }
      })
    )
  )
);
