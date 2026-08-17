# Logowanie, zapis postępu i ranking — konfiguracja

Strona jest gotowa do pracy z Supabase. Bez poniższej konfiguracji nadal działa lokalnie, ale logowanie i ranking pozostają wyłączone.

## 1. Utwórz projekt

1. Wejdź na [supabase.com](https://supabase.com/) i utwórz bezpłatny projekt.
2. W panelu projektu otwórz **SQL Editor**.
3. Skopiuj całą zawartość pliku `supabase-setup.sql`, wklej ją do edytora i wybierz **Run**.

Skrypt tworzy profile, zapis postępu, ranking oraz zasady RLS. Każdy zalogowany użytkownik może zmieniać tylko własny rekord postępu. Ranking udostępnia zalogowanym osobom wyłącznie nazwę, liczbę punktów i identyfikator konta — bez adresów e-mail i haseł.

## 2. Połącz stronę z projektem

1. W Supabase otwórz **Project Settings → API**.
2. Skopiuj **Project URL**.
3. Skopiuj **Publishable key**. W starszym widoku może nazywać się `anon public`.
4. W pliku `supabase-config.js` uzupełnij:

```js
window.SUPABASE_CONFIG = {
  url: 'https://TWOJ-PROJEKT.supabase.co',
  publishableKey: 'TWÓJ_PUBLISHABLE_KEY'
};
```

Klucz publishable/anon jest przeznaczony do aplikacji przeglądarkowych i może być publiczny przy poprawnie włączonym RLS. Nigdy nie umieszczaj na stronie klucza `service_role`, secret key ani hasła do bazy.

## 3. Ustaw adres GitHub Pages

W **Authentication → URL Configuration** ustaw:

- **Site URL**: docelowy adres GitHub Pages, np. `https://twoj-login.github.io/nazwa-repozytorium/`
- opcjonalny lokalny **Redirect URL** do testów: `http://127.0.0.1:4173/`

W **Authentication → Providers → Email** pozostaw włączone logowanie e-mail/hasło. Domyślnie nowy uczeń potwierdza adres przez wiadomość e-mail; to bezpieczniejsza konfiguracja dla klasy.

## 4. Opublikuj

Dodaj do repozytorium wszystkie pliki strony, w tym `supabase-config.js`, `supabase-setup.sql` i `SUPABASE_SETUP.md`, a następnie opublikuj GitHub Pages. Po wejściu na stronę uczniowie mogą utworzyć konto, potwierdzić e-mail, zalogować się i zobaczyć ranking.

## Co jest zapisywane

- punkty i ranga,
- opanowane i oznaczone gwiazdką fiszki,
- liczba ukończonych quizów i testów,
- naliczony aktywny czas nauki.

Przy pierwszym logowaniu lokalny postęp z danego urządzenia jest łączony z kontem. Kolejne logowania pobierają go na innych urządzeniach. Wylogowanie usuwa lokalną kopię postępu z bieżącej przeglądarki, aby nie pokazać jej następnej osobie.

## Ważne ograniczenie

To ranking do wspólnej nauki, a nie system odporny na oszustwa. Punkty są obliczane przez kod uruchomiony w przeglądarce, więc technicznie zaawansowana osoba może je zmodyfikować. Pełne zabezpieczenie wymagałoby sprawdzania każdej odpowiedzi i przyznawania punktów po stronie serwera.
