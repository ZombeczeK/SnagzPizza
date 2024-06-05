---


---

<h1 id="coś">coś</h1>
<h1 id="struktura-dokumentacji">Struktura Dokumentacji</h1>
<h2 id="wprowadzenie">Wprowadzenie</h2>
<p><strong>SnagzPizza</strong> to framework dedykowany do zarządzania pizzerią. Nasze narzędzie umożliwia łatwe tworzenie i zarządzanie menu pizzerii oraz oferuje klientom możliwość komponowania własnej pizzy, wybierając z gamy dostępnych składników. Framework ma również możliwość tworzenie nowych użytkowników i logowanie już zarejestrowanych. SnagzPizza jest idealnym rozwiązaniem dla właścicieli pizzerii, którzy chcą usprawnić swoje operacje i zaoferować klientom unikalne doświadczenie.</p>
<h2 id="podstawy">Podstawy</h2>
<p>W frameworku są zawarte:</p>
<ul>
<li>moduł logowania,</li>
<li>menu pizzy,</li>
<li>kreator pizzy dla zalogowanego użytkownika,</li>
<li>baza danych przechowująca zamówienia i użytkowników</li>
</ul>
<h3 id="komponenty">Komponenty</h3>
<ul>
<li>Frontend i Backend to NestJS</li>
<li>Baza danych to PostgreSQL</li>
</ul>
<h2 id="instalacja">Instalacja</h2>
<ul>
<li>instalujemy Node.js ze strony</li>
</ul>
<blockquote>
<p><a href="https://nodejs.org/en">https://nodejs.org/en</a></p>
</blockquote>
<ul>
<li>następnie pobieramy ZIP z gotowym frameworkiem <strong>SnagzPizza</strong></li>
</ul>
<blockquote>
<p><a href="https://github.com/ZombeczeK/SnagzPizza">https://github.com/ZombeczeK/SnagzPizza</a></p>
</blockquote>
<ul>
<li>Otwieramy folder w edytorze np. Visual Studio Code a potem wpisujemy komendę w terminalu:</li>
</ul>
<pre class=" language-bash"><code class="prism  language-bash">$ <span class="token function">npm</span> i -g @nestjs/cli
</code></pre>
<blockquote>
<p>Komenda pozwala nam zainstalować framework <strong>NestJS</strong> który jest wymagany do poprawnego działania frameworka</p>
</blockquote>
<ul>
<li>Instalujemy Baze danych ze strony</li>
</ul>
<blockquote>
<p><a href="https://www.postgresql.org">https://www.postgresql.org</a></p>
</blockquote>
<ul>
<li>Po pobraniu PostgreSQL wykorzystujemy dane pliku <code>ormconifg.json</code> by połączyć bazę danych z aplikacją:</li>
</ul>
<pre><code>{
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "snagzuser",
"password": "password",
"database": "snagzpizza",
"entities": ["dist/**/*.entity{.ts,.js}"],
"synchronize": true
}
</code></pre>
<p>Najważniejsze żeby<br>
<strong>host</strong><br>
<strong>port</strong><br>
<strong>username</strong><br>
<strong>password</strong><br>
<strong>database</strong><br>
były zgodne w aplikacji jak i w bazie danych.</p>
<h2 id="przewodniki">Przewodniki</h2>
<h2 id="api-reference">API Reference</h2>
<p>Wyjaśnienie poszczególnych plików zawartych w frameworku</p>
<h3 id="main.ts">main.ts</h3>
<p>W kodzie tworzy się serwer HTTP przy użyciu frameworka NestJS, który używa Express jako platformy bazowej. Konfiguruje on katalog dla widoków i plików statycznych, ustawia silnik szablonów na Handlebars, a następnie uruchamia serwer nasłuchujący na porcie 8888.</p>
<h3 id="app.service.ts">app.service.ts</h3>
<p>Ten fragment kodu definiuje prosty serwis w aplikacji NestJS, który zwraca napis “Hello World!”. Serwis ten jest oznaczony dekoratorem <code>@Injectable()</code>, co pozwala na jego wstrzyknięcie jako zależności do innych komponentów aplikacji, takich jak kontrolery. Dzięki temu aplikacja jest modularna, łatwa do zarządzania i testowania.</p>
<h3 id="app.module.ts">app.module.ts</h3>
<p>Kod definiuje główny moduł aplikacji NestJS, który konfiguruje połączenie z bazą danych PostgreSQL za pomocą TypeORM oraz importuje dwa moduły: <code>PizzaModule</code> i <code>AuthModule</code>. Ten moduł centralizuje konfigurację aplikacji, co umożliwia łatwe zarządzanie różnymi częściami aplikacji i ich zależnościami.</p>
<h3 id="app.controller.ts">app.controller.ts</h3>
<p>To prosty przykład pokazujący podstawy tworzenia kontrolera w aplikacji NestJS i renderowania widoku z danymi dynamicznymi.</p>
<h3 id="ingredient.entity.ts">ingredient.entity.ts</h3>
<p>Kiedy ten kod zostanie wykonany w środowisku TypeORM, utworzy w bazie danych tabelę składników zawierającą trzy kolumny: id, name i imageUrl. Kolumna id będzie kluczem podstawowym i będzie automatycznie generować unikalne wartości dla nowych rekordów.</p>
<h3 id="pizza-order.entity.ts">pizza-order.entity.ts</h3>
<p>Podsumowując, klasa <code>PizzaOrder</code> reprezentuje zamówienie na pizzę z czterema kolumnami: <code>id</code>, <code>ingredients</code>, <code>deliveryAddress</code> i <code>username</code>. TypeORM używa dekoratorów, aby wskazać, które pola klasy odpowiadają kolumnom w tabeli bazy danych oraz jak te kolumny są zdefiniowane.</p>
<h3 id="pizza-controller.ts">pizza-controller.ts</h3>
<p>Kod używa dekoratorów NestJS, aby zdefiniować, jakie metody kontrolera obsługują konkretne typy żądań HTTP oraz jakie widoki mają być renderowane w odpowiedzi.</p>
<h3 id="pizza.model.ts">pizza.model.ts</h3>
<p>Interfejs <code>Pizza</code> definiuje obiekt, który ma trzy właściwości:</p>
<ul>
<li><code>id</code>: numer identyfikacyjny pizzy (liczba całkowita),</li>
<li><code>ingredients</code>: tablica zawierająca składniki pizzy (każdy składnik to ciąg znaków),</li>
<li><code>deliveryAddress</code>: adres dostawy pizzy (ciąg znaków).</li>
</ul>
<h3 id="pizza.module.ts">pizza.module.ts</h3>
<p>Ten kod definiuje moduł <code>PizzaModule</code> w aplikacji NestJS, który:</p>
<ul>
<li>Importuje niezbędne encje bazy danych (<code>Ingredient</code> i <code>PizzaOrder</code>) przy użyciu <code>TypeOrmModule</code>.</li>
<li>Rejestruje kontroler (<code>PizzaController</code>) do obsługi żądań HTTP związanych z pizzą.</li>
<li>Rejestruje serwis (<code>PizzaService</code>) do wykonywania logiki biznesowej związanej z pizzą.</li>
</ul>
<h3 id="pizza.service.ts">pizza.service.ts</h3>
<p>Klasa <code>PizzaService</code> zawiera dwie metody:</p>
<ol>
<li><code>getAllIngredients</code> - zwraca listę wszystkich dostępnych składników pizzy z bazy danych.</li>
<li><code>createPizza</code> - tworzy nowe zamówienie pizzy na podstawie dostarczonych składników, adresu dostawy i nazwy użytkownika, a następnie zapisuje je w bazie danych.</li>
</ol>
<h3 id="auth.controller.ts">auth.controller.ts</h3>
<p>Ten kontroler obsługuje interakcje użytkownika związane z uwierzytelnianiem, w tym wyświetlanie formularzy logowania i rejestracji, sprawdzanie poprawności danych i przekierowywanie użytkownika na odpowiednie strony.</p>
<h3 id="auth.module.ts">auth.module.ts</h3>
<p>Moduł ten stanowi integralną część aplikacji Nest.js, która obsługuje logikę autentykacji użytkowników przy użyciu TypeORM do dostępu do bazy danych.</p>
<h3 id="auth.service.ts">auth.service.ts</h3>
<p>Kod implementuje podstawową funkcjonalność autoryzacji w aplikacji, umożliwiając rejestrację nowych użytkowników i wyszukiwanie istniejących użytkowników na podstawie loginu.</p>
<h3 id="user.entity.ts">user.entity.ts</h3>
<p>Kod definiuje klasę <code>User</code>, która będzie mapowana do tabeli w bazie danych za pomocą TypeORM. Ta tabela będzie miała trzy kolumny: <code>id</code>, <code>login</code> i <code>haslo</code> (hasło). Kolumna <code>id</code> będzie kluczem głównym, a kolumna <code>login</code> będzie musiała przechowywać unikalne wartości.</p>
<h3 id="user.service.ts">user.service.ts</h3>
<p>Klasa <code>UserService</code> jest odpowiedzialna za interakcję z bazą danych w celu wykonania operacji związanych z użytkownikiem, takich jak wyszukiwanie użytkownika poprzez zalogowanie się i utworzenie nowego użytkownika. Wykorzystuje wzorzec repozytorium TypeORM do interakcji z bazą danych.</p>
<h3 id="ormconfig.json">ormconfig.json</h3>
<p>Kod jest konfiguracją połączenia z bazą danych PostgreSQL w aplikacji.</p>
<h2 id="przykłady">Przykłady</h2>
<ul>
<li><strong>To Karol jest tu potrzebny bo jemu to działa</strong></li>
</ul>
<h2 id="twórcy">Twórcy</h2>
<ul>
<li>Piotr Ernest</li>
<li>Filip Jurkiewicz</li>
<li>Karol Koczwara</li>
</ul>
<h3 id="copyright-©-2024-mit-snagzpizza-by-koczwara-s.a.">Copyright © 2024 MIT <em>SnagzPizza</em> by <em>Koczwara S.A.</em></h3>

