# Git commands

A project within the framework of a subject at the university - "Version control tools". It is intended to test in practice the possibilities that git offers. Accordingly, the repository includes the simplest, basic web application template.

## Features

- routing applied in the menu
- iframe in command page component
- clock implemented in the footer

## 💡 Technologies
[![N](https://camo.githubusercontent.com/29026b68c52288230bf32bc2268e47e5c3b81dba23106fb062fcc0541f8e9529/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416e67756c61722d4444303033313f7374796c653d666f722d7468652d6261646765266c6f676f3d616e67756c6172266c6f676f436f6c6f723d7768697465)](https://angular.io/)

## 💿 Instalation
The project uses node and npm. Having them installed, type into the terminal: ```npm i```.

## 👀 Solutions provided in the project
- Updating clock using rxjs:
```
ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  private initClock(): void {
    this.subs = timer(0, 1000).pipe(
      map(() => new Date())
    ).subscribe(time => {
      this.clockText = `${time.getHours()}:${time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}:${time.getSeconds() < 10 ? '0'+time.getSeconds() : time.getSeconds()}`;
    });
  }
```

[2]: https://img.shields.io/npm/v/github-standard-labels.svg?style=flat-square
[3]: https://npmjs.org/package/github-standard-labels
