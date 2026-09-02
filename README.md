# AI-Kafé Haugesund

Dette repoet inneholder en enkel statisk GitHub Pages-side for AI-Kafé Haugesund.

## Hva som er med

- Hjemmeside med oversikt over sesjoner
- Første sesjon om podcaster som snakker om AI
- De resterende sesjonene er markert som TBA
- GitHub Actions workflow for publisering til GitHub Pages

## Hvordan publisere

1. Push dette repoet til GitHub.
2. Gå til repository settings.
3. Velg "Pages".
4. Sett Source til "GitHub Actions".
5. Workflowen vil publisere nettsiden automatisk.

## Lokal utvikling

Du kan starte en enkel lokal server med:

```bash
python -m http.server 8000
```

Deretter åpner du http://localhost:8000

## Strukturen

```text
.
├── .github/workflows/pages.yml
├── index.html
├── styles.css
├── sessions/
│   ├── session-1.html
│   ├── session-2.html
│   └── session-3.html
└── README.md
```