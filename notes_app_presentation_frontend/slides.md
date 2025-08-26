---
# Notes App Showcase – Slidev
theme: seriph
colorSchema: light
title: Notes App – Product Tour
info: |
  ## Notes App – Interactive Presentation
  - Demonstrates the core user journeys of a modern notes application
  - Horizontal navigation with header titles, table of contents, and embedded media
  - Themed colors:
    - Primary: #2D81FF
    - Secondary: #FFBB00
    - Accent: #F40076
class: text-center hero-gradient modern-notes-theme
transition: slide-left
mdc: true
layoutClass: modern-notes-theme
---

# Notes App – Product Tour

A modern, fast, and delightful way to capture ideas

<div class="mt-8 text-lg opacity-80">
  Use arrow keys to navigate horizontally • Press O for overview • Press T for theme toggle
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://sli.dev" target="_blank" class="slidev-icon-btn" title="Slidev Docs">
    <carbon:book />
  </a>
</div>

<style>
/* Lightweight theme layer tuned to requested brand colors */
:root {
  --color-primary: #2D81FF;
  --color-secondary: #FFBB00;
  --color-accent: #F40076;
}
.modern-notes-theme h1,
.modern-notes-theme h2,
.modern-notes-theme h3 {
  letter-spacing: 0.2px;
}
.modern-notes-theme a {
  color: var(--color-primary);
}
.modern-notes-theme .pill {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #0f172a;
  background: linear-gradient(90deg, #ffffff 0%, #fafafa 100%);
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.08);
}
.hero-gradient {
  background-image: radial-gradient(800px 300px at 50% -10%, rgba(45,129,255,0.18), transparent),
                    radial-gradient(600px 250px at 100% 20%, rgba(244,0,118,0.12), transparent),
                    radial-gradient(600px 250px at 0% 20%, rgba(255,187,0,0.14), transparent);
}
.cta {
  display: inline-flex;
  gap: .5rem;
  align-items: center;
  padding: .65rem 1rem;
  border-radius: .75rem;
  color: white;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  box-shadow: 0 6px 20px rgba(45,129,255,0.25);
}
.header {
  display:flex; align-items:center; justify-content:space-between;
  font-size: .95rem; opacity:.9
}
.header .title {
  font-weight: 700; letter-spacing: .2px;
}
.header .progress {
  height: 6px; width: 160px; background: #eef2ff; border-radius: 8px; overflow: hidden;
}
.header .progress > i {
  display:block; height:100%;
  background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
  width: calc( (var(--slide-index, 0) + 1) / (var(--slides-total, 1)) * 100% );
}
.card {
  border-radius: 16px; padding: 16px;
  background: #ffffff;
  box-shadow: 0 1px 0 rgba(2,6,23,0.04), 0 8px 32px rgba(2,6,23,0.06);
}
kbd {
  background: #f1f5f9; border: 1px solid #e2e8f0; border-bottom-width: 3px; border-radius: 6px;
  padding: 0 .35rem; font-weight: 700;
}
</style>

<!-- Presenter Notes:
Introduce the key value proposition: fast capture, powerful organization, and delightful editing.
-->

---

layout: two-cols
class: px-12
---

<div class="header">
  <div class="title">Overview</div>
  <div class="pill">Horizontal Navigation</div>
  <div class="progress"><i /></div>
</div>

# What you'll see

- Capture notes instantly
- Organize with tags and folders
- Search across all your notes
- Edit with rich text and keyboard shortcuts
- Share and collaborate

::right::

<Toc minDepth="1" maxDepth="2" />

<div class="mt-6">
  <span class="cta" @click="$slidev.nav.next()">
    Start Tour <carbon:arrow-right />
  </span>
</div>

<!-- Presenter Notes:
Highlight key flows and let audience know they can view TOC on the right.
-->

---

layout: image-right
image: https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop
class: px-12
---

<div class="header">
  <div class="title">Core UX • Fast Capture</div>
  <div class="pill">Primary <span style="width:.5rem" /> <span style="background:#2D81FF;width:.65rem;height:.65rem;border-radius:50%;display:inline-block;margin-left:.35rem" /></div>
  <div class="progress"><i /></div>
</div>

# Capture your thoughts instantly

- New note in one click
- Start typing immediately
- Auto-save every keystroke

<div class="mt-6 grid grid-cols-2 gap-4">
  <img class="card" alt="New note UI screenshot" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" />
  <div class="card text-left">
    <div class="text-sm opacity-70 mb-2">Keyboard</div>
    <div class="space-y-2">
      <div><kbd>N</kbd> new note</div>
      <div><kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>S</kbd> save</div>
      <div><kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> quick actions</div>
    </div>
  </div>
</div>

<!-- Presenter Notes:
Emphasize minimal friction and instant autosave.
-->

---

layout: two-cols
class: px-12
---

<div class="header">
  <div class="title">Demo • Create a Note</div>
  <div class="pill">Accent <span style="width:.5rem" /> <span style="background:#F40076;width:.65rem;height:.65rem;border-radius:50%;display:inline-block;margin-left:.35rem" /></div>
  <div class="progress"><i /></div>
</div>

# Create a note

1. Click “New Note”
2. Add a title
3. Type your content

