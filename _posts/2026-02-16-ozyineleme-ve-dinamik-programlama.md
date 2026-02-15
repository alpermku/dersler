---
layout: post
title: "Ozyineleme ve Dinamik Programlama"
date: 2026-02-16
categories: algoritma-ve-programlama-ii
---

Bu hafta Algoritma ve Programlama II dersinde ozyineleme (recursion) kavrami ve dinamik programlamaya giris yapiyoruz.

## Ozyineleme Nedir?

Ozyineleme, bir fonksiyonun kendisini cagirmasidir. Her ozyinelemeli fonksiyonun iki temel bileseni vardir:

1. **Temel durum (Base Case):** Fonksiyonun kendisini cagirmayi biraktigi kosul
2. **Ozyinelemeli adim:** Fonksiyonun kendisini daha kucuk bir problem ile cagirdigi adim

### Faktoryel Ornegi

```python
def faktoriyel(n):
    if n <= 1:       # Temel durum
        return 1
    return n * faktoriyel(n - 1)  # Ozyinelemeli adim
```

## Dinamik Programlama

Dinamik programlama, karmasik problemleri daha kucuk alt problemlere bolerek cozen bir tekniktir. Iki temel yaklasim vardir:

- **Top-Down (Memoization):** Ozyinelemeli yaklasim + onbellek
- **Bottom-Up (Tabulation):** Iteratif yaklasim + tablo

### Fibonacci Ornegi

```python
# Memoization ile
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
```

> Dinamik programlamanin anahtari: ayni alt problemin tekrar tekrar cozulmesini onlemektir.

Gelecek hafta **siralama algoritmalari** konusunu isleyecegiz.
