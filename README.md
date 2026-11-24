# April Grace Gabad - Portfolio

Personal portfolio website gamit ang **HTML, CSS, JavaScript at Python**.
Colors: Black, Sky Blue, Pink at Beige. Mobile-friendly (Android-ready).

## Laman ng project

```
portfolio/
├── index.html      # Structure ng page
├── style.css       # Design at colors
├── script.js       # Interactions (menu, theme, typing effect, form)
├── api/
│   └── hello.py    # Python function (greeting API) para sa Vercel
├── images/         # Ilagay dito ang photos mo
└── README.md
```

## Mga photos na pwedeng ilagay (optional)

Ilagay sa `images/` folder gamit ang eksaktong pangalan na ito:

| File           | Saan lalabas                   |
|----------------|--------------------------------|
| `profile.jpg`  | Picture mo sa Home section     |
| `sunset1.jpg`  | Sunset photo sa Hobbies        |
| `ride.jpg`     | Ride photo sa Hobbies          |
| `outside.jpg`  | Relaxing photo sa Hobbies      |

Kung wala pang picture, may kulay at initials na "AG" muna na lalabas.

## Buksan sa VS Code

1. Buksan ang VS Code → **File → Open Folder** → piliin ang `portfolio`.
2. I-install ang extension na **Live Server**.
3. Right-click ang `index.html` → **Open with Live Server**.

Para i-test sa Android habang naka-Live Server: nasa parehong Wi-Fi ang phone at PC,
tapos buksan sa phone ang `http://<IP-ng-PC-mo>:5500`.

Tandaan: gumagana ang `/api/hello` (Python) kapag naka-deploy na sa Vercel.
Sa Live Server, JavaScript muna ang gagawa ng greeting, kaya walang masisira.

## I-upload sa GitHub

1. Gumawa ng account sa https://github.com kung wala pa.
2. Gumawa ng **New repository** (hal. `portfolio`), Public, walang README.
3. Sa VS Code terminal (**Terminal → New Terminal**):

```bash
git init
git add .
git commit -m "My first portfolio"
git branch -M main
git remote add origin https://github.com/<USERNAME-MO>/portfolio.git
git push -u origin main
```

## I-deploy sa Vercel

1. Pumunta sa https://vercel.com at **Sign up with GitHub**.
2. I-click ang **Add New → Project**.
3. Piliin ang `portfolio` repository → **Import**.
4. Iwanang default ang settings (Framework Preset: **Other**) → **Deploy**.
5. Pagkatapos ng ilang segundo, may link ka na: `https://portfolio-xxxx.vercel.app`.

Buksan ang link na iyon sa Android phone mo para i-check. Pwede mo rin itong i-share sa employers.

## Pag may binago ka

```bash
git add .
git commit -m "Update portfolio"
git push
```

Automatic na mag-re-deploy ang Vercel.

## Paano baguhin ang colors

Nasa taas ng `style.css` ang mga kulay:

```css
--sky:   #87ceeb;   /* sky blue */
--pink:  #ff9ec4;   /* pink */
--beige: #f5e9d8;   /* beige */
--black: #0b0b0f;   /* black */
```