```ts {monaco-run}
const notes: { id: number; title: string; body: string }[] = []
function createNote(title: string, body: string) {
  const id = notes.length + 1
  notes.push({ id, title, body })
  return id
}
console.log('Created note id:', createNote('Ideas for Q3', '1) Ship new editor\n2) Revamp tags'))
console.log('Notes:', notes)
```

::right::

<div class="card">
  <div class="text-sm opacity-70 mb-2">Embedded walkthrough</div>
  <Youtube id="HcOc7P5BMi4" />
</div>

<!-- Presenter Notes:
Run the editor snippet to simulate a create note flow.
-->

---

layout: two-cols
class: px-12
---

<div class="header">
  <div class="title">Demo • Edit a Note</div>
  <div class="pill">Secondary <span style="width:.5rem" /> <span style="background:#FFBB00;width:.65rem;height:.65rem;border-radius:50%;display:inline-block;margin-left:.35rem" /></div>
  <div class="progress"><i /></div>
</div>

# Edit and format

- Bold, italic, headings, checklists
- Drag-and-drop images
- Instant preview

```ts {monaco-run}
type Note = { id: number; title: string; body: string }
const notes: Note[] = [{ id: 1, title: 'Ideas for Q3', body: 'Initial draft' }]

function updateNote(id: number, patch: Partial<Note>) {
  const i = notes.findIndex(n => n.id === id)
  if (i >= 0) notes[i] = { ...notes[i], ...patch }
}
updateNote(1, { body: '**Bold** _Italic_ \n- [ ] Checklist item' })
console.log(notes[0])
```

::right::

<div class="card">
  <div class="text-sm opacity-70 mb-2">Rich Text Preview</div>
  <img class="rounded-lg" alt="Editor formatting preview" src="https://images.unsplash.com/photo-1529236184321-1f5a85f2d6b8?q=80&w=1200&auto=format&fit=crop" />
</div>

<!-- Presenter Notes:
Show the markdown-like editing and result in console.
-->

---

layout: two-cols
class: px-12
---

<div class="header">
  <div class="title">Organization • Tags & Folders</div>
  <div class="pill">Structure</div>
  <div class="progress"><i /></div>
</div>

# Keep everything tidy

- Color-coded tags
- Nested folders
- Quick filters

```ts {monaco}
type Note = { id: number; title: string; body: string; tags: string[]; folder?: string }
const notes: Note[] = [
  { id: 1, title: 'Roadmap', body: 'Q3 priorities', tags: ['work','planning'], folder: 'Work/2025' },
  { id: 2, title: 'Recipe', body: 'Pasta al pomodoro', tags: ['personal','cooking'] },
]
const byTag = (tag: string) => notes.filter(n => n.tags.includes(tag))
const inFolder = (path: string) => notes.filter(n => n.folder?.startsWith(path))
```

::right::

<div class="grid grid-cols-2 gap-3">
  <div class="card">
    <div class="text-sm mb-2">Tags</div>
    <div class="flex gap-2 flex-wrap">
      <span class="pill" style="box-shadow: inset 0 0 0 2px #2D81FF22">work</span>
      <span class="pill" style="box-shadow: inset 0 0 0 2px #FFBB0022">planning</span>
      <span class="pill" style="box-shadow: inset 0 0 0 2px #F4007622">personal</span>
      <span class="pill" style="box-shadow: inset 0 0 0 2px #2D81FF22">cooking</span>
    </div>
  </div>
  <div class="card">
    <div class="text-sm mb-2">Folders</div>
    <ul class="text-left">
      <li>Work</li>
      <li class="pl-4">└ 2025</li>
      <li>Personal</li>
    </ul>
  </div>
</div>

<!-- Presenter Notes:
Stress how filters accelerate retrieval.
-->

---

layout: image-right
image: https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop
class: px-12
---

<div class="header">
  <div class="title">Search • Lightning Fast</div>
  <div class="pill">Cmd/Ctrl + K</div>
  <div class="progress"><i /></div>
</div>

# Find anything in milliseconds

- Fuzzy search titles and contents
- Filter by tags and date
- Keyboard-first flow

```ts {monaco}
const index = [
  { id:1, title:'Roadmap', body:'Q3 priorities notes' },
  { id:2, title:'Recipe', body:'Pasta al pomodoro' },
]
const search = (q:string) => index.filter(i => (i.title+i.body).toLowerCase().includes(q.toLowerCase()))
```

---

layout: two-cols
class: px-12
---

<div class="header">
  <div class="title">Media • Screenshots & Video</div>
  <div class="pill">Embeds</div>
  <div class="progress"><i /></div>
</div>

# Bring your notes to life

- Paste screenshots
- Attach files
- Watch embedded videos

::right::

<div class="grid grid-cols-1 gap-4">
  <img class="card" alt="Notes with image" src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?q=80&w=1200&auto=format&fit=crop" />
  <Youtube id="oHg5SJYRHA0" />
</div>

---

layout: center
class: text-center px-12
---

# Tips & Shortcuts

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="card">
    <div class="text-sm opacity-70 mb-1">Create</div>
    <kbd>N</kbd> new note
  </div>
  <div class="card">
    <div class="text-sm opacity-70 mb-1">Search</div>
    <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd>
  </div>
  <div class="card">
    <div class="text-sm opacity-70 mb-1">Format</div>
    <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>B</kbd> bold
  </div>
</div>

---

layout: center
class: text-center
---

# Thank you

Explore more on our website · Read the docs · Try the demo

<PoweredBySlidev mt-10 />
