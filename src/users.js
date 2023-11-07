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
    friends: [2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    name: "Paweł Szyc",
    posty: [
      {
        post: (
          <article>
            <h2>Kasza jaglana z warzywami</h2>
            <p>
              Witajcie! Dzisiaj przygotowałem przepis na zdrowe danie
              wegetariańskie, które zasmakuje zarówno wegetarianom, jak i
              miłośnikom mięsa. Kasza jaglana z warzywami to pyszna i sycąca
              potrawa, idealna na obiad lub kolację.
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>1 szklanka kaszy jaglanej</li>
              <li>2 szklanki wody</li>
              <li>2 łyżki oliwy z oliwek</li>
              <li>1 cebula, posiekana</li>
              <li>2 ząbki czosnku, posiekane</li>
              <li>2 marchewki, pokrojone w kostkę</li>
              <li>1 czerwona papryka, pokrojona w kostkę</li>
              <li>1 zielona papryka, pokrojona w kostkę</li>
              <li>1 cukinia, pokrojona w kostkę</li>
              <li>1 puszka pomidorów krojonych (400g)</li>
              <li>1 łyżeczka suszonego oregano</li>
              <li>1/2 łyżeczki soli (lub więcej, do smaku)</li>
              <li>1/4 łyżeczki pieprzu (lub więcej, do smaku)</li>
              <li>Świeża natka pietruszki do dekoracji</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>Kaszę jaglaną dokładnie opłucz pod bieżącą wodą.</li>
              <li>
                W garnku zagotuj 2 szklanki wody, dodaj kaszę jaglaną i gotuj na
                małym ogniu przez 15-20 minut, aż kasza wchłonie całą wodę.
                Odstaw na bok.
              </li>
              <li>
                Na głębokiej patelni rozgrzej oliwę z oliwek, dodaj cebulę i
                czosnek, smaż przez kilka minut, aż zmiękną.
              </li>
              <li>
                Dodaj marchewki, papryki i cukinię. Smaż warzywa przez 5-7
                minut, aż staną się miękkie.
              </li>
              <li>
                Dodaj pomidory krojone, oregano, sól i pieprz. Gotuj przez 5
                minut.
              </li>
              <li>
                Podawaj kaszę jaglaną na talerzach, polewaj warzywnym sosem i
                posyp świeżą natką pietruszki.
              </li>
            </ol>
          </article>
        ),
        img: require("./img/jaglana.jpeg"),
      },
    ],
    img: m1,
    friends: [1, 3, 6, 7],
  },
  {
    id: 3,
    name: "Daniel Mróz",
    posty: [
      {
        post: (
          <article>
            <h2>Ratatouille z pieczonymi warzywami</h2>
            <p>
              Ratatouille to klasyczne danie pochodzące z południowej Francji.
              To wegetariańska uczta z pieczonymi warzywami i aromatycznym sosem
              pomidorowym.
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>2 bakłażany</li>
              <li>2 cukinie</li>
              <li>2 papryki czerwone</li>
              <li>4 pomidory</li>
              <li>1 cebula</li>
              <li>2 ząbki czosnku</li>
              <li>Oliwa z oliwek</li>
              <li>Suszone zioła prowansalskie</li>
              <li>Sól i pieprz do smaku</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>
                Pokrój warzywa na plastry, posmaruj oliwą i posyp ziołami.
              </li>
              <li>Piecz w piekarniku przez 30 minut.</li>
              <li>Przygotuj sos pomidorowy z cebulą i czosnkiem.</li>
              <li>Podawaj warzywa z sosem i świeżą bagietką.</li>
            </ol>
          </article>
        ),
        img: require("./img/ratatouille.jpg"),
      },
    ],
    img: m2,
    friends: [1, 2, 5, 7],
  },
  {
    id: 4,
    name: "Kornel Zaz",
    posty: [
      {
        post: (
          <article>
            <h2>Curry z ciecierzycą i szpinakiem</h2>
            <p>
              To wegetariańskie curry z ciecierzycą i szpinakiem to pełen smaku
              i przypraw posiłek. Idealny na chłodne dni!
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>1 puszka ciecierzycy (400g)</li>
              <li>200g świeżego szpinaku</li>
              <li>1 cebula</li>
              <li>2 ząbki czosnku</li>
              <li>1 łyżka curry</li>
              <li>400ml mleka kokosowego</li>
              <li>Sól i pieprz do smaku</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>Usmaż cebulę i czosnek na oliwie.</li>
              <li>Dodaj curry i smaż przez minutę.</li>
              <li>Wlej mleko kokosowe i gotuj przez 10 minut.</li>
              <li>
                Dodaj ciecierzycę i szpinak, gotuj do zeszklenia się szpinaku.
              </li>
              <li>Podawaj z ryżem basmati.</li>
            </ol>
          </article>
        ),
        img: require("./img/curry_ciecierzyca.jpg"),
      },
    ],
    img: m3,
    friends: [1, 5, 7],
  },
  {
    id: 5,
    name: "Jacek Wiosna",
    posty: [
      {
        post: (
          <article>
            <h2>Tofu Teriyaki z warzywami</h2>
            <p>
              To danie z tofu w sosie Teriyaki z warzywami to zdrowa i smaczna
              propozycja dla wegetarian. Wspaniałe połączenie smaków!
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>1 opakowanie tofu (300g), pokrojone w kostkę</li>
              <li>2 marchewki, pokrojone w słupki</li>
              <li>1 czerwona papryka, pokrojona w paski</li>
              <li>2 łyżki sosu Teriyaki</li>
              <li>2 łyżki sosu sojowego</li>
              <li>1 łyżka miodu</li>
              <li>Oliwa z oliwek</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>Smaż tofu na oliwie z oliwek na złoto.</li>
              <li>Dodaj warzywa i smaż przez kilka minut.</li>
              <li>
                Wlej sos Teriyaki, sos sojowy i miód, gotuj do zgęstnienia sosu.
              </li>
              <li>Podawaj z ryżem jasnym.</li>
            </ol>
          </article>
        ),
        img: require("./img/tofu.jpg"),
      },
    ],
    img: m4,
    friends: [1, 3, 4],
  },
  {
    id: 6,
    name: "Kamila Zając",
    posty: [
      {
        post: (
          <article>
            <h2>Koktajl bananowo-truskawkowy</h2>
            <p>
              To pyszny i orzeźwiający koktajl bananowo-truskawkowy to doskonała
              propozycja na śniadanie lub przekąskę.
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>2 banany</li>
              <li>200g truskawek</li>
              <li>1 szklanka mleka (może być roślinne)</li>
              <li>1/2 szklanki jogurtu naturalnego</li>
              <li>1 łyżka miodu (opcjonalnie)</li>
              <li>Lodówka</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>Włóż wszystkie składniki do blendera.</li>
              <li>Miksuj na gładką masę.</li>
              <li>Podawaj w szklance ozdobionej truskawkami.</li>
            </ol>
          </article>
        ),
        img: require("./img/truskawka.jpeg"),
      },
    ],
    img: w1,
    friends: [1, 2, 9],
  },
  {
    id: 7,
    name: "Natalia Adela",
    posty: [
      {
        post: (
          <article>
            <h2>Zupa pomidorowa z bazylią</h2>
            <p>
              Ta prosta zupa pomidorowa z bazylią to doskonały wybór na lekki
              obiad lub przystawkę. Pełna smaku i świeżości!
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>1 cebula, posiekana</li>
              <li>2 ząbki czosnku, posiekane</li>
              <li>500g pomidorów, obranych i pokrojonych w kostkę</li>
              <li>1/4 szklanki świeżej bazylii, posiekanej</li>
              <li>1 łyżka oliwy z oliwek</li>
              <li>1 litr bulionu warzywnego</li>
              <li>Sól i pieprz do smaku</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>Smaż cebulę i czosnek na oliwie na złoto.</li>
              <li>Dodaj pomidory i gotuj przez 10 minut.</li>
              <li>Dodaj bulion warzywny i gotuj przez kolejne 10 minut.</li>
              <li>Dodaj bazylię i dopraw solą i pieprzem.</li>
              <li>Podawaj z grzankami czosnkowymi.</li>
            </ol>
          </article>
        ),
        img: require("./img/pomidorowa.jpg"),
      },
    ],
    img: w2,
    friends: [1, 2, 3, 4],
  },
  {
    id: 8,
    name: "Blanka Nowak",
    posty: [
      {
        post: (
          <article>
            <h2>Makaron z pesto i pieczonymi pomidorami</h2>
            <p>
              To szybkie danie z makaronem, pesto i pieczonymi pomidorami
              zachwyci was smakiem i prostotą przygotowania.
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>300g makaronu (najlepiej penne)</li>
              <li>1/2 szklanki pesto bazyliowego</li>
              <li>500g pomidorów koktajlowych</li>
              <li>Oliwa z oliwek</li>
              <li>1/4 szklanki startego parmezanu</li>
              <li>Sól i pieprz do smaku</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>Piecz pomidory z oliwą, solą i pieprzem przez 15 minut.</li>
              <li>Ugotuj makaron zgodnie z instrukcją na opakowaniu.</li>
              <li>
                Połącz makaron z pesto, dodaj pieczone pomidory i parmezan.
              </li>
              <li>Podawaj ciepłe z dodatkiem świeżej bazylii.</li>
            </ol>
          </article>
        ),
        img: require("./img/pesto.jpg"),
      },
    ],
    img: w3,
    friends: [1],
  },
  {
    id: 9,
    name: "Iza Woźniak",
    posty: [
      {
        post: (
          <article>
            <h2>Kolorowa sałatka z quinoa</h2>
            <p>
              Ta sałatka z quinoa, warzywami i orzechami to zdrowa i pyszna
              opcja na lekki posiłek lub przekąskę.
            </p>
            <h3>Składniki:</h3>
            <ul>
              <li>1 szklanka quinoa</li>
              <li>2 szklanki wody</li>
              <li>1 czerwona papryka, pokrojona w kostkę</li>
              <li>1 ogórek, pokrojony w kostkę</li>
              <li>1 marchewka, starta</li>
              <li>1 puszka czerwonej fasoli (400g), odcedzona</li>
              <li>1/2 szklanki posiekanej natki pietruszki</li>
              <li>Sok z 1 cytryny</li>
              <li>2 łyżki oliwy z oliwek</li>
              <li>Sól i pieprz do smaku</li>
            </ul>
            <h3>Przygotowanie:</h3>
            <ol>
              <li>
                Ugotuj quinoa w osolonej wodzie zgodnie z instrukcją na
                opakowaniu.
              </li>
              <li>
                W dużej misce połącz ugotowaną quinoa z warzywami i fasolą.
              </li>
              <li>Skrop sokiem z cytryny, oliwą z oliwek, solą i pieprzem.</li>
              <li>Posyp natką pietruszki i podawaj na zimno.</li>
            </ol>
          </article>
        ),
        img: require("./img/salatka.jpeg"),
      },
    ],
    img: w4,
    friends: [6],
  },
];
