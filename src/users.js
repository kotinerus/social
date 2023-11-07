import m1 from "./img/m1.jpg";
import m2 from "./img/m2.jpg";
import m3 from "./img/m3.jpg";
import m4 from "./img/m4.jpg";
import w1 from "./img/w1.jpg";
import w2 from "./img/w2.jpg";
import w3 from "./img/w3.jpg";
import w4 from "./img/w4.jpg";
import avatar from "./img/avatar.jpg";

export const users = [
  {
    id: 1,
    name: "Krzysztof Wysocki",
    img: avatar,
    posty: [
      {
        post: (
          <article>
            <h2>Pyszne danie z krewetkami i makaronem</h2>
            <p>
              Cześć, dzisiaj chciałbym podzielić się z Wami przepisem na pyszne
              danie z krewetkami i makaronem. To danie jest idealne na
              romantyczną kolację lub na rodzinny obiad. Jest łatwe do
              przygotowania i zajmuje tylko 30 minut. Spróbujcie sami!
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>1/2 kg krewetek</li> <li>1/2 kg makaronu spaghetti</li>{" "}
              <li>2 łyżki oliwy z oliwek</li> <li>4 ząbki czosnku</li>{" "}
              <li>1/2 szklanki białego wina</li>{" "}
              <li>1/2 szklanki bulionu warzywnego</li>
              <li>1/2 szklanki śmietany kremówki</li>{" "}
              <li>1/2 szklanki startego parmezanu</li>{" "}
              <li> sól i pieprz do smaku</li>{" "}
              <li>natka pietruszki do dekoracji</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>
                Makaron ugotuj w osolonej wodzie zgodnie z instrukcją na
                opakowaniu.
              </li>
              <li>Krewetki oczyść i osusz.</li>{" "}
              <li>
                Na patelni rozgrzej oliwę z oliwek i dodaj posiekany czosnek.
              </li>{" "}
              <li>Smaż przez 1 minutę.</li>{" "}
              <li>Dodaj krewetki i smaż przez 2-3 minuty, aż się zrumienią.</li>{" "}
              <li>Dodaj białe wino i bulion warzywny.</li>
              <li>Gotuj przez 5 minut.</li>{" "}
              <li>Dodaj śmietanę kremówkę i starty parmezan.</li>{" "}
              <li>Mieszaj, aż sos zgęstnieje.</li>{" "}
              <li>Dopraw solą i pieprzem do smaku.</li>{" "}
              <li>
                Podawaj z ugotowanym makaronem i posiekaną natką pietruszki.
              </li>
            </ol>
          </article>
        ),
        img: require("./img/makaron.jpg"),
      },
      {
        post: (
          <article>
            <h2>Pikantne kurczak curry z ryżem</h2>
            <p>
              Witajcie! Dziś chciałbym podzielić się z wami przepisem na pyszne
              danie - pikantne kurczak curry z ryżem. To danie jest pełne
              aromatycznych przypraw i idealne na urozmaicenie Waszego menu.
              Przygotowanie jest proste, a smak niezapomniany!
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>2 piersi z kurczaka, pokrojone w kostkę</li>
              <li>1 duża cebula, posiekana</li>
              <li>3 ząbki czosnku, drobno posiekane</li>
              <li>2 łyżki oleju roślinnego</li>
              <li>2 łyżki pasty curry</li>
              <li>1 puszka pomidorów krojonych</li>
              <li>1 puszka mleczka kokosowego</li>
              <li>2 łyżki stołowe jogurtu naturalnego</li>
              <li>1 łyżeczka kurkumy</li>
              <li>1 łyżeczka kminu rzymskiego</li>
              <li>Sól i pieprz do smaku</li>
              <li>Świeża kolendra do dekoracji</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>
                Na dużym garnku rozgrzej olej roślinny, a następnie dodaj
                pokrojonego kurczaka. Smaż kurczaka aż stanie się złoty i
                przesmażony ze wszystkich stron.
              </li>
              <li>
                Dodaj posiekaną cebulę i czosnek, i smaż przez kilka minut, aż
                będą miękkie.
              </li>
              <li>
                Dodaj pastę curry, kurkumę i kmin rzymski. Smaż przez chwilę, aż
                przyprawy uwolnią swój aromat.
              </li>
              <li>
                Dodaj pomidory krojone i mleczko kokosowe. Gotuj przez 15-20
                minut, aż sos zgęstnieje.
              </li>
              <li>
                Na koniec dodaj jogurt naturalny i dokładnie wymieszaj. Dopraw
                solą i pieprzem do smaku.
              </li>
              <li>
                Serwuj kurczak curry z ugotowanym ryżem, posypany świeżą
                kolendrą.
              </li>
            </ol>
          </article>
        ),
        img: require("./img/curry.jpg"),
      },
    ],
  },
  {
    id: 2,
    name: "Paweł Szyc",
    img: m1,
  },
  {
    id: 3,
    name: "Daniel Mróz",
    img: m2,
  },
  {
    id: 4,
    name: "Kornel Zaz",
    img: m3,
  },
  {
    id: 5,
    name: "Jacek Wiosna",
    img: m4,
  },
  {
    id: 6,
    name: "Kamila Zając",
    img: w1,
  },
  {
    id: 7,
    name: "Natalia Adela",
    img: w2,
  },
  {
    id: 8,
    name: "Blanka Nowak",
    img: w3,
  },
  {
    id: 9,
    name: "Iza Woźniak",
    img: w4,
  },
];
